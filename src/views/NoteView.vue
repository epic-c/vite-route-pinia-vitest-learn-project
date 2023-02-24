<template>
  <h1>note</h1>
  <NoteSearch :txts="txts" />
  <hr />
  <ul>
    <NoteText
      v-for="(i, index) in txts"
      :key="i.id"
      :i="i"
      :index="index"
      :can-edit="true"
    />
  </ul>
  <input type="text" v-model="word" @keydown.enter="enterMsg()" />
  <div>
    {{ circle }}
  </div>
</template>

<script lang="ts">
import NoteSearch from "@/components/NoteSearch.vue";
import NoteText from "@/components/NoteText.vue";
import { mapState, mapActions } from "pinia";
import { useNoteStore } from "@/stores/note";

export default {
  methods: {
    ...mapActions(useNoteStore, ["enter"]),
    enterMsg() {
      if (this.word.length > 0) {
        this.enter(this.word);
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
  },
  data() {
    return {
      word: "",
    };
  },
  computed: {
    ...mapState(useNoteStore, ["txts"]),
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
