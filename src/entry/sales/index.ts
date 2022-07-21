import Vue from 'vue';
import VueI18n from 'vue-i18n';
import dayjs from 'dayjs';
import '@/assets/style/reset.css';
import BaseFormatter from '@/utils/i18nFormat';
import zhCN from '@/locales/zh-CN';
import enUS from '@/locales/en-US';

import App from './App.vue';
import router from './router';
import store from './store/index';
import getAccountBaseData from './getAccountBaseData';

Vue.use(VueI18n);
Vue.config.productionTip = false;
Vue.prototype.$dayjs = dayjs;
getAccountBaseData(store);

const i18n = new VueI18n({
  locale: 'en-US',
  formatter: new BaseFormatter(),
  fallbackLocale: 'en-US',
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS,
  },
});

const app = new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');

if (module.hot) {
  module.hot.accept(['../../locales/zh-CN', '../../locales/en-US'], () => {
    i18n.setLocaleMessage('en-US', enUS);
    i18n.setLocaleMessage('zh-CN', zhCN);

    // 热更新
    app.$i18n.setLocaleMessage('en-US', enUS);
    app.$i18n.setLocaleMessage('zh-CN', zhCN);
  });
}
