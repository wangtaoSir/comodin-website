<template>
<div>
    <div class="cu_question">
        <div>
        <h2 class="cu_question_title">1.What is your name?</h2>
        <el-row type="flex">
            <el-col :span="24" class="ow-col-box">
               <el-input style="width:100%;" v-model="userName"></el-input>
            </el-col>
        </el-row>
        </div>
    </div>
 </div>
</template>
<script>
import '@/styles/selectServicesMode.scss'
export default {
  name: 'inputName',
  data() {
    return {
      userName: ''
    }
  },
  components: {},
  created () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>
