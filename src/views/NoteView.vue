<template>
  <h1>note</h1>

  <ul>
    <li v-for="i in srhResult" :key="i.date">
      {{ `${i.msg} ----- ${i.date}` }}
    </li>
    <input type="text" v-model="search" />
    <button @click="srh()">search</button>
  </ul>
  <hr />
  <ul>
    <li v-for="(i, index) in txts" :key="i.date">
      <h1 v-if="i.msg === '!!!'">
        {{ `${i.msg} ----- ${i.date}` }}
      </h1>
      <span v-else>{{ `${i.msg} ----- ${i.date}` }}</span>
      <input
        v-if="index === editIndex"
        type="text"
        v-model="editWord"
        @keydown.enter="edit(index)"
      />
      <button @click="editButton(index)">edit</button>
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
    edit(index: number) {
      this.txts.splice(index, 1, {
        msg: this.editWord,
        date: new Date(Date.now()).toLocaleString(),
      });
      this.editWord = "";
      this.editIndex = -1;
    },
    editButton(index: number) {
      this.editIndex = index;
    },
    srh() {
      this.srhResult = this.txts.filter((value) =>
        value.msg.includes(this.search)
      );
    },
  },
  data() {
    return {
      txts: [] as { msg: string; date: string }[],
      word: "",
      editWord: "",
      editIndex: -1,
      search: "",
      srhResult: [] as { msg: string; date: string }[],
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
