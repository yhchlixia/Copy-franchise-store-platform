<template>
  <div id="yhch">
    <ContentMain main-title="交易统计"></ContentMain>
    <!-- <h1>welcom</h1>
    <form action>
      <label>name</label>
      <input v-model.lazy="username" type="text" />
      {{ username }}
      <label>password</label>
      <input v-model="password" type="password" />
      <button v-on:keyup.enter="submit(username)" @click="submit(username)">提交</button>
      <div>
        <button :disabled="isDisabled" :title="message">1+1</button>
        <p>{{ resverString }}</p>
        <p>
          <span v-html="msg"></span>
        </p>
      </div>
      <div>
        <p>{{ number + 1 }}</p>
        <p v-if="see || seeOne" :class="{ bgcolor: see, 'text-danger': see }">世界那么大，我想去看看</p>
        <button @click="isSee">{{ show }}</button>
      </div>
      <div>{{ now }}</div>
    </form>
    <div>
      <ul>
        <li v-for="item in items" :key="item">{{ item }}</li>
      </ul>
      <ul>
        <li v-for="(value, key) in object" :key="value">{{ key + " " + value }}</li>
      </ul>
      <button @click="counter += 1">add 1</button>
      <p>你点击的次数是：{{ counter }}</p>
    </div>
    <div>
      <input type="radio" v-model="picked" name="one" value="one" id="one" />
      <input type="radio" v-model="picked" name="two" value="two" id="two" />
      <p>{{ picked }}</p>
      <input type="checkbox" v-model="checkboxOne" />
      {{ checkboxOne }}
      <select v-model="selected">
        <option v-for="option in options" :key="option">{{ option }}</option>
      </select>
      <select v-model="selectedOne">
        <option
          v-for="option in optionsOne"
          :key="option.text"
          :value="option.value"
        >{{ option.text }}</option>
      </select>
      <p>{{ selectedOne }}</p>
    </div>
    <HelloWorld msg-title="yhch" />
    <computed></computed>
    <computed></computed>
    <div>
        <button v-for="tab in tabs" :key="tab" @click="currentTab = tab">{{ tab }}</button>
        <component v-bind:is="currentTabComponent"></component>
    </div> -->
  </div>
</template>
<script>
export default {
  name: "yhch",
  data() {
    return {
      username: "",
      password: "",
      msg: "<button>1+1</button>",
      isDisabled: true,
      message: "test",
      number: 4,
      show: "点亮",
      see: false,
      items: ["yhch", "guop", "fy"],
      object: {
        name: "yhch",
        birth: "0903",
        age: 22
      },
      counter: 0,
      picked: "",
      checkboxOne: "",
      options: ["A", "B", "C"],
      selectedOne: "A",
      optionsOne: [
        {
          text: "one",
          value: "A"
        },
        {
          text: "two",
          value: "B"
        },
        {
          text: "three",
          value: "C"
        }
      ],
      tabs:["HelloWorld","computed"],
      currentTab: "HelloWorld"
    };
  },
  computed: {
    currentTabComponent: function () {
      return this.currentTab;
    },
    resverString: function() {
      return this.msg
        .split("")
        .reverse()
        .join("");
    },
    now: function() {
      return Date.now();
    },
    seeOne: function() {
      if (this.selectedOne === "B") {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    submit(user) {
      alert(user);
    },
    isSee() {
      if (!this.see) {
        this.see = true;
        this.show = "隐藏";
      } else {
        this.see = false;
        this.show = "点亮";
      }
    }
  }
};
</script>
<style>
</style>
