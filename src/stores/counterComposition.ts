import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterCompositionStore = defineStore(
  "counterComposition",
  () => {
    const count = ref(0);
    const doubleCount = computed(() => count.value * 2);
    function increment() {
      count.value++;
    }

    function toZero() {
      count.value = 0;
    }

    return { toZero, count, doubleCount, increment };
  }
);
