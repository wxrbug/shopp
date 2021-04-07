import {
  request
} from "./request" 
//详情页请求
export function getDetails(id) {
  return request({
    url: "/details",
    //指定get post
    // method:"get",
    //传的参数
    params: {
      id
    }
  })
}