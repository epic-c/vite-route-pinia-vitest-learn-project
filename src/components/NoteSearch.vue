<template>
  <ul>
    <li v-for="i in srhResult" :key="i.id">
      {{ `${i.msg} ----- ${i.date}` }}
    </li>
  </ul>
  <input type="text" v-model="search" />
  <button @click="srh()">search</button>
</template>

<script setup lang="ts">
import type { MessageType } from "@/model/message";
import { ref } from "vue";

const props = defineProps<{ txts: MessageType[] }>();
const search = ref("");
const srhResult = ref<MessageType[]>([]);

function srh() {
  srhResult.value = props.txts.filter((value) =>
    value.msg.includes(search.value)
  );
  search.value = "";
}
</script>
