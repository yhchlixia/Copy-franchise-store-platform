<template>
  <div id="header" class="row input-margin">
    <div class="header-left col-sm-10">welcome</div>
    <div class="header-right col-sm-2">
      <div v-if="user.info">
        <img src="../assets/icon_login .png" alt @click="showBackAddEdit" />
        <span @click="showBackAddEdit">{{ user.username }}</span>
        <img src="../assets/icon_show.png" alt @click="showBackAddEdit" />
      </div>
      <div v-if="showBackAddEditPw" class="back-edit-password">
        <ul>
          <li @click="backLogin">
            <img src="../assets/icon_login .png" alt />
            <span>退出登录</span>
          </li>
          <li @click="editPassword">
            <img src="../assets/icon_login .png" alt />
            <span>修改密码</span>
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
      showBackAddEditPw: false
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
  created() {},
  methods: {
    hiddenmenu() {
      this.showBackAddEditPw = false;
    },
    showBackAddEdit() {
      if (!this.showBackAddEditPw) {
        this.showBackAddEditPw = true;
      } else {
        this.showBackAddEditPw = false;
      }
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
<style>
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

#header .header-user-info {
  width: 70px;
  height: 18px;
}

#header .header-right {
  font-size: 16px;
  display: inline-block;
  line-height: 60px;
  position: relative;
  text-align: center;
}

.back-edit-password {
  position: absolute;
  top: 50px;
  left: 100px;
  z-index: 999;
  background-color: #fff;
  box-shadow: 0 8px 17px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
  border: none;
  border-radius: 2px;
}

#header .back-edit-password > ul {
  margin-bottom: 0;
  height: 62px;
}

#header .back-edit-password > ul > li {
  height: 26px;
  width: 160px;
  font-size: 14px;
  color: #333333;
  padding: 3px 20px;
  line-height: 26px;
}

#header .header-right img {
  margin-right: 10px;
  margin-left: 15px;
}
</style>