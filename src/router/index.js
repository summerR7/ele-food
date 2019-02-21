import Vue from 'vue'
import Router from 'vue-router'
// 引入路由配置
import routes from './routes'

// 使用路由
Vue.use(Router)

// 导出路由实例
export default new Router({
  mode: 'history',
  routes
})
