import type { MessageType } from "./../model/message";
import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

export const useNoteStore = defineStore("note", {
  state() {
    return {
      txts: [] as MessageType[],
    };
  },
  actions: {
    enter(word: string) {
      this.txts.push({
        id: uuidv4(),
        msg: word,
        date: new Date(Date.now()).toLocaleString(),
      });
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
});
