<template>
  <div id="add-acquirer">
    <ContentMain page="添加机构" :titles="menus">
      <template #baseInfo>
        <form action id="acquirerForm">
          <div>
            <div class="lable-title"></div>
            <label>基本信息</label>
          </div>
          <div class="baseInfo">
            <div class="row acquirer-base first-row">
              <div class="col-sm-4 row acquirer-inscode">
                <label for="insCode" class="col-sm-12">加盟店号</label>
                <input type="text" class="col-sm-12" v-model="acquirerForm.insCode" />
              </div>
              <div class="col-sm-4 row acquirer-inscode">
                <label for="insCode" class="col-sm-12">加盟店名称</label>
                <input type="text" class="col-sm-12" v-model="acquirerForm.insName" />
              </div>
              <div class="col-sm-4 row acquirer-inscode">
                <label for="insCode" class="col-sm-12">加盟店英文名称</label>
                <input type="text" class="col-sm-12" v-model="acquirerForm.insNameEN" />
              </div>
              <div class="col-sm-4 row acquirer-inscode">
                <label for="insCode" class="col-sm-12">邮箱</label>
                <input type="text" class="col-sm-12" v-model="acquirerForm.email" />
              </div>
            </div>
          </div>
          <div>
            <div class="lable-title"></div>
            <label>交易信息</label>
          </div>
          <div class="baseInfo">
            <div class="row acquirer-base first-row">
              <SelectComponent
                limit="1000"
                ref="acquirer"
                @onSelect="onAcquirer"
                class="col-sm-4"
                channel="UPI"
                search-title="加盟店"
              ></SelectComponent>
              <SelectComponent
                limit="1000"
                ref="acquirer"
                @onSelect="onAcquirer"
                class="col-sm-4"
                channel="ALP"
                search-title="加盟店"
              ></SelectComponent>
              <SelectComponent
                limit="1000"
                ref="acquirer"
                @onSelect="onAcquirer"
                class="col-sm-4"
                channel="WXP"
                search-title="加盟店"
              ></SelectComponent>
              <SelectComponent
                limit="1000"
                ref="acquirer"
                @onSelect="onAcquirer"
                class="col-sm-4"
                channel="LNP"
                search-title="加盟店"
              ></SelectComponent>
              <SelectComponent
                limit="1000"
                ref="acquirer"
                @onSelect="onAcquirer"
                class="col-sm-4"
                channel="PPY"
                search-title="加盟店"
              ></SelectComponent>
              <SelectComponent
                limit="1000"
                ref="acquirer"
                @onSelect="onAcquirer"
                class="col-sm-4"
                channel="DCM"
                search-title="加盟店"
              ></SelectComponent>
            </div>
          </div>
        </form>
      </template>
    </ContentMain>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menus: [
        {
          path: "/acquirer/list",
          title: "加盟店"
        },
        {
          title: "创建加盟店"
        }
      ],
      acquirerForm: {}
    };
  }
};
</script>
<style lang="less" scoped>
#add-acquirer {
  .lable-title {
    width: 5px;
    height: 14px;
    background-color: orange;
    display: inline-block;
    margin-right: 10px;
  }
  .baseInfo {
    .acquirer-base {
      margin: 20px -15px 0;
      padding: 0;
      label {
        padding: 0;
      }
    }
    .first-row {
      .acquirer-inscode {
        margin-bottom: 20px;
        label {
          font-weight: normal;
          font-size: 14px;
        }
      }
    }
  }
}
</style>