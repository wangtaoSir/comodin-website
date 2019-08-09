<template>
<div>
    <div class="cu_question">
        <div>
        <h2 class="cu_question_title">2.1. What can we help you make?</h2>
        <el-row type="flex">
            <el-col :span="12" class="ow-col-box">
                <div class="ow-radio-answer">
                <input type="radio" name="source_mobileApp" id="nativeApp_id" value="nativeApp" v-model="selectMobileTypeValue">
                <label for="nativeApp_id" class="ow-radio-value bWhIIG">Native App</label>
                </div>
            </el-col>
            <el-col :span="12" class="ow-col-box">
                <div class="ow-radio-answer">
                <input type="radio" name="source_mobileApp" id="hybridApp_id" value="hybridApp"  v-model="selectMobileTypeValue">
                <label for="hybridApp_id" class="ow-radio-value bWhIIG">Hybrid App</label>
                </div>
            </el-col>
        </el-row>
        <el-row type="flex">
            <el-col :span="12" class="ow-col-box">
                <div class="ow-radio-answer">
                <input type="radio" name="source_mobileApp" id="webApp_id" value="webApp"  v-model="selectMobileTypeValue">
                <label for="webApp_id" class="ow-radio-value bWhIIG">Web app</label>
                </div>
            </el-col>
        </el-row>
        </div>
    </div>
    <div class="cu_question" v-show="is_selectAppType_bat">
        <div>
        <h2 class="cu_question_title">2.2. You select the app type?</h2>
        <el-row type="flex" id="nativeApp_mode" v-show="is_nativeApp_mode">
            <el-col :span="12" class="ow-col-box">
                <div class="ow-radio-answer">
                <input type="radio" name="source_nativeApp" id="ios_id" value="ios" v-model="selectMobileTypeValue_3">
                <label for="ios_id" class="ow-radio-value bWhIIG">iOS</label>
                </div>
            </el-col>
            <el-col :span="12" class="ow-col-box">
                <div class="ow-radio-answer">
                <input type="radio" name="source_nativeApp" id="android_id" value="android" v-model="selectMobileTypeValue_3">
                <label for="android_id" class="ow-radio-value bWhIIG">Android</label>
                </div>
            </el-col>
        </el-row>
        <el-row type="flex" id="hybridApp_mode" v-show="is_hybridApp_mode">
            <el-col :span="12" class="ow-col-box">
                <div class="ow-radio-answer">
                <input type="radio" name="source_hybridApp" id="reactNative_id" value="reactNative" v-model="selectMobileTypeValue_3">
                <label for="reactNative_id" class="ow-radio-value bWhIIG">React Native</label>
                </div>
            </el-col>
            <el-col :span="12" class="ow-col-box">
                <div class="ow-radio-answer">
                <input type="radio" name="source_hybridApp" id="ionic_id" value="ionic" v-model="selectMobileTypeValue_3">
                <label for="ionic_id" class="ow-radio-value bWhIIG">Ionic</label>
                </div>
            </el-col>
        </el-row>
        <el-row type="flex" id="webapp_mode" v-show="is_webApp_mode">
            <el-col :span="12" class="ow-col-box">
                <div class="ow-radio-answer">
                <input type="radio" name="source_webapp" id="rubyOnRails_id" value="rubyOnRails" v-model="selectMobileTypeValue_3">
                <label for="rubyOnRails_id" class="ow-radio-value bWhIIG">Ruby on Rails</label>
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
  name: 'mobileApp',
  data() {
    return {
      is_selectAppType_bat: false,
      is_nativeApp_mode: false,
      is_hybridApp_mode: false,
      is_webApp_mode: false,
      selectMobileTypeValue: '',
      selectMobileTypeValue_3: ''
    }
  },
  components: {},
  created () {
  },
  mounted () {
  },
  methods: {
    fun_selectAppType(type) {
      this.is_selectAppType_bat = true
      this.is_nativeApp_mode = false
      this.is_hybridApp_mode = false
      this.is_webApp_mode = false
      this['is_' + type + '_mode'] = true
    }
  },
  watch: {
    selectMobileTypeValue(value) {
      this.fun_selectAppType(value)
      this.selectMobileTypeValue_3 = ''
      localStorage.setItem('selectProjectTypeValue_2', this.selectMobileTypeValue)
    },
    selectMobileTypeValue_3(value) {
      localStorage.setItem('selectProjectTypeValue_3', this.selectMobileTypeValue_3)
    }
  }
}
</script>

