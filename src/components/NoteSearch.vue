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
export default {
  props: ["srhResult"],
  data() {
    return {
      search: "",
    };
  },
  methods: {
    srh() {
      this.$emit("srh-msg", this.search);
      this.search = "";
    },
  },
};
</script>
