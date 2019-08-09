<template>
<div>
    <div class="cu_question">
        <div>
        <h2 class="cu_question_title">2.1. What can we help you make?</h2>
        <el-row type="flex">
            <el-col :span="12" class="ow-col-box">
                <div class="ow-radio-answer">
                <input type="radio" name="source_webPlatform" id="brochure_id" value="brochure" v-model="selectWebPlatformValue">
                <label for="brochure_id" class="ow-radio-value bWhIIG">Brochure (static content)</label>
                </div>
            </el-col>
            <el-col :span="12" class="ow-col-box">
                <div class="ow-radio-answer">
                <input type="radio" name="source_webPlatform" id="basicCms_id" value="basicCms" v-model="selectWebPlatformValue">
                <label for="basicCms_id" class="ow-radio-value bWhIIG">Basic CMS</label>
                </div>
            </el-col>
        </el-row>
        <el-row type="flex">
            <el-col :span="12" class="ow-col-box">
                <div class="ow-radio-answer">
                <input type="radio" name="source_webPlatform" id="commerce_id" value="E-commerce" v-model="selectWebPlatformValue">
                <label for="commerce_id" class="ow-radio-value bWhIIG">E-commerce</label>
                </div>
            </el-col>
            <el-col :span="12" class="ow-col-box">
                <div class="ow-radio-answer">
                <input type="radio" name="source_webPlatform" id="webApplication_id" value="webApplication" v-model="selectWebPlatformValue">
                <label for="webApplication_id" class="ow-radio-value bWhIIG">Web application</label>
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
  name: 'webPlatform',
  data() {
    return {
      selectWebPlatformValue: ''
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
      localStorage.setItem('selectProjectTypeValue_2', this.selectWebPlatformValue)
    }
  },
}
</script>
