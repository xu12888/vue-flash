<template>
  <div class="top">
    <div class="head">
      <div class="lift"></div>
      <div class="main">
        
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
  background-color: black;
}
.boby{
  width: 100%;
  height: 95%;
  display: flex;
}
.lift {
  width: 15%;
  background-color: rgb(114, 109, 109);
}
.main {
  width: 70%;
}
.right {
  width: 15%;
  background-color: rgb(114, 109, 109);
}
</style>