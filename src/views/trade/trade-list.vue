<template>
  <div id="trade-list">
    <ContentMain main-title="交易查询">
      <template #header>
        <div>
          <form action id="trade-search-form">
            <div class="row">
              <div class="col-sm-3">
                <label for="tradeTime" class="col-sm-12">交易时间</label>
                <dateComponent id="allWidth" ref="searchTime" :init-time="time" :picker-options="pickerOptions"></dateComponent>
              </div>
              <div class="col-sm-3 row">
                <label for="orderNum" class="col-sm-12">订单号</label>
                <input type="text" class="col-sm-12" v-model="condition.orderNum" />
              </div>
              <SelectComponent class="col-sm-3" v-if="showConfigMenu" search-title="交易渠道"></SelectComponent>
              <div class="col-sm-3 search">
                <img
                  :src="showConfigMenu ? src1 : src2"
                  class="search-img"
                  alt
                  @click="showConfigMenu = !showConfigMenu"
                />
                <span @click="showConfigMenu = !showConfigMenu">高级查询</span>
                <button class="search-button" @click="searchTrade" type="button">
                  <img src="../../assets/search.png" alt />
                  <span>查询</span>
                </button>
              </div>
            </div>
            <div v-if="showConfigMenu" class="height-search">
              <div class="row">
                <SelectComponent class="col-sm-3" search-title="交易场景"></SelectComponent>
                <div class="col-sm-3 row">
                  <label class="col-sm-12">状态</label>
                  <el-select
                    v-model="statusOne"
                    filterable
                    placeholder="请选择"
                    class="col-sm-12"
                    clearable
                  >
                    <el-option
                      v-for="statu in statusList"
                      :value="statu"
                      :key="statu.key"
                      :label="statu.value"
                    ></el-option>
                  </el-select>
                </div>
                <SelectComponent class="col-sm-3" limit="1000" level="acquirer" search-title="加盟店"></SelectComponent>
              </div>
              <div class="row">
                <SelectComponent class="col-sm-3" limit="50" level="agent" search-title="集团"></SelectComponent>
                <SelectComponent class="col-sm-3" limit="50" level="merchant" search-title="商户"></SelectComponent>
                <SelectComponent class="col-sm-3" limit="50" level="store" search-title="门店"></SelectComponent>
              </div>
              <div class="row">
                <div class="col-sm-3 row">
                  <label for="terminal" class="col-sm-12">终端</label>
                  <input type="text" class="col-sm-12" v-model="condition.terminal" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </template>
      <template #table>
        <el-table :data="tableData" style="width: 100%" class="table-width">
          <el-table-column label="订单号">
            <template slot-scope="scope">
              <a @click="tradeDetails(scope.row)">{{ scope.row.orderNum }}</a>
            </template>
          </el-table-column>
          <el-table-column prop="storeName" label="门店名称"></el-table-column>
          <el-table-column prop="transTime" :formatter="prettifyDateStr" label="交易时间"></el-table-column>
          <el-table-column prop="tradeScene" label="交易场景"></el-table-column>
          <el-table-column prop="paymentBrand" label="支付品牌"></el-table-column>
          <el-table-column prop="transAmt" label="交易金额"></el-table-column>
          <el-table-column prop="transStatus" label="状态"></el-table-column>
          <el-table-column prop="respcd" label="应答码"></el-table-column>
        </el-table>
        <div class="pagegination">
          <el-pagination
            background
            @current-change="handleCurrentChange"
            layout="prev, pager, next"
            :current-page="currentPage"
            :page-size="pageSize"
            :total="total"
          ></el-pagination>
        </div>
        <el-dialog
          title="订单详情"
          :visible.sync="dialogVisible"
          width="30%"
          :before-close="handleClose"
        >
          <el-form :model="tradeForm" class="demo-ruleForm" id="tradeForm">
            <el-form-item prop="orderNum">
              <label>订单号</label>
              <el-input v-model="tradeForm.orderNum" disabled></el-input>
            </el-form-item>
            <el-form-item prop="merName">
              <label>商户</label>
              <el-input v-model="tradeForm.merName" disabled></el-input>
            </el-form-item>
            <el-form-item prop="storeName">
              <label>门店</label>
              <el-input v-model="tradeForm.storeName" disabled></el-input>
            </el-form-item>
            <el-form-item prop="orderNum">
              <label>楼层</label>
              <el-input v-model="tradeForm.orderNum" disabled></el-input>
            </el-form-item>
            <el-form-item prop="terminalid">
              <label>终端编号</label>
              <el-input v-model="tradeForm.terminalid" disabled></el-input>
            </el-form-item>
            <el-form-item prop="nickName">
              <label>用户名</label>
              <el-input v-model="tradeForm.nickName" disabled></el-input>
            </el-form-item>
            <el-form-item prop="orderNum">
              <label>交易场景</label>
              <el-input v-model="tradeForm.orderNum" disabled></el-input>
            </el-form-item>
            <el-form-item prop="transStatus">
              <label>状态</label>
              <el-input v-model="tradeForm.transStatus" disabled></el-input>
            </el-form-item>
            <el-form-item prop="transAmt">
              <label>交易金额</label>
              <el-input v-model="tradeForm.transAmt" disabled></el-input>
            </el-form-item>
            <el-form-item prop="paymentBrand">
              <label>支付品牌</label>
              <el-input v-model="tradeForm.paymentBrand" disabled></el-input>
            </el-form-item>
            <el-form-item prop="transTime">
              <label>交易时间</label>
              <el-input v-model="tradeForm.transTime" disabled></el-input>
            </el-form-item>
            <el-form-item prop="chanOrderNum">
              <label>渠道订单号</label>
              <el-input v-model="tradeForm.chanOrderNum" disabled></el-input>
            </el-form-item>
            <el-form-item prop="sysOrderNum">
              <label>网关订单号</label>
              <el-input v-model="tradeForm.sysOrderNum" disabled></el-input>
            </el-form-item>
            <el-form-item prop="origOrderNum">
              <label>原订单号</label>
              <el-input v-model="tradeForm.origOrderNum" disabled></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <tableButton
              button-name="加盟店退款"
              style="margin-bottom: 20px;"
              @click.native="toRefund(tradeForm.orderNum)"
            ></tableButton>
          </span>
        </el-dialog>
      </template>
    </ContentMain>
  </div>
