/* eslint-disable one-var */
export default {
  /**
   * @action 验证是否为数字
   * @param {val:验证值}
   */
  verifyNumber: function(val) {
    var regPos = /^\d+(\.\d+)?$/ // 非负浮点数
    var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/ // 负浮点数
    if (regPos.test(val) || regNeg.test(val)) {
      return true
    } else {
      return false
    }
  },
  /**
   * @action 转义
   * @param {text: 需要转义的文本}
   */
  htmlEscape(text) {
    if (text == null) return ''
    if (text.length === 0) return ''
    return text.replace(/[<>"&]/g, function(match, pos, originalText) {
      switch (match) {
        case '<': return '&lt;'
        case '>':return '&gt;'
        case '&':return '&amp;'
        case '\"':return '&quot;'
      }
    })
  },
  /**
   * @action 反转义
   * @param {text: 需要反转义的文本}
   */
  htmlDecodeByRegExp(text) {
    var s = ''
    if (text == null) return ''
    if (text.length === 0) return ''
    s = text.replace(/&amp;/g, '&')
    s = s.replace(/&lt;/g, '<')
    s = s.replace(/&gt;/g, '>')
    s = s.replace(/&nbsp;/g, ' ')
    s = s.replace(/&#39;/g, '\'')
    s = s.replace(/&quot;/g, '\"')
    return s
  },
  /**
   * @action 对元素添加class
   * @param {obj: 元素对象，cls：className}
   */
  addClass(obj, cls) {
    var obj_class = obj.className // 获取 class 内容.
    var blank = (obj_class !== '') ? ' ' : '' // 判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
    var added = obj_class + blank + cls // 组合原来的 class 和需要添加的 class.
    obj.className = added // 替换原来的 class.
  },
  /**
   * @action 对元素删除class
   * @param {obj: 元素对象，cls：className}
   */
  removeClass(obj, cls) {
    var obj_class = ' ' + obj.className + ' ' // 获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
    obj_class = obj_class.replace(/(\s+)/gi, ' ') // 将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
    var removed = obj_class.replace(' ' + cls + ' ', ' ') // 在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
    removed = removed.replace(/(^\s+)|(\s+$)/g, '') // 去掉首尾空格. ex) 'bcd ' -> 'bcd'
    obj.className = removed // 替换原来的 class.
  },
  /**
   * @action 对元素判断是否包含这class
   * @param {obj: 元素对象，cls：className}
   */
  hasClass(obj, cls) {
    var obj_class = obj.className, // 获取 class 内容.
      obj_class_lst = obj_class.split(/\s+/) // 通过split空字符将cls转换成数组.
    x = 0
    for (x in obj_class_lst) {
      if (obj_class_lst[x] === cls) { // 循环数组, 判断是否包含cls
        return true
      }
    }
    return false
  }

}

