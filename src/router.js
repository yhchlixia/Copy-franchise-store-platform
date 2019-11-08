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
          path: "list",
          name: "tradeList",
          meta: {
            requireAuth: true // 该路由项需要权限校验
          },
          component: TradeList
        },
        {
          path: "static",
          name: "tradeStatic",
          meta: {
            requireAuth: true // 判断是否需要登录
          },
          component: TradeStatic
        },
        {
          path: "refund",
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
          path: "list",
          name: "acquirerList",
          meta: {
            requireAuth: true // 该路由项需要权限校验
          },
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
          path: "list",
          name: "agentList",
          meta: {
            requireAuth: true // 该路由项需要权限校验
          },
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
          path: "list",
          name: "merchantList",
          meta: {
            requireAuth: true // 该路由项需要权限校验
          },
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
          path: "list",
          name: "storeList",
          meta: {
            requireAuth: true // 该路由项需要权限校验
          },
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
          path: "list",
          name: "auditList",
          meta: {
            requireAuth: true // 该路由项需要权限校验
          },
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