</template>
<script>
import tableButton from "../../components/table-button";
import dateComponent from "../../components/date.component";
import moment from "moment";
export default {
  name: "about",
  components: {
    tableButton,
    dateComponent
  },
  data() {
    return {
      statusOne: "",
      statusList: [{
        key: 0,
        value: "成功"
      },{
        key: 2,
        value: "失败"
      },{
        key: 5,
        value: "处理中"
      },{
        key: 9,
        value: "超时"
      }],
      time: [],
      pickerOptions: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              const startTime = moment().format("YYYY-MM-DDT00:00:00+08:00");
              const endTime = moment().format("YYYY-MM-DDT23:59:59+08:00");
              picker.$emit("pick", [startTime, endTime]);
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const end = moment()
                .subtract(1, "days")
                .format("YYYY-MM-DDT23:59:59+08:00");
              const start = moment()
                .subtract(1, "days")
                .format("YYYY-MM-DDT00:00:00+08:00");
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "本月",
            onClick(picker) {
              const end = moment().format("YYYY-MM-DDT23:59:59+08:00");
              const start = moment().format("YYYY-MM-01T00:00:00+08:00");
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      dialogVisible: false,
      currentPage: 1,
      pageSize: 20,
      total: 1,
      condition: {
        endTime: "",
        page: 1,
        paymentBrand: "",
        procFlag: "",
        size: 20,
        startTime: "",
        transScene: "",
        utcOffset: moment().utcOffset()
      },
      show: true,
      msg: "welcome",
      showConfigMenu: false,
      src1: require("../../assets/icon_hidden.png"),
      src2: require("../../assets/icon_show.png"),
      options: [],
      tableData: [],
      tradeForm: {}
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    tradeDetails(tradeInfo) {
      this.dialogVisible = true;
      this.tradeForm = tradeInfo;
    },
    loadData() {
      console.log(
        moment()
          .subtract(1, "days")
          .format()
      );
      this.searchTrade();
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      this.condition.page = this.currentPage;
      this.searchTrade();
    },
    handleClose() {
      this.dialogVisible = false;
    },
    toRefund(orderNum) {
      this.$router.push({ name: "refund", params: { orderNum: orderNum } });
    },
    prettifyDateStr(row, column) {
      var newDate = row[column.property];
      if (newDate === undefined) {
        return "";
      }
      return moment(newDate).format("YYYY-MM-DD HH:mm:ss");
    },
    searchTrade() {
      if (this.condition.startTime !== "") {
        this.time = this.$refs.searchTime.initTime;
        this.condition.startTime = this.time[0];
        this.condition.endTime = this.time[1];
      } else {
        this.condition.startTime = moment().format("YYYY-MM-DDT00:00:00+08:00");
        this.condition.endTime = moment().format("YYYY-MM-DDT23:59:59+08:00");
      }
      this.$api.trade.tradeList(this.condition).then(resp => {
        this.tableData = resp.data.data;
        this.total = resp.data.total;
      });
    }
  }
};
</script>
<style lang="less" scoped>
#trade-list {
  #trade-search-form {
    .row {
      .col-sm-3 {
        padding-right: 30px;
        padding-left: 0;
        color: rgba(141, 149, 153, 1);
        font-size: 14px;
        font-weight: 400;
        label {
          padding: 0;
          font-weight: 400;
          color: #525a66;
        }
        input {
          height: 40px;
          font-weight: 400;
          color: #606266;
        }
      }
      .search {
        padding-top: 25px;
        text-align: right;
        padding-right: 0;
        float: right;
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
        .row {
          padding-left: 0;
          padding-right: 30px;
          .col-sm-12 {
            padding-left: 0;
            padding-right: 0;
          }
        }
      }
    }
  }
}

.pagegination {
  text-align: right;
  margin-top: 15px;
}
</style>
<style>
.el-dialog {
  height: 855px;
  margin-top: 8vh !important;
  /* overflow: auto; */
}
#tradeForm {
  width: 98%;
  overflow: auto;
  height: 666px;
  padding-right: 30px;
}
.el-input > .el-input__inner {
  height: 36px;
  line-height: 36px;
}
.el-form-item__content > label {
  line-height: 30px;
}
.el-dialog .el-dialog__body {
  padding-bottom: 0;
  padding-right: 0;
}
.el-dialog .el-dialog__footer {
  width: 100%;
  height: 85px;
  padding: 0 20px;
  box-shadow: 2px 0 8px 0 #8faeb3;
}

.el-dialog__header {
  box-shadow: 2px 0 8px 0 #8faeb3;
  padding-bottom: 30px !important;
}
#allWidth {
  width: 100%;
}
</style>
