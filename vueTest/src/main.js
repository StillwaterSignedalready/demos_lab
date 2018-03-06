// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layouts from './components/Layouts'
import router from './router'
// import Login from './components/Login'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layouts },// 局部注册组件，使得template中的组件标签得以被识别
  template: '<Layouts />'
})
