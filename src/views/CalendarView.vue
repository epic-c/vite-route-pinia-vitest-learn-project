<template>
  <table class="calendar">
    <thead>
      <tr>
        <th
          v-for="day in calendar"
          :key="day.date.getDay()"
          :class="day.date.getDate() == new Date().getDate() ? 'today' : ''"
        >
          {{ getDayName(day.date.getDay()) }}
        </th>
      </tr>
      <tr>
        <th v-for="day in calendar" :key="day.date.getDay()">
          {{ day.date.toISOString().substring(0, 10) }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>sample</td>
      </tr>
    </tbody>
  </table>
</template>
<script lang="ts">
export default {
  data() {
    return {
      calendar: [] as {
        date: Date;
        notes: { time: string; note: string }[];
      }[],
    };
  },
  methods: {
    getDayName(day: number) {
      switch (day) {
        case 0:
          return "星期日";
        case 1:
          return "星期一";
        case 2:
          return "星期二";
        case 3:
          return "星期三";
        case 4:
          return "星期四";
        case 5:
          return "星期五";
        case 6:
          return "星期六";
        default:
          return "解析錯誤";
      }
    },
  },
  created() {
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() - (date.getDay() - (i + 1)));
      this.calendar.push({
        date,
        notes: [],
      });
    }
  },
};
</script>

<style>
.calendar {
  width: 100%;
  border-style: solid;
  border-color: whitesmoke;
  border-width: 1px;
}
.calendar * {
  border-width: 0;
}
.today {
  background-color: plum;
  color: blueviolet;
}
</style>
