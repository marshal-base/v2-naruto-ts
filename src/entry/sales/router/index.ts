import Vue from 'vue';
import VueRouter, { Route, RouteConfig } from 'vue-router';

import { ERoutePath } from '@/const/sales/enums';
import { ESessionStorage } from '@/types/storage';
import { session } from '@/utils/storage';
import Tabbar from '@/layout';
import Home from '@/pages/sales/home';
import I18n from '@/pages/sales/i18n';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: ERoutePath.ROOT,
    name: 'Tabbar',
    component: Tabbar,
    redirect: ERoutePath.HOME,
    meta: {
      title: '首页',
    },
    children: [
      {
        path: ERoutePath.HOME,
        name: 'Home',
        component: Home,
        meta: {
          title: '首页',
        },
      },
      {
        path: ERoutePath.I18N,
        name: 'I18n',
        component: I18n,
        meta: {
          title: '国际化',
        },
      },
    ],
  },
  {
    path: ERoutePath.LOGIN,
    name: 'login',
    component: () => import('@/pages/sales/Login.vue'),
    meta: {
      title: '登录',
    },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach(async (to: Route, from, next) => {
  if (to.path === '/login') {
    next();
  } else if (!session(ESessionStorage.S_TOKEN)) {
    // 如果不需要登录验证，或者已经登录成功，则直接放行
    // 进入的不是登录路由
    next({ path: '/login' });
  } else {
    // 下一跳路由需要登录验证，并且还未登录，则路由定向到登录路由
    if (to.meta?.title) {
      document.title = to.meta.title;
    }

    next();
  }
});

export default router;
