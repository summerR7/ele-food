// 页面组件
import Home from '@/pages/Home.vue'
import Seller from '@/pages/Seller.vue'
import Order from '@/pages/Order.vue'
import Mine from '@/pages/Mine.vue'
import Detail from '@/pages/Detail.vue'

// 组件
import Tabbar from '@/components/Tabbar.vue'

const routes = [
  {
    path: '/',
    meta: {
      isNav: false
    },
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页',
      isNav: true,
      icon: '&#xe603;'
    },
    components: {
      default: Home,
      tabbar: Tabbar
    }
  },
  {
    path: '/seller',
    name: 'seller',
    meta: {
      title: '商家',
      isNav: true,
      icon: '&#xe722;'
    },
    components: {
      default: Seller,
      tabbar: Tabbar
    }
  },
  {
    path: '/order',
    name: 'order',
    meta: {
      title: '订单',
      isNav: true,
      icon: '&#xe6a2;'
    },
    components: {
      default: Order,
      tabbar: Tabbar
    }
  },
  {
    path: '/mine',
    name: 'mine',
    meta: {
      title: '我的',
      isNav: true,
      icon: '&#xe6b8;'
    },
    components: {
      default: Mine,
      tabbar: Tabbar
    }
  },
  {
    path: '/detail/:id',
    name: 'detail',
    meta: {
      title: '详情',
      isNav: false
    },
    components: {
      default: Detail
    }
  }
]

export default routes
