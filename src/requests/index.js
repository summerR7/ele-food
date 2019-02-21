import axios from 'axios'
import { Toast } from 'mint-ui'

const ajax = axios.create({
  baseURL: ''
})

// axios拦截器
let toast = null
ajax.interceptors.request.use((config) => {
  toast = Toast({
    message: '加载中...',
    position: 'bottom',
    duration: 5000
  })
  return config
})
ajax.interceptors.response.use((resp) => {
  toast.close()
  return resp
})

export const getPost = () => {
  return ajax.get('')
}
