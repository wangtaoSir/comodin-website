'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://127.0.0.1:2001"',
  WS_API: '"web.socket.edu.10.comodin.cn"',
  PIC_API: '"http://pic.capeast.co"',
  DOWN_API: '"http://download.capeast.co"'
})
