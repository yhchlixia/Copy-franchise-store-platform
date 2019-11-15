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
      }
    };
  },
  methods: {
    onAcquirer(value) {
      this.condition.insCode = value.code;
    }
  }
};
</script>
<style lang="less" scoped>
#acquirer {
  .row {
    padding-left: 0;
    padding-right: 30px;
  }
}
</style>