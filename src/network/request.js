import Axios from "axios";

export function request(config) {
  //1创建Axios实例
  const inst = Axios.create({
    baseURL: "http://127.0.0.1:4001",
    timeout: 5000
  });
  //2.拦截器
  inst.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      console.log(err);
    }
  );
  //响应式拦截
  inst.interceptors.response.use(
    res => {
      return res.data;
    },
    err => {
      console.log(err);
    }
  );
  return inst(config);
}
// export function get(url, params) {
//   return new Promise((resolve, reject) => {
//     Axios.get(url, {
//       params: params
//     })
//       .then(res => {
//         resolve(res.data);
//       })
//       .catch(err => {
//         reject(err.data);
//       });
//   });
// }
// /**
//  * post方法，对应post请求
//  * @param {String} url [请求的url地址]
//  * @param {Object} params [请求时携带的参数]
//  */
// export function post(url, params) {
//   return new Promise((resolve, reject) => {
//     Axios.post(url, params)
//       .then(res => {
//         resolve(res.data);
//       })
//       .catch(err => {
//         reject(err.data);
//       });
//   });
// }
