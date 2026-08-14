<template>
  <div>
    <el-form :model="state" label-width="auto" style="max-width: 800px">
      <div class="config-group-title"><span>常用设置</span><small>百度专属行为与页面效果</small></div>
      <el-form-item data-config-key="doRemoveSug" for="nothing" label-position="left">
        <template #label>
          <span :style="{color: state.doRemoveSug? 'unset':'orange'}">
            移除百度搜索预测
          </span>
        </template>
        <el-tooltip class="box-item" effect="dark" :hide-after=20 content="点击查看说明" placement="top">
          <a :href="withBase('/pages/home/use.html#remove-baidu')" target="_blank">
            <el-icon>
              <QuestionFilled/>
            </el-icon>
          </a>
        </el-tooltip>
        <el-tooltip
          class="box-item"
          effect="dark" :hide-after=20
          content="移除百度搜索预测，建议必须开启"
          placement="right"
        >
          <el-switch inline-prompt size="large" v-model="state.doRemoveSug" active-text="开启" inactive-text="关闭" style="margin-left: 15px;" />
        </el-tooltip>
      </el-form-item>
<!--      <el-form-item for="nothing" label="独有2-隐藏百度AI自动生成" label-position="left">-->
<!--        <el-tooltip class="box-item" effect="dark" :hide-after=20 content="隐藏百度的AI生成，百度AI生成经常高度不固定，自动往下面越来越长 ，就很烦" placement="right">-->
<!--          <el-switch inline-prompt size="large" v-model="state.doRemoveAIGen" active-text="开启" inactive-text="关闭"/>-->
<!--        </el-tooltip>-->
<!--      </el-form-item>-->
      <el-form-item data-config-key="baiduLiteEnable" for="nothing" label="百度 Lite 显示样式" label-position="left">
        <el-tooltip class="box-item" effect="dark" :hide-after=20 content="启用后将加载BaiduLite的样式表" placement="right">
          <el-switch inline-prompt size="large" v-model="state.baiduLiteEnable" active-text="开启" inactive-text="关闭"/>
        </el-tooltip>
      </el-form-item>

      <el-form-item data-config-key="HuYanMode HuYanMode_Color" for="nothing" label-position="left">
        <template #label>
          <span>百度护眼模式</span>
          <el-tooltip effect="dark" content="百度护眼模式，注意根据不同的主题，请自己选择" placement="top">
            <el-icon class="config-label-help" aria-label="护眼模式说明"><QuestionFilled /></el-icon>
          </el-tooltip>
        </template>
        <div class="color-setting">
             <el-switch inline-prompt size="large" v-model="state.HuYanMode" active-text="开启" inactive-text="关闭"/>
             <div v-show="state.HuYanMode" class="color-palette">
               <el-color-picker v-model="state.HuYanMode_Color" />

               <label data-value="#3A3A3A" class="item-color-select-choose" @click="changeColor">&nbsp;&nbsp;&nbsp;&nbsp;</label>
               <label data-value="#212121" class="item-color-select-choose" @click="changeColor">&nbsp;&nbsp;&nbsp;&nbsp;</label>
               <label data-value="#000000" class="item-color-select-choose" @click="changeColor">&nbsp;&nbsp;&nbsp;&nbsp;</label>

               <label data-value="#DEF1EF" class="item-color-select-choose" @click="changeColor">&nbsp;&nbsp;&nbsp;&nbsp;</label>
               <label data-value="#F3F2EE" class="item-color-select-choose" @click="changeColor">&nbsp;&nbsp;&nbsp;&nbsp;</label>
               <label data-value="#E5E5E5" class="item-color-select-choose" @click="changeColor">&nbsp;&nbsp;&nbsp;&nbsp;</label>
             </div>
        </div>
      </el-form-item>

      <ads-mode-choose :state="state" :baseItemKey="baseItemKey" @update_state="updateState" />

      <details class="config-advanced">
        <summary><span>背景与自定义样式</span><small>背景图、自动适应与 Less.js</small></summary>
        <div class="advanced-content">
          <bg-choose :state="state" :baseItemKey="baseItemKey" @update_state="updateState" />
          <el-divider />
          <less-c-s-s-comp siteName="百度" :baseItemKey="baseItemKey" :state="state" :recommendStyleList="recommendStyleList" @update_state="updateState"/>
        </div>
      </details>
    </el-form>
    <save-alert siteName="百度" :saveKey="baseItemKey" :saveData="state" />
</div>
</template>
<script setup lang="ts">
import BgChoose from "./../components/BgChoose.vue";
import SaveAlert from "./../components/SaveAlert.vue";
import LessCSSComp from "./../components/LessCSSComp/index.vue";
import AdsModeChoose from "./../components/AdsModeChoose.vue";
import { loadConfig, previewConfig } from '../bridge';
import { withBase } from 'vitepress';

const baseItemKey = 'op_baidu'
// const baseData = JSON.parse(localStorage.getItem(baseItemKey) || '{}')
const baseData = {}
const scriptData = await loadConfig(baseItemKey)
import {onMounted, reactive, watch} from 'vue'

const base = reactive({
  bigImgShow: false,
  bigImgSrc: '',
  dialogWelcome: false,
  lessCompileRes: true,
  hasChanged: false,
})

const defaultOptions = {
  doRemoveSug: true,
  // doRemoveAIGen: false,
  baiduLiteEnable: false,

  adsStyleEnable: true, // 是否开启默认效果优化
  adsStyleMode: '3', // 0-不带css；1-单列靠左；2-单列居中；3-双列居中
  HuYanMode: false, // 护眼模式-必应
  HuYanMode_Color: '#ffffff', // 护眼模式-必应-颜色

  BgEnable: false, // 背景图-是否启用
  BgUseUrl: '', // 默认背景图
  BgFit: true, // 背景图-是否适应
  BgBase64Image: '', // 背景图-Base64的结果

  customStyleEnable: false, // 自定义样式-是否启用
  customStyleLink: '', // 自定义样式链接
  customStyleLess: '', // 自定义样式链接
}

const state = reactive(Object.assign({}, defaultOptions, baseData, scriptData))

const recommendStyleList = [
]

onMounted(() => {
  document.querySelectorAll('.item-color-select-choose').forEach(one => {
    one.style.backgroundColor = one.dataset.value
  })
})

watch(state, () => {
  base.hasChanged = true
  const keys = Object.keys(defaultOptions)
  const values = keys.map(one => state[one])
  const newOptions = Object.fromEntries(keys.map((key, index) => [key, values[index]]));
  void previewConfig(baseItemKey, newOptions)
})

function changeColor(env) {
  state.HuYanMode_Color = env.target.dataset.value
}

function updateState(newVal) {
  base.hasChanged = true
  Object.assign(state, newVal)
}

</script>
<style lang="scss" scoped>

.item-color-select-choose {
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: inline-block;
  margin-left: 24px;
}
.el-color-picker {
  :deep(.el-color-picker__icon) {
    color: red;
  }
}
</style>
