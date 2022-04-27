<template>
  <div
    style="
      width: 90%;
      height: 7%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    "
  >
    <button class="index-user-button" @click="setShow = true">
      <div
        v-show="setShow"
        style="
          width: 1.5%;
          height: 80%;
          background-color: #107b79;
          margin-left: 3px;
        "
      ></div>
      <slot></slot>
    </button>
  </div>
</template>
<script setup lang="ts">
import { ref } from "@vue/reactivity";

// const show_if = ref(null);
const setShow = ref();
</script>
<style lang='scss'>
.index-user-button {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content:flex-end;
  background-color: #0a0c18;
  border: none;
}
.index-user-button:hover {
  // 鼠标悬停时的状态
  background-color: #131723;
}
.index-user-button:visited {
  //鼠标点击后的状态
  background-color: #131723;
}
</style>