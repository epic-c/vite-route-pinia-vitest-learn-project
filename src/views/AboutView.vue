<template>
  <div>hello: {{ num }}</div>
  <button @click="addOneToNum()">add one</button>
  <div>hello: {{ num2 }}</div>
  <button @click="addOneToNum2()">add one</button>
</template>

<script lang="ts">
import { hello, hi } from "@/helper/exportSample";
import exportDefaultSample from "@/helper/exportDefaultSample";
// Option API
export default {
  data() {
    return {
      num: 10,
      num2: 10,
    };
  },
  methods: {
    addOneToNum() {
      this.num = this.addOne(this.num);
    },
    addOneToNum2() {
      this.num2 = this.addOne(this.num2);
    },
    addOne(num: number) {
      return num + 1;
    },
  },
};

// composition api
</script>
