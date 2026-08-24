<template>
  <div class="config-console">
    <header class="console-toolbar">
      <div class="toolbar-heading">
        <span class="toolbar-kicker">Search Engine Cleaner</span>
        <h1>搜索增强配置</h1>
      </div>

      <div class="config-search">
        <el-input
          v-model="searchQuery"
          clearable
          placeholder="搜索配置项，例如：自动翻页、双列、背景图"
          aria-label="搜索配置项"
          @keydown.down.prevent="moveSearchCursor(1)"
          @keydown.up.prevent="moveSearchCursor(-1)"
          @keydown.enter.prevent="openHighlightedResult"
        >
          <template #prefix>
            <el-icon><Search /></el-icon>
          </template>
        </el-input>

        <div v-if="searchQuery" class="search-results" role="listbox">
          <button
            v-for="(item, index) in filteredSearchItems"
            :key="`${item.section}-${item.key}`"
            type="button"
            :class="{ active: index === searchCursor }"
            role="option"
            @mousedown.prevent="openSearchResult(item)"
          >
            <span>{{ item.label }}</span>
            <small>{{ sectionName(item.section) }}</small>
          </button>
          <div v-if="!filteredSearchItems.length" class="search-empty">没有匹配的配置项</div>
        </div>
      </div>

      <div class="sync-status" :class="{ pending: pendingSections.size }">
        <span class="status-dot" aria-hidden="true"></span>
        <div>
          <strong>{{ connectionLabel }}</strong>
          <small>{{ saveStatusLabel }}</small>
        </div>
        <div id="save_hint" class="section-save-actions"></div>
        <el-button v-if="pendingSections.size > 1" type="primary" :loading="savingAll" @click="saveAll">
          <el-icon><DocumentChecked /></el-icon>
          全部保存
        </el-button>
      </div>
    </header>

    <div class="console-layout">
      <aside class="engine-navigation" aria-label="配置分区">
        <button
          v-for="section in sections"
          :key="section.id"
          type="button"
          :class="{ active: activeSection === section.id }"
          @click="setActiveSection(section.id)"
        >
          <el-icon><component :is="section.icon" /></el-icon>
          <span>
            <strong>{{ section.name }}</strong>
            <small>{{ section.description }}</small>
          </span>
          <span v-if="pendingSections.has(section.id)" class="pending-mark" aria-label="有未保存更改"></span>
        </button>
      </aside>

      <main class="config-workspace">
        <section
          v-for="section in sections"
          v-show="activeSection === section.id"
          :id="section.id"
          :key="section.id"
          class="config-section"
          :data-section="section.id"
        >
          <div class="section-heading">
            <div>
              <span>{{ section.eyebrow }}</span>
              <h2>{{ section.title }}</h2>
              <p>{{ section.summary }}</p>
            </div>
            <el-tag v-if="pendingSections.has(section.id)" type="warning" effect="plain">待保存</el-tag>
          </div>

          <div v-if="bridgeError" class="bridge-error" role="alert">
            <el-icon><WarningFilled /></el-icon>
            <div>
              <strong>无法读取用户脚本配置</strong>
              <p>{{ bridgeError }}</p>
            </div>
            <el-button @click="retryBridge">重新连接</el-button>
          </div>
          <Suspense v-else>
            <component :is="section.component" />
            <template #fallback>
              <div class="config-loading">正在读取脚本配置...</div>
            </template>
          </Suspense>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, markRaw, nextTick, onBeforeUnmount, onErrorCaptured, onMounted, reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import {
  ChromeFilled,
  Compass,
  DocumentChecked,
  Grid,
  Setting,
  WarningFilled,
} from '@element-plus/icons-vue'
import CommonConfig from './common/base.vue'
import BaiduConfig from './baidu/base.vue'
import GoogleConfig from './google/base.vue'
import BingConfig from './bing/base.vue'

type SectionId = 'main' | 'baidu' | 'google' | 'bing'
type SearchItem = { section: SectionId; key: string; label: string; keywords?: string }

