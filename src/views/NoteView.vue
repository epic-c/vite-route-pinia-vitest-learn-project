<template>
  <div>note</div>

  <ul>
    <li v-for="i in txts" :key="i.date">
      <h1>
        {{ `${i.msg} ----- ${i.date}` }}
      </h1>
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
