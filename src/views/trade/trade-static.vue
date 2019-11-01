<template>
  <div id="trade-static">
    <ContentMain main-title="交易统计">
      <template #header>
        <div>
          <form action id="trade-static-form">
            <div class="row">
              <SelectComponent class="col-sm-3" search-title="交易时间"></SelectComponent>
              <SelectComponent class="col-sm-3" search-title="汇总维度"></SelectComponent>
              <SelectComponent class="col-sm-3" search-title="交易币种"></SelectComponent>
              <div class="col-sm-3 search">
                <img
                  :src="showStaticHigh ? src1 : src2"
                  class="search-img"
                  alt
                  @click="showStaticHigh = !showStaticHigh"
                />
                <span @click="showStaticHigh = !showStaticHigh">高级查询</span>
                <button class="search-button">
                  <img src="../../assets/search.png" alt />
                  <span>查询</span>
                </button>
              </div>
            </div>
            <div v-if="showStaticHigh" class="height-search">
              <div class="row">
                <SelectComponent class="col-sm-3" search-title="交易品牌"></SelectComponent>
                <SelectComponent class="col-sm-3" level="acquirer" search-title="机构"></SelectComponent>
                <SelectComponent class="col-sm-3" level="agent" search-title="集团"></SelectComponent>
              </div>
              <div class="row">
                <SelectComponent class="col-sm-3" level="merchant" search-title="商户"></SelectComponent>
                <SelectComponent class="col-sm-3" level="store" search-title="门店"></SelectComponent>
              </div>
            </div>
          </form>
        </div>
      </template>
      <template #table>
        <el-table
          :data="tradeStaticData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
          style="width: 100%"
          class="table-width"
        >
          <el-table-column prop="intStoreCode" label="加盟店代码"></el-table-column>
          <el-table-column prop="insName" label="加盟店名称"></el-table-column>
          <el-table-column prop="totalTransNum" label="收款笔数"></el-table-column>
          <el-table-column prop="totalTransAmt" label="收款金额"></el-table-column>
          <el-table-column prop="totalRefundNum" label="退款笔数"></el-table-column>
          <el-table-column prop="totalRefundAmt" label="退款金额"></el-table-column>
          <el-table-column prop="totalNum" label="总计笔数"></el-table-column>
          <el-table-column prop="totalAmt" label="总计金额"></el-table-column>
        </el-table>
        <!-- <div class="pagegination">
          <el-pagination
            background
            @current-change="handleCurrentChange"
            layout="prev, pager, next"
            :current-page="currentPage"
            :page-size="pageSize"
            :total="total"
          ></el-pagination>
        </div> -->
      </template>
    </ContentMain>
    <!-- <h1>welcom</h1>
    <form action>
      <label>name</label>
      <input v-model.lazy="username" type="text" />
      {{ username }}
      <label>password</label>
      <input v-model="password" type="password" />
      <button v-on:keyup.enter="submit(username)" @click="submit(username)">提交</button>
      <div>
        <button :disabled="isDisabled" :title="message">1+1</button>
        <p>{{ resverString }}</p>
        <p>
          <span v-html="msg"></span>
        </p>
      </div>
      <div>
        <p>{{ number + 1 }}</p>
        <p v-if="see || seeOne" :class="{ bgcolor: see, 'text-danger': see }">世界那么大，我想去看看</p>
        <button @click="isSee">{{ show }}</button>
      </div>
      <div>{{ now }}</div>
    </form>
    <div>
      <ul>
        <li v-for="item in items" :key="item">{{ item }}</li>
      </ul>
      <ul>
        <li v-for="(value, key) in object" :key="value">{{ key + " " + value }}</li>
      </ul>
      <button @click="counter += 1">add 1</button>
      <p>你点击的次数是：{{ counter }}</p>
    </div>
    <div>
      <input type="radio" v-model="picked" name="one" value="one" id="one" />
      <input type="radio" v-model="picked" name="two" value="two" id="two" />
      <p>{{ picked }}</p>
      <input type="checkbox" v-model="checkboxOne" />
      {{ checkboxOne }}
      <select v-model="selected">
        <option v-for="option in options" :key="option">{{ option }}</option>
      </select>
      <select v-model="selectedOne">
        <option
          v-for="option in optionsOne"
          :key="option.text"
          :value="option.value"
        >{{ option.text }}</option>
      </select>
      <p>{{ selectedOne }}</p>
    </div>
    <HelloWorld msg-title="yhch" />
    <computed></computed>
    <computed></computed>
    <div>
        <button v-for="tab in tabs" :key="tab" @click="currentTab = tab">{{ tab }}</button>
        <component v-bind:is="currentTabComponent"></component>
    </div>-->
  </div>
</template>
<script>
export default {
  name: "static",
  data() {
    return {
      tradeStaticData: [],
      condition: {
        aggregationDimension: "institution",
        currency: "JPY",
        endTime: "2019-11-02T00:00:00+08:00",
        page: 1,
        paymentBrand: "",
        size: 20,
        startTime: "2019-11-01T00:00:00+08:00",
        utcOffset: 480
      },
      username: "",
      password: "",
      showStaticHigh: false,
      src1: require("../../assets/icon_hidden.png"),
      src2: require("../../assets/icon_show.png"),
      msg: "<button>1+1</button>",
      isDisabled: true,
      message: "test",
      number: 4,
      show: "点亮",
      see: false,
      items: ["yhch", "guop", "fy"],
      object: {
        name: "yhch",
        birth: "0903",
        age: 22
      },
      counter: 0,
      picked: "",
      checkboxOne: "",
      options: ["A", "B", "C"],
      selectedOne: "A",
      optionsOne: [
        {
          text: "one",
          value: "A"
        },
        {
          text: "two",
          value: "B"
        },
        {
          text: "three",
          value: "C"
        }
      ],
      tabs: ["HelloWorld", "computed"],
      currentTab: "HelloWorld"
    };
  },
  computed: {
    currentTabComponent: function() {
      return this.currentTab;
    },
    resverString: function() {
      return this.msg
        .split("")
        .reverse()
        .join("");
    },
    now: function() {
      return Date.now();
    },
    seeOne: function() {
      if (this.selectedOne === "B") {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.tradeStaticList(this.condition);
    },
    tradeStaticList(condition) {
      this.$api.trade
        .tradeStaticList(condition)
        .then(resp => {
          this.tradeStaticData = resp.data.data;
          this.total = resp.data.total;
          console.log(this.tradeStaticData);
        })
        .catch(err => {
          console.log(err);
        });
    },
    submit(user) {
      alert(user);
    },
    isSee() {
      if (!this.see) {
        this.see = true;
        this.show = "隐藏";
      } else {
        this.see = false;
        this.show = "点亮";
      }
    }
  }
};
</script>
<style lang="less" scoped>
#trade-static {
  #trade-static-form {
    .row {
      .col-sm-3 {
        padding-right: 30px;
        padding-left: 0;
        color: rgba(141, 149, 153, 1);
        font-size: 14px;
        font-weight: 400px;
      }
      .search {
        padding-top: 25px;
        text-align: right;
        padding-right: 0;
        .search-img {
          width: 15px;
          height: 15px;
        }
        .search-button {
          width: 100px;
          height: 36px;
          background-color: rgba(87, 155, 233, 1);
          border-radius: 5px;
          color: #fff;
          border: 1px solid rgba(87, 155, 233, 1);
          margin-left: 15px;
          img {
            width: 20px;
          }
        }
      }
    }
    .height-search {
      .row {
        margin-top: 12px;
      }
    }
  }
}
</style>
