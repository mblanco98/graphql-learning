import Vue from 'vue'
import VueApollo from 'vue-apollo'
import App from './App.vue'
import store from './store'
import apolloProvider from './apollo-provider'

Vue.use(VueApollo)
Vue.config.productionTip = false

new Vue({
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
