<template>
  <div>
    <h1>Vue Template</h1>
    <!-- TODO data to template -->
    <h2>Data Value</h2>
    <div>data 'num' is: {{ num }}</div>

    <hr />

    <!-- TODO v-on(@) -->
    <h2>v-on(@)</h2>
    <button @click="num++">add one</button>

    <hr />

    <!-- TODO v-bind(:) -->
    <h2>v-bind(:)</h2>
    <span :style="`background-color: ${num % 2 === 0 ? 'blue' : 'red'}`">
      num is {{ num }}, odd number is red, even number is blue.
    </span>

    <hr />

    <!-- TODO v-if -->
    <h2>v-if</h2>
    <div v-if="num < 5">num is {{ num }}, num lt 5</div>
    <div v-else-if="num < 10">num is {{ num }}, num lt 10</div>
    <div v-else>num is {{ num }}, num gte 10</div>

    <hr />

    <!-- TODO v-show -->
    <h2>v-show</h2>
    <div v-show="num % 2 === 0">num is {{ num }}, num is even number</div>

    <hr />

    <!-- TODO v-for -->
    <h2>v-for</h2>
    <div v-for="(item, index) in array" :key="item.item1">
      {{ `index: ${index}, item1: ${item.item1}, item2: ${item.item2}` }}
    </div>

    <hr />

    <!-- TODO v-model -->
    <h2>v-model</h2>
    <input type="text" v-model="vModel" />
    <div>{{ vModel }}</div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      num: 0,
      vModel: "",
      array: [
        { item1: "item1 1", item2: "item2 1" },
        { item1: "item1 1", item2: "item2 1" },
        { item1: "item1 1", item2: "item2 1" },
      ],
    };
  },
};
</script>
