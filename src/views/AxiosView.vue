<template>
  <div></div>
  <button @click="get()">get</button>
</template>
<script setup lang="ts">
import axios, { AxiosError } from "axios";
/*
CRUD
Create  post
Read    get
Update  put
Delete  delete
*/
// https://www.ktec.gov.tw/site_api.php?type=json

async function get() {
  await axios
    .get("https://localhost:7013/api/ToolInfo/Tool01")
    .then((response) => {
      console.log(response);
    })
    .catch((error: AxiosError) => {
      console.log(JSON.stringify(error, null, "\t"));
    });
  console.log(123);
}
</script>
