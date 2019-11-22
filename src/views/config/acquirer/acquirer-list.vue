<template>
  <div id="acquirer">
    <ContentMain main-title="机构">
      <template #header>
        <div class="row">
          <SelectComponent
            limit="1000"
            ref="acquirer"
            @onSelect="onAcquirer"
            class="col-sm-3"
            level="acquirer"
            search-title="加盟店"
          ></SelectComponent>
          <div class="col-sm-3"></div>
          <div class="col-sm-3"></div>
          <div class="col-sm-3 search">
            <button class="search-button" style="width:140px" @click="toAddAcquirer(condition)" type="button">
              <img src="../../../assets/add.png" alt />
              <span>添加机构</span>
            </button>
            <button class="search-button" @click="searchAcquirer(condition)" type="button">
              <img src="../../../assets/search.png" alt />
              <span>查询</span>
            </button>
          </div>
        </div>
      </template>
      <template #table>
        <el-table :data="tableData" style="width: 100%" class="table-width">
          <el-table-column label="加盟店号">
            <template slot-scope="scope">
              <a @click="acquirerDetails(scope.row)">{{ scope.row.insCode }}</a>
            </template>
          </el-table-column>
          <el-table-column prop="insName" label="加盟店名称"></el-table-column>
          <el-table-column label="操作" width="160px">
            <div class="delete-img">
              <img src="../../../assets/delete.png" alt="">
            </div>
          </el-table-column>
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
      </template>
    </ContentMain>
  </div>
</template>
<script>
export default {
  data() {
    return {
      condition: {
        insCode: "",
        insName: "",
        page: 1,
        total: 1,
        size: 20,
      },
      currentPage: 1,
      pageSize: 20,
      total: 1,
      tableData: []
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    loadData() {
      console.log(this.$store.state.userInfo);
      this.searchAcquirer(this.condition);
    },
    toAddAcquirer() {
      this.$router.push({ path: "/acquirer/add" });
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      this.condition.page = this.currentPage;
      this.searchAcquirer(this.condition);
    },
    handleClose() {
      this.dialogVisible = false;
    },
    onAcquirer(value) {
      this.condition.insCode = value.code;
    },
    acquirerDetails(insCode) {

    },
    searchAcquirer(condition) {
      this.$api.acquirer.searchAcquirer(condition).then((res) => {
        this.tableData = res.data;
        this.total = res.total;
      })
    }
  }
};
</script>
<style lang="less" scoped>
#acquirer {
  .row {
    padding-left: 0;
    padding-right: 0;
    .col-sm-3 {
      .search-button {
        width: 100px;
        height: 36px;
        background-color: rgba(87, 155, 233, 1);
        border-radius: 5px;
        color: #fff;
        border: 1px solid rgba(87, 155, 233, 1);
        float: right;
        img {
          width: 16px;
          margin-right: 10px;
        }
      }
    }
    .search {
      margin-top: 25px;
      padding: 0;
      .search-button {
        margin-left: 20px;
      }
    }
  }
  .pagegination {
    text-align: right;
    margin-top: 15px;
  }
  .delete-img {
    img {
      height: 20px;
    }
  }
}
</style>