<template>
  <div>
    <a v-bind:href="url">
      <h1>
        <slot name="header"></slot>
      </h1>
    </a>
    <slot v-bind:love="love">{{ love.name }}</slot>
    <ul>
      <li v-for="slotProp in slotProps" :key="slotProp.name">
        <slot name="slotProp" :slotprop="slotProp">{{ slotProp.text }}</slot>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    url: String,
    slotProps: Array
  },
  data() {
    return {
      love: {
        name: "lixia",
        birth: "0407"
      }
    };
  }
};
</script>