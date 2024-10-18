<template>
  <div class="home">
    <div class="left-section">
      <div class="logo">L.M.Y</div>
      <div class="content-wrapper">
        <div class="moon-stars">
          <img src="@/assets/index/moon.png" alt="Moon" class="moon">
          <img v-for="(star, index) in 4" :key="index" src="@/assets/index/star.png" :alt="`Star ${index + 1}`" class="star" :class="`star-${index + 1}`">
        </div>
        <div class="title">
          <div class="main-title">
            <span class="gmoon">GMOON </span> 
            <span class="light">
              <img src="@/assets/index/num.svg" alt="Num" class="num-icon">
              LIGHT
            </span>
          </div>
          <div class="main-content">
            <p>To see a world in a grain of sand To see a world in a grain of sand To see a world in a grain of sand </p>
          </div>
        </div>
      </div>
    </div>
    <div class="right-section">
      <img src="@/assets/index/background.jpg" alt="Background" class="background-image">
    </div>
  </div>
</template>

<script setup>
// 组件逻辑
</script>

<style scoped>
.home {
  display: flex;
  height: 100vh;
  width: 100%;
}

.left-section {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 0 0 50px;
  box-sizing: border-box;
  position: relative;
}

.logo {
  color: #F7B500;
  font-weight: bold;
  font-size: 24px;
  position: absolute;
  top: 20px;
  left: 50px;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.moon-stars {
  position: relative;
  height: 300px;
  width: 300px;
}

.moon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
}

.star {
  position: absolute;
  width: 20px;
  height: 20px;
}

.star-1 { top: 20%; left: 20%; }
.star-2 { top: 30%; right: 30%; }
.star-3 { bottom: 25%; left: 35%; }
.star-4 { bottom: 15%; right: 25%; }

.title {
  margin-top: 50px;
  text-align: center;
  width: 100%;
  position: relative;
}

.main-title {
  font-size: 48px;
  margin-bottom: 10px;
  font-weight: 100;
  letter-spacing: 2px; 
  display: inline-block; /* 使用 inline-block 来包裹文本 */
}

.main-content {
  text-align: left;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  margin-top: 4%;
  max-width: 300px; /* 调整这个值以匹配 main-title 的宽度 */
}

.gmoon { color: black; opacity: 0.25;}
.light {
  color: #F7B500;
  position: relative;
  display: inline-block;
}

.num-icon {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  z-index: -1; /* 将图标置于文字下层 */
}

p {
  font-size: 18px;
  color: #666;
  margin: 0;
  text-align: left;
}

.right-section {
  width: 30%;
  height: calc(100% - 60px);
  overflow: hidden;
  position: relative;
  margin-top: 60px;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right bottom;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
