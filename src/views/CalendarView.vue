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
      const d = () => {
        switch (day) {
          case 0:
            return "日";
          case 1:
            return "一";
          case 2:
            return "二";
          case 3:
            return "三";
          case 4:
            return "四";
          case 5:
            return "五";
          case 6:
            return "六";
          default:
            return "解析錯誤";
        }
      };
      return `星期${d()}`;
    },

    setCalendar(i: number) {
      const tempDate = new Date();
      tempDate.setDate(tempDate.getDate() - (tempDate.getDay() - (i + 1)));
      this.calendar[i] = {
        date: tempDate,
        notes: [],
      };
    },
  },
  created() {
    const today = new Date().getDay();
    for (let i = 0; i < today; i++) {
      this.setCalendar(i);
    }
    for (let i = today; i <= 6; i++) {
      this.setCalendar(i);
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
