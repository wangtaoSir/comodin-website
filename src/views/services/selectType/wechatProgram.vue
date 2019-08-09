<template>
<div>
    <div class="cu_question">
        <div>
        <h2 class="cu_question_title">2.1. What can we help you make?</h2>
        <el-row type="flex">
            <el-col :span="12" class="ow-col-box">
                <div class="ow-radio-answer">
                <input type="radio" name="source_wechatProgram" id="wechat_Brochure_id" value="wechat_Brochure" v-model="selectWechatValue">
                <label for="wechat_Brochure_id" class="ow-radio-value bWhIIG">Brochure (static content)</label>
                </div>
            </el-col>
            <el-col :span="12" class="ow-col-box">
                <div class="ow-radio-answer">
                <input type="radio" name="source_wechatProgram" id="basicCrm_id" value="basicCrm" v-model="selectWechatValue">
                <label for="basicCrm_id" class="ow-radio-value bWhIIG">BasicCrm</label>
                </div>
            </el-col>
        </el-row>
        <el-row type="flex">
            <el-col :span="12" class="ow-col-box">
                <div class="ow-radio-answer">
                <input type="radio" name="source_wechatProgram" id="wechat_commerce_id" value="wechat_commerce" v-model="selectWechatValue">
                <label for="wechat_commerce_id" class="ow-radio-value bWhIIG">E-commerce</label>
                </div>
            </el-col>
            <el-col :span="12" class="ow-col-box">
                <div class="ow-radio-answer">
                <input type="radio" name="source_wechatProgram" id="wechat_webApplication_id" value="wechat_webApplication" v-model="selectWechatValue">
                <label for="wechat_webApplication_id" class="ow-radio-value bWhIIG">Web application</label>
                </div>
            </el-col>
        </el-row>
        </div>
    </div>
 </div>
</template>
<script>
import '@/styles/selectServicesMode.scss'
export default {
  name: 'wechatProgram',
  data() {
    return {
      selectWechatValue: ''
    }
  },
  components: {},
  created () {
  },
  mounted () {
  },
  methods: {
  },
  watch: {
    selectWebPlatformValue() {
      localStorage.setItem('selectProjectTypeValue_2', this.selectWechatValue)
    }
  },
}
</script>
