import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'UA-165928141-1'
});

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
