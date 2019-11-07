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
            <button @click="searchTradeInfo(tradeNum)" :disabled="searchDisabled">
              <img src="../../assets/search.png" alt />
              <span>查询</span>
            </button>
          </div>
        </div>
        <div class="refund-form row" v-if="refundTwo">
          <form action id="tradeInfo" name="tradeInfo">
            <div>
              <h4>请输入订单号进行退款</h4>
              <div class="search-input-button">
                <input type="text" v-model="tradeInfo.tradeNum" disabled class="input-disabled" />
                <a href>查看订单详情</a>
              </div>
            </div>
            <div class="row input-margin">
              <div class="col-sm-6 refund-tradeNum">
                <div class="row tradeNum">
                  <label for="sumNum" class="col-sm-12">交易金额</label>
                  <input
                    type="text"
                    class="col-sm-12 input-disabled"
                    disabled
                    v-model="tradeInfo.sumNum"
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
            <div
              class="row refund-tradeNum input-margin"
              :class="{'error' : $v.tradeInfo.refundNum.$error}"
            >
              <label for="refunfNum" class="col-sm-12">请输入退款金额</label>
              <input type="text" class="col-sm-12" v-model="tradeInfo.refundNum" />
              <small>
                <span v-if="!$v.tradeInfo.refundNum.required && initDisabled">退款金额不能为空</span>
                <span v-if="!$v.tradeInfo.refundNum.minValue && initDisabled">退款金额不能小于0</span>
                <span v-if="!$v.tradeInfo.refundNum.maxValue && initDisabled">退款金额不能大于可退金额</span>
              </small>
            </div>
            <div class="row refund-tradeNum input-margin">
              <label for="refunfNum" class="col-sm-12">退款说明</label>
              <textarea class="col-sm-12 refund-remark" v-model="tradeInfo.refundRemark"></textarea>
            </div>
          </form>
        </div>
      </template>
    </ContentMain>
    <TableButton button-name="提交" v-if="refundTwo" @click.native="refund(tradeInfo)"></TableButton>
  </div>
</template>
<script>
import TableButton from "../../components/table-button";
import { required, minValue, maxValue } from "vuelidate/lib/validators";
export default {
  components: {
    TableButton
  },
  data() {
    return {
      tradeNum: "",
      refundOne: true,
      refundTwo: false,
      searchDisabled: false,
      initDisabled: false,
      tradeInfo: {
        tradeNum: "",
        sumNum: "123",
        canNum: "123",
        refundNum: "",
        refundRemark: ""
      }
    };
  },
  validations: {
    tradeInfo: {
      refundNum: {
        required,
        minValue: minValue(0),
        maxValue
      }
    }
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      if (this.$route.params.orderNum) {
        this.tradeNum = this.$route.params.orderNum;
      }
    },
    searchTradeInfo(tradeNum) {
      this.tradeInfo.tradeNum = tradeNum;
      this.refundOne = false;
      this.refundTwo = true;
    },
    refund(value) {
      this.$v.tradeInfo.refundNum.$touch();
      this.initDisabled = true;
      if (value.refundNum > 0 && value.refundNum < value.canNum) {
        alert("退款成功");
      }
    }
  }
};
</script>

<style lang="less">
.error {
  color: red;
  input.col-sm-12 {
    border: 1px solid red;
  }
}
.refund-img {
  text-align: center;
}
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

#tradeInfo .refund-tradeNum {
  padding-left: 0;
  padding-right: 0;
}

#tradeInfo .refund-tradeNum label {
  padding-left: 0;
}

#tradeInfo label {
  margin-top: 15px;
  font-size: 14px;
  font-weight: normal;
}

.input-margin {
  margin: 0;
}
</style>