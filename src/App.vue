<template>
  <header>
    <div class="wrapper">
      <nav>
        <!-- TODO RouterLink -->
        <RouterLink to="/">Vue template</RouterLink>
        <RouterLink to="/optionApi">Option Api</RouterLink>
        <RouterLink to="/compositionApi">Composition Api</RouterLink>
        <RouterLink
          :to="{
            name: 'router',
            params: { p: 'params string' },
            query: { q: 'query string' },
          }"
          >Router Link Sample (param and query string)</RouterLink
        >
        <RouterLink to="/note">Note</RouterLink>
      </nav>
      <!-- TODO Router function -->
      <nav>
        <button @click="$router.back()">router back (直接寫)</button> |
        <button @click="routerPush()">
          router push (in Option api methods)
        </button>
        |
        <button @click="routerInCompositionApi.go(-1)">
          router go(-1) (in Composition Api)
        </button>
      </nav>
    </div>
  </header>

  <!-- TODO RouterView -->
  <RouterView />
</template>

<script lang="ts">
import { useRouter } from "vue-router";

export default {
  setup() {
    const routerInCompositionApi = useRouter();
    return {
      routerInCompositionApi,
    };
  },
  methods: {
    routerPush() {
      this.$router.push("/about");
    },
  },
};
</script>

<style scoped>
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
</style>
