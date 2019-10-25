<template>
  <div id="content-main-list">
    <div class="content-main-list-header">
      <h4>{{ mainTitle }}</h4>
      <div v-if="!noSelect">
        <hr />
        <div class="content-main-select">
          <slot name="header"></slot>
        </div>
      </div>
    </div>
    <div class="content-main-list-table">
      <slot name="table"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    mainTitle: String,
    noSelect: Boolean
  },
  data() {
    return {
      show: true,
      msg: "welcome",
      options: []
    };
  },
  created() {
    
  },
  methods: {
    onFocus() {
      console.log(this.msg);
    }
  }
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

#content-main-list {
  width: 100%;
  height: 100%;
}

.content-main-list-header {
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
}

.content-main-list-header,
.content-main-list-header > h4,
.content-main-list-header > hr {
  text-align: left;
  margin: 0 0 15px 0;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
}

.content-main-select {
  width: 100%;
}

#content-main-list .content-main-list-header > h4 {
  margin: 0;
}

.content-main-list-table {
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
}
</style>
