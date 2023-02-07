<template>
  <h1>note</h1>

  <ul>
    <li v-for="i in txts" :key="i.date">
      <h1 v-if="i.msg === '!!!'">
        {{ `${i.msg} ----- ${i.date}` }}
      </h1>
      <span v-else>{{ `${i.msg} ----- ${i.date}` }}</span>
    </li>
    <input type="text" v-model="word" @keydown.enter="enter()" />
  </ul>
</template>

<script lang="ts">
export default {
  methods: {
    enter() {
      if (this.word.length > 0) {
        this.txts.push({
          msg: this.word,
          date: new Date(Date.now()).toLocaleString(),
        });
        this.word = "";
      }
    },
  },
  data() {
    return {
      txts: [
        {
          msg: "start",
          date: new Date(Date.now()).toLocaleString(),
        },
      ],
      word: "",
    };
  },
};
</script>
