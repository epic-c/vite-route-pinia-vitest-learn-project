<template>
  <div>hello: {{ num }}</div>
  <button @click="addOne()">add one</button>
</template>

<script lang="ts">
import { hello, hi } from "@/helper/exportSample";
import exportDefaultSample from "@/helper/exportDefaultSample";
// Option API
export default {
  data() {
    return {
      num: 10,
    };
  },
  methods: {
    addOne() {
      this.num++;
    },
  },
};

// composition api
</script>
