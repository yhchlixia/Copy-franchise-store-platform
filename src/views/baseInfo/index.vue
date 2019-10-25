<template>
  <div id="trade">
    <Header ref="hidden"></Header>
    <div class="content" @click="hiddenMenu">
      <div>
        <Aside></Aside>
      </div>
      <div class="content-main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBackAddEditPw: false
    }
  },
  methods: {
    hiddenMenu() {
      this.$refs.hidden.hiddenmenu();
    }
  }
}
</script>

<style lang="less">
html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  min-width: 1460px;
  background-color: rgb(230, 234, 240);
}

#trade {
  width: 100%;
  height: 100%;
}

.content {
  margin-top: 20px;
  width: 100%;
  height: calc(100vh - 80px);
}

.content-main {
  width: calc(100% - 260px);
  margin: 0 20px;
  position: absolute;
  left: 220px;
  min-width: 1200px;
}
</style>
