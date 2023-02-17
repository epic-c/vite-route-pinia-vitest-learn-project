<template>
  <h1>note</h1>
  <NoteSearch :srh-result="srhResult" @srh-msg="srh" />
  <hr />
  <ul>
    <NoteText
      v-for="(i, index) in txts"
      :key="i.id"
      :i="i"
      :index="index"
      @del="del"
      @edit="edit"
    />
  </ul>
  <input type="text" v-model="word" @keydown.enter="enter()" />
  <div>
    {{ circle }}
  </div>
</template>

<script lang="ts">
import NoteSearch from "@/components/NoteSearch.vue";
import NoteText from "@/components/NoteText.vue";
import type { MessageType } from "@/model/message";
import { v4 as uuidv4 } from "uuid";

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
    srh(search: string) {
      this.srhResult = this.txts.filter((value) => value.msg.includes(search));
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
    NoteSearch,
  },
};
</script>
