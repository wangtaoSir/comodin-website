<template>
<div>
    <div class="cu_question">
        <div>
        <h2 class="cu_question_title">5. Do you have content/design/visual identity?</h2>
        <el-row type="flex">
            <el-col :span="12" class="ow-col-box">
                <div class="ow-radio-answer">
                <input type="radio" name="source_selectVisualIdentity" id="visualIdentity_yes_id" value="yes" v-model="is_visualIdentityValue">
                <label for="visualIdentity_yes_id" class="ow-radio-value bWhIIG">Yes</label>
                </div>
            </el-col>
            <el-col :span="12" class="ow-col-box">
                <div class="ow-radio-answer">
                <input type="radio" name="source_selectVisualIdentity" id="visualIdentity_no_id" value="no" v-model="is_visualIdentityValue">
                <label for="visualIdentity_no_id" class="ow-radio-value bWhIIG">NO</label>
                </div>
            </el-col>
        </el-row>
        </div>
    </div>
    <div class="cu_question" v-show="is_visualIdentityMode_yes">
        <div>
        <h2 class="cu_question_title">5.1 Please upload content/design/visual identity</h2>
        <el-row type="flex">
            <el-col :span="12" class="ow-col-box">
                <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :file-list="fileList"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-col>
        </el-row>
        </div>
    </div>
    <div class="cu_question" v-show="is_visualIdentityMode_yes">
        <div>
        <h2 class="cu_question_title">5.2 Fill in the content/design/visual identity</h2>
        <el-row type="flex">
            <el-col :span="24" class="ow-col-box">
               <el-input type="textarea" style="width:100%;"></el-input>
            </el-col>
        </el-row>
        </div>
    </div>
 </div>
</template>
<script>
import '@/styles/selectServicesMode.scss'
export default {
  name: 'selectVisualIdentity',
  data() {
    return {
      is_visualIdentityValue: '',
      is_visualIdentityMode_yes: false,
      dialogImageUrl: '',
      dialogVisible: false,
      limitNumber: 5,
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    }
  },
  components: {},
  created () {
  },
  mounted () {
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    fun_visualIdentityValue(type) {
      if (type === 'yes') {
        this.is_visualIdentityMode_yes = true
      } else {
        this.is_visualIdentityMode_yes = false
      }
    }
  },
  watch: {
    is_visualIdentityValue(value) {
      this.fun_visualIdentityValue(value)
    }
  }
}
</script>
