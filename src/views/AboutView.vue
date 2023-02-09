<template>
  <!-- v-for -->

  <ul>
    <li v-for="(el, index) in array" :key="el.id">
      {{ `${index} ${el.name}` }}
    </li>
  </ul>

  <ul>
    <li v-for="el in array.filter((n) => n.PR > 50)" :key="el.id">
      <span>{{ el.id }}</span> : <span>{{ el.name }}</span> ---
      <span>PR: {{ el.PR }}</span>
    </li>
  </ul>

  <!-- TODO v-model -->
  <h1>v-model</h1>
  <input type="text" v-model="modelValue" />
  <div>value: {{ modelValue }}</div>
  <div>value * 2: {{ modelValueMul2 }}</div>
  <AddOneVue @emit-sample="onSample" :numStart="modelValue"></AddOneVue>
  <LifeCycleVue></LifeCycleVue>
</template>

<script lang="ts">
import { hello, hi } from "@/helper/exportSample";
import exportDefaultSample from "@/helper/exportDefaultSample";

import AddOneVue from "@/components/AddOne.vue";
import LifeCycleVue from "@/components/LifeCycle.vue";
// Option API
export default {
  data() {
    return {
      modelValue: "",
      select: false,
      array: [
        {
          name: '"',
          id: 1,
          PR: 95,
        },
        {
          name: "Candy",
          id: 2,
          PR: 15,
        },
        {
          name: "Billy",
          id: 3,
          PR: 60,
        },
      ],
    };
  },
  computed: {
    // TODO 自動響應函數 computed
    modelValueMul2() {
      console.log("call");
      return parseInt(this.modelValue) * 2;
    },
  },
  methods: {
    onSample(num: number) {
      console.log(num);
    },
  },
  components: {
    // TODO 區塊 components
    AddOneVue,
    LifeCycleVue,
  },
};

// composition api
</script>
