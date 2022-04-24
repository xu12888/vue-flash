<template>
  <div class="top">
    <div class="head">
      <div class="lift"></div>
      <div class="main">
        <div class="head_main_lift"></div>
        <div class="head_main_main">
          <el-row class="mb-4">
            <el-button
              size="small"
              type="info"
              plain
              style="margin-left: 20px; border: none"
              >优惠</el-button
            >
          </el-row>
          <el-row class="mb-4">
            <el-button
              size="small"
              type="info"
              plain
              style="margin-left: 20px; border: none"
              >玩法规则</el-button
            >
          </el-row>
          <el-row class="mb-4">
            <el-button
              size="small"
              type="info"
              plain
              style="margin-left: 20px; border: none"
              >代理</el-button
            >
          </el-row>
          <el-row class="mb-4">
            <el-button
              size="small"
              type="info"
              plain
              style="margin-left: 20px; border: none"
              >手机版/APP</el-button
            >
          </el-row>
          <el-icon style="margin-right: 20px;"><apple /></el-icon>
        </div>
        <div class="head_main_right"></div>
      </div>
      <div class="right"></div>
    </div>
    <div class="boby">
      <div class="lift"></div>
      <div class="main"></div>
      <div class="right"></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
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
  height: 5%;
  display: flex;
  border: 1px solid red;
}
.boby {
  width: 100%;
  height: 95%;
  display: flex;
}
.lift {
  width: 16%;
  background-color: rgb(114, 109, 109);
}
.main {
  width: 74%;
  display: flex;
}
.right {
  width: 10%;
  background-color: rgb(114, 109, 109);
}
.head_main_lift {
  width: 10%;
  background-color: aqua;
}
.head_main_main {
  width: 74%;
  display: flex;
  align-items: center; // 垂直对齐
}
.head_main_right {
  width: 16%;
  background-color: aqua;
}
</style>