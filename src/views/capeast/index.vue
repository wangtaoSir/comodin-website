<template>
  <div>
    <!-- <div class="bgc">
      <div class="bgc-yellow"></div>
      <div class="bgc-blue"></div>
    </div> -->
    <div class="home-main container-home" :class="theme" v-bind:style="{backgroundImage:'url(' + banner.backgroundImg + ')'}">
    <!-- <div class="home-main"> -->
      <div class="container container-copywriting">
        <div class="copywriting">
          <div class="item-left">
            <h1 class="container-title" :class="`font-title-${theme}`">
              <span style="display: block;">Cash Process Solution</span>
              <span style="display: block;">Intelligent Logistics Technology</span>
              <span :class="`font-title2-${theme}`">Real-time Tracking and Monitoring</span>
            </h1>
            <p class="banner-desc" :class="`font-desc-${theme}`">
              <!-- {{banner[theme].desc}} -->
              Security and smart to delivery the services and get satisfaction from your customers
            </p>
            <el-button plain type="primary" size="medium" class="get" @click="scrollTo('container-inputcontact')">Contact us</el-button>
          </div>
          <div class="item-right home-img_styl">
            <img :src="banner.homeImg" alt height="100%">
          </div>
        </div>
      </div>
    </div>
    <div class="container-porject">
      <div class="container-carousel container-additionga">
        <div class="container">
          <h2 class="conten_title" style="margin-top: 4px;">FEATURES</h2>
          <div class="bot_sol"></div>
          <div class="container-contact pad_bot">
            <div class="contact-info" v-for="item in worksConten" :key="item.index">
              <div class="works_icon_styl" v-bind:style="{backgroundImage:'url(' + item.icon + ')'}"></div>
              <h1>{{item.title}}</h1>
              <p>{{item.conten}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-carousel container-additionga backg_color container-homeabout">
        <div class="container">
          <h2 class="conten_title paddin_top" style="padding-top: 0px;margin-top: 16px;">MOBILE PRODUCT</h2>
          <div class="bot_sol"></div>
          <div class="container-contact" style="padding-top: 25px;">
            <div class="contact-info">
              <div class="advanceFeaturesLeft" v-for="item in advanceFeaturesLeft" :key="item.index">
                <div class="conten_sty">
                  <h1 style="text-align:right;">{{item.title}}</h1>
                  <p style="text-align:right;" v-for="text in item.conten" :key="text.index">{{text}}</p>
                </div>
                <div class="advanceFeatures_icon_styl" v-bind:style="{backgroundImage:'url(' + item.icon + ')'}"></div>
              </div>
            </div>
            <div class="contact-img" style="margin-top: -19px;"><img :src="banner.advance_img"/></div>
            <div class="contact-info">
              <div class="advanceFeaturesRight" v-for="item in advanceFeaturesRight" :key="item.index">
                <div class="advanceFeatures_icon_styl" v-bind:style="{backgroundImage:'url(' + item.icon + ')'}"></div>
                <div class="conten_sty">
                  <h1>{{item.title}}</h1>
                  <p v-for="text in item.conten" :key="text.index">{{text}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="container-carousel container-pricing">
      <div class="container" style="padding-right:0px;">
        <div class="contact-info easy_le paddin_top">
           <h2 class="easyto">
             <p class="fon25">FUNCTIONALITY</p>
            </h2>
            <div class="bot_sol"></div>
          <div style="margin-top: 68px;">
          <!-- <p class="easy_ti">{{operatebackground_title}}</p> -->
           <p v-for="item in operatebackground_conten" :key="item.index">
             <ul class="easy_con_ul">
               <li class="easy_con_ti">{{item.title}}</li>
               <li class="easy_con_tex" v-for="textli in item.conten" :key="textli.index">
                 {{textli}}
               </li>
             </ul>
           </p>
          </div>
        </div>
        <div class="contact-info easy_ri">
          <img :src="banner.operatebackground" class="oper_back_1"/>
          <img :src="banner.operatebackground_2" class="oper_back_2"/>
        </div>
      </div>
    </div>
    <div class="container-carousel container-additionga backg_color container-inputcontact">
        <div class="container">
          <h2 class="conten_title" style="padding-top: 0px;margin-top: 16px;">CONTACT</h2>
          <div class="bot_sol"></div>
          <div class="container-contact" style="padding-top: 25px;text-align:center;margin-top: 20px;">
            <el-input v-model="form.email" placeholder="Email" class="input_email" maxlength="50" @blur="verificationEmail"></el-input>
            <el-button type="primary" round size="mini" class="button_email" :loading="subscribeLoading" @click="fun_submitEmail">Subscribe</el-button>
          </div>
          <div style="padding-top: 25px;margin-top: 20px;">
            <div style="display:flex;" class="botto_Navigation">
              <div class="logo">
                <img style="height:auto;" :src="banner.logo"  alt="CAPEAST" class="noselect" onclick="return false">
              </div>
              <el-menu class="el-menu-demo bottm_menu" mode="horizontal" text-color="#7f7d7e" active-text-color="#7f7d7e" disabled>
                <el-menu-item index="/services" @click="scrollTo('container-home')">Home</el-menu-item>
                <el-menu-item index="/services" @click="scrollTo('container-porject')">Features</el-menu-item>
                <el-menu-item index="/about"  @click="scrollTo('container-homeabout')">Mobile Product</el-menu-item>
                <el-menu-item index="/about"  @click="scrollTo('container-pricing')">Functionality</el-menu-item>
                <el-menu-item index="/about"  @click="scrollTo('container-inputcontact')">Contact</el-menu-item>
              </el-menu>
            </div>
            <div>
              <span class="bottom_font">2016 COMODIN. All Rights Reserved</span>
            </div>
          </div>
        </div>
    </div>
    <br/>
    <dialogPay ref="dialPayObj"/>
  </div>
</template>

<script>
import Foot from './footer'
import Contact from './contact'
import About from './about'
import dialogPay from './dialogPay'
import simpleDemand from '@/views/services/simpleDemand'
import confidentiality from '@/views/capeast/confidentiality'
import Services from '@/utils/additionaServices'
import '@/styles/iphoneStyl.scss'
// import { earnest } from '@/api/feedback'

export default {
  components: {
    Foot,
    Contact,
    About,
    simpleDemand,
    confidentiality,
    dialogPay,
    // slider,
    // slideritem
  },
  data () {
    return {
      DOWN_API: `${this.DOWN_API}/contract/Capital%20East%20International%20Ltd-TemplateFeb2019.pdf`,
      options: { // Slider configuration [obj]
        currentPage: 0,
        tracking: false,
        thresholdDistance: 100,
        thresholdTime: 300,
        // infinite: 3,
        slidesToScroll: 1,
        loop: true,
        loopedSlides: 3,
        centeredSlides: false,
        itemAnimation: true,
        autoplay: 5000,
        timingFunction: 'ease',
        preventDocumentMove: true,
      },
      form: {
        email: ''
      },
      subscribeLoading: false,
      worksConten: [
        {
          title: 'Security',
          icon: require('../../assets/comodin/03-01.png'),
          conten: 'Trackable for whole cash process Safty management with digit locker Real-time monitoring ATM, Smartsafe Box etc Electronic fence'
        },
        {
          title: 'Intelligent',
          icon: require('../../assets/comodin/03-02.png'),
          conten: 'Smart reconciliation Optimized routes for fleet Monitor and improve driving habits'
        },
        {
          title: 'Easy',
          icon: require('../../assets/comodin/03-03.png'),
          conten: 'Started to use quickly Easy to integration with printer, scanner, digital locker etc Adapt to harsh internet connection'
        }
      ],
      advanceFeaturesLeft: [
        {
          title: 'Safety Management',
          conten: [
            'Data encrypt before transfer',
            'in internet. Daemon keep working to',
            'protect and validate customer information.'
          ],
          icon: require('../../assets/comodin/04-01.png'),
        },
        {
          title: 'High Compatibility',
          conten: [
            'Easy to integrate with exist system.',
            'Compatible with variety PDAs, Printers, Digital locker etc'
          ],
          icon: require('../../assets/comodin/04-02.png'),
        },
        {
          title: 'Synchronize Information',
          conten: [
            'Real-time synchronize data with server',
            'reflect customers\' requirement instantly',
          ],
          icon: require('../../assets/comodin/04-03.png'),
        }
      ],
      advanceFeaturesRight: [
        {
          title: 'Electronic Fence',
          conten: [
            'Location tracking and monitoring for the service vechicle'
          ],
          icon: require('../../assets/comodin/04-05.png'),
        },
        {
          title: 'Evidence',
          conten: [
            'Photo, video, coordinate, signature etc for each services',
          ],
          icon: require('../../assets/comodin/04-06.png'),
        },
        {
          title: 'More Efficiency',
          conten: [
            'Save 20% effort for each service',
          ],
          icon: require('../../assets/comodin/04-07.png'),
        }
      ],
      operatebackground_title: 'We can see the details of the service points by clicking on them, address,telephone, etc.Color code of service points:',
      operatebackground_conten: [
        {
          title: 'Service Module',
          conten: [
            'Tracking and management all services information'
          ]
        },
        {
          title: 'Monitoring Module',
          conten: [
            'Real-time monitoring all vehicles services status',
          ]
        },
        {
          title: 'Customer Module',
          conten: [
            'Management and statistics the customer infomation and services'
          ]
        },
        {
          title: 'Vechile Module',
          conten: [
            'Vehicle status and maintence, driving habits and improvement'
          ]
        },
        {
          title: 'Personnel Module',
          conten: [
            'Restrict with privileges level. Share employee cross different company.'
          ]
        }
      ],
      banner: {
        logo: require('../../assets/comodin/logo.png'),
        homeImg: require('../../assets/comodin/home_1.png'),
        advance_img: require('../../assets/comodin/04-04.png'),
        operatebackground: require('../../assets/comodin/05.jpg'),
        operatebackground_2: require('../../assets/comodin/05_02.jpg'),
        backgroundImg: require('../../assets/comodin/background-15.png')

      },
      services: Services,
      theme: 'default',
      dialogImg: '',
    }
  },
  methods: {
    scrollTo (el) {
      this.islalrYK = false
      this.$router.replace({name: 'Home'})
      if (document.getElementsByClassName(el)[0] === undefined) {
        setTimeout(() => {
          window.scrollTo(0, document.getElementsByClassName(el)[0].offsetTop - 64)
        }, 1000)
      } else {
        window.scrollTo(0, document.getElementsByClassName(el)[0].offsetTop - 64)
      }
    },
    fun_submitEmail() {
      var reg = new RegExp('^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$')
      if (!reg.test(this.form.email)) {
        this.$message({
          message: 'Please enter the correct mailbox',
          type: 'warning',
          showClose: true,
          duration: 10 * 1000
        })
      } else {
        this.subscribeLoading = true
        // earnest()
        setTimeout(() => {
          this.subscribeLoading = false
          // this.dialogVisible = true
          this.$refs.dialPayObj.OrderNo = this.$refs.dialPayObj.randomString()
          this.$refs.dialPayObj.dialogVisible = true
        }, 2000)

        // this.$message({
        //   message: 'Successful delivery',
        //   type: 'success',
        //   showClose: true,
        //   duration: 10 * 1000
        // })
      }
    },
    verificationEmail() {
      var reg = new RegExp('^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$')
      if (this.form.email !== '') {
        if (!reg.test(this.form.email)) {
          this.$message({
            message: 'Please enter the correct mailbox',
            type: 'warning',
            showClose: true,
            duration: 10 * 1000
          })
        }
      }
    }
  }
}
</script>
<style lang="scss">
body{
  padding: 0px !important;
  padding-right: 0px!important;
  overflow: auto !important;
}
.input_email{
  max-width: 400px;
  width: 50%;
  margin-left:auto;
  .el-input__inner{
    border-radius: 61px;
    height:45px;
  }
}
.button_email{
  width: 103px;
  margin-right: auto;
  margin-left: -116px;
  z-index: 9;
  height: 35px;
  margin-top: 5px;
}
</style>

<style lang="scss" scoped>
$bgcolor:#00adef;
*{
  box-sizing: border-box;
}
.logo{
    width: 128px;
    padding-top: 12px;
}
.pad-bot{
  padding-bottom: 22px;
}
.backg_color{
 background-color: #f8f9fb !important;
}
.home-img_styl{
  // padding-top: 40px;
  width: 34%;
  max-width: 408px;
  img{
    max-width: 100%;
    // height: 280px;
  }
}
.container-home{
}
.bot_sol{
  width: 60px;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 3px solid #00adef;
}
.works_icon_styl{
  width:60px;
  height:50px;
  margin: auto;
  background: no-repeat center;
}
.contact-img{
  width: 275px;
  margin: 30px 0;
  margin-top: 0px;
  margin-top: -25px;
  img{
    width:100%;
  }
}
.advanceFeatures_icon_styl{
  width: 88px;
  height: 75px;
  margin: auto;
  background: no-repeat;
  background-size: cover;
  margin-top: -8px;
  background-position: 0px 0px;
}
.advanceFeatures_icon_styl:hover{
  background-position:0px -75px;
}
.easyto{
  color:#727a83;
  font-size: 36px;
  line-height: 26px;
  font-weight: normal;
  p{
    padding:0px;
    margin: 10px 0px;
    text-align: center;
  }
}
.easy_ti{
  color: #8a94a6;
  font-size: 15px;
}
.easy_con_ul{
  padding-left: 9%;
  margin-bottom: 26px;
}
.easy_con_ti{
  list-style: disc;
  color: #38bff2;
  font-size: 19px;
}
.easy_con_tex{
 color: #b4bbbf
}
.easy_con_tex,.easy_con_ti{
  margin-bottom: 5px;
}
.easy_le{
  width: 37%;
  padding-top: 19px;
  padding-bottom: 10px;
}
.easy_ri{
  width:63%;
  img{
    height:100%;
  }
}
img{
  width:100%;
}
.botto_Navigation{
  border-bottom: 1px solid #d4d3d3b0;
  margin-bottom: 18px;
}
.bottom_font{
  color: #9e9d9d;
  margin-top: 13px;
  margin-left: 12px;
  font-weight: bold;
  font-size: 12px;
}
.bottm_menu{
  margin-left: auto;
  margin-right: 11%;
  border-bottom: none;
  background-color: #fdfdfd00;
  li{
    border-bottom: 0 !important;
  }
}

.advanceFeaturesLeft{
  display: flex;
  text-align:right;
  margin-bottom: 20px;
  h1,p{
    text-align: right;
    margin-bottom: 0px !important;
    margin-left: 0px !important;
  }
  h1{
    margin-bottom: 5px !important;
  }
  .conten_sty{
    margin-right: 37px;
    h1,p{
      text-align:right;
      font-size: 1.25rem;
      color: #8a94a6;
    }
  }
}
.advanceFeaturesRight{
  display: flex;
  text-align:left;
  margin-bottom: 20px;
  height: 116.39px;
  h1,p{
    text-align: left !important;
    margin-bottom: 0px !important;
    margin-left: 0px !important;
  }
   h1{
    margin-bottom: 5px !important;
  }
  .conten_sty{
    margin-left: 37px;
  }
}
.oper_back_2{
  display:none;
}
//
//
//
//
//
//
//
.bgc{
  // margin-top: 64px;
  border-bottom: 28px solid #fffd54;

  z-index: -1;
  display: flex;
  position: absolute;
  width: 100%;
  .bgc-yellow{
    height: 416px;
    flex: 2;
    background-color: #368ef7;
  }
  .bgc-blue{
    height: 416px;
    flex: 1;
    background-color: #fffd54;
  }
}
.banner-img{
  height: 416px;
}
.default {
  background-color: $bgcolor;
}

.font-title-default{
  color: #ffffff;
  font-size: 51px;
  font-family: CenturyGothic;
  font-weight: normal;
  line-height: 60px;
}
.font-title2-default{
  color: #ffffff;
}
.font-desc-default{
  color: #ffffff;
}

.gray{
  background-color: #f2f2f2;
}
.font-title-gray{
  color: #686868;
}
.font-title2-gray{
  color: #686868;
}
.font-desc-gray{
  color: #262626;
}

.green{
  background-color: #41c489;
}
.font-title-green{
  color: #fff;
}
.font-title2-green{
  color: #fff;
}

.banner-desc{
  font-family: CenturyGothic;
  margin-top: 0px;
  font-size: 14px;
}
// .home-main{
// }
.get{
  height: 40px;
  width: 132px;
  margin: 10px ;
  margin-left: 0px;
  background-color: #72d384;
  color: #ffffff;
  border-color: #72d384;
  font-weight: 600;
  letter-spacing: 1px;
  border-radius: 20px;
  margin-top: 9%;
}
.get:hover,
.get:active,
.get:focus{
  color: #ffffff;
  background-color: #72d384;
}
.tip{
  color: rgb(138, 148, 166);
  font-size: 17px;
  font-weight: 400;
  line-height: 30px;
}
.container-copywriting {
  font-family: CenturyGothic;

  // height: 380px;
  // color: rgb(51, 51, 51);
  color: #ffffff;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 9px;
  padding-right: 9px;
  position: relative;
  font-weight: 300;
  font-size: 15px;
  line-height: 21px;
  /* border-left: 1px solid rgb(181, 187, 195); */
  position: relative;
  .container-title{
    margin-top: 0px;
  }
  .copywriting{
    margin-left:9%;
  }
}

.container {
  margin: 0 auto;
  /* width: 1140px; */
  max-width: 1200px;
  display: flex;
}
.container-services > div{
  display: flex;
}
.container-title {
  // font-weight: 100;
  font-weight: normal;
  line-height: 42px;
  // margin-bottom: 24px;
  font-size: 25px;
  // font-family: CenturyGothic;
  letter-spacing: 0px;
}
.container-des{
  // font-family: Poppins, Tahoma, Arial, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: rgb(0, 141, 255);
  font-family: CenturyGothic;
}
.item-left {
  max-width: 470px;
  position: relative;
  display: flex;
  flex-direction: column;
  // align-items: center;
  margin: auto;
  margin-top: 9%;
  /* margin-left: 60px; */
}
.container-copywriting .item-right {
  position: absolute;
  padding-left: 0px;
  // 蓝黄主题
  right: -130px;
  top: 0px;
  // z-index: -1;
  bottom: auto;
  // 我们的主题
  right: 9%;
  top: 10%;
}
.container-services{
  padding-top: 74px;
  padding-bottom: 74px;
  padding-left: 79px;
  padding-right: 79px;
  position: relative;
  font-weight: 300;
  font-size: 15px;
  line-height: 21px;
  font-family: CenturyGothic;
}
.container-services .item-left{
  flex: 1;
}

.container-services .item-right{
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  // text-align: center;
  justify-content: center;
}
.container-title.margin0{
  margin-top: -180px;
}
.item-services{
  width: 340px;
  // text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out 0s;
}
.item-services:hover{
  /* margin-bottom: 35px; */
  transition: all 0.2s ease-in-out 0s;
  transform: translateY(-10px);
}
.item-services p{
  // font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  color: rgb(0, 141, 255);
  width: 158px;
  margin: 16px auto;
  line-height: 24px;
  letter-spacing: 2px;
  font-weight: bold;
}
// .item-services:hover p{
//   color: rgb(0, 141, 255);
// }
.item-services:hover .img-box{
  box-shadow: rgba(10, 31, 68, 0.1) 0px 8px 10px, rgba(10, 31, 68, 0.08) 0px 0px 1px;
}
.item-services > .img-box{
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 9px;
  width: 160px;
  height: 160px;
  border-radius: 3px;
  margin: 0px auto 14px;
  display: flex;
  align-items: center;
  img{
    margin: 0 auto;
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 360px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.container-carousel{
  background-color: #fff;
  .container {
    padding: 0 17px;
  }
  .slider2{
    .pagination{
      text-align: left;
    }
    // width: 100%;
    height: 420px;
    // max-width: 1200px;
    // width: 1200px;
    margin-left: 338px;
    .slider-operating{
      // display: flex;
      // justify-content: space-between;
      position: absolute;
      z-index: 10;
      width: 76%;
      margin-left: -70px;
      margin-top: 168px;
      .slider-pagination-bullet{
        text-align: left !important;
      }
      .slider-pagination-bullet-active{
        background: blue!important;
      }
      div{
        width: 35px;
        height: 35px;
        opacity: 0.5;
        // margin-top: -17px;
        // left: -56px;
        background: url('../../assets/home/right.svg') 0% 0% / cover no-repeat;
      }
      div:hover{
        opacity: 1;
        cursor: pointer;
      }
      .slideNext{
        // margin-left: -30px;
        float: right;
      }
      .slidePre{
        float: left;
        transform: rotate(180deg);
      }
    }
  }
  .slider{
    width: 1200px;
    margin: 0 auto;
    user-select: none;
    padding-bottom: 28px;
    font-family: CenturyGothic;
  }
  .carousel-info{
    position: absolute;
    bottom: -46px;
    text-align: center;
    width: 100%;
    background: rgba(0, 0, 0, 0.2);
    color: #fff;
    height: 68px;
    font-size: 20px;
    transition: all 0.2s ease-out 0s;
  }
  .is-active .carousel-info:hover{
    // color: #000;
    background: rgba(0, 0, 0, 0.6);
    transition: all 0.2s ease-out 0s;
    // transform: translateY(-68px);
    bottom: 0px;
  }
}

.purpose{
  background-color: rgb(71, 84, 104);
  h1{
    margin: 0;
  }
  .item-left{
    // width: 400px;
    // max-width: 400px;
    width: 100%;
    max-width: 100%;
  }
  .container-services{
    padding: 40px 79px;
  }
  .container-title{
    color: #fffd54;
    // font-weight: bold;
    font-size: 50px;
    // max-width: 350px;
    margin-top: 29px;
    line-height: 60px;
    height: 350px;
    margin-top: 10px;
    .container-des-purpose{
      color: rgb(172, 172, 172);
      font-size: 57px;
      display: block;
    }
  }
  .item-right{
    justify-content: space-around;
    flex: 2;
    margin-left: 30px;
    .item-services-title{
      font-size: 16px;
      color: #fffd54;
      line-height: 1;
      // font-weight: normal;
      letter-spacing: 2px;
    }
    .item-services-icon{
      width: 25px;
      height: 25px;
      max-width: 100%;
      vertical-align: middle;
      // height: auto;
    }
  }
  .item-services{
    width: 270px;
    margin: 12px 0;
    cursor: default;
    transition: none;
    p{
      text-align: left;
      color: rgb(0, 141, 255);
      // font-weight: 500;
      padding-right: 19px;
      font-size: 16px;
      line-height: 22px;
      width: 100%;
      // font-family: Poppins, Tahoma, Arial, sans-serif;
      font-family: CenturyGothic;
      letter-spacing: 1px;
    }
  }
  .item-services:hover{
    transform: translateY(0px);
  }
}
.container-step{
  // background-color: #fffd54;
  background-color: #f2f2f2;
  text-align: center;
  .container-title{
    width: 200px;
    text-align: left;
  }
}
.container-contact{
  // display: flex;
  // flex-direction: column-reverse;
  justify-content: space-around;
  .contact-info{
    // flex: 1;
    // height: 400px;
    margin: 30px 0;
    width: 411px;
    // margin: 0 auto;
    h1{
      font-size: 26px;
      color: rgb(0, 141, 255);
      // font-weight: normal;
      // color: rgb(0, 121, 255);
      font-weight: 100;
      line-height: 1;
      // font-size: 25px;
      margin-bottom: 22px;
    }
    .font-line{
      font-family: sans-serif;
    }
    .contactUs{
      font-weight: 400;
      letter-spacing: 2px;
      font-family: sans-serif;
    }
    p{
      width: 360px;
      color: rgb(138, 148, 166);
      font-size: 17px;
      font-weight: 400;
      line-height: 26px;
    }
    .el-button--primary{
      background-color: rgb(0, 141, 255);
      border-color: rgb(0, 141, 255);
    }
    .el-button--primary:hover{
      background: #66b1ff;
    }
  }
}
.conten_title{
  font-weight: normal;
  line-height: 60px;
  font-size: 36px;
  letter-spacing: 2px;
}
.container-additionga{
  .container{
    display: block;
    padding-top: 36px;
    h2{
      width: 100%;
      text-align: center;
      padding-top: 40px;
      margin-bottom: 0;
    }
    h1{
      margin-left: 6px;
      font-size: 1.25rem;
      color: #818990;
      text-align: center;
    }
    h6{
      text-align: center;
      font-weight: 500;
      font-size: 0.8em;
    }
    p{
      width: 300px;
      display: block;
      margin: 0 auto;
      text-align: center;
      font-size:15px;
      a{
        font-size:10px;
        display:inline-block;
        line-height:15px;
        margin-right:10px;
        color:gray;
      }
      a:hover{
        text-decoration: underline;
      }
    }
    .container-contact{
      display: flex;
      justify-content: space-between;
    }
  }
}
.slider-pagination{
  .slider-pagination-bullets{
    bottom: 30px!important;
    text-align: left;
  }
}
.confid_title_styl{
    color: #565555 !important;
    letter-spacing: 4px;
    font-size: !important;
}
.prop_bat{
  font-size: 14px;
  color: #272727;
}
.Prop_conten_style{
    margin-top: 13px;
}
.dow_but{
  color: #fffd53;
  margin-top: 22px;
  padding-left: 6px;
  padding-right: 6px;
  -webkit-transform-origin-x: 0;
  transform: scale(0.8);
}
</style>
