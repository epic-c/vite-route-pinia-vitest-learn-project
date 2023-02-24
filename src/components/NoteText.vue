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
      @keydown.enter="edit()"
    />
    <button v-if="canEdit" @click="editButton = !editButton">edit</button>
    <button @click="noteStore.del(index)">X</button>
  </li>
</template>

<script setup lang="ts">
import type { MessageType } from "@/model/message";
import { ref } from "vue";
import { useNoteStore } from "@/stores/note";

const noteStore = useNoteStore();
const props = withDefaults(
  defineProps<{
    i: MessageType;
    index: number;
    canEdit?: boolean;
  }>(),
  { canEdit: false }
);
const editWord = ref<string>("");
const editButton = ref<boolean>(false);
function edit() {
  noteStore.edit(props.index, editWord.value);
  editButton.value = false;
}
</script>
