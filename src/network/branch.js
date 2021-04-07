import {
  request
} from "./request"
//分类页请求
export function getBranchs() {
  return request({
    url: "/branch",
  })
}
// export function getBranchdes(iid) {
//   return request({
//     url: "/branchde",
//     params: {
//       iid
//     }
//   })
// }