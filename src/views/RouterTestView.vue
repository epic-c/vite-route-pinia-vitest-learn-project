<template>
  <h1>Router</h1>
  <hr />
  <!-- TODO Params String -->
  <h2>Params String</h2>
  <div>form option api $route.params: {{ $route.params.p }}</div>
  <div>form option api $route vue props: {{ p }}</div>
  <div>form composition api useRoute.params: {{ route.params.p }}</div>

  <hr />

  <!-- TODO Query String: http://127.0.0.1:5173/router/test?userId=andy -->
  <h2>Query String</h2>
  <div>form option api $route.query: {{ $route.query.q }}</div>
  <div>form composition api useRoute.query: {{ route.query.q }}</div>
</template>

<script lang="ts">
import { useRoute } from "vue-router";

export default {
  props: ["p"],
  setup() {
    const route = useRoute();
    return {
      route,
    };
  },
};
</script>
