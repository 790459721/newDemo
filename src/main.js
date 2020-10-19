import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { setRem } from './libs/js/setRem'
import './libs/styles/reset.less'
import './libs/styles/iconfont.less'
// import BMap from 'vue-baidu-map'
// Vue.use(BMap, {
//   // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
//   ak: 'EoIvzZYrcdldIr5GXi70kCQgtT3Y14Zt'
// })
setRem(750, 100)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
