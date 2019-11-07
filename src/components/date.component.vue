<template>
  <el-date-picker
    v-model="initTime"
    type="daterange"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    :default-time="['00:00:00', '23:59:59']"
    :picker-options="pickerOptions"
    value-format="yyyy-MM-ddTHH:mm:ss+HH:mm"
  ></el-date-picker>
</template>
<script>
// import moment from "moment";
export default {
  props: {
    initTime: Array,
    pickerOptions: Object
  },
  date() {
    return {
      initTime: []
    };
  }
};
</script>