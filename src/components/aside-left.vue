<template>
  <div class="aside">
    <ul>
      <li class="aside-bar">
        <img src="../assets/icon_setup.png" alt />
        <span>设置</span>
        <img
          :src="showConfigMenu ? src1 : src2"
          alt
          class="aside-menu-show"
          @click="showConfigMenu = !showConfigMenu"
        />
      </li>
      <div v-if="showConfigMenu">
        <li v-for="menu in menusConfig" :key="menu.id" class="aside-li">
          <router-link :to="menu.url" class="router-link">
            {{ menu.name }}
          </router-link>
        </li>
      </div>
    </ul>
    <ul>
      <li class="aside-bar">
        <img src="../assets/icon_setup.png" alt />
        <span>交易查询</span>
        <!-- <img
          src="../assets/icon_hidden.png"
          alt
          class="aside-menu-show"
          @click="showTradeMenu = !showTradeMenu"
          v-if="showTradeMenu"
        />
        <img
          src="../assets/icon_show.png"
          alt
          class="aside-menu-show"
          @click="showTradeMenu = !showTradeMenu"
          v-if="!showTradeMenu"
        />-->
        <img
          :src="showTradeMenu ? src1 : src2"
          alt
          class="aside-menu-show"
          @click="showTradeMenu = !showTradeMenu"
        />
      </li>
      <div v-if="showTradeMenu">
        <li v-for="menu in menusTrade" :key="menu.id" class="aside-li">
          <router-link :to="menu.url" class="router-link">
            {{ menu.name }}
          </router-link>
        </li>
      </div>
    </ul>
    <ul>
      <li class="aside-bar">
        <img src="../assets/icon_setup.png" alt />
        <span>审核</span>
        <img
          :src="showAuditMenu ? src1 : src2"
          alt
          class="aside-menu-show"
          @click="showAuditMenu = !showAuditMenu"
        />
      </li>
      <div v-if="showAuditMenu">
        <li v-for="menu in menusAudit" :key="menu.id" class="aside-li">
          <router-link :to="menu.url" class="router-link">
            {{ menu.name }}
          </router-link>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTradeMenu: true,
      showConfigMenu: true,
      showAuditMenu: true,
      src1: require("../assets/icon_hidden.png"),
      src2: require("../assets/icon_show.png"),
      menusTrade: [
        {
          id: 1,
          name: "交易列表",
          url: "/trade/list"
        },
        {
          id: 2,
          name: "交易统计",
          url: "/trade/static"
        },
        {
          id: 3,
          name: "退款",
          url: "/trade/refund"
        }
      ],
      menusConfig: [
        {
          id: 1,
          name: "机构",
          url: "/acquirer/list"
        },
        {
          id: 2,
          name: "集团",
          url: "/agent/list"
        },
        {
          id: 3,
          name: "商户",
          url: "/merchant/list"
        },
        {
          id: 4,
          name: "门店",
          url: "/store/list"
        }
      ],
      menusAudit: [
        {
          id: 1,
          name: "审核",
          url: "/audit/list"
        }
      ]
    };
  }
};
</script>

<style>
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

ul > div > li.aside-li {
  height: 48px;
  text-align: left;
}

ul {
  margin-bottom: 30px;
}

.aside {
  width: 200px;
  height: calc(100vh - 80px);
  position: absolute;
  left: 20px;
  background-color: #fff;
  padding: 20px 0;
  border-radius: 5px;
}

.aside-bar {
  font-size: 16px;
  font-weight: bold;
  height: 48px;
  text-align: left;
  padding-left: 20px;
}

.aside-bar img {
  margin-right: 3px;
}

.aside-menu-show {
  position: absolute;
  right: 20px;
  width: 15px;
  height: 15px;
}

.router-link {
  color: #8d9599;
  text-decoration: none;
  font-size: 14px;
  text-align: left;
  display: block;
  width: 100%;
  height: 100%;
  padding: 8px 10px 8px 43px;
}

.router-link:hover {
  color: rgba(87, 155, 233, 1);
  text-decoration: none;
  font-weight: bold;
}

.router-link-exact-active {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  background-image: url(../assets/siderbar_bg.png);
  background-size: 98%;
}

.router-link-exact-active:hover {
  color: #fff;
}

.router-link-exact-active:visited {
  text-decoration: none;
  color: #fff;
}

.router-link-exact-active:active {
  text-decoration: none;
}
</style>