// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* import Home from './components/Home'
  // router,
  // components: { ElementTest },
  // template: '<ElementTest/>'
  // render: h => h(ElementTest)
  import router from './router'
*/
import Vue from 'vue'
// import ElementTest from './components/ElementTest'
// import 'element-ui/lib/theme-chalk/index.css'
// import ElementUI from 'element-ui'
import App from './App'

Vue.config.productionTip = false
// Vue.component('ElementTest', ElementTest)
// Vue.use(ElementUI)
// Vue.component('app', App)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
