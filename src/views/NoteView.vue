<template>
  <div>note</div>

  <ul>
    <li v-for="i in txts" :key="i">
      {{ i }}
    </li>
    <input type="text" v-model="word" @keydown.enter="enter()" />
  </ul>
</template>

<script lang="ts">
export default {
  methods: {
    enter() {
      if (this.word.length > 0) {
        this.txts.push(this.word);
        this.word = "";
      }
    },
  },
  data() {
    return {
      txts: ["123", "456"],
      word: "",
    };
  },
};
</script>
