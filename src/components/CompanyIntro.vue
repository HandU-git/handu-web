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
        핸듀는 2021년에 설립된 기업이며, 우리가 살아가는데 도움이 되는 AI기술을 만들어 
        어려움을 겪고 있는 사람들에게 도움의 손길을 내밀어주고, 
        우리의 삶 속에서 AI 기술을 발전시키기 위해 노력하고 있습니다. 
        <br><br>
        유아 교육 분야에서 혁신을 위한 AI 모델을 개발하고 있으며 추후 나아가 청소년, 성인, 노인이 겪는 어려움을 해결하기 위한 COMPUTER VISION 서비스를 제공할 예정입니다.
    </p>
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