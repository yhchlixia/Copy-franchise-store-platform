import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Custom from "./Custom";
import axios from "axios";
import Vuelidate from "vuelidate";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import api from "./api";

axios.defaults.baseURL = "/";
Vue.prototype.axios = axios;

Vue.config.productionTip = false;
Vue.use(Custom);
Vue.use(Vuelidate);
Vue.use(ElementUI);
Vue.use(api);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
