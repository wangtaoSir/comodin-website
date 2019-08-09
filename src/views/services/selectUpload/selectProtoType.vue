<template>
<div>
    <div class="cu_question">
        <div>
        <h2 class="cu_question_title">3. Do you have a prototype? (Auxure, proto.io)</h2>
        <el-row type="flex">
            <el-col :span="12" class="ow-col-box">
                <div class="ow-radio-answer">
                <input type="radio" name="source_protoType" id="yes_id" value="Y" v-model="is_prototypeValue">
                <label for="yes_id" class="ow-radio-value bWhIIG">Yes</label>
                </div>
            </el-col>
            <el-col :span="12" class="ow-col-box">
                <div class="ow-radio-answer">
                <input type="radio" name="source_protoType" id="no_id" value="N" v-model="is_prototypeValue">
                <label for="no_id" class="ow-radio-value bWhIIG">NO</label>
                </div>
            </el-col>
        </el-row>
        </div>
    </div>
    <div class="cu_question" v-show="is_protoTypeMode_yes">
        <div>
        <h2 class="cu_question_title">3.1 Please upload relevant assets (Auxure, proto.io)</h2>
        <el-row type="flex">
            <el-col :span="24" class="ow-col-box">
                <el-upload action="#"
                    ref="upload"
                    list-type="text"
                    :auto-upload="false"
                    :on-change="handleChange"
                    :limit="5"
                    :on-exceed="handleExceed"
                    multiple
                    :http-request="uploadSectionFile"
                    :on-remove="handleRemove">
                    <div tabindex="0" class="el-upload el-upload--picture-card"><i class="el-icon-plus"></i><input type="file" name="file" class="el-upload__input"></div>
                </el-upload>
            </el-col>
        </el-row>
        </div>
    </div>
    <div class="cu_question" v-show="is_protoTypeMode_yes">
        <div>
        <h2 class="cu_question_title">3.2 Please fill in the relevant website address (proto.io)</h2>
        <el-row type="flex">
            <el-col :span="24" class="ow-col-box">
               <el-input type="textarea" style="width:100%;" v-model="sketchLinkResource"></el-input>
            </el-col>
        </el-row>
        </div>
    </div>
 </div>
</template>
<script>
import '@/styles/selectServicesMode.scss'
export default {
  name: 'visualIdentity',
  data() {
    return {
      sketchLinkResource: '',
      is_protoTypeMode_yes: false,
      is_prototypeValue: '',
      dialogImageUrl: '',
      dialogVisible: false,
      limitNumber: 5,
      prototypeFileList: [],
      uploadForm: new FormData(), // 一个formdata
    }
  },
  components: {},
  created () {
  },
  mounted () {
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit()
    },
    uploadSectionFile(param) { // 自定义文件上传
      this.uploadForm.append('file', param.file)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList) // 删除触发
    },
    handleChange(file, fileList) { //  更改选择文件触发
      const isLt2M = file.size / 1024 / 1024 < 50
      if (!isLt2M) {
        this.$message.error('The size of the uploaded avatar picture cannot exceed 50MB!')
      }
      this.uploadForm.append('file', file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`The current limit of 5 files selected, this time selected ${files.length} documents，A total of chose ${files.length + fileList.length} documents`)
    },
    fun_selectPrototypeValue(type) {
      if (type === 'Y') {
        this.is_protoTypeMode_yes = true
      } else {
        this.is_protoTypeMode_yes = false
      }
    }
  },
  watch: {
    is_prototypeValue(value) {
      this.fun_selectPrototypeValue(value)
    }
  }
}
</script>
