<template>
  <div>
    <button @click="count++">you clicks me {{ count }} times</button>
  </div>
</template>

<script>
export default {
  name: "Computed",
  data() {
    return {
      count: 0
    };
  }
};
</script>