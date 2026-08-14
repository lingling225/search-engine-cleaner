<template>
  <el-form-item data-config-key="commonStyleEnable customStyleEnable" for="nothing" label="启用自定义 Less 样式" label-position="left">
    <el-switch inline-prompt size="large" v-model="state.commonStyleEnable" active-text="开启" inactive-text="关闭"/>
  </el-form-item>
  <div v-show="state.commonStyleEnable">
    <el-form-item data-config-key="commonStyleLink customStyleLink" for="nothing" label="远程样式地址" label-position="left">
      <div class="style-link-row">
        <el-input v-model="state.commonStyleLink" placeholder="https://..." clearable @click.stop />
        <el-button :loading="base.loading" @click.stop="getWgetData">
          <el-icon><Refresh /></el-icon>
          拉取
        </el-button>
      </div>
    </el-form-item>
    <el-form-item data-config-key="commonStyleLess customStyleLess" for="nothing" label="Less 样式代码" label-position="left" class="style-editor-item">
      <div class="style-editor">
        <el-input type="textarea" v-model="state.commonStyleLess" :rows="9" placeholder="可以自行编写或从远程地址拉取 Less 样式" />
        <span :class="['compile-status', { error: !base.compileSuccess }]">
          {{ base.compileSuccess ? 'Less 语法检查通过' : 'Less 编译失败，请检查语法' }}
        </span>
      </div>
    </el-form-item>
  </div>
</template>

<script setup lang="ts">
import { reactive, defineEmits, watch } from "vue";
import less from 'less'
import {ElMessage} from "element-plus";

const emits = defineEmits(['update_state'])
const props = defineProps({
  siteName: {
    type: String,
    required: true,
  },
  baseItemKey: {
    type: String,
    required: true,
  },
  state: {
    type: Object, 
    required: true,
  },
  recommendStyleList: {
    type: Array,
    required: true,
    default() {
      return []
    }
  }  
})

const isCommonComp = !!props.baseItemKey.includes('common')

const fieldPrefix = isCommonComp ? 'commonStyle' : 'customStyle'
const enableKey = `${fieldPrefix}Enable`
const linkKey = `${fieldPrefix}Link`
const lessKey = `${fieldPrefix}Less`
const state = reactive({
  commonStyleEnable: Boolean(props.state[enableKey]),
  commonStyleLink: String(props.state[linkKey] || ''),
  commonStyleLess: String(props.state[lessKey] || ''),
})
const base = reactive({
  compileSuccess: true,
  loading: false,
})

watch(state, () => emits('update_state', {
  [enableKey]: state.commonStyleEnable,
  [linkKey]: state.commonStyleLink,
  [lessKey]: state.commonStyleLess,
}))

watch(() => state.commonStyleLess, () => {
  less.render(state.commonStyleLess).then(css => {
    base.compileSuccess = true
  }).catch(() => {
    base.compileSuccess = false
  })
})

watch(
  () => [props.state[enableKey], props.state[linkKey], props.state[lessKey]],
  ([enabled, link, source]) => Object.assign(state, {
    commonStyleEnable: Boolean(enabled),
    commonStyleLink: String(link || ''),
    commonStyleLess: String(source || ''),
  }),
)

async function getWgetData() {
  if(!state.commonStyleLink) {
    ElMessage({
      message: "请填写自定义样式地址后，再点击拉取",
      type: 'error'
    })
    return
  }
  if (!window.AC_GM_Interface?.requestText) {
    ElMessage({
      message: "当前用户脚本版本不支持远程样式拉取，请更新脚本",
      type: 'error'
    })
    return
  }

  base.loading = true
  try {
    const lessData = await window.AC_GM_Interface.requestText(state.commonStyleLink)
    ElMessage({
      message: "成功拉取样式表",
      type: 'success'
    })
    state.commonStyleLess = lessData
    
  } catch (error: any) {
    ElMessage({
      message: "加载失败：" + (error?.message || '网络请求失败'),
      type: 'error'
    })
  } finally {
    base.loading = false
  }
}
</script>

<style scoped lang="scss">
.style-link-row,
.style-editor {
  width: min(620px, 100%);
}

.style-link-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 8px;
}

.style-editor-item {
  align-items: start;
}

.compile-status {
  display: block;
  margin-top: 6px;
  color: var(--el-color-success);
  font-size: 12px;
}

.compile-status.error {
  color: var(--el-color-danger);
}

</style>
