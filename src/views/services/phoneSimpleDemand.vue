<template>
    <div class="bigPicture font-sty">
      <el-form :label-position="labelPosition" :model="form" :rules="rules" ref="ruleForm">
        <el-row :gutter="24">
            <el-col :span="24">
                <el-form-item label="YOUR NAME" prop="userName">
                    <el-input v-model="form.userName" autocomplete="off" maxlength="200"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="24">
                <el-form-item label="COMPANY NAME" prop="companyName">
                    <el-input v-model="form.companyName" autocomplete="off" maxlength="200"></el-input>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="24">
                <el-form-item label="EMAIL" prop="userContact">
                    <el-input v-model="form.userContact" autocomplete="off" maxlength="100"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="24">
                <el-form-item label="PRODUCT TYPE">
                    <el-select v-model="form.type" placeholder="Please select a" style="width:100%;">
                        <el-option
                        v-for="item in selectProjectData.typeOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>
             <!-- <el-col :span="24">
                <el-form-item label="BUDGET">
                    <el-select v-model="form.budget" placeholder="Please select a" style="width:100%;">
                        <el-option
                        v-for="item in selectProjectData.budgetOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col> -->
        </el-row>
        <el-row :gutter="24">
             <el-col :span="24">
                <el-form-item label="COMPLETED PROTOTYPE?">
                    <el-select v-model="form.containPrototype" placeholder="Please select a" style="width:100%;">
                        <el-option
                        v-for="item in selectProjectData.options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="24">
                <el-form-item label="COMPLETED WIREFRAMES?">
                    <el-select v-model="form.containSketch" placeholder="Please select a" style="width:100%;">
                        <el-option
                        v-for="item in selectProjectData.options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>
        </el-row>
        <el-row :gutter="24">
             <el-col :span="24">
                 <el-form-item label="NAME SOME SIMILAR PRODUCTS/COMPANIES:">
                    <el-input type="textarea" style="width:100%;" v-model="form.productCase"></el-input>
                </el-form-item>
             </el-col>
        </el-row>
        <el-row :gutter="24">
             <el-col :span="24">
                 <el-form-item label="DESCRIBE YOUR PRODUCT AND UPLOAD/LINK ADDITIONAL INFO:">
                    <el-input type="textarea" style="width:100%;" v-model="form.productProblem"></el-input>
                   <el-row type="flex" class="linkButton_bat">
                       <el-col :span="2" :offset="1">
                           <div style="margin-top: 11px;">
                             <i class="pro-link"></i>
                           </div>
                        </el-col>
                       <el-col :span="20">
                           <div class="grid-content">
                               <span class="fon-bu_c">Browse</span>
                               <!-- <i class="divider_c"></i>
                               <span class="fon-bu_c" @click="fun_enterLinkManger">Link</span> -->
                               <!-- <i class="divider_c"></i>
                               <div class="drop_files_bat">Drop Files Here</div> -->
                           </div>
                        </el-col>
                   </el-row>
                   <el-upload action="#" ref="upload" list-type="text" :auto-upload="false" :limit="5" multiple
                    :on-exceed="handleExceed"
                    :http-request="uploadSectionFile">
                    <i class="el-icon-plus uplo-icon-postion"></i>
                </el-upload>
                <div class="enterLink_bat" v-show="isEnterLink">
                   <span class="link_title">Enter Link:</span>
                   <el-input class="link_input" v-model="enterLinkValue" size="mini"></el-input>
                   <span class="link_bu" @click="fun_addLink">Save</span>
                </div>
                </el-form-item>
             </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
            <div class="ndaTitl_bat" style="padding-left: 0px;margin-bottom: 24px;">
              <div title="confidentiality
We are committed to protecting any personal informa-tion
that you provide us. Wewill never sell.share.or
rent any information provided here with third parties
We are happy to sign and NDA if necessary. Feel feel free to
use our standard template below;" noselect>
                <div style="font-size: 14px;margin-bottom: 8px;">confidentiality</div>
                <div style="font-size: 14px;">We are committed to protecting any personal informa...</div>
              </div>
              <div style="font-size: 14px;" class="ndadowload_But noselect" @click="fun_dowloadNDAFile"><a>DOWLOAD NDA</a></div>
            </div>
            <el-button type="primary" style="width: 100%;height: 40px;" @click="submitAdd('ruleForm')" :loading="fullscreenLoading">CONTACT US NOW</el-button>
         </div>
    </div>
