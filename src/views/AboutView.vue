<template>
  <!-- v-if -->
  <div v-if="num < 8">num lt 8</div>
  <div v-else-if="num < 10">num lt 10</div>
  <div v-else>num gte 10</div>

  <div v-show="num < 8">XXX</div>
  <!-- v-for -->

  <ul>
    <li v-for="(el, index) in array" :key="el.id">{{ `${index} ${el}` }}</li>
  </ul>

  <ul>
    <li v-for="el in array.filter((n) => n.PR > 50)" :key="el.id">
      <span>{{ el.id }}</span> : <span>{{ el.name }}</span> ---
      <span>PR: {{ el.PR }}</span>
    </li>
  </ul>

  <!-- v-model -->
  <h1>v-model</h1>
  <input type="date" v-model="modelValue" />
  <div>value: {{ modelValue }}</div>
  <!-- v-bind(:) -->
  <div
    :style="
      num % 2 === 0 ? 'background-color: white' : 'background-color: black'
    "
  >
    hello
  </div>
  <!-- v-on(@) -->
  <button @click="addOneToNum()">add one</button>

  <!-- data to template -->
  <div>hello: {{ num }}</div>
</template>

<script lang="ts">
import { hello, hi } from "@/helper/exportSample";
import exportDefaultSample from "@/helper/exportDefaultSample";
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
      num: 0,
    };
  },
  methods: {
    addOneToNum() {
      this.num = this.addOne(this.num);
    },
    addOne(num: number) {
      return num + 1;
    },
  },
};

// composition api
</script>
