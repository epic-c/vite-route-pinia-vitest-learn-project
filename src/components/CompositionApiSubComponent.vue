<template>
  <div>
    <h1>Option Api Component</h1>

    <hr />

    <!-- TODO Props -->
    <h2>Props</h2>
    <div>{{ props.msg }}</div>

    <hr />

    <!-- emit (emit& on) -->
    <h2>Emit</h2>
    <button @click="emitSample()">Emit Sample</button>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  // TODO props set in composition api
  setup(props: { msg: string }, { emit }) {
    const num = ref(0);
    function emitSample() {
      // TODO emit set in composition api
      emit("emit-sample", "param1", num.value);
    }

    return {
      props,
      num,
      emitSample,
    };
  },
};
</script>
