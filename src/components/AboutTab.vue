<template>
  <div class="wrapper">
    <div class="head">ABOUT</div>
    <div class="catch">핸듀만의 차별화된 기술, 당신만을 위한 서비스</div>
    <div class="container1">
      <img class="item-img1" src="../assets/ItmeOcr.png" alt="" />
      <div class="item-title1">OCR 손글씨 자동교정</div>
      <div class="item-body1">
        핸듀만의 기술로 높은 인식률을 자랑하는 OCR. <br />
        손글씨 자동 교정을 체험해 보세요.
      </div>
      <button @click="toDemoPage" class="btn">체험하기</button>
    </div>
    <div class="container2">
      <img
        class="item-img2"
        src="../assets/KiniandLumi.png"
        alt=""
      />
      <div class="item-title2">핸듀 포트폴리오</div>
      <div class="item-body2">핸듀의 포트폴리오를 확인해보세요.</div>
      <button @click="toPortfolio" class="btn">자세하게</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toDemoPage() {
      this.$router.push("/demo");
    },
    toPortfolio() {
      this.$router.push("/portfolio");
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  padding-top: 720px;
  position: relative;
  background-color: #e7e6e6;
}

.container1 {
  position: absolute;
  top: 250px;
  right: 53.5vw;
  width: 500px;
  height: 374px;
  background-color: #fdfafa;
  border-radius: 5px;
}

.container2 {
  position: absolute;
  top: 250px;
  height: 374px;
  left: 53.5vw;
  width: 500px;
  border-radius: 6px;
  background-color: #fdfafa;
}

.btn {
  position: absolute;
  font-weight: 500;
  font-size: 20px;
  top: 290px;
  left: 183px;
  border-radius: 6px;
  color: #fffbfb;
  background-color: #8195c9;
  width: 135px;
  text-align: center;
  height: 45px;
}

.head {
  position: absolute;
  top: 62px;
  left: 43vw;
  font-size: 58px;
  font-weight: 500;
  text-align: center;
}

.catch {
  position: absolute;
  top: 141px;
  left: 37vw;
  font-size: 20px;
  font-weight: 400;
}

.item-img1 {
  top: 46px;
  left: 33%;
  position: absolute;
  width: 160px;
}

.item-img2 {
  position: absolute;
  top: 39px;
  left: 21%;
  width: 297px;
}

.item-title1 {
  position: relative;
  text-align: center;
  top: 190px;
  font-size: 20px;
  font-weight: 700;
}

.item-title2 {
  position: relative;
  text-align: center;
  top: 190px;
  font-size: 20px;
  font-weight: 700;
}

.item-body1 {
  position: relative;
  text-align: center;
  top: 200px;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
}

.item-body2 {
  position: relative;
  text-align: center;
  top: 215px;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
}
</style>