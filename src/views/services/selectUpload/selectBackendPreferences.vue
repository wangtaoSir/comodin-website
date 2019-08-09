<template>
<div>
    <div class="cu_question">
        <div>
        <h2 class="cu_question_title">6. Do you have backend preferences (servers, APIs, data architecture)?</h2>
        <el-row type="flex">
            <el-col :span="12" class="ow-col-box">
                <div class="ow-radio-answer">
                <input type="radio" name="source_selectBackendPreferences" id="backendPreferences_yes_id" value="yes" v-model="is_backendPreferencesValue">
                <label for="backendPreferences_yes_id" class="ow-radio-value bWhIIG">Yes</label>
                </div>
            </el-col>
            <el-col :span="12" class="ow-col-box">
                <div class="ow-radio-answer">
                <input type="radio" name="source_selectBackendPreferences" id="backendPreferences_no_id" value="no" v-model="is_backendPreferencesValue">
                <label for="backendPreferences_no_id" class="ow-radio-value bWhIIG">NO</label>
                </div>
            </el-col>
        </el-row>
        </div>
    </div>
    <div class="cu_question" v-show="is_backendPreferences_yes">
        <div>
        <h2 class="cu_question_title">6.1 Please select backend preferences</h2>
        <el-row type="flex">
            <el-col :span="12" class="ow-col-box">
               <el-input type="textarea" style="width:100%;height: 107px;" v-model="existServiceContent"></el-input>
            </el-col>
        </el-row>
        </div>
    </div>
 </div>
</template>
<script>
import '@/styles/selectServicesMode.scss'
export default {
  name: 'selectBackendPreferences',
  data() {
    return {
      is_backendPreferencesValue: '',
      is_backendPreferences_yes: false,
      existServiceContent: ''

    }
  },
  components: {},
  created () {
  },
  mounted () {
  },
  methods: {
    fun_backendPreferencesValue(type) {
      if (type === 'yes') {
        this.is_backendPreferences_yes = true
      } else {
        this.is_backendPreferences_yes = false
      }
    }
  },
  watch: {
    is_backendPreferencesValue(value) {
      this.fun_backendPreferencesValue(value)
    }
  }
}
</script>
