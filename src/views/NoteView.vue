<template>
  <h1>note</h1>

  <ul>
    <li v-for="i in srhResult" :key="i.id">
      {{ `${i.msg} ----- ${i.date}` }}
    </li>
  </ul>
  <input type="text" v-model="search" />
  <button @click="srh()">search</button>
  <hr />
  <ul>
    <NoteText
      v-for="(i, index) in txts"
      :key="i.id"
      :i="i"
      :index="index"
      @del="del"
      @edit="edit"
    ></NoteText>
  </ul>
  <input type="text" v-model="word" @keydown.enter="enter()" />
  <div>
    {{ circle }}
  </div>
</template>

<script lang="ts">
import NoteText from "@/components/NoteText.vue";
import { v4 as uuidv4 } from "uuid";

interface MessageType {
  id: string;
  msg: string;
  date: string;
}
export default {
  methods: {
    enter() {
      if (this.word.length > 0) {
        this.txts.push({
          id: uuidv4(),
          msg: this.word,
          date: new Date(Date.now()).toLocaleString(),
        });
        this.word = "";
      }
    },
    del(index: number) {
      this.txts.splice(index, 1);
    },
    edit(index: number, editWord: string) {
      this.txts.splice(index, 1, {
        id: this.txts[index].id,
        msg: editWord,
        date: new Date(Date.now()).toLocaleString(),
      });
    },
    srh() {
      this.srhResult = this.txts.filter((value) =>
        value.msg.includes(this.search)
      );
    },
  },
  data() {
    return {
      txts: [] as MessageType[],
      word: "",
      search: "",
      srhResult: [] as MessageType[],
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
  components: {
    NoteText,
  },
};
</script>
