<template>
  <div class="row">
    <label class="col-sm-12">{{ searchTitle }}</label>
    <el-select
      v-model="value"
      :change="selectOption(value)"
      @visible-change="optionWidth"
      id="select"
      filterable
      placeholder="请选择"
      class="col-sm-12"
      clearable
    >
      <el-option v-for="option in options" :value="option.name" :key="option.code">
        <label for="option" class="selectLabel">{{ option.name }}</label>
        <span>{{ option.code }}</span>
      </el-option>
    </el-select>
    <!-- <select v-model="selectOne" class="col-sm-12">
      <option v-for="option in options" :value="option.value" :key="option">{{ option }}</option>
    </select>-->
  </div>
</template>
<script>
export default {
  props: {
    searchTitle: String,
    level: String,
    limit: String
  },
  data() {
    return {
      options: [],
      filter: {},
      value: "",
      selected: {},
      width: ""
    };
  },
  created() {
    this.loadSelectData();
  },
  watch: {
    width() {
      this.optionWidth();
    }
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.width = document.body.clientWidth;
        that.width = window.width;
      })();
    };
  },
  methods: {
    selectOption(value) {
      this.options.forEach(item => {
        if (item.name === value) {
          this.selected = item;
          this.$emit("onSelect",this.selected);
        }
      });
    },
    loadSelectData() {
      this.refreshData();
    },
    optionWidth() {
      var width = document.getElementById("select").offsetWidth;
      this.width = width + "px";
      document.getElementsByClassName(
        "el-select-dropdown"
      )[0].style.width = this.width;
    },
    generateParams(level = "", filter) {
      if (level === "") {
        throw new Error("Invalid Level");
      }
      const params = {};

      switch (level) {
        case "acquirer":
          params.colName = "mInstitution";
          params.codeField = "mInsCode";
          params.nameField = "mInsName";
          break;
        case "agent":
          params.colName = "mAgent";
          params.codeField = "mAgentCode";
          params.nameField = "mAgentName";
          break;
        case "merchant":
          params.colName = "mMerchant";
          params.codeField = "mMerNum";
          params.nameField = "mMerName";
          break;
        case "store":
          params.colName = "mStore";
          params.codeField = "mStoreNum";
          params.nameField = "mStoreDetail.mStoreName";
          break;
        case "merchantAudit":
          params.colName = "mMerchant";
          params.codeField = "mMerNum";
          params.nameField = "mMerName";
          params.parentColName = "tenantDraft";
          break;
        case "storeAudit":
          params.colName = "mStore";
          params.codeField = "mStoreNum";
          params.nameField = "mStoreDetail.mStoreName";
          params.parentColName = "tenantDraft";
          break;
        default:
          throw new Error("Invalid Level");
      }

      if (filter) {
        params.filterMap = filter;
      }

      return params;
    },
    refreshData(keyword = "") {
      const params = this.generateParams(this.level, this.filter);
      this.$api.componentService
        .sendRequest(params, keyword, this.limit)
        .then(response => {
          this.options = response;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="less" scoped>
.row {
  label.col-sm-12 {
    padding: 0;
    color: #525a66;
    font-size: 14px;
    font-weight: normal;
  }
  .el-select {
    height: 36px;
    font-size: 14px;
    font-weight: normal;
    color: #525a66;
    bottom: 1px solid #e3e5e6;
    padding: 0;
    border-radius: 5px;
    .el-select-dropdown__item.selected,
    .el-select-dropdown__item.selected:hover,
    .el-select-dropdown__item.selected:active,
    .el-select-dropdown__item.selected:visited {
      color: #525a66;
      font-weight: normal;
    }
  }
}
.selectLabel {
  margin-right: 20px;
}
</style>