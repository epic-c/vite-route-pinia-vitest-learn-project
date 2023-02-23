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
            <label for="">Start Time</label>
            <br />
            <input type="time" v-model="msg[index].startTime" />
            <br />
            <label for="">End Time</label>
            <br />
            <input type="time" v-model="msg[index].endTime" />
            <input
              type="text"
              v-model="msg[index].msg"
              @keydown.enter="enter(index)"
            />
          </div>
          <div
            style="background-color: brown"
            v-for="note in item.notes"
            :key="note.id"
          >
            <span>
              {{ "start time : " + note.startTime }}
            </span>
            <hr />
            <span>
              {{ note.noteMsg }}
            </span>
            <hr />
            <span>
              {{ "end time : " + note.endTime }}
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
  startTime: string;
  noteMsg: string;
  endTime: string;
  id: string;
}

const calendar = ref<{ date: Date; notes: Note[] }[]>([]);
const msg = ref<{ msg: string; startTime: string; endTime: string }[]>([]);
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
  if (
    msg.value[index].msg.length > 0 &&
    msg.value[index].startTime.length > 0 &&
    msg.value[index].endTime.length > 0 &&
    getISOTime(index, msg.value[index].startTime) <
      getISOTime(index, msg.value[index].endTime)
  ) {
    calendar.value[index].notes.push({
      startTime: msg.value[index].startTime,
      noteMsg: msg.value[index].msg,
      endTime: msg.value[index].endTime,
      id: v4(),
    });
    msg.value[index].msg = "";
    msg.value[index].endTime = "";
  }
}
for (let i = 0; i < 7; i++) {
  const date = new Date();
  date.setDate(date.getDate() - (date.getDay() - (i + 1)));
  calendar.value.push({
    date,
    notes: [] as Note[],
  });
  msg.value.push({ msg: "", startTime: "", endTime: "" });
}

function getISOTime(index: number, time: string) {
  return Date.parse(
    calendar.value[index].date.toISOString().split("T")[0] +
      "T" +
      time +
      ":00.000Z"
  );
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
