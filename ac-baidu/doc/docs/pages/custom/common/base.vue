<template>
  <div class="mb-4">
      <el-form :model="state" label-width="auto" style="max-width: 800px">
        <div class="config-group-title"><span>常用设置</span><small>修改会立即同步预览，保存后持久生效</small></div>
        <el-form-item data-config-key="isRedirectEnable" for="nothing" label="处理搜索结果重定向" label-position="left">
          <a-tool-tip-icon href="/pages/home/use.html#redirect" tooltipText="点击查看说明" is="QuestionFilled"></a-tool-tip-icon>
          <el-tooltip
            class="box-item"
            effect="dark" :hide-after=20
            content="重定向功能，建议开启"
            placement="right"
          >
             <el-switch inline-prompt size="large" v-model="state.isRedirectEnable" active-text="开启" inactive-text="关闭" style="margin-left: 15px;" />
          </el-tooltip>
        </el-form-item>
        <el-form-item data-config-key="isAdsEnable" for="nothing" label="去广告功能" label-position="left">
          <a-tool-tip-icon href="/pages/home/use.html#ads" tooltipText="点击查看说明" is="QuestionFilled"></a-tool-tip-icon>
          <el-tooltip
            class="box-item"
            effect="dark" :hide-after=20
            content="去广告功能，建议开启"
            placement="right"
          >
             <el-switch inline-prompt size="large" v-model="state.isAdsEnable" active-text="开启" inactive-text="关闭" style="margin-left: 15px;" />
          </el-tooltip>
        </el-form-item>
        <el-form-item data-config-key="isAutopage" for="nothing" label="自动翻页" label-position="left">
          <a-tool-tip-icon href="/pages/home/use.html#pager" tooltipText="点击查看说明" is="QuestionFilled"></a-tool-tip-icon>
          <el-tooltip
            class="box-item"
            effect="dark" :hide-after=20
            content="自动翻页功能，建议开启"
            placement="right"
          >
            <el-switch inline-prompt size="large" v-model="state.isAutopage" active-text="开启" inactive-text="关闭" style="margin-left: 15px;" />
          </el-tooltip>
        </el-form-item>
        <el-form-item data-config-key="isFaviconEnable" for="nothing" label="显示网站 Favicon" label-position="left">
          <a-tool-tip-icon href="/pages/home/use.html#favicon" tooltipText="点击查看说明" is="QuestionFilled"></a-tool-tip-icon>
          <el-tooltip
            class="box-item"
            effect="dark" :hide-after=20
            content="显示Favicon功能，建议开启"
            placement="right"
          >
             <el-switch inline-prompt size="large" v-model="state.isFaviconEnable" active-text="开启" inactive-text="关闭" style="margin-left: 15px;" />
          </el-tooltip>
        </el-form-item>
        <el-form-item data-config-key="isRightDisplayEnable" for="nothing" label="显示搜索右侧栏" label-position="left">
          <a-tool-tip-icon href="/pages/home/use.html#remove-right" tooltipText="点击查看说明" is="QuestionFilled"></a-tool-tip-icon>
          <el-tooltip
            class="box-item"
            effect="dark" :hide-after=20
            content="显示搜索右侧栏结果，按需开启"
            placement="right"
          >
             <el-switch inline-prompt size="large" v-model="state.isRightDisplayEnable" active-text="开启" inactive-text="关闭" style="margin-left: 15px;" />
          </el-tooltip>
        </el-form-item>
        <el-form-item data-config-key="isCounterEnable" for="nothing" label="显示搜索结果编号" label-position="left">
          <a-tool-tip-icon href="/pages/home/use.html#number" tooltipText="点击查看说明" is="QuestionFilled"></a-tool-tip-icon>
          <el-tooltip
            class="box-item"
            effect="dark" :hide-after=20
            content="编号功能，建议关闭"
            placement="right"
          >
             <el-switch inline-prompt size="large" v-model="state.isCounterEnable" active-text="开启" inactive-text="关闭" style="margin-left: 15px;" />
          </el-tooltip>
        </el-form-item>
        <el-form-item data-config-key="isALineDisable" for="nothing" label="移除链接文字下划线" label-position="left">
          <a-tool-tip-icon href="/pages/home/use.html#text-line" tooltipText="点击查看说明" is="QuestionFilled"></a-tool-tip-icon>
          <el-tooltip
            class="box-item"
            effect="dark" :hide-after=20
            content="移除文字下划线，建议开启"
            placement="right"
          >
             <el-switch inline-prompt size="large" v-model="state.isALineDisable" active-text="开启" inactive-text="关闭" style="margin-left: 15px;" />
          </el-tooltip>
        </el-form-item>

        <el-form-item data-config-key="isDarkModeEnable" for="nothing" label="搜索页面暗色模式" label-position="left">
          <a-tool-tip-icon href="/pages/home/use.html#darkmode" tooltipText="点击查看说明" is="QuestionFilled"></a-tool-tip-icon>
          <el-tooltip
            class="box-item"
            effect="dark" :hide-after=20
            content="启用后，将搜索结果适配为暗黑主题，按需开启"
            placement="right"
          >
            <el-switch inline-prompt size="large" v-model="state.isDarkModeEnable" active-text="开启" inactive-text="关闭" style="margin-left: 15px;" />
          </el-tooltip>
        </el-form-item>
  
        <details class="config-advanced">
          <summary><span>域名拦截</span><small>屏蔽指定域名或网址规则</small></summary>
          <div class="advanced-content">
            <block-config :state="state" @update_state="updateState"/>
          </div>
        </details>

        <details class="config-advanced">
          <summary><span>全局自定义样式</span><small>Less.js 样式覆盖</small></summary>
          <div class="advanced-content">
            <less-c-s-s-comp siteName="公共" :baseItemKey="baseItemKey" :state="state" :recommendStyleList="recommendStyleList" @update_state="updateState"/>
          </div>
        </details>

        <details class="config-advanced">
          <summary><span>开发者选项</span><small>版本、日志与本地资源调试</small></summary>
          <div class="advanced-content">
            <el-form-item data-config-key="version" for="nothing" label="脚本版本号" label-position="left">
              <span>V{{ state.version }}</span>
            </el-form-item>
            <el-form-item data-config-key="isDevMode" for="nothing" label="输出调试日志" label-position="left">
              <el-switch inline-prompt size="large" v-model="state.isDevMode" active-text="开启" inactive-text="关闭" />
            </el-form-item>
            <el-form-item v-show="state.isDevMode" data-config-key="isLocalDevMode localDebugBaseUrl" for="nothing" label="本地资源调试" label-position="left">
              <el-tooltip
                class="box-item"
                effect="dark" :hide-after=20
                content="从指定地址实时加载样式资源，仅用于调试"
                placement="right"
              >
                <el-switch inline-prompt size="large" v-model="state.isLocalDevMode" active-text="开启" inactive-text="关闭" />
              </el-tooltip>
              <el-input v-show="state.isLocalDevMode" v-model="state.localDebugBaseUrl" class="config-url-input" placeholder="https://..." clearable @click.stop />
            </el-form-item>
          </div>
        </details>
      </el-form>
      <save-alert siteName="公共" :saveKey="baseItemKey" :saveData="state" />  
    </div>
