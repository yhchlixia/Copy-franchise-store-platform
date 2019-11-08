<template>
  <div id="acquirer">
    <ContentMain main-title="机构">
      <template #header>
        <div class="row">
          <SelectComponent
            class="col-sm-3"
            level="acquirer"
            search-title="加盟店"></SelectComponent>
        </div>
      </template>
    </ContentMain>
  </div>
</template>
<style lang="less" scoped>
#acquirer {
  .row {
    padding-left: 0;
    padding-right: 30px;
  }
}
</style>