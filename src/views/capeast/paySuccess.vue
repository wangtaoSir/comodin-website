<template>
  <div class="paySuccClass">
    <el-alert
      title="Successful delivery"
      type="success"
      effect="dark"
      center
      description="Successfully sent, we will contact you as soon as possible."
      :closable="isClose"
      style="margin-top:50px;padding-top:17px;padding-bottom:17px;"
      show-icon>
    </el-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClose: false,
    }
  },

}
</script>

<style>
.paySuccClass .el-alert__title{
  font-size: 24px;
}
.paySuccClass .el-alert__description{
  font-size: 24px;
}
.paySuccClass .el-alert__content{
  padding-left: 18px;
}
</style>
