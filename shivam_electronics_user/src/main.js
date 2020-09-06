import Vue from 'vue'
import App from './App'
import routes from './router/index'
import Router from 'vue-router'
import VueSession from 'vue-session'
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false

//Global Component
import userHeader from './components/userHeader'
Vue.component("userHead", userHeader);
import userFooter from './components/userFooter'
Vue.component("userFooter", userFooter);
import userSidebar from './components/userSidebar'
Vue.component("userSidebar", userSidebar);

// setting Routers
Vue.use(Router);

Vue.use(VueCookies);

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
