<template>
  <div id="trade-list">
    <ContentMain main-title="交易查询">
      <template #header>
        <SelectComponent></SelectComponent>
      </template>
    </ContentMain>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      show: true,
      msg: "welcome",
      options: [],
      slotProps: [
        {
          name: "yhc",
          text: "草原"
        },
        {
          name: "gp",
          text: "大海"
        },
        {
          name: "fy",
          text: "陆地"
        }
      ]
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    onFocus() {
      console.log(this.msg);
    },
    loadData() {
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
<style>

</style>
