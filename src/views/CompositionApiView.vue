<template>
  <div>{{ props.id }}</div>

  <div>{{ num }}</div>
  <div>{{ mul2 }}</div>
  <CompositionApiSubComponent :msg="`test`" @emit-sample="emitSample" />
  <button @click="add()">{{ num }}</button>
</template>
<script setup lang="ts">
import CompositionApiSubComponent from "@/components/CompositionApiSubComponent.vue";
import { computed, onBeforeMount, reactive, ref } from "vue";

const props = defineProps<{ id?: string }>();
const emit = defineEmits<{
  (e: "e", id: string): void;
}>();
const num = ref<number>(0);
const data = reactive({
  message: "",
  date: "",
});

function add() {
  num.value++;
  data.message = "123";
  data.date = "123";
  emit("e", "123");
}

function emitSample(param1: string, param2: number) {
  console.log(`${param1}, ${param2}`);
}
const mul2 = computed(() => num.value * 2);

onBeforeMount(() => {
  // alert("test");
});
</script>
