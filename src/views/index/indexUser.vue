<template>
  <div class="top">
    <div class="head" style="box-shadow: 0 0 10px #090c14">
      <div class="lift"></div>
      <div class="main">
        <div class="head_main_lift"></div>
        <div class="head_main_main">
          <el-row class="mb-4">
            <el-button
              size="small"
              type="text"
              plain
              style="margin-left: 30px; border: none"
              >优惠</el-button
            >
          </el-row>
          <el-row class="mb-4">
            <el-button
              size="small"
              type="text"
              plain
              style="margin-left: 30px; border: none"
              >玩法规则</el-button
            >
          </el-row>
          <el-row class="mb-4">
            <el-button
              size="small"
              type="text"
              plain
              style="margin-left: 30px; border: none"
              >代理</el-button
            >
          </el-row>
          <el-row class="mb-4">
            <el-button
              size="small"
              type="text"
              plain
              style="margin-left: 30px; border: none"
              >手机版/APP</el-button
            >
          </el-row>
          <el-row class="mb-4">
            <el-icon><apple /></el-icon>
          </el-row>
        </div>
        <div class="head_main_right">
          <el-row class="head_main_right_button">
            <el-button
              size="small"
              type="info"
              style="border: none;"
            >
              <el-icon style="margin-right: 5px"><user /></el-icon>
              注册</el-button
            >
            <el-button
              size="small"
              type="primary"
              style="border: none"
            >
              <el-icon style="margin-right: 5px"><lightning /></el-icon>
              登录</el-button
            >
          </el-row>
        </div>
      </div>
      <div class="right"></div>
    </div>
    <div class="boby">
      <div class="lift"></div>
      <div class="main">
        <div class="boby_main_lift">
          <user-button @click="bgcolor(1)"></user-button>
          <user-button></user-button>
          <user-button></user-button>
          <user-button></user-button>
          <user-button></user-button>
          <user-button></user-button>
          <user-button></user-button>
          <user-button></user-button>
          <user-button></user-button>
          <user-button></user-button>
          <user-button></user-button>
          <user-button></user-button>
          <user-button></user-button>
        </div>
        <div class="boby_main_main"></div>
        <div class="boby_main_right"></div>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserButton from './component/index-buttons.vue'



</script>

<style lang="scss">
* {
  /* 初始化 取消页面的内边距 */
  padding: 0;
  margin: 0;
}
.top {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: white;
}
.head {
  width: 100%;
  height: 8%;
  display: flex;
}
.boby {
  width: 100%;
  height: 92%;
  display: flex;
}
.lift {
  width: 12%;
  background-color: #131723;
}
.main {
  width: 80%;
  display: flex;
}
.right {
  width: 8%;
  background-color: #131723;
}
.head_main_lift {
  width: 13%;
  background-color: #0a0c18;
}
.head_main_main {
  width: 63%;
  display: flex;
  align-items: center; // 垂直对齐
  background-color: #0a0c18;
}
.head_main_right {
  width: 24%;
  background-color: #0a0c18;
  display: flex;
  flex-direction: row-reverse;
  align-items: center; // 垂直对齐
}
.head_main_right_button {
  margin-right: 20px;
}
.boby_main_lift {
  width: 13%;
  display: flex;
  flex-wrap: wrap;
  background-color: #0a0c18;
}
.boby_main_main {
  width: 63%;
}
.boby_main_right {
  width: 24%;
  background-color: #0a0c18;
}
</style>