<template>
  <div class="container container-services" style="padding-top: 32px;">
        <div style="margin-left: 49%;">
          <div class="item-left" style="max-width: 345px;">
            <h1 class="container-title fon_titl">CONFIDENTIALITY</h1>
            <p class="container-des fon_con">
                We are committed to protecting any personal informa-tion
                that you provide us. Wewill never sell.share.or
                rent any information provided here with third parties.
                <br/><br/>
                We are happy to sign and NDA if necessary. Feel feel free to
                use our standard template below:
            </p>
             <el-button type="primary" size="small" class="nda_bat_w">DOWNLOAD NDA</el-button>
          </div>
        </div>
  </div>
</template>

<script>
export default {
}
</script>
<style lang="scss" scoped>
.fon_titl{
    font-size: 25px !important;
}
.fon_con{
    color: #3c3b3b !important;
    font-size: 12px !important;
    margin-top: 0px !important;
}
.nda_bat_w{
    -webkit-transform-origin-x: 0;
    transform: scale(0.8);
    width: 127px;
}
*{
  box-sizing: border-box;
}
.bgc{
  border-bottom: 28px solid #fffd54;

  z-index: -1;
  display: flex;
  position: absolute;
  width: 100%;
  .bgc-yellow{
    height: 400px;
    flex: 2;
    background-color: #368ef7;
  }
  .bgc-blue{
    height: 400px;
    flex: 1;
    background-color: #fffd54;
  }
}
.banner-img{
  height: 400px;
}
.default {
  background-color: #368ef7;
}

.font-title-default{
  color: #fffd54;
}
.font-title2-default{
  color: #fffd54;
}
.font-desc-default{
  color: #fffd54;
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
  font-family: Microsoft YaHei;
}
// .home-main{
// }
.get{
  height: 40px;
  width: 114px;
  margin: 10px ;
  margin-left: 0px;
  // background-color: #fff;
  background-color: #fffd54;
}
.get:hover,
.get:active,
.get:focus{
  color: #409EFF;
  // background-color: #409EFF;
  background-color: #fffd54;
}
.tip{
  color: rgb(138, 148, 166);
  font-size: 17px;
  font-weight: 400;
  line-height: 30px;
}
.container-copywriting {
  // height: 380px;
  // color: rgb(51, 51, 51);
  color: #ffffff;
  overflow: hidden;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 79px;
  padding-right: 79px;
  position: relative;
  font-weight: 300;
  font-size: 15px;
  line-height: 21px;
  /* border-left: 1px solid rgb(181, 187, 195); */
  overflow: hidden;
  position: relative;
  .container-title{
    margin-top: 0px;
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
  font-weight: bold;
  line-height: 55px;
  // margin-bottom: 24px;
  font-size: 51px;
  font-family: Roboto-Thin;
  letter-spacing: 6px;
}
.container-des{
  // font-family: Poppins, Tahoma, Arial, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: rgb(0, 141, 255);
  font-family: Microsoft YaHei;
}
.item-left {
  max-width: 340px;
  position: relative;
  display: flex;
  flex-direction: column;
  // align-items: center;
  margin: auto;
  /* margin-left: 60px; */
}
.container-copywriting .item-right {
  position: absolute;
  padding-left: 50px;
  right: -58px;
  top: 0px;
  z-index: -1;
  bottom: auto;
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
}
.container-services .item-left{
  flex: 1;
}

.container-services .item-right{
  flex: 2;
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
  width: 134px;
  margin: 16px auto;
  line-height: 24px;
}
// .item-services:hover p{
//   color: rgb(0, 141, 255);
// }
.item-services:hover .img-box{
  box-shadow: rgba(10, 31, 68, 0.1) 0px 8px 10px, rgba(10, 31, 68, 0.08) 0px 0px 1px;
}
.item-services > .img-box{
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 9px;
  width: 160px !important;
  height: 160px !important;
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
  background-color: rgb(242, 242, 242);
  // width: 1200px;
  // margin-left: 158px;
  .container {
    padding: 0 79px;
  }
  .slider{
    width: 1200px;
    margin: 0 auto;
    user-select: none;
    padding-bottom: 28px;
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
  .carousel-info:hover{
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
    width: 400px;
    max-width: 400px;
  }
  .container-services{
    padding: 40px 79px;
  }
  .container-title{
    color: #fffd54;
    font-weight: bold;
    font-size: 50px;
    max-width: 350px;
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
    .item-services-title{
      font-size: 16px;
      color: #fffd54;
      line-height: 1;
      font-weight: normal;
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
    width: 248px;
    margin: 12px 0;
    p{
      text-align: left;
      color: rgb(0, 141, 255);
      font-weight: 500;
      padding-right: 19px;
      font-size: 16px;
      line-height: 22px;
      width: 100%;
      // font-family: Poppins, Tahoma, Arial, sans-serif;
      font-family: Microsoft YaHei;
    }
  }
}
.container-step{
  background-color: #fffd54;
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
    width: 400px;
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
.container-additionga{
  .container{
    display: block;
    h2{
      padding-top: 40px;
      margin-bottom: 0;
      width: 356px;
    }
    h1{
      margin-left: 20px;
      font-size: 1.25rem;
      color: #000;
    }
    p{
      width: 300px;
      display: block;
      margin: 0 auto;
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
</style>

