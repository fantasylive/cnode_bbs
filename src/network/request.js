import axios from 'axios'

export function request(config) {
  // 创建axios的实例
  const instance = axios.create({
    baseURL: 'https://cnodejs.org/api/v1',
    timeout: 5000
  })

  // axios的拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err);
  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data.data
  }, err => {
    console.log(err);
  })

  // 发送真正的网络请求
  return instance(config)
}