const sections = [
  {
    id: 'main' as SectionId,
    name: '基础配置',
    description: '全局行为与拦截',
    eyebrow: 'GLOBAL',
    title: '基础配置',
    summary: '这些设置会作用于所有受支持的搜索引擎。',
    icon: markRaw(Setting),
    component: markRaw(CommonConfig),
  },
  {
    id: 'baidu' as SectionId,
    name: '百度',
    description: '显示与搜索预测',
    eyebrow: 'BAIDU',
    title: '百度配置',
    summary: '调整百度搜索结果布局、护眼模式、背景与自定义样式。',
    icon: markRaw(Compass),
    component: markRaw(BaiduConfig),
  },
  {
    id: 'google' as SectionId,
    name: 'Google',
    description: '布局与页面主题',
    eyebrow: 'GOOGLE',
    title: 'Google 配置',
    summary: '调整 Google 搜索结果布局、护眼模式、背景与自定义样式。',
    icon: markRaw(ChromeFilled),
    component: markRaw(GoogleConfig),
  },
  {
    id: 'bing' as SectionId,
    name: 'Bing',
    description: '结果卡片与布局',
    eyebrow: 'BING',
    title: 'Bing 配置',
    summary: '调整 Bing 搜索增强、显示模式、背景与自定义样式。',
    icon: markRaw(Grid),
    component: markRaw(BingConfig),
  },
]

const engineItems = (section: SectionId, engine: string, unique: SearchItem[] = []): SearchItem[] => [
  ...unique,
  { section, key: 'HuYanMode', label: `${engine}护眼模式`, keywords: '主题 颜色' },
  { section, key: 'HuYanMode_Color', label: `${engine}护眼颜色`, keywords: '护眼色 主题色' },
  { section, key: 'adsStyleEnable', label: `${engine}显示优化`, keywords: '布局 样式' },
  { section, key: 'adsStyleMode', label: `${engine}显示列数`, keywords: '单列居中 双列居中' },
  { section, key: 'BgEnable', label: `${engine}背景图`, keywords: '壁纸 图片' },
  { section, key: 'BgUseUrl', label: `${engine}背景图地址`, keywords: 'URL 图片链接' },
  { section, key: 'BgFit', label: `${engine}背景自动适应`, keywords: '背景优化' },
  { section, key: 'customStyleEnable', label: `${engine}自定义 Less`, keywords: 'CSS 样式表' },
  { section, key: 'customStyleLink', label: `${engine}远程样式地址`, keywords: 'Less CSS URL 拉取' },
  { section, key: 'customStyleLess', label: `${engine}Less 编辑器`, keywords: 'CSS 代码 样式表' },
]

const searchItems: SearchItem[] = [
  { section: 'main', key: 'isRedirectEnable', label: '处理搜索结果重定向', keywords: '真实链接 跳转' },
  { section: 'main', key: 'isAdsEnable', label: '去广告功能', keywords: '广告清理' },
  { section: 'main', key: 'isAutopage', label: '自动翻页', keywords: '下一页 分页' },
  { section: 'main', key: 'isALineDisable', label: '移除链接下划线', keywords: '文字 下划线' },
  { section: 'main', key: 'isBlockEnable', label: '域名拦截', keywords: '屏蔽 规则' },
  { section: 'main', key: 'isBlockBtnDisplay', label: '显示拦截按钮', keywords: 'Block 按钮' },
  { section: 'main', key: 'isBlockResultDisplay', label: '隐藏已拦截结果', keywords: '屏蔽 占位' },
  { section: 'main', key: 'isDevMode', label: '调试日志', keywords: '开发者 日志' },
  { section: 'main', key: 'isLocalDevMode', label: '本地资源调试', keywords: '开发者 Less' },
  { section: 'main', key: 'localDebugBaseUrl', label: '本地调试资源地址', keywords: '开发者 URL' },
  { section: 'main', key: 'commonStyleEnable', label: '全局自定义 Less', keywords: 'CSS 样式表' },
  { section: 'main', key: 'commonStyleLink', label: '全局远程样式地址', keywords: 'Less CSS URL 拉取' },
  { section: 'main', key: 'commonStyleLess', label: '全局 Less 编辑器', keywords: 'CSS 代码 样式表' },
  ...engineItems('baidu', '百度', [
    { section: 'baidu', key: 'doRemoveSug', label: '移除百度搜索预测', keywords: '下拉建议' },
    { section: 'baidu', key: 'baiduLiteEnable', label: '百度 Lite 显示样式', keywords: '精简模式' },
  ]),
  ...engineItems('google', 'Google', [
    { section: 'google', key: 'useBaiduLogo', label: 'Google 使用百度 Logo', keywords: '标志 图标' },
  ]),
  ...engineItems('bing', 'Bing'),
]