</template>
<script>
import {submitSimpleDatail2} from '@/api/feedback'
export default {
  name: 'phoneSimpleDemand',
  data: function() {
    return {
      DOWN_API: `${this.DOWN_API}/contract/Capital%20East%20International%20Ltd-TemplateFeb2019.pdf`,
      isDialogMode: true,
      fullscreenLoading: false,
      dialogFormVisible: false,
      formLabelWidth: '80px',
      labelPosition: 'top',
      isEnterLink: false,
      enterLinkValue: '',
      ndaTitle: 'CONFIDENTIALITY We are committed to protecting any personal informa- tion that you provide us. Wewill never sell.share.or rent any information provided here with third partiesWe are happy to sign and NDA if necessary. Feel feel free to use our standard template below; DOWLOAD NDA',
      form: {
        userName: '', // 用户名
        companyName: '', // 公司名称
        userContact: '', // 联系方式
        type: '', // 项目类型
        budget: '', // 价位
        containPrototype: '', // 是否有原形
        containSketch: '', // 是否有草图
        productCase: '', // 描述案例
        productProblem: '', // 描述产品
        sketchFileResource: [] // 上传文件
      },
      uploadForm: new FormData(), // 一个formdata
      submitOfNumber: 0,
      selectProjectData: {
        typeOptions: [{
          value: 'Mobile app',
          label: 'Mobile app'
        }, {
          value: 'Web platform',
          label: 'Web platform'
        }, {
          value: 'Enterprise app/software',
          label: 'Enterprise app/software'
        }, {
          value: 'Wechat program',
          label: 'Wechat program'
        }],
        budgetOptions: [{
          value: '$50000 - $100000',
          label: '$50000 - $100000'
        }, {
          value: '$100000 - $150000',
          label: '$100000 - $150000'
        }, {
          value: '$150000 - $200000',
          label: '$150000 - $200000'
        }, {
          value: '$200000 - $250000',
          label: '$200000 - $250000'
        }],
        options: [{
          value: 'Y',
          label: 'YES'
        }, {
          value: 'N',
          label: 'NO'
        }]
      },
      rules: {
        userName: [
          { required: true, message: 'Please enter your name/company name', trigger: 'blur' },
          { min: 1, max: 200, message: 'The length is between 1 and 200 characters', trigger: 'blur' }
        ],
        companyName: [
          { min: 1, max: 200, message: 'The length is between 1 and 200 characters', trigger: 'blur' }
        ],
        userContact: [
          { required: true, message: 'Please enter your EMAIL', trigger: 'blur' },
          { type: 'email', message: 'Please enter the correct email address', trigger: ['blur', 'change'] }
        ]
      },
      qEditorOptions: [
      ]
    }
  },
  components: {},
  created () {
    this.form.type = this.$route.query.type
  },
  methods: {
    fun_dowloadNDAFile() {
      window.open(this.DOWN_API, 'target')
    },
    handleChange(file, fileList) { //  更改选择文件触发
      const isLt2M = file.size / 1024 / 1024 < 50
      if (!isLt2M) {
        this.$message.error('The size of the uploaded avatar picture cannot exceed 50MB!')
      }
    },
    uploadSectionFile(file) { // 覆盖插件提交事件,把文件对象放入数组中
    //   this.form.sketchFileResource.push(file.file)
    //   fileUpload(file)
      this.uploadForm.append('sketchFileResource', file.file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`The current limit of 5 files selected, this time selected ${files.length} documents，A total of chose ${files.length + fileList.length} documents`)
    },
    openChapterDialog() {
      this.dialogFormVisible = true
    },
    handleClose(done) {
      for (const key in this.form) {
        this.form[key] = ''
      }
      this.$refs.upload.clearFiles()
      this.resetForm('ruleForm')
      done()
    },
    submitAdd(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$refs.upload.submit()
          var param = this.uploadForm
          param.append('userName', this.form.userName)
          param.append('companyName', this.form.companyName)
          param.append('userContact', this.form.userContact)
          param.append('type', this.form.type)
          param.append('containPrototype', this.form.containPrototype)
          param.append('containSketch', this.form.containSketch)
          param.append('productCase', this.form.productCase)
          param.append('budget', this.form.budget)
          param.append('productProblem', this.form.productProblem)
          this.submitOfNumber = this.submitOfNumber + 1
          this.fullscreenLoading = true
          submitSimpleDatail2(param).then((result) => {
            this.uploadForm = new FormData()
            this.$message({
              message: 'Submitted successfully',
              type: 'success'
            })
            for (const key in this.form) {
              this.form[key] = ''
            }
            this.fullscreenLoading = false
            this.submitOfNumber = 0
            this.$refs.upload.clearFiles()
            this.dialogFormVisible = false
            this.$router.go(-1)
          }).catch((err) => {
            console.info(err)
            this.uploadForm = new FormData()
            this.fullscreenLoading = false
            if (this.submitOfNumber <= 3) {
              this.submitAdd('ruleForm')
            }
          })
        } else {
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    fun_enterLinkManger() {
      if (this.isEnterLink === true) {
        this.isEnterLink = false
      } else {
        this.isEnterLink = true
      }
    },
    fun_addLink() {
      this.isEnterLink = false
      this.form.productProblem = this.form.productProblem + this.enterLinkValue
      this.enterLinkValue = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.font-sty .el-form-item__label{
    color: #5c9ce4;
    font-weight: bold;
    font-size: 12px;
}
.font-sty{
    padding: 4% !important;
}
.font-sty .el-textarea__inner{
    min-height: 54px;
    max-height: 54px;
}
.el-dialog__header{
    padding: 0px !important;
}
.el-dialog__body{
    // padding: 30px 35px !important;
    // padding-bottom: 0px !important;
    padding: 26px 29px !important;
    padding-bottom: 26px !important;
}
.el-dialog__footer{
    padding: 10px 50px 20px !important;
    text-align: left;
}
.ql-snow .ql-stroke{
    fill: none !important;
}
.pro-link{
    width: 14px;
    height: 14px;
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0px 0px;
    background-image: url(../../assets/feedback/link.png);
    cursor: pointer;
}
.linkButton_bat{
    height: 39px;
    border: 1px solid #c0c4cc;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-top: -1px;
    background-color: #f1f4fd;
}
.grid-content{
    height: 27px;
    margin: 5px 0px;
    background-color: #e1e8f0;
    display:flex;
    padding: 2px 0;
    padding-bottom: 4px;
    .fon-bu_c{
        cursor: pointer;
    }
    .fon-bu_c,.divider_c{
      display:block;
      line-height: 21px;
      margin-left: 17px;
    }
    .divider_c{
      display: block;
      border-left: 1px solid #908d8d;
      height: 13px;
      margin-top: 4px;
    }
    .drop_files_bat{
       border: 1px dashed #908d8d;
        margin-top: 2px;
        margin-left: 17px;
        line-height: 19px;
        padding: 0 12px;
    }
}
.uplo-icon-postion{
    width: 63px;
    height: 34px;
    position: absolute;
    top: 55px;
    left: 51px;
    opacity: 0;
}
.font-sty .el-form-item__content{
   line-height: inherit !important;
}
.enterLink_bat{
    width: 273px;
    height: 32px;
    display: flex;
    background-color: #fff;
    border: 1px solid #d2cece;
    border-radius: 4px;
    box-shadow: 0px 0px 5px #ddd;
    position:absolute;
    top:10%;
    left:10px;
    padding-top: 2px;
    padding-left: 10px;
    padding-bottom: 2px;
    font-size: 12px;
    .link_title{
      line-height: 28px;
      margin-right: 12px;
    }
    .link_input{
      width: 129px;
      margin-right: 12px;
      height: 22px;
      margin-top: 2px;
      .el-input__inner{
        height: 22px;
      }
    }
    .link_bu{
      line-height: 28px;
      color: #5c9ce4;
      cursor: pointer;
    }
}
.font-sty{
  .el-input__icon{
    line-height: 32px;
 }
 .el-input__inner{
    height: 32px;
    line-height: 32px;
  }
  .el-form-item__label{
    line-height: 19px;
  }
  .el-dialog{
    // margin-left: 30vh;
    -webkit-transform-origin-x: 0;
    transform: scale(0.9);
    width: 459px;
  }
}
.ndaTitl_bat{
  margin-top: -3px;
  position: relative;
}
.ndaTitl{
  -webkit-transform-origin-x: 0;
  -webkit-transform: scale(0.8);
  transform: scale(0.8);
}
.ndadowload_But{
  color: rgb(64, 158, 255);
  cursor: pointer;
  position: absolute;
  right: -10px;
  top: 0px;
  -webkit-transform-origin-x: 0;
  transform: scale(0.8);
}
.ndadowload_But:active{
  color: #097ef7;
}
.font-sty .el-form-item {
    margin-bottom: 30px;
}
.noselect {
-webkit-touch-callout: none; /* iOS Safari */
-webkit-user-select: none; /* Chrome/Safari/Opera */
-khtml-user-select: none; /* Konqueror */
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* Internet Explorer/Edge */
user-select: none; /* Non-prefixed version, currently
not supported by any browser */
}
</style>
