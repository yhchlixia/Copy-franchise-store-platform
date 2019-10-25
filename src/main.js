import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Custom from "./Custom";
import axios from "axios";

axios.defaults.baseURL = "/";
Vue.prototype.axios = axios;

Vue.config.productionTip = false;
Vue.use(Custom);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
