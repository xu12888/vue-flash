<template>
  <body>
    <section>
      <div>
        <img alt="" src="../assets/00.jpg" width="100%" height="100%" />
      </div>
      <div>
        <img alt="" src="../assets/02.jpg" width="100%" height="100%" />
      </div>
      <div>
        <img alt="" src="../assets/03.jpg" width="100%" height="100%" />
      </div>
      <div>
        <img alt="" src="../assets/04.jpg" width="100%" height="100%" />
      </div>
      <div>
        <img alt="" src="../assets/05.jpg" width="100%" height="100%" />
      </div>
      <div>
        <img alt="" src="../assets/08.jpg" width="100%" height="100%" />
      </div>
    </section>
  </body>
</template>
<script lang="ts">
</script>

<style lang="scss">
* {
  /* 初始化 取消页面的内边距 */
  padding: 0;
  margin: 0;
}
body {
  /* 弹性布局 让页面元素水平+垂直 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 让页面始终占据浏览器总高 */
  height: 100vh;
  background-color: #000;
  /* 视距 让元素看起来更有3d效果 */
  perspective: 900px;
}
section {
  /* 相对定位 */
  position: relative;
  width: 260px;
  height: 150px;
  /* 鼠标放上去变成小手 */
  cursor: pointer;
  transform-style: preserve-3d;
  animation: rotate 20s linear infinite;
}

section div {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  text-align: center;
  /* 设置元素的倒影效果 */
  -webkit-box-reflect: below 15px -webkit-linear-gradient(transparent 10%, rgba(255, 255, 255, 0.3));
}
section div:nth-child(1) {
  transform: translateZ(300px);
}
section div:nth-child(2) {
  transform: rotateY(60deg) translateZ(300px);
}
section div:nth-child(3) {
  transform: rotateY(120deg) translateZ(300px);
}
section div:nth-child(4) {
  transform: rotateY(180deg) translateZ(300px);
}
section div:nth-child(5) {
  transform: rotateY(240deg) translateZ(300px);
}
section div:nth-child(6) {
  transform: rotateY(300deg) translateZ(300px);
}
/* 定义旋转动画 */
@keyframes rotate {
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(360deg);
  }
}
</style>
