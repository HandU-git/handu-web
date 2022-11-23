import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { router } from './routes/index.js';
import { store } from './store/index.js';
import AOS from 'aos';
import "aos/dist/aos.css";
import VueYoutube from 'vue-youtube';


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify,
  router,
  store,
  VueYoutube,
  created() {
    setTimeout(() => {
      AOS.init({
        duration: 1000,
        offset: 200,
      }) 
    },500)    
  },
}).$mount('#app')
