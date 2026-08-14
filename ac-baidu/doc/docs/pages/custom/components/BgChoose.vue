<template>
  <el-form-item data-config-key="BgEnable" for="nothing" label="启用页面背景图" label-position="left">
    <el-switch inline-prompt size="large" v-model="state.BgEnable" active-text="开启" inactive-text="关闭"/>
  </el-form-item>
  <div v-show="state.BgEnable">
    <el-form-item data-config-key="BgUseUrl" for="nothing" label="背景图地址" label-position="left">
      <el-input v-model="state.BgUseUrl" class="background-url-input" placeholder="https://..." clearable />
    </el-form-item>
    <el-form-item data-config-key="BgFit" for="nothing" label="背景图自动适应" label-position="left">
      <el-tooltip class="box-item" effect="dark" :hide-after=20 content="背景图显示自动优化，强烈建议开启" placement="top">
        <el-switch inline-prompt size="large" v-model="state.BgFit" active-text="开启" inactive-text="关闭"/>
      </el-tooltip>
    </el-form-item>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, reactive, toRefs, watch } from "vue";
import { ElMessage } from "element-plus";

const emits = defineEmits(['update_state'])
const props = defineProps({
  state: {
    type: Object,
    required: true,
    default: () => ({})
  },
  baseItemKey: {
    type: String,
    required: true,
    default: '',
  }
})

const defaultOptions = {
  BgEnable: false, // 背景图-是否启用
  BgUseUrl: '', // 默认背景图
  BgFit: true,
  BgBase64Image: '',
}

const propState = toRefs(props.state)
const state = reactive(Object.assign({}, defaultOptions, propState))

watch(state, () => {
  const keys = Object.keys(defaultOptions)
  const values = keys.map(one => state[one])
  const newOptions = Object.fromEntries(keys.map((key, index) => [key, values[index]]));
  emits('update_state', newOptions)
})

watch(() => state.BgUseUrl, () => {
  ElMessage.success('背景已临时生效，如果不生效，清注意使用图床')
})

watch(() => propState, () => {
  const notKeys = Object.keys(defaultOptions)
  const keys = Object.keys(propState)
  const values = keys.map(one => state[one])
  const newState = Object.fromEntries(keys.filter(per => !notKeys.includes(per)).map((key, index) => [key, values[index]]));
  Object.assign(state, newState)
})

</script>

<style scoped lang="scss">
.background-url-input {
  width: min(440px, 100%);
}
</style>
