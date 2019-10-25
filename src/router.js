import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import BaseInfo from "./views/baseInfo/index.vue";
import TradeStatic from "./views/trade/trade-static.vue";
import TradeList from "./views/trade/trade-list.vue";
import Refund from "./views/refund/refund.vue";
import AcquirerList from "./views/config/acquirer/acquirer-list";
import AgentList from "./views/config/agent/agent-list";
import MerchantList from "./views/config/merchant/merchant-list";
import StoreList from "./views/config/store/store-list";
import AuditList from "./views/audit/audit-list";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/baseInfo",
      name: "baseInfo",
      redirect: "/trade/list"
    },
    {
      path: "/trade",
      name: "trade",
      component: BaseInfo,
      children: [
        {
          path: "/trade/list",
          name: "tradeList",
          component: TradeList
        },
        {
          path: "/trade/static",
          name: "tradeStatic",
          meta: {
            requireAuth: true // 判断是否需要登录
          },
          component: TradeStatic
        },
        {
          path: "/trade/refund",
          name: "refund",
          meta: {
            requireAuth: true // 判断是否需要登录
          },
          component: Refund
        }
      ]
    },
    {
      path: "/acquirer",
      name: "acquirer",
      component: BaseInfo,
      children: [
        {
          path: "/config/acquirer/list",
          name: "acquirerList",
          component: AcquirerList
        }
      ]
    },
    {
      path: "/agent",
      name: "agent",
      component: BaseInfo,
      children: [
        {
          path: "/config/agent/list",
          name: "agentList",
          component: AgentList
        }
      ]
    },
    {
      path: "/merchant",
      name: "merchant",
      component: BaseInfo,
      children: [
        {
          path: "/config/merchant/list",
          name: "merchantList",
          component: MerchantList
        }
      ]
    },
    {
      path: "/store",
      name: "store",
      component: BaseInfo,
      children: [
        {
          path: "/config/store/list",
          name: "storeList",
          component: StoreList
        }
      ]
    },
    {
      path: "/audit",
      name: "audit",
      component: BaseInfo,
      children: [
        {
          path: "/audit/list",
          name: "auditList",
          component: AuditList
        }
      ]
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});
