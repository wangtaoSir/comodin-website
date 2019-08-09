<template>
  <div>
    <div class="contact">
      <div class="container">
        <div class="contact-header">
          <div class="header-content">
            <h1>Contact <span class="highlight-title">Us</span></h1>
            <p>
              Contact us about a large project, about setting up a dedicated team for on-going support or anything else. If you're considering a company-wide implementation, we'll be happy to arrange a call and tell you more about our enterprise services!
            </p>
            <p>
              If you want to place an order or request a quote, please <span class="highlight-des">browse our services</span> to get started.
              <!-- If you have questions about working for Konsus, or questions to your application, please see our career page. -->
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="contact">
      <div class="container">
        <div class="contact-main">
          <div class="call">
            <h2>Schedule a Call</h2>
            <p>
              Chat to one of our Client Department Managers who can provide you with more information, answer any questions you may have and find an effective solution for your design-related needs.
            </p>
            <el-button  type="primary" size="medium" class="get">Schedule a Call</el-button>

          </div>
          <div class="msg">
            <h2>Message Us</h2>
            <el-form :model="dynamicValidateForm" ref="dynamicValidateForm"  class="demo-dynamic">
              <p>E-mail</p>
              <el-form-item
                prop="email"
                :rules="[
                  { required: true, message: 'Please add an email', trigger: 'blur' },
                  { type: 'email', message: 'E-mail format is incorrect!', trigger: ['blur', 'change'] }
                ]"
              >
                <el-input v-model="dynamicValidateForm.email"></el-input>
              </el-form-item>
              <p>
                Phone (optional)
                {{ dynamicValidateForm.phoneAreaCode !=0 ? `+${dynamicValidateForm.phoneAreaCode}` : '' }}
              </p>
              <el-form-item>
                <el-input placeholder="Phone" v-model="dynamicValidateForm.phone" class="input-with-select">
                  <el-select v-model="dynamicValidateForm.phoneAreaCode" slot="prepend" placeholder="Area">
                    <el-option :label="`${item.en} +${item.tel}`" :value="item.tel" :key="i" v-for="(item, i) in zone"></el-option>
                  </el-select>
                </el-input>
              </el-form-item>
              <p>Message</p>
              <el-form-item>
                <el-input v-model="dynamicValidateForm.description" type="textarea"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button  type="primary" size="medium" class="send" @click="addFeedback()">Send Message</el-button>
              </el-form-item>
              <el-form-item>
                <p class="tip">On average we reply within 3 hours</p>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import Zone from '@/utils/zone.js'
import { addFeedback } from '@/api/feedback'
// import { Message } from 'element-ui'

export default {
  data() {
    return {
      dynamicValidateForm: {
        email: '',
        phoneAreaCode: '',
        phone: '',
        description: ''
      },
      zone: Zone
    }
  },
  methods: {
    // selectfn () {
    //   console.log(this.dynamicValidateForm.phoneAreaCode)
    // },
    addFeedback () {
      this.$refs.dynamicValidateForm.validate((validate) => {
        // console.log(validate)
        if (validate) {
          return new Promise((resolve, reject) => {
            addFeedback(this.dynamicValidateForm).then(response => {
              // console.log(response)
              Message({
                message: 'Successfully sent, we will contact you as soon as possible.',
                type: 'success',
                duration: 5 * 1000
              })
              this.resetForm()
              resolve()
            }).catch(error => {
              reject(error)
            })
          })
        } else {
          $message({
            message: 'Please enter your email address!',
            type: 'error',
            duration: 5 * 1000
          })
        }
      })
    },
    resetForm () {
      this.dynamicValidateForm = {
        email: '',
        phoneAreaCode: '',
        phone: '',
        description: ''
      }
    }
  },
  watch: {
    // dynamicValidateForm: {
    //   handler(val, oldVal) {
    //     console.log(this.dynamicValidateForm.email)
    //   },
    //   deep: true
    // }
  }
}
</script>

<style lang="scss" scoped>
.highlight-title{
  color: rgb(0, 199, 255);
}
.highlight-des{
  color: #007bff;
}
.bgc-gray{
  background-color: rgb(242, 242, 242);
}

.get,
.send{
  height: 48px;
  margin: 10px ;
  line-height: 1.5;
  font-weight: 500;
  user-select: none;
  line-height: 1.5;
  font-size: 15px;
  // background-color: #fff;
  letter-spacing: 0.6px;
  font-family: Poppins, sans-serif;
}
.send{
  width: 100%;
  margin: 0;
}
.contact{
  .container {
    margin: 0 auto;
    max-width: 1200px;
    .contact-header{
      padding: 70px;
      // padding-left: 79px;
      // padding-top: 74px;
      // padding-bottom: 61px;
      position: relative;
    }
    // .header-content::before{
    //   display: block;
    //   width: 2px;
    //   height: 226px;
    //   background-color: #341bff;
    //   position: absolute;
    //   left: 0px;
    //   content: "";
    // }
    .header-content{
      h1{
        color: rgb(71, 84, 104);
        font-weight: normal;
        line-height: 50px;
        // margin-bottom: 20px;
        margin-top: 0;
        font-size: 50px;
        font-family: Roboto-Thin;
      }
      p{
        color: rgb(71, 84, 104);
        font-weight: 400;
        line-height: 26px;
        margin-bottom: 21px;
        font-size: 16px;
        letter-spacing: -0.4px;
      }
    }
    .contact-main{
      display: flex;
      justify-content: space-around;
      .call,
      .msg{
        flex: 1;
        padding: 40px 60px 40px 70px;
        .el-input-group__prepend .el-select{
          width: 160px;
        }
        h2{
          color: rgb(71, 84, 104);
          font-size: 17px;
          font-weight: 300;
          line-height: 26px;
          margin-bottom: 25px;
          position: relative;
          padding-top: 32px;
          // padding-top: 0;
        }
        h2::before{
          content: "";
          position: absolute;
          top: 0px;
          left: 0px;
          display: block;
          width: 18px;
          height: 18px;
          background-size: cover;
          background-repeat: no-repeat;
          background-color: red;
        }
        p{
          color: rgb(138, 148, 166);
          font-size: 12px;
          font-weight: 500;
          line-height: 18px;
          margin-bottom: 4px;
          font-family: Poppins, sans-serif;
        }
      }
      .call{
        p{
          width: 340px;
          color: rgb(138, 148, 166);
          font-size: 17px;
          font-weight: 300;
          line-height: 26px;
        }
        h2::before{
          background: url(../../assets/contact/phone.png);
        }
      }
      .msg{
        h2::before{
          background: url(../../assets/contact/message.png);
          background-position: 0 1px;
        }
        .tip{
          color: rgb(91, 94, 109);
          font-size: 15px;
          font-weight: 500;
          line-height: 30px;
          margin: 0;
        }
      }
    }
  }
}
</style>
