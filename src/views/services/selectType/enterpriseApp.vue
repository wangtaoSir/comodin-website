<template>
<div>
    <div class="cu_question">
        <div>
        <h2 class="cu_question_title">2.1. What can we help you make?</h2>
        <el-row type="flex">
            <el-col :span="12" class="ow-col-box">
                <div class="ow-radio-answer">
                <input type="radio" name="source_enterpriseApp" id="billing_id" value="billing" v-model="selectEnterpriseAppValue">
                <label for="billing_id" class="ow-radio-value bWhIIG">Billing/Payment</label>
                </div>
            </el-col>
            <el-col :span="12" class="ow-col-box">
                <div class="ow-radio-answer">
                <input type="radio" name="source_enterpriseApp" id="marketing_id" value="marketing" v-model="selectEnterpriseAppValue">
                <label for="marketing_id" class="ow-radio-value bWhIIG">Marketing/Surveys/CRM</label>
                </div>
            </el-col>
        </el-row>
        <el-row type="flex">
            <el-col :span="12" class="ow-col-box">
                <div class="ow-radio-answer">
                <input type="radio" name="source_enterpriseApp" id="messagingSystems_id" value="messagingSystems" v-model="selectEnterpriseAppValue">
                <label for="messagingSystems_id" class="ow-radio-value bWhIIG">Messaging systems/HR/Management solutions</label>
                </div>
            </el-col>
            <el-col :span="12" class="ow-col-box">
                <div class="ow-radio-answer">
                <input type="radio" name="source_enterpriseApp" id="resourcePlanning_id" value="resourcePlanning" v-model="selectEnterpriseAppValue">
                <label for="resourcePlanning_id" class="ow-radio-value bWhIIG">Resource planning/optimization</label>
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
      selectEnterpriseAppValue: ''
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
    selectEnterpriseAppValue() {
      localStorage.setItem('selectProjectTypeValue_2', this.selectEnterpriseAppValue)
    }
  },
}
</script>
