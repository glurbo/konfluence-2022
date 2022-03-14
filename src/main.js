import Vue from 'vue'
import App from './App.vue'
import 'expose-loader?$!expose-loader?jQuery!jquery'
import VueScrollTo from 'vue-scrollto'


Vue.config.productionTip = false

Vue.use(VueScrollTo, {
  container: 'body',
  duration: 2000,
  easing: 'ease',
  offset: -100,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

Vue.use({
  install: function (Vue) {
    Vue.prototype.$jQuery = require('jquery'); // you'll have this.$jQuery anywhere in your vue project
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
