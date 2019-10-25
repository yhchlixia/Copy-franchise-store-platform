<template>
  <div id="refund">
    <ContentMain main-title="退款" :no-select="true">
      <template #table>
        <div class="refund-img">
          <img src="../../assets/picture-refurn.png" alt />
        </div>
        <div class="refund-form row" v-if="refundOne">
          <h4>请输入订单号进行退款</h4>
          <div class="search-input-button">
            <input type="text" v-model="tradeNum" />
            <button @click="searchTradeInfo(tradeNum)">
              <img src="../../assets/search.png" alt />
              <span>查询</span>
            </button>
          </div>
        </div>
        <div class="refund-form row" v-if="refundTwo">
          <form action id="trade-form" name="tradeInfo">
            <div>
              <h4>请输入订单号进行退款</h4>
              <div class="search-input-button">
                <input type="text" v-model="tradeNum" disabled class="input-disabled" />
                <a href>查看订单详情</a>
              </div>
            </div>
            <div class="row input-margin">
              <div class="col-sm-6 refund-tradeNum">
                <div class="row tradeNum">
                  <label for="tradeNum" class="col-sm-12">交易金额</label>
                  <input
                    type="text"
                    class="col-sm-12 input-disabled"
                    disabled
                    v-model="tradeInfo.tradeNum"
                  />
                </div>
              </div>
              <div class="col-sm-6 refund-tradeNum">
                <div class="row canNum">
                  <label for="canNum" class="col-sm-12">可退金额</label>
                  <input
                    type="text"
                    class="col-sm-12 input-disabled"
                    disabled
                    v-model="tradeInfo.canNum"
                  />
                </div>
              </div>
            </div>
            <hr class="margin-top" />
            <div class="row refund-tradeNum">
              <label for="refunfNum" class="col-sm-12">请输入退款金额</label>
              <input type="text" class="col-sm-12" v-model="tradeInfo.refundNum" />
            </div>
            <div class="row refund-tradeNum">
              <label for="refunfNum" class="col-sm-12">退款说明</label>
              <textarea class="col-sm-12 refund-remark" v-model="tradeInfo.refundRemark"></textarea>
            </div>
          </form>
        </div>
      </template>
    </ContentMain>
    <TableButton button-name="提交" v-if="refundTwo"></TableButton>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tradeNum: "",
      refundOne: true,
      refundTwo: false,
      tradeInfo: {
        tradeNum: "123",
        canNum: "123",
        refundNum: "",
        refundRemark: ""
      }
    };
  },
  methods: {
    searchTradeInfo(tradeNum) {
      console.log(tradeNum);
      this.refundOne = false;
      this.refundTwo = true;
    }
  }
};
</script>

<style>
.refund-img > img {
  width: 388px;
}

.refund-form {
  color: #526062;
  width: 50%;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: left;
}

.search-input-button {
  display: flex;
  width: 100%;
}

hr.margin-top {
  margin-top: 30px;
  border-top: 1px dashed #e3e5e6;
}

.refund-form h4 {
  width: calc(40% + 130px);
  text-align: left;
  font-size: 16px;
  margin-bottom: 15px;
}

.tradeNum {
  margin-right: 10px;
  margin-left: 0;
}

.canNum {
  margin-left: 10px;
  margin-right: 0;
}

input {
  margin-right: 30px;
  height: 36px;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #e3e5e6;
  flex: 1;
}

.refund-remark {
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #e3e5e6;
}

.search-input-button button {
  border-radius: 5px;
  width: 100px;
  height: 36px;
  border: 1px solid #e3e5e6;
  background-color: rgba(87, 155, 233, 1);
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
}

.search-input-button button > img {
  width: 20px;
}

.input-disabled {
  background-color: rgb(252, 248, 248);
}

#trade-form .refund-tradeNum {
  padding-left: 0;
  padding-right: 0;
}

#trade-form .refund-tradeNum label {
  padding-left: 0;
}

#trade-form label {
  margin-top: 15px;
  font-size: 14px;
  font-weight: normal;
}

.input-margin {
  margin: 0;
}
</style>