</template>
<script setup lang="ts">
import { reactive, watch } from "vue";
import SaveAlert from "./../components/SaveAlert.vue";
import BlockConfig from "./../components/BlockConfig.vue";
import AToolTipIcon from "./../components/AToolTipIcon.vue";
import LessCSSComp from "./../components/LessCSSComp/index.vue";
import { loadConfig, previewConfig } from '../bridge';

const baseItemKey = 'op_common'
// const baseData = JSON.parse(localStorage.getItem(baseItemKey) || '{}')
const baseData = {}
const scriptData = await loadConfig(baseItemKey)

setTimeout(() => {
  const hash = window.location.hash;
  if (hash) {
    const targetElement = document.querySelector(hash);
    if (targetElement) {
      const offset = 60; // 根据实际情况调整偏移量
      const rect = targetElement.getBoundingClientRect();
      const scrollTop = window.scrollY + rect.top - offset;

      window.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      });
    }
  }
}, 1000)


const base = reactive({
  bigImgShow: false,
  bigImgSrc: '',
  dialogWelcome: false,
  lessCompileRes: true,
  hasChanged: false,
})

const recommendStyleList = [
]

const defaultOptions = {
  version: '',
  isDevMode: false,
  isLocalDevMode: false,
  localDebugBaseUrl: '',
  isRedirectEnable: false, // 是否开启重定向功能
  isAdsEnable: false, // 是否开启去广告模式
  isFaviconEnable: true, // 是否开启Favicon图标
  isAutopage: true, // 是否开启自动翻页功能

  isBlockEnable: true, // 是否开启去拦截模式
  isBlockResultDisplay: true, // 是否函数拦截之后的占位
  isBlockBtnDisplay: false, // 是否显示block按钮
  blockRuleList: [], // 已经加入列表的拦截记录

  isRightDisplayEnable: true, // 是否开启右侧边栏
  isCounterEnable: false, // 是否显示计数器
  isALineDisable: false, // 是否禁止下划线
  isDarkModeEnable: false, // 是否启用暗黑模式

  commonStyleEnable: true, // 自定义样式-是否启用
  commonStyleLink: '', // 自定义样式链接
  commonStyleLess: '', // 自定义样式链接
}
const state = reactive(Object.assign({}, defaultOptions, baseData, scriptData))

watch(state, () => {
  base.hasChanged = true
  const keys = Object.keys(defaultOptions)
  const values = keys.map(one => state[one])
  const newOptions = Object.fromEntries(keys.map((key, index) => [key, values[index]]));
  void previewConfig(baseItemKey, newOptions)
})

function updateState(newVal) {
  base.hasChanged = true
  Object.assign(state, newVal)
}
</script>
<style lang="scss">
.config-url-input {
  width: min(400px, 100%);
  margin-left: 16px;
}
</style>
