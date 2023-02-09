<template>
  <div>
    <!-- TODO v-if -->
    <div v-if="num < 8">num lt 8</div>
    <div v-else-if="num < 10">num lt 10</div>
    <div v-else>num gte 10</div>

    <div v-show="num < 8">XXX</div>

    <!-- TODO v-bind(:) -->
    <div
      :style="
        num % 2 === 0 ? 'background-color: white' : 'background-color: black'
      "
    >
      hello
    </div>
    <!-- TODO v-on(@) -->
    <button @click="addOneToNum()">add one</button>

    <!-- TODO data to template -->
    <div>hello: {{ num }}</div>
    <div>{{ numStart }}</div>

    <button @click="emitSample()">Emit Sample</button>
  </div>
</template>

<script lang="ts">
export default {
  props: ["numStart"],
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    // TODO metheds
    addOneToNum() {
      this.num = this.addOne(this.num);
    },
    addOne(num: number) {
      return num + 1;
    },
    emitSample() {
      this.$emit("emit-sample", this.num);
    },
  },
};
</script>
