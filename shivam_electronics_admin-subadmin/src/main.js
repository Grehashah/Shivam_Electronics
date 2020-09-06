import Vue from 'vue'
import App from './App'
import routes from './router/index'
import Router from 'vue-router'
import VueSession from 'vue-session'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import chart from 'chart.js'
import chartkick from 'vue-chartkick'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies);
Vue.use(VueMaterial);
Vue.use(chartkick.use(chart));

Vue.config.productionTip = false

//Global Component
import adminHeader from './components/adminHeader'
Vue.component("adminHead", adminHeader);
import subAdminHeader from './components/subAdminHeader'
Vue.component("subAdminHead", subAdminHeader);

// setting Routers
Vue.use(Router);

const router1 = new Router({
  routes: routes,
  mode: "history"
});

var options = {
  persist: true
}
Vue.use(VueSession, options)

new Vue({
  el: '#app',
  router: router1,
  components: { App },
  template: '<App/>'
})