const activeSection = ref<SectionId>('main')
const searchQuery = ref('')
const searchCursor = ref(0)
const bridgeConnected = ref(false)
const bridgeError = ref('')
const savingAll = ref(false)
const pendingSections = reactive(new Set<SectionId>())

const normalizedQuery = computed(() => searchQuery.value.trim().toLocaleLowerCase())
const filteredSearchItems = computed(() => {
  if (!normalizedQuery.value) return []
  const result = searchItems.filter(item => {
    const haystack = `${item.label} ${item.key} ${item.keywords || ''} ${sectionName(item.section)}`.toLocaleLowerCase()
    return haystack.includes(normalizedQuery.value)
  })
  searchCursor.value = Math.min(searchCursor.value, Math.max(result.length - 1, 0))
  return result.slice(0, 10)
})

const connectionLabel = computed(() => bridgeConnected.value ? '已连接用户脚本' : '未连接用户脚本')
const saveStatusLabel = computed(() => {
  if (!bridgeConnected.value) return '请确认脚本已安装并允许在本站运行'
  if (pendingSections.size) return `${pendingSections.size} 个配置区有未保存更改`
  return '当前配置已保存'
})

function sectionName(id: SectionId) {
  return sections.find(section => section.id === id)?.name || id
}

function moveSearchCursor(offset: number) {
  const count = filteredSearchItems.value.length
  if (!count) return
  searchCursor.value = (searchCursor.value + offset + count) % count
}

function openHighlightedResult() {
  const item = filteredSearchItems.value[searchCursor.value]
  if (item) openSearchResult(item)
}

async function openSearchResult(item: SearchItem) {
  setActiveSection(item.section)
  searchQuery.value = ''
  searchCursor.value = 0
  await nextTick()

  const section = document.querySelector(`[data-section="${item.section}"]`)
  const target = section?.querySelector(`[data-config-key~="${item.key}"]`) as HTMLElement | null
  const details = target?.closest('details') as HTMLDetailsElement | null
  if (details) details.open = true

  let hiddenContainer = target as HTMLElement | null
  while (hiddenContainer && hiddenContainer !== section && getComputedStyle(hiddenContainer).display !== 'none') {
    hiddenContainer = hiddenContainer.parentElement
  }
  if (hiddenContainer && hiddenContainer !== section) {
    const previousDisplay = hiddenContainer.style.display
    hiddenContainer.dataset.searchReveal = 'true'
    hiddenContainer.style.display = 'block'
    window.setTimeout(() => {
      if (hiddenContainer?.dataset.searchReveal === 'true') {
        hiddenContainer.style.display = previousDisplay
        delete hiddenContainer.dataset.searchReveal
      }
    }, 2100)
  }

  window.setTimeout(() => {
    target?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    target?.classList.add('config-search-highlight')
    window.setTimeout(() => target?.classList.remove('config-search-highlight'), 1800)
  }, details ? 180 : 0)
}

function setActiveSection(section: SectionId) {
  activeSection.value = section
  history.replaceState(null, '', `#${section}`)
}

function resolveSectionFromSaveKey(saveKey: string): SectionId | null {
  const section = saveKey.replace(/^op_/, '')
  return section === 'common' ? 'main' : sections.some(item => item.id === section) ? section as SectionId : null
}

function handleDirty(event: Event) {
  const section = resolveSectionFromSaveKey((event as CustomEvent).detail?.saveKey || '')
  if (section) pendingSections.add(section)
}

function handleSaved(event: Event) {
  const section = resolveSectionFromSaveKey((event as CustomEvent).detail?.saveKey || '')
  if (section) pendingSections.delete(section)
}

function handleBridgeError(event: Event) {
  const error = (event as CustomEvent).detail?.error
  bridgeConnected.value = false
  bridgeError.value = error?.message || '用户脚本桥接未响应'
}

function retryBridge() {
  if (!window.AC_GM_Interface) {
    bridgeError.value = '未检测到用户脚本，请确认脚本已启用并刷新页面'
    return
  }
  window.location.reload()
}

onErrorCaptured((error) => {
  handleBridgeError(new CustomEvent('ac-config-bridge-error', { detail: { error } }))
  return false
})

