<template>
  <div id="header" class="row input-margin">
    <div class="header-left col-sm-10">welcome</div>
    <div class="header-right col-sm-2">
      <div v-if="user.info" class="header-local" @click="showSystem()">
        <img src="../assets/icon_login .png" alt />
        <span>{{ user.username }}</span>
        <img src="../assets/icon_show.png" alt  />
      </div>
      <div v-if="showBackAddEditPw" @mouseleave="hidden()" class="back-edit-password">
        <ul>
          <li @click="editPassword">
            <img src="../assets/icon_login .png" alt />
            <span>修改密码</span>
          </li>
          <li @click="backLogin">
            <img src="../assets/icon_login .png" alt />
            <span>退出登录</span>
          </li>
        </ul>
      </div>
      <div class="header-local" @click="showLanguage">
        <img src="../assets/i18n.png" width="14px" alt />
        <span>{{ language.language }}</span>
        <img src="../assets/icon_show.png" alt />
      </div>
      <div v-if="languageI18n" class="language-i18n-change" @mouseleave="hidden()">
        <ul>
          <li v-for="language in languages" :key="language.language" @click="changeLanguage(language)">
            <span>{{ language.language }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showBackAddEditPw: false,
      languageI18n: false,
      language: {},
      languages: [{
        language: "中文",
        json: "zh"
      },{
        language: "English",
        json: "en"
      }]
    };
  },
  computed: {
    user: function() {
      if (window.sessionStorage.data) {
        var user = JSON.parse(window.sessionStorage.data);
        user.info = true;
        return user;
      } else {
        var userInfo = { username: "", password: "" };
        userInfo.info = false;
        return userInfo;
      }
    }
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.language = this.$store.state.language;
    },
    hidden() {
      this.showBackAddEditPw = false;
      this.languageI18n = false;
    },
    showLanguage() {
      this.languageI18n = true;
    },
    changeLanguage(language) {
      this.language = language;
      this.$i18n.locale = this.language.json;
      this.$store.commit("getLanguage", this.language);
    },
    hiddenmenu() {
      this.showBackAddEditPw = false;
    },
    showSystem() {
      this.showBackAddEditPw = true;
    },
    backLogin() {
      this.$router.push({ path: "/login" });
    },
    editPassword() {
      console.log(this.showBackAddEditPw);
    }
  }
};
</script>
<style scoped>
#header {
  height: 60px;
  width: 100%;
  padding: 0 20px;
  background-color: #fff;
  text-align: left;
  font-size: 36px;
  left: 0;
  right: 0;
  top: 0;
  z-index: 998;
}

.header-local {
  display: inline-block;
}

#header .header-user-info {
  width: 70px;
  height: 18px;
}

#header .header-right {
  font-size: 16px;
  display: inline-block;
  line-height: 60px;
  position: relative;
  text-align: right;
}

.back-edit-password {
  position: absolute;
  top: 50px;
  left: 80px;
  z-index: 999;
  background-color: #fff;
  box-shadow: 0 8px 17px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
  border: none;
  border-radius: 2px;
  text-align: left;
}

.language-i18n-change {
  position: absolute;
  top: 50px;
  left: 170px;
  z-index: 999;
  background-color: #fff;
  box-shadow: 0 8px 17px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
  border: none;
  border-radius: 2px;
  text-align: left;
}

ul {
  margin-bottom: 0;
  height: 62px;
}

ul > li {
  height: 26px;
  width: 140px;
  font-size: 14px;
  color: #333333;
  padding: 3px 10px;
  line-height: 26px;
  cursor: pointer;
}

#header .header-right img {
  margin-right: 10px;
  margin-left: 15px;
}
</style>