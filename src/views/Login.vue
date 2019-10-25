<template>
  <div id="login" class="row">
    <Header></Header>
    <!-- <div class="loginImg col-sm-6">
    </div>-->
    <div class="col-sm-12">
      <form action id="loginForm">
        <div class="login-form-title">{{ msg.title }}</div>
        <div class="row login-label-input">
          <label for="username" name="username" class="col-sm-12 login-label">用户名</label>
          <input type="text" class="login-input" placeholder="请输入用户名" v-model="loginForm.username" />
        </div>
        <div class="row login-label-input">
          <label for="password" name="password" class="col-sm-12 login-label">密码</label>
          <input
            type="password"
            class="login-input"
            placeholder="请输入密码"
            v-model="loginForm.password"
          />
        </div>
        <div class="login-submit">
          <button type="button" @click="submit">登录</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      msg: {
        title: "欢迎登陆"
      },
      loginForm: {
        username: "",
        password: ""
      }
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      window.sessionStorage.removeItem("data");
    },
    submit() {
      if (this.loginForm.username === "" || this.loginForm.password === "") {
        alert("请输入用户名或密码");
      } else {
        if (
          this.loginForm.username === "yhch" &&
          this.loginForm.password === "Aa000000"
        ) {
          var see = window.sessionStorage;
          var d = JSON.stringify(this.loginForm);
          console.log(d);
          see.setItem("data", d);
          this.$router.push({ path: "/baseInfo" });
        } else {
          alert("用户名或密码错误");
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
#login {
  width: 100%;
  height: 100%;
  margin: 0;
  background-image: url(../assets/bg.jpg);
  background-size: cover;
}

.row {
  margin: 0;
}

.loginImg {
  width: 800px;
  height: calc(100vh - 70px);
}
#loginForm {
  width: 500px;
  height: 500px;
  background-color: #fff;
  /* opacity: 0.7; */
  position: absolute;
  right: 200px;
  top: 150px;
  padding: 0 10px;
}

.login-form-title {
  width: 100%;
  height: 100px;
  padding: 15px;
  font-size: 36px;
  display: inline-block;
  line-height: 70px;
}

.login-label-input {
  margin-bottom: 20px;
}

.login-label {
  text-align: left;
  padding-left: 20px;
  font-size: 18px;
  margin: 15px 0;
}

.login-input {
  width: 440px;
  height: 35px;
  text-align: left;
  margin: 5px 20px 20px;
  /* border-radius: 5px; */
  border-bottom: 1px solid #ccc;
  border-top: none;
  border-left: none;
  border-right: none;
}

.login-submit {
  padding: 20px;
  width: 100%;
  height: 90px;
}

.login-submit button {
  width: 100%;
  height: 100%;
  background-color: rgba(87, 155, 233, 1);
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
}

::-webkit-input-placeholder {
  color: #c8cbcc;
}
::-moz-placeholder {
  color: #c8cbcc;
} /* firefox 19+ */
:-ms-input-placeholder {
  color: #c8cbcc;
} /* Internet Explorer 10+ */
:-moz-placeholder {
  color: #c8cbcc;
} /* firefox 14-18 */
</style>
