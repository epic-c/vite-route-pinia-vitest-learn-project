<template>
  <ul>
    <li v-for="i in srhResult" :key="i.id">
      {{ `${i.msg} ----- ${i.date}` }}
    </li>
  </ul>
  <input type="text" v-model="search" />
  <button @click="srh()">search</button>
</template>

<script lang="ts">
import type { MessageType } from "@/model/message";

export default {
  props: ["txts"],
  data() {
    return {
      search: "",
      srhResult: [] as MessageType[],
    };
  },
  methods: {
    srh() {
      this.srhResult = this.txts.filter((value: MessageType) =>
        value.msg.includes(this.search)
      );
      this.search = "";
    },
  },
};
</script>
