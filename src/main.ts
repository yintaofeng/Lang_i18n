import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
// 引入各个语言配置文件
import zh from './static/lang/zhCHS'
import zc from './static/lang/zhCHT'
import en from './static/lang/en'
Vue.use(VueI18n);

Vue.config.productionTip = false


/*---------使用语言包-----------*/
const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'zh',   // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    zh,
    en,
    zc
  }
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
