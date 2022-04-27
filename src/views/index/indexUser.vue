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
            <el-button size="small" type="info" style="border: none">
              <el-icon style="margin-right: 5px"><user /></el-icon>
              注册</el-button
            >
            <el-button size="small" type="primary" style="border: none">
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
          <user-button @click="bgcolor(1)">
            <div class="boby_main_lift_btn">
              <div class="boby_main_lift_btnICON">
                <el-icon color="#2FB6C1" :size="16"><aim /></el-icon>
              </div>
              <div class="boby_main_lift_btnFONT" style="color: #2fb6c1">
                全部
              </div>
              <div class="boby_main_lift_btnNUMBER" style="color: #e4e0ef">
                111
              </div>
            </div>
          </user-button>
          <user-button @click="bgcolor(2)">
            <div class="boby_main_lift_btn">
              <div class="boby_main_lift_btnICON">
                <el-icon color="#3B3C4A" :size="16"><aim /></el-icon>
              </div>
              <div class="boby_main_lift_btnFONT">DATA2</div>
              <div class="boby_main_lift_btnNUMBER">111</div>
            </div>
          </user-button>
          <user-button @click="bgcolor(3)">
            <div class="boby_main_lift_btn">
              <div class="boby_main_lift_btnICON">
                <el-icon color="#3B3C4A" :size="16"><aim /></el-icon>
              </div>
              <div class="boby_main_lift_btnFONT">CSGO</div>
              <div class="boby_main_lift_btnNUMBER">111</div>
            </div>
          </user-button>
          <user-button @click="bgcolor(4)">
            <div class="boby_main_lift_btn">
              <div class="boby_main_lift_btnICON">
                <el-icon color="#3B3C4A" :size="16"><aim /></el-icon>
              </div>
              <div class="boby_main_lift_btnFONT">英雄联盟</div>
              <div class="boby_main_lift_btnNUMBER">111</div>
            </div>
          </user-button>
          <user-button @click="bgcolor(5)">
            <div class="boby_main_lift_btn">
              <div class="boby_main_lift_btnICON">
                <el-icon color="#3B3C4A" :size="16"><aim /></el-icon>
              </div>
              <div class="boby_main_lift_btnFONT">王者荣耀</div>
              <div class="boby_main_lift_btnNUMBER">111</div>
            </div>
          </user-button>
          <user-button @click="bgcolor(6)">
            <div class="boby_main_lift_btn">
              <div class="boby_main_lift_btnICON">
                <el-icon color="#3B3C4A" :size="16"><aim /></el-icon>
              </div>
              <div class="boby_main_lift_btnFONT">激斗峡谷</div>
              <div class="boby_main_lift_btnNUMBER">111</div>
            </div>
          </user-button>
          <user-button @click="bgcolor(7)">
            <div class="boby_main_lift_btn">
              <div class="boby_main_lift_btnICON">
                <el-icon color="#3B3C4A" :size="16"><aim /></el-icon>
              </div>
              <div class="boby_main_lift_btnFONT">篮球</div>
              <div class="boby_main_lift_btnNUMBER">111</div>
            </div>
          </user-button>
          <user-button @click="bgcolor(8)">
            <div class="boby_main_lift_btn">
              <div class="boby_main_lift_btnICON">
                <el-icon color="#3B3C4A" :size="16"><aim /></el-icon>
              </div>
              <div class="boby_main_lift_btnFONT">足球</div>
              <div class="boby_main_lift_btnNUMBER">111</div>
            </div>
          </user-button>
          <user-button @click="bgcolor(9)">
            <div class="boby_main_lift_btn">
              <div class="boby_main_lift_btnICON">
                <el-icon color="#3B3C4A" :size="16"><aim /></el-icon>
              </div>
              <div class="boby_main_lift_btnFONT">传说对决</div>
              <div class="boby_main_lift_btnNUMBER">111</div>
            </div>
          </user-button>
          <user-button @click="bgcolor(10)">
            <div class="boby_main_lift_btn">
              <div class="boby_main_lift_btnICON">
                <el-icon color="#3B3C4A" :size="16"><aim /></el-icon>
              </div>
              <div class="boby_main_lift_btnFONT">绝地求生</div>
              <div class="boby_main_lift_btnNUMBER">111</div>
            </div>
          </user-button>
          <user-button @click="bgcolor(11)">
            <div class="boby_main_lift_btn">
              <div class="boby_main_lift_btnICON">
                <el-icon color="#3B3C4A" :size="16"><aim /></el-icon>
              </div>
              <div class="boby_main_lift_btnFONT">穿越火线</div>
              <div class="boby_main_lift_btnNUMBER">111</div>
            </div>
          </user-button>
          <user-button @click="bgcolor(12)">
            <div class="boby_main_lift_btn">
              <div class="boby_main_lift_btnICON">
                <el-icon color="#3B3C4A" :size="16"><aim /></el-icon>
              </div>
              <div class="boby_main_lift_btnFONT">守望先锋</div>
              <div class="boby_main_lift_btnNUMBER">111</div>
            </div>
          </user-button>
          <user-button @click="bgcolor(13)">
            <div class="boby_main_lift_btn">
              <div class="boby_main_lift_btnICON">
                <el-icon color="#3B3C4A" :size="16"><aim /></el-icon>
              </div>
              <div class="boby_main_lift_btnFONT">魔兽争霸三</div>
              <div class="boby_main_lift_btnNUMBER">111</div>
            </div>
          </user-button>
        </div>
        <div class="boby_main_main">
          <div style="widht:100%; height:30%; background-color:#151924">
            <div style="width:100%; height:80%;">
              <img src="" alt="">
            </div>
            <div style="width:100%; height:20%"></div>
          </div>
          <div style="widht:100%; height:1%;"></div>
          <div style="widht:100%; height:69%; background-color:#151924"></div>
        </div>
        <div class="boby_main_right"></div>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserButton from "./component/index-buttons.vue";
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
  width: 15%;
  display: flex;
  flex-wrap: wrap;
  align-items: center; // 垂直对齐
  background-color: #0a0c18;
}
.boby_main_main {
  width: 63%;
  background-color:#0a0c18;
  // display: flex;
  // justify-content: center;
  // flex-wrap: wrap;
}
.boby_main_right {
  width: 22%;
  background-color: #0a0c18;
}
.boby_main_lift_btn {
  width: 96%;
  height: 100%;
  display: flex;
  align-items: center;
}
.boby_main_lift_btnICON {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.boby_main_lift_btnFONT {
  width: 50%;
  height: 100%;
  color: #505a6d;
  display: flex;
  align-items: center;
  font-size: 10px;
}
.boby_main_lift_btnNUMBER {
  width: 20%;
  height: 100%;
  color: #505a6d;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 10px;
}
</style>