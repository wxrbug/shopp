import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: "/",
    redirect: "/home",
    meta: {
      title: '首页'
    }
  },
  {
    path: "/home",
    component: () => import("../views/Home/Home"),
    meta: {
      title: '首页'
    }
  },
  {
    path: "/iuser",
    component: () => import("../views/Iuser/Iuser"),
    meta: {
      title: '用户信息'
    }
  },
  {
    path: "/details",
    component: () => import("../views/Details/Details"),
    meta: {
      title: '商品详情'
    }
  },
  {
    path: "/shopping",
    component: () => import("../views/shopping/Shopping"),
    meta: {
      title: '购物车'
    }
  },
  {
    path: "/branch",
    component: () => import("../views/branch/Branch"),
    meta: {
      title: '分类'
    }
  }

]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router