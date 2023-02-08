<template>
  <div>router</div>

  <!-- <div>{{ $route.params.userId }}</div> -->
  <div>{{ userId }}</div>
  <span @click="router()">router</span>
  <!-- TODO query string: http://127.0.0.1:5173/router/test?userId=andy -->
  <!-- <div>{{ $route.query.userId }}</div> -->
</template>

<script lang="ts">
export default {
  props: ["userId"],
  methods: {
    router() {
      this.$router.push("/about");
    },
  },
};
</script>
