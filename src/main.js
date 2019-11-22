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
import moment from "moment";
// 引入i18n国际化插件
import VueI18n from "vue-i18n";
Vue.use(VueI18n);

axios.defaults.baseURL = "./";
Vue.prototype.axios = axios;

Vue.prototype.$moment = moment; //赋值使用

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    // 判断该路由是否需要登录权限
    if (sessionStorage.access_token) {
      // 获取当前的token是否存在
      console.log("token存在");
      next();
    } else {
      console.log("token不存在");
      next({
        path: "/login", // 将跳转的路由path作为参数，登录成功后跳转到该路由
        data: { redirect: to.fullPath }
      });
    }
  } else {
    // 如果不需要权限校验，直接进入路由界面
    next();
  }
});

// 注册i18n实例并引入语言文件，文件格式等下解析
const i18n = new VueI18n({
  locale: "zh",
  messages: {
    zh: require("./assets/languages/zh.json"),
    en: require("./assets/languages/en.json")
  }
});

moment.locale("zh-cn"); //需要汉化

Vue.config.productionTip = false;
Vue.use(Custom);
Vue.use(Vuelidate);
Vue.use(ElementUI);
Vue.use(api);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
