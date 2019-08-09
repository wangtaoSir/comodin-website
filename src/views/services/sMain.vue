<template>
  <div class="serv-zvc">
    <div class="serv-sidebar"></div>
    <div class="serv-main">
        <div class="BoxContentWrapp">
          <div>
            <h1 class="screenHeader">Please describe your project</h1>
            <div class="project_details">
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                <inputName ref="inputNameModeObject"></inputName>
                <selectProjectType ref="selectProjectTypeModeObject"></selectProjectType>
                <selectProtoType ref="selectProtoTypeModeObject"></selectProtoType>
                <!-- <selectStoryboard></selectStoryboard>
                <selectVisualIdentity></selectVisualIdentity>
                <selectBackendPreferences></selectBackendPreferences> -->
                 <!-- <textDescription></textDescription> -->
                <el-button type="primary" style="width: 100%;" @click="fun_submitAction('ruleForm')">submit</el-button>
              </el-form>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import inputName from '@/views/services/inputName'
import selectProjectType from '@/views/services/selectProjectType'
import selectProtoType from '@/views/services/selectUpload/selectProtoType'
import selectStoryboard from '@/views/services/selectUpload/selectStoryboard'
import selectVisualIdentity from '@/views/services/selectUpload/selectVisualIdentity'
import selectBackendPreferences from '@/views/services/selectUpload/selectBackendPreferences'
import textDescription from '@/views/services/textDescription'
import '@/styles/selectServicesMode.scss'
import {submitProjectDatail} from '@/api/feedback'
export default {
  name: 'sMain',
  data() {
    return {
      ruleForm: {
        userName: '',
        userContact: '291249395@qq.com', // 用户联系方式
        type: '', // 项目类型*
        sketchLinkResource: '', // 草图,link资源
        sketchFileResource: '', // 草图,file资源
        prototypeLinkResource: '', // 原型,link资源
        prototypeFileResource: '', // 原型,file资源
        existServiceContent: '', // 是否有现有的服务，内容说明
        designLinkResource: '', // 设计,link资源
        designFileResource: '', // 设计,file资源
        containSketch: '', // 是否包含草图【Y-有草图】【N-没有草图】*
        containPrototype: '', // 是否包含原型【Y-有原型】【N-没有原型
        containExistService: '', // 是否有现有的服务【Y-有现有的服务】【N-没有现有的服务】
        containDesign: '', // 是否包含内容/设计/视觉标识【Y-有内容】【N-没有内容】
        productProblem: '' // 描述你想要解决的产品、业务或问题。【Y-有内容】【N-没有内容
      },
      rules: {
        userName: [
          { required: true, message: 'Please enter thename', trigger: 'blur' },
          { min: 3, max: 10, message: 'The length is between 3 and 10 characters', trigger: 'blur' }
        ],
      }
    }
  },
  components: {
    inputName,
    selectProjectType,
    selectProtoType,
    selectStoryboard,
    selectVisualIdentity,
    selectBackendPreferences,
    textDescription
  },
  created () {
  },
  mounted () {
  },
  methods: {
    fun_submitAction(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!')
        } else {
          // console.log('error submit!!')
          return false
        }
      })
      this.ruleForm.userName = this.$refs.inputNameModeObject.userName
      this.ruleForm.type = localStorage.getItem('selectProjectTypeValue')
      if (localStorage.getItem('selectProjectTypeValue_2') !== 'null') {
        this.ruleForm.type += ',' + localStorage.getItem('selectProjectTypeValue_2')
      }
      if (localStorage.getItem('selectProjectTypeValue_3') !== 'null') {
        this.ruleForm.type += ',' + localStorage.getItem('selectProjectTypeValue_3')
      }
      this.ruleForm.containPrototype = this.$refs.selectProtoTypeModeObject.is_prototypeValue
      this.ruleForm.prototypeLinkResource = this.$refs.selectProtoTypeModeObject.sketchLinkResource
      this.ruleForm.prototypeFileResource = this.$refs.selectProtoTypeModeObject.uploadForm
      submitProjectDatail(this.ruleForm).then(response => {
        localStorage.setItem('selectProjectTypeValue', null)
        localStorage.setItem('selectProjectTypeValue_2', null)
        localStorage.setItem('selectProjectTypeValue_3', null)
      }, () => {
        localStorage.setItem('selectProjectTypeValue', null)
        localStorage.setItem('selectProjectTypeValue_2', null)
        localStorage.setItem('selectProjectTypeValue_3', null)
      })
    }
  }
}
</script>
