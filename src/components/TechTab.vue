<template>
  <div class="wrapper">
    <div class="white"></div>
    <div class="grey"></div>
    <div class="item-container">
      <div class="item-title">TECHNOLOGY</div>
      <div class="item-subtitle">차별화된 OCR기술</div>
      <div class="item-body">
        타사 대비 높은 유아 손글씨 인식률<br />
        핸듀 OCR 서비스 (인식률 95%)
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.wrapper {
  width: 100%;
  padding-top: 720px;
  position: relative;
  background-color: #f4f3f3;
}
.white {
  position: absolute;
  top: 0;
  left: 0;
  width: 43.2vw;
  height: 720px;
  background-color: #ffffff;
}
.grey {
  position: absolute;
  top: 112px;
  left: 8.3vw;
  width: 43.8vw;
  height: 415px;
  background-color: #666666;
}

.item-container {
  position: absolute;
  text-align: center;
  top: 223px;
  left: 52.1vw;
  width: 43.8vw;
  height: 375px;
  background-color: #ffffff;
}

.item-title {
  position: relative;
  top: 73px;
  font-weight: 500;
  font-size: 50px;
  height: 0;
}

.item-subtitle {
  position: relative;
  top: 142px;
  font-weight: 350;
  font-size: 24px;
  height: 0;
}

.item-body {
  position: relative;
  top: 209px;
  font-weight: 400;
  font-size: 20px;

}
</style>