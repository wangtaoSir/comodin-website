import request from '@/utils/request'
// import qs from 'qs'

export function addFeedback(params) {
  return request({
    url: '/feedback/add/1',
    method: 'post',
    data: params
  })
}
export function earnest() {
  window.open(process.env.BASE_API + '/pay/earnest/1', '_bank')
}
export function submitProjectDatail(params) {
  return request({
    url: '/demand/add/1',
    method: 'post',
    data: params
  })
}
export function submitSimpleDatail(params) {
  return request({
    url: '/demand/add/2',
    method: 'post',
    headers: {'Content-Type': 'multipart/form-data'},
    params
  })
}
export function fileUpload(fileobj) {
  var param = new FormData()
  param.append('userName', '324324')
  param.append('userContact', 'wer@qq.com')
  param.append('type', 'wer@qq.com')
  param.append('containPrototype', 'Y')
  param.append('containSketch', 'Y')
  param.append('productCase', 'wer@qq.com')
  param.append('budget', 'wer@qq.com')
  param.append('sketchFileResource', fileobj.file)
  return request({
    method: 'post',
    url: '/demand/add/2',
    headers: {'Content-Type': 'multipart/form-data'},
    data: param
  })
}
export function submitSimpleDatail2(param) {
  return request({
    method: 'post',
    url: '/demand/add/2',
    headers: {'Content-Type': 'multipart/form-data'},
    data: param
  })
}

