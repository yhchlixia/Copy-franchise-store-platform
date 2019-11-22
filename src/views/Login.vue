<template>
  <div id="login" class="row">
    <Header></Header>
    <!-- <div class="loginImg col-sm-6">
    </div>-->
    <div class="col-sm-12">
      <form action id="loginForm">
        <div class="login-form-title">{{ $t("common.welcome") }}</div>
        <div class="row login-label-input" :class="{'error': $v.loginForm.username.$error}">
          <label
            for="username"
            name="username"
            class="col-sm-12 login-label"
          >{{ $t("common.username") }}</label>
          <input
            type="text"
            class="login-input"
            :placeholder="$t('common.PLEASE_INPUT_USERNAME')"
            v-model="loginForm.username"
          />
        </div>
        <div class="row login-label-input" :class="{'error': $v.loginForm.password.$error}">
          <label
            for="password"
            name="password"
            class="col-sm-12 login-label"
          >{{ $t("common.password") }}</label>
          <input
            type="password"
            class="login-input"
            :placeholder="$t('common.PLEASE_INPUT_PASSWORD')"
            v-model.trim="loginForm.password"
            @keyup.enter="submit(loginForm)"
          />
        </div>
        <div class="login-submit">
          <button type="button" @click="submit(loginForm)">{{ $t("common.login") }}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "../components/header.component";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import { JSEncrypt } from "jsencrypt";
export default {
  components: {
    Header
  },
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
  validations: {
    loginForm: {
      username: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(20)
      },
      password: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(32)
      }
    }
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      window.sessionStorage.removeItem("data");
      window.sessionStorage.removeItem("access_token");
    },
    submit(request) {
      if (this.loginForm.username === "" || this.loginForm.password === "") {
        this.$v.loginForm.username.$touch();
        this.$v.loginForm.password.$touch();
        alert("请输入用户名或密码");
      } else {
        request.password = this.encrypt(request.password);
        this.$api.user.toLogin(request).then(response => {
          if (response.data && response.status === 0) {
            var see = window.sessionStorage;
            var d = JSON.stringify(this.loginForm);
            see.setItem("data", d);
            this.$router.push({ path: "/baseInfo" });
            this.user = response.data.user;
            this.$store.commit("getUserInfo", this.user);
            return response;
          } else {
            switch (response.status) {
              case 400:
                this.$message({
                  message: this.$t("message.username_password_error"),
                  type: "error",
                  center: true,
                  customClass: "location-message"
                });
                break;
              default:
                this.$message({
                  message: this.$t("message.system_error"),
                  type: "error",
                  center: true,
                  customClass: "location-message"
                });
                break;
            }
          }
        });
      }
    },
    // RSA加密算法
    encrypt(plainText) {
      const key =
        "-----BEGIN PUBLIC KEY-----\n" +
        "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhrRPcJHxJaOD9yJyJTNc\n" +
        "Gxh7crjROOq0TAyvWJqb3eIhoR317lzva/jCn8V9yxg5FoutNnQg7u7e8W+UCJD4\n" +
        "I8QgGGXVpru6qjAJpVntT5wv3lc6YruBNJI5M8ZbAg7AXd3AzVyhVZ0CujlLMQAf\n" +
        "H9XPHS05MWB2bFw28hPf5ABKN8Vkv2wrkRnTltnMKEBH58/05gl1x5loKzasfYLt\n" +
        "3U0UFZKK5X0tb/IXb7KScxgao+o0RwM+Vp8BXrhn7Pi+hKnIRDt/AguU3q8W+rh/\n" +
        "zorVSa/sKh+CQezIyB4LiDW+JsJfD2chZFw3QleYNUnQPbYI6Hz13x0VngowxQsa\n" +
        "QwIDAQAB\n" +
        "-----END PUBLIC KEY-----";

      const rsa = new JSEncrypt();
      rsa.setPublicKey(key);
      return rsa.encrypt(plainText);
    }
  }
};
</script>

<style lang="less">
.location-message.el-message {
  left: 89%;
}
</style>

<style lang="less" scoped>
.error {
  color: red;
  input {
    border: 1px solid red;
  }
}
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
  text-align: center;
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
