<template>
  <div class="user-wrap">
    <div class="user-image">
      <img src="../assets/회사소개.png" alt="불러올 수 없음" />
    </div>
    <div>
      <p class="text1">We Are</p>
      <p class="text2">HandU</p>
      <p class="text3" width="40%">(주)핸듀</p>
      <p class="text4">
        핸듀는 2021년에 설립된 기업으로,안녕하세요안녕하세요 안녕하세요 안녕하세요. 
        핸듀만의 차별화된 AI기술로 다양한 어쩌고저쩌고 잘부탁드립니다. 
        안녕하세요안녕하세요 안녕하세요 안녕하세요. 핸듀만의 차별화된 
        AI기술로 다양한 어쩌고저쩌고 잘부탁드립니다. </p>
      <hr class="straight1" size="1" width="40.22%" />
      <hr class="straight2" size="1" width="7.7%" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.user-wrap {
  width: 100%;
  padding-top: 50%;
  position: relative;
}

.user-wrap img {
  position: absolute;
  width: 48%;
  top: 14.4%;
  left: 46.5%;
}

.text1 {
  position: absolute;
  color: #000000;
  font-weight: 900;
  font-style: normal;
  font-size: 4.02vw;
  text-align: center;
  top: 29.9%;
  left: 9.16%;
}
.text2 {
  position: absolute;
  color: #000000;
  font-size: 1.7vw;
  top: 41.9%;
  left: 9.51%;
}

.text3 {
  position: absolute;
  color: #000000;
  font-size: 2.1vw;
  top: 53.1%;
  left: 8.5%;
}

.text4 {
  position: absolute;
  color: #000000;
  font-size: 1.4vw;
  width: 36.6vw;
  top: 61.3%;
  left: 8.7%;
}

.straight1 {
  position: absolute;
  color: #000000;
  top: 27.8%;
  left: 6.3%;
}

.straight2 {
  position: absolute;
  color: #000000;
  top: 51%;
  left: 8.5%;
}
</style>