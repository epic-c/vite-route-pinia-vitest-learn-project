<template>
  <li>
    <h1 v-if="i.msg === '!!!'">
      {{ `${i.msg} ----- ${i.date}` }}
    </h1>
    <span v-else>{{ `${i.msg} ----- ${i.date}` }}</span>
    <input
      v-if="editButton"
      type="text"
      v-model="editWord"
      @keydown.enter="edit(index)"
    />
    <button @click="editButton = !editButton">edit</button>
    <button @click="del(index)">X</button>
  </li>
</template>

<script lang="ts">
export default {
  props: ["i", "index"],
  data() {
    return {
      editWord: "",
      editButton: false,
    };
  },
  methods: {
    del(index: number) {
      this.$emit("del", index);
    },
    edit(index: number) {
      this.$emit("edit", index, this.editWord);
      this.editWord = "";
      this.editButton = false;
    },
  },
};
</script>
