import axios from 'axios'
import { Indicator } from 'mint-ui'

const ajax = axios.create()

// axios拦截器
ajax.interceptors.request.use((config) => {
  Indicator.open('加载中...')
  // config.data = {
  //   ...config.data
  //   authToken: window.localStorage.getItem('mob-token')
  // }
  return config
})
ajax.interceptors.response.use((res) => {
  Indicator.close()
  // if (res.data.code !== 200) {
  //   Toast({
  //     message: '请检查网络',
  //     duration: 1500
  //   })
  // }
  return res
})

// 首页轮播广告接口
export const getBanners = () => {
  return ajax.get('http://www.xiongmaoyouxuan.com/api/tab/1?start=0')
}

// 商家列表接口
export const getShopList = () => {
  return ajax.get('http://rest.apizza.net/mock/ab3fe33e6a505ea99c3fc6c1a7fc0063/api/v1/restaurants')
}
