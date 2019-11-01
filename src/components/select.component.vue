<template>
  <div class="row">
    <label class="col-sm-12">{{ searchTitle }}</label>
    <el-select v-model="selectOne" filterable placeholder="请选择" class="col-sm-12" clearable>
      <el-option v-for="option in options" :value="option" :key="option" :label="option"></el-option>
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
    level: String
  },
  data() {
    return {
      options: [],
      selectOne: ""
    };
  },
  created() {
    this.loadSelectData();
  },
  methods: {
    loadSelectData() {
      this.axios
        .get("/index")
        .then(res => {
          console.log(res);
          this.options = res.data.Arr;
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
</style>