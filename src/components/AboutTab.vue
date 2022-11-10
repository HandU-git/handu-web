<template>
  <div class="user-wrap">
    <div class="head">ABOUT</div>
    <div class="catch">핸듀만의 차별화된 기술, 당신만을 위한 서비스</div>
    <div class="text1"></div>
    <div class="text2"></div>
    <div class="container1">
      <button @click="toDemoPage" class="btn">체험하기</button>
    </div>
    <div  class="container2">
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
.user-wrap {
  width: 100%;
  padding-top: 720px;
  position: relative;
  background-color: #e7e6e6;
}

.text1 {
  position: absolute;
}

.text2 {
  position: absolute;
}

.container1 {
  position: absolute;
  top: 250px;
  left: 0%;
  margin-left: 12vw;
  width: 500px;
  height: 374px;
  background-color: #fdfafa;
  border-radius: 5px;
}

.container2 {
  position: absolute;
  top: 250px;
  height: 374px;
  left: 55vw;
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
</style>