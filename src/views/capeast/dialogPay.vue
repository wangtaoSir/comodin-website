<template>
    <el-dialog title="Submit Pay" :visible.sync="dialogVisible" :close-on-click-modal="clickCloseMode" :close-on-press-escape="clickCloseMode" width="30%">
        <div class="payOrderNo">OrderNo: {{OrderNo}}</div>
        <div class="payAlert">We will contact you after payment of Intent Payment.</div>
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">cancel</el-button>
        <el-button type="primary" @click="submitPay">Pay</el-button>
        </span>
    </el-dialog>
</template>
<script>
import { earnest } from '@/api/feedback'
export default {
  data () {
    return {
      clickCloseMode: false,
      dialogVisible: false,
      OrderNo: 'PE2564R3DREDF'
    }
  },
  methods: {
    submitPay() {
      earnest()
      this.dialogVisible = false
    },
    randomString(len, charSet) {
      charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
      len = len || 13
      var randomString = ''
      for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length)
        randomString += charSet.substring(randomPoz, randomPoz + 1)
      }
      this.OrderNo = randomString
      return randomString
    }
  },
}
</script>
<style>
.payOrderNo{
  font-size: 23px;
  margin-bottom: 10px;
}
.payAlert{
    font-size: 13px;
    color: red;
    padding-left: 3px;
}
</style>