async function saveAll() {
  const saveFunctions: Record<SectionId, string> = {
    main: 'save公共',
    baidu: 'save百度',
    google: 'save谷歌',
    bing: 'save必应',
    duckduckgo: 'save鸭鸭',
    haosou: 'save好搜',
  }

  if (savingAll.value) return
  savingAll.value = true
  let allSaved = true
  try {
    for (const section of Array.from(pendingSections)) {
      const save = (window as any)[saveFunctions[section]]
      if (typeof save !== 'function' || await save() === false) {
        allSaved = false
        break
      }
    }
    if (!allSaved) ElMessage.error('部分配置未保存，请检查用户脚本连接后重试')
  } finally {
    savingAll.value = false
  }
}

onMounted(() => {
  document.body.classList.add('config-console-page')
  bridgeConnected.value = Boolean(window.AC_GM_Interface)
  window.addEventListener('ac-config-dirty', handleDirty)
  window.addEventListener('ac-config-saved', handleSaved)
  window.addEventListener('ac-config-bridge-error', handleBridgeError)

  const hash = window.location.hash.replace('#', '') as SectionId
  if (sections.some(section => section.id === hash)) activeSection.value = hash
})

onBeforeUnmount(() => {
  document.body.classList.remove('config-console-page')
  window.removeEventListener('ac-config-dirty', handleDirty)
  window.removeEventListener('ac-config-saved', handleSaved)
  window.removeEventListener('ac-config-bridge-error', handleBridgeError)
})
</script>

<style lang="scss">
.config-console-page {
  --console-accent: #16745b;
  --console-accent-soft: #e7f5f0;
  --console-warm: #b85c28;
  --console-panel: #ffffff;
  --console-canvas: #f4f6f5;
  --console-border: #dfe5e2;
  --console-text: #17211e;
  --console-muted: #65716d;

  .VPSidebar,
  .VPDocAside {
    display: none !important;
  }

  .VPContent.has-sidebar {
    padding-left: 0 !important;
  }

  .VPDoc .container,
  .VPDoc .content,
  .VPDoc .content-container {
    max-width: none !important;
  }

  .VPDoc .content-container {
    padding: 0 !important;
  }

  .VPDoc {
    padding: 0 28px 56px !important;
    background: var(--console-canvas);
  }
}

html.dark .config-console-page {
  --console-accent: #55c7a3;
  --console-accent-soft: #173a31;
  --console-warm: #f09a62;
  --console-panel: #171c1a;
  --console-canvas: #0f1312;
  --console-border: #303a36;
  --console-text: #edf3f0;
  --console-muted: #a8b3ae;
}

.config-console {
  width: min(1240px, 100%);
  margin: 0 auto;
  color: var(--console-text);
}

.console-toolbar {
  position: sticky;
  top: var(--vp-nav-height, 64px);
  z-index: 35;
  min-height: 84px;
  display: grid;
  grid-template-columns: minmax(190px, .7fr) minmax(280px, 1.4fr) minmax(260px, 1fr);
  gap: 20px;
  align-items: center;
  padding: 14px 18px;
  margin: 0 -8px 18px;
  border-bottom: 1px solid var(--console-border);
  background: color-mix(in srgb, var(--console-canvas) 92%, transparent);
  backdrop-filter: blur(14px);
}

.toolbar-heading {
  min-width: 0;

  .toolbar-kicker {
    display: block;
    color: var(--console-accent);
    font-size: 11px;
    font-weight: 700;
    line-height: 1.2;
    text-transform: uppercase;
  }

  h1 {
    margin: 3px 0 0 !important;
    color: var(--console-text);
    font-size: 22px;
    line-height: 1.2;
    letter-spacing: 0;
  }
}

.config-search {
  position: relative;

  .el-input__wrapper {
    min-height: 44px;
    border-radius: 6px;
    background: var(--console-panel);
    box-shadow: 0 0 0 1px var(--console-border) inset;
  }

  .search-results {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    left: 0;
    z-index: 50;
    max-height: 360px;
    overflow: auto;
    padding: 6px;
    border: 1px solid var(--console-border);
    border-radius: 6px;
    background: var(--console-panel);
    box-shadow: 0 16px 40px rgba(18, 34, 28, .16);

    button {
      width: 100%;
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 8px 10px;
      border: 0;
      border-radius: 4px;
      color: var(--console-text);
      background: transparent;
      text-align: left;
      cursor: pointer;

      small {
        flex: 0 0 auto;
        color: var(--console-muted);
      }

      &:hover,
      &.active {
        background: var(--console-accent-soft);
      }
    }

    .search-empty {
      padding: 18px;
      color: var(--console-muted);
      text-align: center;
    }
  }
}

