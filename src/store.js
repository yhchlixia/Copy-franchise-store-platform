import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1,
    userInfo: {},
    language: {
      language: "中文",
      json: "zh"
    }
  },
  mutations: {
    getUserInfo(state, user) {
      state.userInfo = user;
    },
    getLanguage(state, language) {
      state.language = language;
    }
  },
  actions: {}
});
