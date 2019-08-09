<template>
<div>
    <div class="cu_question">
        <div>
        <h2 class="cu_question_title">2.What can we help you make?</h2>
        <el-row type="flex">
            <el-col :span="12" class="ow-col-box">
                <div class="ow-radio-answer">
                <input type="radio" name="source_selectProjectType" id="selectProjectType_mobileApp_id" value="mobileApp" v-model="selectProjectTypeValue">
                <label for="selectProjectType_mobileApp_id" class="ow-radio-value bWhIIG">Mobile app</label>
                </div>
            </el-col>
            <el-col :span="12" class="ow-col-box">
                <div class="ow-radio-answer">
                <input type="radio" name="source_selectProjectType" id="selectProjectType_webPlatform_id" value="webPlatform"  v-model="selectProjectTypeValue">
                <label for="selectProjectType_webPlatform_id" class="ow-radio-value bWhIIG">Web platform</label>
                </div>
            </el-col>
        </el-row>
        <el-row type="flex">
            <el-col :span="12" class="ow-col-box">
                <div class="ow-radio-answer">
                <input type="radio" name="source_selectProjectType" id="selectProjectType_enterpriseApp_id" value="enterpriseApp"  v-model="selectProjectTypeValue">
                <label for="selectProjectType_enterpriseApp_id" class="ow-radio-value bWhIIG">Enterprise app/software</label>
                </div>
            </el-col>
            <el-col :span="12" class="ow-col-box">
                <div class="ow-radio-answer">
                <input type="radio" name="source_selectProjectType" id="selectProjectType_wechatProgram_id" value="wechatProgram"  v-model="selectProjectTypeValue">
                <label for="selectProjectType_wechatProgram_id" class="ow-radio-value bWhIIG">Wechat program</label>
                </div>
            </el-col>
        </el-row>
        </div>
    </div>
    <mobileApp v-show="is_mobileApp_mode" ref="mobileApp_mode"></mobileApp>
    <webPlatform v-show="is_webPlatform_mode" ref="webPlatform_mode"></webPlatform>
    <enterpriseApp v-show="is_enterpriseApp_mode" ref="enterpriseApp_mode"></enterpriseApp>
    <wechatProgram v-show="is_wechatProgram_mode" ref="wechatProgram_mode"></wechatProgram>
 </div>
</template>
<script>
import '@/styles/selectServicesMode.scss'
import mobileApp from '@/views/services/selectType/mobileApp'
import webPlatform from '@/views/services/selectType/webPlatform'
import enterpriseApp from '@/views/services/selectType/enterpriseApp'
import wechatProgram from '@/views/services/selectType/wechatProgram'
export default {
  name: 'selectProjectType',
  data() {
    return {
      selectProjectTypeValue: '',
      is_mobileApp_mode: false,
      is_webPlatform_mode: false,
      is_enterpriseApp_mode: false,
      is_wechatProgram_mode: false
    }
  },
  components: {
    mobileApp,
    webPlatform,
    enterpriseApp,
    wechatProgram
  },
  created () {
  },
  mounted () {
  },
  methods: {
    fun_selectProjectTypeManager(value) {
      this.is_mobileApp_mode = false
      this.is_webPlatform_mode = false
      this.is_enterpriseApp_mode = false
      this.is_wechatProgram_mode = false
      this['is_' + value + '_mode'] = true
    }
  },
  watch: {
    selectProjectTypeValue(value) {
      this.fun_selectProjectTypeManager(value)
      this.$refs.mobileApp_mode.selectMobileTypeValue = ''
      this.$refs.mobileApp_mode.is_selectAppType_bat = false
      this.$refs.webPlatform_mode.selectWebPlatformValue = ''
      this.$refs.enterpriseApp_mode.selectEnterpriseAppValue = ''
      this.$refs.wechatProgram_mode.selectWechatValue = ''
      localStorage.setItem('selectProjectTypeValue', this.selectProjectTypeValue)
    }
  }
}
</script>

