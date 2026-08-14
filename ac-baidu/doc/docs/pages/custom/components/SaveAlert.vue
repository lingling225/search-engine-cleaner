<template>
  <Teleport to="#save_hint">
    <div v-show="base.hasChanged">
      <el-button type="danger" :loading="base.saving" @click="doSaveConfig">保存{{ siteName }}</el-button>
      <el-tooltip class="box-item" effect="dark" :hide-after=20 content="存在修改，点击保存" placement="top">
        <el-icon color="#e23c00" style="vertical-align: top;margin-left: 10px; font-size: 28px;"><Warning /></el-icon>
      </el-tooltip>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import {ElMessage} from "element-plus";
import {reactive, watch} from "vue";
import { getScriptBridge } from '../bridge';

const props = defineProps({
  siteName: {
    type: String,
    required: true
  },
  saveKey: {
    type: String,
    required: true,
  },
  saveData: {
    type: Object,
    required: true
  },
})

const base = reactive({
  hasChanged: false,
  saving: false,
})

watch(props.saveData, () => {
  base.hasChanged = true
  window.dispatchEvent(new CustomEvent('ac-config-dirty', {
    detail: { saveKey: props.saveKey }
  }))
})

async function doSaveConfig() {
  if (base.saving || !base.hasChanged) return true
  base.saving = true
  try {
    await getScriptBridge().save(props.saveKey, props.saveData)
    base.hasChanged = false
    window.dispatchEvent(new CustomEvent('ac-config-saved', {
      detail: { saveKey: props.saveKey }
    }))
    ElMessage({ message: `${props.siteName}配置已保存`, type: 'success' })
    return true
  } catch (error: any) {
    ElMessage({
      message: `保存失败：${error?.message || '用户脚本未响应'}`,
      type: 'error',
    })
    return false
  } finally {
    base.saving = false
  }
}
window['save' + props.siteName] = doSaveConfig
</script>

<style scoped lang="scss">

</style>
