<template>
  <div>
    <h1>Option Api Component</h1>

    <hr />

    <!-- TODO Props -->
    <h2>Props</h2>
    <div>{{ props }}</div>

    <hr />

    <!-- emit (emit& on) -->
    <h2>Emit</h2>
    <button @click="emitSample()">Emit Sample</button>
  </div>
</template>

<script lang="ts">
export default {
  // TODO props set in option api
  props: ["props"],
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    emitSample() {
      // TODO emit set in option api
      this.$emit("emit-sample", "param1", this.num);
    },
  },
};
</script>
