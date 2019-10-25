<template>
  <select v-model="selectOne">
    <option v-for="option in options" :value="option.value" :key="option">{{ option.name }}</option>
  </select>
</template>
<script>
export default {
  data() {
    return {
      options: [],
      selectOne: {}
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