.sync-status {
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;

  .status-dot {
    width: 8px;
    height: 8px;
    flex: 0 0 auto;
    border-radius: 50%;
    background: var(--console-accent);
    box-shadow: 0 0 0 4px var(--console-accent-soft);
  }

  &.pending .status-dot {
    background: var(--console-warm);
    box-shadow: 0 0 0 4px color-mix(in srgb, var(--console-warm) 16%, transparent);
  }

  > div:first-of-type {
    min-width: 0;
  }

  strong,
  small {
    display: block;
  }

  strong {
    color: var(--console-text);
    font-size: 13px;
  }

  small {
    max-width: 210px;
    overflow: hidden;
    color: var(--console-muted);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.section-save-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  &:empty {
    display: none;
  }
}

.console-layout {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 22px;
  align-items: start;
}

.engine-navigation {
  position: sticky;
  top: calc(var(--vp-nav-height, 64px) + 102px);
  display: grid;
  gap: 4px;
  padding: 6px;
  border: 1px solid var(--console-border);
  border-radius: 6px;
  background: var(--console-panel);

  button {
    position: relative;
    width: 100%;
    min-height: 58px;
    display: grid;
    grid-template-columns: 28px minmax(0, 1fr);
    gap: 9px;
    align-items: center;
    padding: 8px 10px;
    border: 0;
    border-radius: 4px;
    color: var(--console-muted);
    background: transparent;
    text-align: left;
    cursor: pointer;

    .el-icon {
      font-size: 19px;
    }

    strong,
    small {
      display: block;
      letter-spacing: 0;
    }

    strong {
      color: var(--console-text);
      font-size: 14px;
    }

    small {
      margin-top: 2px;
      font-size: 11px;
    }

    &:hover {
      background: color-mix(in srgb, var(--console-accent-soft) 65%, transparent);
    }

    &.active {
      color: var(--console-accent);
      background: var(--console-accent-soft);
    }
  }

  .pending-mark {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--console-warm);
  }
}

.config-workspace {
  min-width: 0;
}

.config-section {
  min-height: 620px;
  padding: 24px 26px 28px;
  border: 1px solid var(--console-border);
  border-radius: 6px;
  background: var(--console-panel);

  .section-heading {
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
    padding-bottom: 18px;
    margin-bottom: 18px;
    border-bottom: 1px solid var(--console-border);

    span {
      color: var(--console-accent);
      font-size: 11px;
      font-weight: 700;
    }

    h2 {
      margin: 3px 0 4px !important;
      color: var(--console-text);
      font-size: 24px;
      line-height: 1.25;
      letter-spacing: 0;
    }

    p {
      margin: 0;
      color: var(--console-muted);
      font-size: 13px;
    }
  }

  .config-loading {
    padding: 56px 20px;
    color: var(--console-muted);
    text-align: center;
  }

  .bridge-error {
    min-height: 180px;
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    gap: 14px;
    align-items: center;
    padding: 24px;
    border: 1px solid color-mix(in srgb, var(--console-warm) 36%, var(--console-border));
    border-radius: 6px;
    background: color-mix(in srgb, var(--console-warm) 8%, var(--console-panel));

    > .el-icon {
      color: var(--console-warm);
      font-size: 26px;
    }

    strong,
    p {
      margin: 0;
    }

    p {
      margin-top: 4px;
      color: var(--console-muted);
      font-size: 13px;
    }
  }

  .el-form {
    max-width: none !important;
  }

  .el-form-item {
    min-height: 48px;
    align-items: center;
    padding: 5px 8px;
    margin: 0 !important;
    border-radius: 4px;
    transition: background-color .2s ease, box-shadow .2s ease;

    &:hover {
      background: color-mix(in srgb, var(--console-accent-soft) 38%, transparent);
    }
  }

  .el-form-item__label {
    min-height: 36px;
    align-items: center;
    color: var(--console-text);
    line-height: 1.4;
  }

  .config-label-help {
    flex: none;
    margin-left: 6px;
    color: var(--console-muted);
    cursor: help;
  }

  .el-form-item__content {
    min-width: 0;
    justify-content: flex-end;
  }

  .config-group-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 8px 6px;
    color: var(--console-text);
    font-size: 14px;
    font-weight: 700;
  }

  .config-group-title small {
    color: var(--console-muted);
    font-size: 11px;
    font-weight: 400;
  }

  .config-advanced {
    margin-top: 14px;
    border: 1px solid var(--console-border);
    border-radius: 5px;
    background: color-mix(in srgb, var(--console-canvas) 58%, var(--console-panel));

    > summary {
      min-height: 48px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
      padding: 10px 14px;
      color: var(--console-text);
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
      list-style: none;

      &::-webkit-details-marker {
        display: none;
      }

      &::after {
        content: '+';
        color: var(--console-accent);
        font-size: 20px;
        font-weight: 400;
      }

      small {
        margin-left: auto;
        color: var(--console-muted);
        font-size: 11px;
        font-weight: 400;
      }
    }

    &[open] > summary::after {
      content: '−';
    }

    .advanced-content {
      padding: 6px 12px 14px;
      border-top: 1px solid var(--console-border);
    }
  }

  .config-search-highlight {
    background: var(--console-accent-soft) !important;
    box-shadow: 0 0 0 2px var(--console-accent) inset;
  }

  .el-divider {
    margin: 12px 0 !important;
    border-color: var(--console-border);
  }

  .el-input,
  .el-textarea {
    max-width: 100%;
  }

  .color-setting,
  .color-palette {
    display: flex;
    align-items: center;
  }

  .color-setting {
    min-width: 0;
    justify-content: flex-end;
    gap: 16px;
  }

  .color-palette {
    min-width: 0;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 6px;
  }
}

