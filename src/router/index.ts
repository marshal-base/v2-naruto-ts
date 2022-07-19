import Vue from 'vue'
import VueRouter, { Route, RouteConfig } from 'vue-router'
import Tabbar from '@/layout'
import { session } from '@/utils/storage'
import Home from '@/pages/home'
import I18n from '@/pages/i18n'
import { ESessionStorage } from '@/types/storage'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Tabbar',
    component: Tabbar,
    redirect: '/home',
    meta: {
      title: '首页',
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
          title: '首页',
        },
      },
      {
        path: '/i-18n',
        name: 'I18n',
        component: I18n,
        meta: {
          title: '国际化',
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/Login.vue'),
    meta: {
      title: '登录',
    },
  },
]

const router = new VueRouter({
  routes,
})

router.beforeEach(async (to: Route, from, next) => {
  if (to.path === '/login') {
    next()
  } else if (!session(ESessionStorage.S_TOKEN)) {
    //如果不需要登录验证，或者已经登录成功，则直接放行
    //进入的不是登录路由
    next({ path: '/login' })
  } else {
    //下一跳路由需要登录验证，并且还未登录，则路由定向到登录路由
    if (to.meta?.title) {
      document.title = to.meta.title
    }

    next()
  }
})

export default router
