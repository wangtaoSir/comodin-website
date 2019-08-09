<template>
 <div class="jump">
    <div class="feedback_minimized" v-show="isFeedback" @click="serverBatManager('open')">
      <div class="feedback_minimized_label">
        <!-- <div class="feedback_minimized_label_text"></div> -->
      </div>
    </div>
    <div class="rounded_corners" v-show="isCorners">
      <a class="feedback_open_close_phone" @click="serverBatManager('close')">
         <i class="el-icon-circle-close"></i>
      </a>
      <div class="state-1" v-show="isInputName" style="padding-left: 30px !important;">
        <div class="st1-ti">Hi! Lets get started.</div>
        <div class="st1-ti">What is your name?</div>
        <div style="margin-top:15px;">
           <el-input placeholder="Your name" size="small" style="width:176px;" v-model="userName" @blur="serverBatManager('selectServer')" @keyup.enter.native="serverBatManager('selectServer')"></el-input>
        </div>
      </div>

      <div class="state-1" v-show="isSelectServer">
        <div class="st1-ti">Hi! {{showName}}. What can </div>
        <div class="st1-ti">we help you make?</div>
        <div style="margin-top:15px;">
           <el-row :gutter="24">
             <el-col :span="12">
               <div class="selServBut_area">
                  <div class="selServBut"><span class="tra-fo noselect"> MOBILE APP</span></div>
                  <div class="but-arr"><i class="el-icon-arrow-right"></i></div>
               </div>
             </el-col>
             <el-col :span="12">
               <div class="selServBut_area">
                  <div class="selServBut"><span class="tra-fo noselect">WEB PLATFORM</span></div>
                  <div class="but-arr"><i class="el-icon-arrow-right"></i></div>
               </div>
              </el-col>
           </el-row>
           <el-row :gutter="24" style="margin-top: 10px;">
             <el-col :span="12">
               <div class="selServBut_area">
                  <div class="selServBut"><span class="tra-fo noselect">ENTERPRISE SOFTWARE</span></div>
                  <div class="but-arr"><i class="el-icon-arrow-right"></i></div>
               </div>
             </el-col>
             <el-col :span="12">
               <div class="selServBut_area">
                  <div class="selServBut"><span class="tra-fo noselect">WECHAT PROGRAM</span></div>
                  <div class="but-arr"><i class="el-icon-arrow-right"></i></div>
               </div>
              </el-col>
           </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'outSercices',
  data() {
    return {
      userName: '',
      showName: '',
      isFeedback: true,
      isCorners: false,
      isInputName: false,
      isSelectServer: false
    }
  },
  components: {},
  created () {
  },
  methods: {
    serverBatManager(type) {
      if (type === 'open') {
        this.isFeedback = false
        this.isCorners = true
        this.isInputName = true
        this.isSelectServer = false
      } else if (type === 'close') {
        this.isFeedback = true
        this.isCorners = false
        this.userName = ''
      } else if (type === 'selectServer') {
        if (this.userName !== '') {
          this.isInputName = false
          this.isSelectServer = true
        }
      }
    }
  },
  watch: {
    userName: function (val) {
      this.showName = val
      if (val.length > 10) {
        this.showName = val.substring(0, 9) + '...'
      }
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.jump{
    position: fixed;
    bottom: 0;
    right: 0;
    width: 80px;
    height: auto;
    font-size: 12px !important;
    z-index: 2147483640;
    border-radius: 5px 5px 0 0;
    line-height: normal;
    text-transform: initial !important;
    letter-spacing: normal !important;
    div{
      border: 0;
      outline: 0;
      font-size: 100%;
      vertical-align: baseline;
      background: transparent;
      margin: 0;
      padding: 0;
    }
    a{
      border: 0;
      outline: 0;
      vertical-align: baseline;
      background: transparent;
      margin: 0;
      padding: 0;
      float: none !important;
    }
    .feedback_minimized{
        position: fixed;
        bottom: 399px;
        right: 0;
        height: 60px;
        opacity: .96;
        direction: ltr !important;
    }
    .feedback_minimized:hover{
        right: 1px;
    }
    .feedback_minimized_label{
      width: 31px;
      height: 95px;
      position: relative;
      right: -1px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 0px 0px;
      background-image: url(../../assets/feedback/ic_feedback1.png);
      cursor: pointer;
    }
    .rounded_corners{
      width: 239px;
      right: 30px;
      bottom: 299px;
      opacity: 1;
      pointer-events: all;
      position: absolute;
      z-index: 10;
      background: #ffffff;
      box-shadow: 0 6px 100px 0 rgba(0,0,0,.35)!important;
      border-radius: 3px;
      .feedback_open_close_phone{
        width: 27px;
        height: 27px;
        position: absolute;
        top: -14px;
        right: 13px;
        display: block;
        font-size: 26px;
        text-align: center;
        cursor: pointer;
        z-index: 11;
        border-radius: 50%;
        text-decoration: none;
        .icon-x{
          line-height: 27px !important;
          display: inline-block !important;
          direction: ltr !important;
          text-decoration: none !important;
          speak: none !important;
          font-style: normal !important;
          font-weight: normal !important;
          font-variant: normal !important;
          text-transform: none !important;
          overflow-wrap: normal !important;
          word-break: normal !important;
          word-wrap: normal !important;
          white-space: nowrap !important;
          border: 0;
          outline: 0;
          font-size: 100%;
          vertical-align: baseline;
          background: transparent;
          margin: 0;
          padding: 0;
          float: none !important;
        }
      }
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
}
.state-1{
  width: 100%;
  padding: 25px 10px 25px 10px !important;
  .st1-ti{
    letter-spacing: 1px;
    display: block;
    font-size: 18px;
  }
  .selServBut_area{
    display: flex;
    cursor: pointer;
  }
  .selServBut{
    width: 78px;
    height: 27px;
    background-color: #16a9ff;
    color: #ffffff;
    font-size: 10px;
    padding-left: 7px;
    border-top-left-radius: 23px;
    border-bottom-left-radius: 23px;
  }
  .but-arr{
    background-color: #168fe3;
    color: #fff;
    font-size: 11px;
    line-height: 27px;
    border-top-right-radius: 23px;
    border-bottom-right-radius: 23px;
    width: 20px;
    text-align: center;
    height: 27px;
  }
  .tra-fo{
    -webkit-transform: scale(0.8);
    display: inline-block;
  }
  .el-row{
    margin-left: 0px !important;
    margin-right: 0px!important;
  }
  .el-col-12{
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
}
.selServBut:hover, .selServBut:focus {
    background: #25abf9db;
    border-color: #66b1ff;
    color: #fff;
}
</style>