@media (max-width: 900px) {
  .config-console-page .VPDoc {
    padding-right: 16px !important;
    padding-left: 16px !important;
  }

  .console-toolbar {
    position: relative;
    top: auto;
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 16px 0;
    margin: 0 0 12px;
    backdrop-filter: none;
  }

  .toolbar-heading {
    display: none;
  }

  .sync-status {
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .console-layout {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .engine-navigation {
    position: sticky;
    top: var(--vp-nav-height, 64px);
    z-index: 30;
    grid-template-columns: repeat(6, minmax(105px, 1fr));
    overflow-x: auto;
    scroll-snap-type: x mandatory;

    button {
      min-height: 48px;
      grid-template-columns: 22px minmax(70px, 1fr);
      scroll-snap-align: start;

      small {
        display: none;
      }
    }
  }

  .config-section {
    min-height: 0;
    padding: 18px 14px 24px;

    .section-heading h2 {
      font-size: 21px;
    }

    .el-form-item {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 8px;
      min-height: 54px;
      padding: 7px 4px;
    }

    .el-form-item__label,
    .el-form-item__content {
      width: auto !important;
      min-width: 0;
      margin: 0 !important;
    }

    .el-form-item__content {
      justify-content: flex-end;
    }

    .el-radio-group {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 7px;
    }

    .el-radio {
      min-height: 40px;
      margin: 0;
    }

    .color-setting {
      max-width: 100%;
      flex-wrap: wrap;
      gap: 8px;
    }

    .color-palette {
      width: 100%;
      justify-content: flex-end;
    }

    .config-advanced > summary {
      align-items: flex-start;
      flex-wrap: wrap;
    }
  }
}

@media (max-width: 520px) {
  .config-console-page .VPDoc {
    padding-right: 10px !important;
    padding-left: 10px !important;
  }

  .config-section {
    padding-right: 10px;
    padding-left: 10px;

    .section-heading p {
      display: none;
    }

    .el-form-item {
      grid-template-columns: minmax(0, 1fr) auto;
    }

    .el-form-item__label {
      white-space: normal;
    }

    [data-config-key~='HuYanMode'] {
      grid-template-columns: minmax(0, 1fr);

      .el-form-item__content {
        width: 100% !important;
        justify-content: stretch;
      }

      .color-setting {
        width: 100%;
        display: grid;
        grid-template-columns: auto minmax(0, 1fr);
      }

      .color-palette {
        width: auto;
      }
    }

    .el-color-picker + .item-color-select-choose {
      margin-left: 0;
    }
  }
}
</style>
