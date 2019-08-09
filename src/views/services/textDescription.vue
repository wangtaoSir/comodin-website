<template>
<div>
    <div class="cu_question">
        <div>
        <h2 class="cu_question_title">7. Describe your product, business, or problem you want to solve.</h2>
        <el-row type="flex">
            <el-col :span="24" class="ow-col-box">
               <el-input type="textarea" style="width:100%;height: 107px;" v-model="productProblem"></el-input>
            </el-col>
        </el-row>
        </div>
    </div>
 </div>
</template>
<script>
import '@/styles/selectServicesMode.scss'
export default {
  name: 'textDescription',
  data() {
    return {
      productProblem: ''
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
