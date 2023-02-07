<template>
  <h1>note</h1>

  <ul>
    <li v-for="(i, index) in txts" :key="i.date">
      <h1 v-if="i.msg === '!!!'">
        {{ `${i.msg} ----- ${i.date}` }}
      </h1>
      <span v-else>{{ `${i.msg} ----- ${i.date}` }}</span>
      <input type="text">
      <button @click="del(index)">X</button>
    </li>
    <input type="text" v-model="word" @keydown.enter="enter()" />
  </ul>
  <div>
    {{ circle }}
  </div>
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
    del(index: number) {
      this.txts.splice(index, 1);
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
  computed: {
    circle() {
      const found = this.txts.find((msg) => msg.msg === "元宵節");
      if (found === undefined) {
        return "";
      } else {
        return "湯圓";
      }
    },
  },
};
</script>
