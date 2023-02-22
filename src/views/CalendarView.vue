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
        <td
          valign="top"
          v-for="(item, index) in calendar"
          :key="item.date.getDay()"
        >
          <div style="background-color: darkmagenta">
            <input type="time" />
            <input
              type="text"
              v-model="msg[index]"
              @keydown.enter="enter(index)"
            />
          </div>
          <div
            style="background-color: brown"
            v-for="note in item.notes"
            :key="note.id"
          >
            <span>
              {{ note.time }}
            </span>
            <hr />
            <span>
              {{ note.noteMsg }}
            </span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { v4 } from "uuid";

interface Note {
  time: string;
  noteMsg: string;
  id: string;
}

const calendar = ref<{ date: Date; notes: Note[] }[]>([]);
const msg = ref<string[]>([]);
function getDayName(day: number) {
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
}
function enter(index: number) {
  if (msg.value[index].length > 0) {
    calendar.value[index].notes.push({
      time: new Date(Date.now()).toLocaleString(),
      noteMsg: msg.value[index],
      id: v4(),
    });
    msg.value[index] = "";
  }
}
for (let i = 0; i < 7; i++) {
  const date = new Date();
  date.setDate(date.getDate() - (date.getDay() - (i + 1)));
  calendar.value.push({
    date,
    notes: [] as Note[],
  });
  msg.value.push("");
}
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
