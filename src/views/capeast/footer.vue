<template>
  <div class="bgc-gray">
    <div class="footer">
      <div class="top">
        <div class="capeast_logo_styl">
          <img class="logo" src="../../assets/capeast_logo.png" alt="" height="80px">
        </div>
        <div class="col1">
          <h3>SERVICES</h3>
          <div class="link">
            <p>
              <a href="">MOBILE APPS</a>
            </p>
            <p>
              <a href="">WEBSITES</a>
            </p>
            <p>
              <a href="">ENTERPRISE SOFTWARE</a>
            </p>
            <p>
              <a href="">EMBEDDED MINI-PROGRAMS</a>
            </p>
          </div>
        </div>
        <div class="col1">
          <h3>CAPEAST</h3>
          <div class="link">
            <!-- <p>
              <a href="">Pricing</a>
            </p>
            <p>
              <a href="">About Capeast</a>
            </p>
            <p>
              <a href="">Press</a>
            </p>
            <p>
              <a href="">Careers</a>
            </p> -->
            <p>
              <a href="">FAQ</a>
            </p>
            <!-- <p>
              <a href="">Blog</a>
            </p>
            <p>
              <a href="">Contact Us</a>
            </p> -->
          </div>
        </div>
        <div class="col2">
          <!-- <h3>FOLLOW US</h3> -->
          <!-- <div class="link">
            <p>
              Get our latest updates
            </p>
            <div class="follow">
              <a href="" class="twitter"></a>
              <a href="" class="facebook"></a>
              <a href="" class="google"></a>
              <a href="" class="linkedin"></a>
            </div>
          </div> -->
        </div>
      </div>
      <!-- <br/> -->
      <div class="bottom">
        <div class="left">
          <span>2019 Capeast, Inc</span>
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>
        <!-- <div class="right">
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import '@/styles/iphoneStyl.scss'
export default {}
</script>

<style lang="scss" scoped>
.bgc-gray{
  // background: #f2f2f2;
  background: #f6f9fc;
}
.footer{
  font-family: CenturyGothic;
  width: 1200px;
  margin: 0 auto;
  padding: 35px 79px 15px 79px;
  .top{
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
  }
  h3{
    color: rgb(54, 67, 75);
    font-size: 13px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    margin-top: 0px;
    margin-bottom: 12px;
    font-family: Poppins, Tahoma, Arial, sans-serif;
  }
  .link{
    display: flex;
    flex-direction: column;
  }
  p{
    margin: 0;
    font-size: 13px;
    line-height: 30px;
    letter-spacing: 0.52px;
  }
  a{
    display: inline;
  }
  .logo{
    margin-top: -20px;
  }
  .col1 {
    // flex: 1;
    margin: 0 20px;
  }
  .col2 {
    flex: 2;
  }
  .follow {
    margin-top: 10px;
    a{
      display: inline-block;
      margin-right: 8px;
      width: 45px;
      height: 45px;
      border-radius: 6px;
    }
    .twitter{
      background: url(../../assets/footer/twitter.png) 0% 0% / cover;
    }
    .twitter:hover{
      background: url(../../assets/footer/twitter_hover.png) 0% 0% / cover;
    }
    .facebook{
      background: url(../../assets/footer/facebook.png) 0% 0% / cover;
    }
    .facebook:hover{
      background: url(../../assets/footer/facebook_hover.png) 0% 0% / cover;
    }
    .google{
      background: url(../../assets/footer/google.png) 0% 0% / cover;
    }
    .google:hover{
      background: url(../../assets/footer/google_hover.png) 0% 0% / cover;
    }
    .linkedin{
      background: url(../../assets/footer/linkedin.png) 0% 0% / cover;
    }
    .linkedin:hover{
      background: url(../../assets/footer/linkedin_hover.png) 0% 0% / cover;
    }
  }
  .bottom{
    display: flex;
    border-top: 1px solid rgba(174, 179, 187, 0.3);
    .left{
      color: rgb(54, 67, 75);
      font-size: 10px;
      font-weight: 400;
      line-height: 30px;
      letter-spacing: 1.39px;
      overflow: hidden;
      span{
        border-left: 1px solid #000;
        margin-left: -1px;
        padding-left: 8px;
      }
    }
  }
}
</style>
