import store from '../store'

/**
 * 全局函数
 *
 * 示例
 * this.$global.isPermission(p)
 */

const global = {
  /**
   *
   * @param {String} p //权限url
   */
  isPermission(p) {
    const blackMode = store.getters.urls.blackMode
    const urls = store.getters.urls.urls

    const flag = urls.indexOf(p)

    if (blackMode) {
      if (!flag) {
        return true
      } else {
        return false
      }
    } else {
      if (flag) {
        return true
      } else {
        return false
      }
    }
  }
}

export default global

