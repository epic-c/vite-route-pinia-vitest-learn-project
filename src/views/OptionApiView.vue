<template>
  <h1>Option Api</h1>

  <hr />

  <!-- TODO data -->
  <h2>data</h2>
  <div>data 'value': {{ value }}</div>

  <hr />

  <!-- TODO methods -->
  <h2>methods</h2>
  <button @click="method()">
    call methods add value. now, value is {{ value }}
  </button>

  <hr />

  <!-- TODO computed -->
  <h2>computed</h2>
  <div>value square is : {{ valueSquare }}</div>

  <hr />

  <!-- TODO Compoments (props, emit) -->
  <h2>Compoment</h2>
  <AddOneVue
    style="background-color: darkcyan; width: 50%"
    @emit-sample="onSample"
    :props="value"
  ></AddOneVue>

  <hr />

  <!-- TODO using other ts(js) file in import -->
  <h2>using other ts(js) file in import</h2>
  <div>from export: {{ `hi: ${hi}, hello: ${hello}` }}</div>
  <div>
    from export default:
    {{ `hi: ${exportDefaultSampleHi}, hello: ${exportDefaultSampleHello}` }}
  </div>
</template>

<script lang="ts">
// TODO import other vue file
import AddOneVue from "@/components/OptionApiSubComponent.vue";

// TODO import other ts(js) file
import { hello, hi } from "@/helper/exportSample";
import exportDefaultSample from "@/helper/exportDefaultSample";

// TODO Option API
export default {
  // data 資料(含初始化)
  data() {
    return {
      value: 0,
      // 從 import 的地方拿初始值
      hello: hello(),
      hi: hi(),
      exportDefaultSampleHello: exportDefaultSample.hello(),
      exportDefaultSampleHi: exportDefaultSample.hi(),
    };
  },
  // TODO computed 自動響應函數
  computed: {
    valueSquare() {
      // computed 只會監聽跟它有關的資料
      const square = Math.pow(this.value, 2);
      return square;
    },
  },
  // TODO method 方法
  methods: {
    method() {
      console.log("call methods success");
      this.value = this.add(this.value, 1);
    },
    add(target: number, value: number) {
      return target + value;
    },
    // TODO on function (emit & on)
    onSample(param1: number, param2: string) {
      console.log(`param1: ${param1}`);
      console.log(`param2: ${param2}`);
    },
  },
  // TODO components 子組件
  components: {
    AddOneVue,
  },
};

// composition api
</script>
