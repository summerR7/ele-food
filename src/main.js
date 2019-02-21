// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入路由配置
import router from './router'
// 引入UI框架
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
// 引入ajax请求接口
import * as $http from './requests'

// 引入重置css
import '../static/css/reset.css'

Vue.use(Mint)

Vue.prototype.$http = $http

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
