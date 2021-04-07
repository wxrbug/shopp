import {
  request
} from "./request"

//主页轮播图请求
export function getHome() {
  return request({
    url: "/swiper",
    //指定get post
    // method:"get",
    //传的参数
    // params: {
    //   user,
    //   pwd
    // }
  })
}
//主页类型数据请求
export function getType() {
  return request({
    url: "/type",
  })
}
//主页数据
export function getRow() {
  return request({
    url: "/homeRow",
  })
}