<template>
  <el-form-item data-config-key="adsStyleEnable adsStyleMode" for="nothing" label="搜索结果布局" label-position="left">
    <div class="layout-mode-control">
      <el-switch inline-prompt size="large" v-model="state.adsStyleEnable" active-text="开启" inactive-text="关闭" />
      <el-radio-group v-show="state.adsStyleEnable" v-model="state.adsStyleMode">
        <el-tooltip class="box-item" effect="dark" :hide-after=20 placement="top" content="单列居中，显示元素居中 + 效果优化" >
          <el-radio value="2">单列居中</el-radio>
        </el-tooltip>
        <el-tooltip class="box-item" effect="dark" :hide-after=20 placement="top" content="双列居中，显示元素双列效果 + 效果优化" >
          <el-radio value="3">双列居中</el-radio>
        </el-tooltip>
      </el-radio-group>
    </div>
  </el-form-item>
</template>
<script setup lang="ts">
import { defineEmits, reactive, toRefs, watch } from "vue";
import {ElMessage} from "element-plus";

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
  adsStyleEnable: false, // 是否开启优化
  adsStyleMode: 0, // 原始模式
}

const propState = toRefs(props.state)
const state = reactive(Object.assign({}, defaultOptions, propState))
if (!['2', '3'].includes(String(state.adsStyleMode))) {
  state.adsStyleMode = '3'
}

watch(state, () => {
  const keys = Object.keys(defaultOptions)
  const values = keys.map(one => state[one])
  const newOptions = Object.fromEntries(keys.map((key, index) => [key, values[index]]));
  emits('update_state', newOptions)
})

watch(() => state.adsStyleMode, () => {
  ElMessage.success('多列模式临时生效，回到搜索页面查看效果即可')
})

watch(() => state.HuYanMode_Color, () => {
  ElMessage.success('护眼模式-临时生效，建议搭配插件：Dark Reader')
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
.layout-mode-control {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
}

.el-radio-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}

@media (max-width: 900px) {
  .layout-mode-control {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
