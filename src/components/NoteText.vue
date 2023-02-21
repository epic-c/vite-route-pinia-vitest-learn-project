<template>
  <li>
    <h1 v-if="props.i.msg === '!!!'">
      {{ `${props.i.msg} ----- ${props.i.date}` }}
    </h1>
    <span v-else>{{ `${props.i.msg} ----- ${props.i.date}` }}</span>
    <input
      v-if="editButton"
      type="text"
      v-model="editWord"
      @keydown.enter="edit(index)"
    />
    <button v-if="canEdit" @click="editButton = !editButton">edit</button>
    <button @click="del(index)">X</button>
  </li>
</template>

<script setup lang="ts">
import type { MessageType } from "@/model/message";
import { ref } from "vue";

const props = withDefaults(
  defineProps<{
    i: MessageType;
    index: number;
    canEdit?: boolean;
  }>(),
  { canEdit: false }
);
const emit = defineEmits<{
  (e: "del", index: number): void;
  (e: "edit", index: number, editWord: string): void;
}>();
const editWord = ref<string>("");
const editButton = ref<boolean>(false);
function del(index: number) {
  emit("del", index);
}
function edit(index: number) {
  emit("edit", index, editWord.value);
  editWord.value = "";
  editButton.value = false;
}
</script>
