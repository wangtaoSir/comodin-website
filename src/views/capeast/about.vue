<template>
  <div>
    <div class="about">
      <div class="container">
        <el-row>
          <el-col :span="10">
            <div class="left">
              <div class="left-top">
                <h1>
                  About Capeast
                </h1>
                <p>
                  Capeast is a virtual on-demand design agency, combining global talent with a scientific approach to quality and efficiency.
                </p>
              </div>
              <div class="left-bottom">
                <p>
                  <i class="icon-love"></i>
                  3000+ Companies trust our solution
                </p>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="center">
              <p class="center-top">
                Capeast helps companies create value with high-quality design delivered on demand.
              </p>
              <p class="center-bottom">
                <i class="icon-lightning"></i>
                115+ Top-rated team members ready to support
              </p>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="right">
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="about-main">
        <div class="header">
          <h2 class="black-title">Our Mission</h2>
          <p>Help build a fair, transparent online labor market</p>
        </div>
        <div class="body">
          <h2 class="black-title">What we support?</h2>
          <p>
            Capeast currently supports the largest design categories: Mobile APPs, Websites, Enterprise Solution, and Embedded Mini-Program . Companies get access to a dedicated project manager and team of specialists. Typical user requests include creating new visual branding, polishing PowerPoint presentations, designing banners and print material, and designing websites.
          </p>
          <h2 class="highlight-title">
            Why companies choose Capeast
          </h2>
          <p>
            Companies such as McKinsey, BCG and Goldman Sachs have had internal teams to support these types of tasks for more than 20 years. Few companies, however, have this kind of setup. Increasingly, companies have started building distributed teams and some prioritize spending on more expensive agencies. However, in most companies, people end up doing most of these tasks themselves.
          </p>
          <p>
            In fact, a Harvard Business Review study found that the typical knowledge worker spends around 40% of their time on non-core tasks that can be outsourced. Capeast has the same price level as freelancers and the same personal approach as agencies. In addition, Capeast is the only solution that is truly on-demand 24/7 and that includes enterprise-level compliance and confidentiality.
          </p>
          <h2 class="highlight-title">
            Our Investors
          </h2>
          <p>
            Capeast helps companies create value with high-quality work delivered on demand.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.about{
  // padding: 20px 0;
  .container{
    background: #f6f9fc;
    margin: 0 auto;
    padding-left: 200px;
    .icon-love,
    .icon-lightning{
      display: block;
      width: 25px;
      height: 25px;
      background-color: red;
      margin-bottom: 10px;
    }
    .icon-love{
      background: url(../../assets/about/love.png);
    }
    .icon-lightning{
      background: url(../../assets/about/lightning.png);
    }
    .left{
      margin: 0 0 0 30px;
      .left-top{
        padding: 20px 60px 50px;
        h1{
          color: rgb(71, 84, 104);
          font-size: 54px;
          font-weight: 200;
          line-height: 60px;
          font-family: Roboto-Thin;
        }
        p{
          color: rgb(138, 148, 166);
          font-size: 17px;
          font-weight: 300;
          line-height: 30px;
          margin-top: 0;
          margin-bottom: 1rem;
          width: 426px;
        }
      }
      .left-bottom{
        padding: 40px 60px;
        background-color: rgb(0, 141, 255);
        height: 242px;
        p{
          color: rgb(255, 255, 255);
          font-size: 20px;
          font-weight: 300;
          line-height: 38px;
          letter-spacing: 0.5px;
          display: block;
          width: 330px;
          font-family: inherit;
        }
      }
    }
    .center{
      background-color: rgb(70, 83, 105);
      height: 550px;
      display: flex;
      flex-direction: column;
      p{
        flex: 1;
        margin: 0;
        color: rgb(255, 255, 255);
        font-size: 20px;
        font-weight: 300;
        line-height: 28px;
        letter-spacing: 0.5px;
        // display: block;
        width: 330px;
        font-family: inherit;
        padding: 74px 0 0 88px;
      }
      .center-bottom{
        padding-top: 114px;
      }
    }
    .right{
      height: 550px;
      background: url(../../assets/about/work.jpg);
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  .about-main{
    margin: 0 auto;
    width: 1200px;
    text-align: center;
    padding: 30px 0;
    .black-title{
      color: rgb(10, 31, 68);
      font-size: 17px;
      font-weight: 700;
      line-height: 30px;
      margin-bottom: 16px;
      font-family: inherit;
    }
    .header{
      p{
        color: rgb(10, 31, 68);
        font-size: 32px;
        font-weight: 400;
        line-height: 50px;
        letter-spacing: 0.57px;
      }
    }
    .body{
      width: 540px;
      margin: 0 auto;
      p{
        color: rgb(138, 148, 166);
        font-size: 17px;
        font-weight: 400;
        line-height: 30px;
        text-align: left;
        font-family: Poppins, Tahoma, Arial, sans-serif;
        text-align: center;
      }
      .highlight-title{
        color: rgb(0, 192, 255);
        font-size: 32px;
        font-weight: 200;
        line-height: 40px;
        letter-spacing: 0.57px;
        margin-bottom: 15px;
      }
    }
  }
}
</style>

