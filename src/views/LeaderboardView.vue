<template>
  <ul>
    <li v-for="item in readerloader" :key="item.country">
      {{ `"${item.country}" 平均得分為: ${item.averageScore}` }}
      <ul>
        <li>全球倫理: {{ item.data.globalEthics }}</li>
        <li>外部和平: {{ item.data.externalPeace }}</li>
        <li>軍備投入: {{ item.data.armamentInvestment }}</li>
        <li>國際交流: {{ item.data.internationalExchange }}</li>
        <li>國際援助: {{ item.data.internationalAid }}</li>
      </ul>
    </li>
  </ul>
</template>

<script setup lang="ts">
// http://www.wangdaoindex.org/xmapcountry/rank
import { onBeforeMount, ref } from "vue";

interface Value1 {
  globalEthics: number;
  externalPeace: number;
}
interface Value2 {
  armamentInvestment: number;
  internationalExchange: number;
}
interface Value3 {
  internationalAid: number;
}

const country = {
  Sweden: "瑞典",
  Denmark: "丹麥",
  Switzerland: "瑞士",
  Finland: "芬蘭",
  Germany: "德國",
  Ireland: "愛爾蘭",
  Austria: "奧地利",
};

const value1: ({ country: string } & Value1)[] = [
  {
    country: country.Sweden,
    globalEthics: 8.867,
    externalPeace: 9.667,
  },
  {
    country: country.Denmark,
    globalEthics: 8.733,
    externalPeace: 8.667,
  },
  {
    country: country.Switzerland,
    globalEthics: 8.733,
    externalPeace: 9.0,
  },
  {
    country: country.Finland,
    globalEthics: 7.433,
    externalPeace: 9.667,
  },
  {
    country: country.Germany,
    globalEthics: 9.4,
    externalPeace: 10.0,
  },
  {
    country: country.Ireland,
    globalEthics: 9.0,
    externalPeace: 10.0,
  },
  {
    country: country.Austria,
    globalEthics: 8.5,
    externalPeace: 9.667,
  },
];

const value2: ({ country: string } & Value2)[] = [
  {
    country: country.Sweden,
    armamentInvestment: 7.75,
    internationalExchange: 9.5,
  },
  {
    country: country.Denmark,
    armamentInvestment: 7.5,
    internationalExchange: 10.25,
  },
  {
    country: country.Switzerland,
    armamentInvestment: 8.0,
    internationalExchange: 10.25,
  },
  {
    country: country.Finland,
    armamentInvestment: 7.375,
    internationalExchange: 6.5,
  },
  {
    country: country.Germany,
    armamentInvestment: 7.5,
    internationalExchange: 10.75,
  },
  {
    country: country.Ireland,
    armamentInvestment: 7.75,
    internationalExchange: 10.25,
  },
  {
    country: country.Austria,
    armamentInvestment: 8.125,
    internationalExchange: 8.5,
  },
];

const value3: ({ country: string } & Value3)[] = [
  {
    country: country.Austria,
    internationalAid: 8.0,
  },
  {
    country: country.Finland,
    internationalAid: 6.75,
  },
  {
    country: country.Switzerland,
    internationalAid: 7.75,
  },
  {
    country: country.Germany,
    internationalAid: 9.5,
  },
  {
    country: country.Ireland,
    internationalAid: 8.25,
  },
  {
    country: country.Sweden,
    internationalAid: 8.75,
  },
  {
    country: country.Denmark,
    internationalAid: 8.5,
  },
];

const readerloader = ref<
  {
    country: string;
    averageScore: number;
    data: Value1 & Value2 & Value3;
  }[]
>([]);

onBeforeMount(() => {
  console.log(value1);
  console.log(value2);
  console.log(value3);

  // TODO 在這裡完成 readerloader 陣列的組合
  // array filter?, sort, find, map ....
});
</script>
