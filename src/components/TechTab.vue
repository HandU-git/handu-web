<template>
  <div class="wrapper">
    <div class="white"></div>
    <div data-aos="fade-down" class="grey">
      <YoutubePlayerVue></YoutubePlayerVue>
    </div>
    <div data-aos="fade-up" class="item-container">
      <div class="item-title">TECHNOLOGY</div>
      <div class="item-subtitle">차별화된 OCR기술</div>
      <div class="item-body">
        <div>타사 대비 높은 유아 손글씨 인식률</div>
        <div>핸듀 OCR 서비스 (인식률 95%)</div>
      </div>
    </div>
  </div>
</template>

<script>
import YoutubePlayerVue from "./common/YoutubePlayer.vue";
export default {
  components: {
    YoutubePlayerVue,
  },
};
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
  left: 11.8vw;
  width: 41vw;
  height: 415px;
  background-color: #666666;
}

.item-container {
  position: absolute;
  text-align: center;
  top: 223px;
  left: 52.8vw;
  width: 35.3vw;
  height: 375px;
  background-color: #ffffff;
}

.item-title {
  font-family: "NanumPen";
  font-weight: 400;
  font-size: 75px;
  margin-top: 61px;
}

.item-subtitle {
  font-weight: 350;
  font-size: 24px;
}

.item-body {
  font-weight: 400;
  font-size: 20px;
  margin-top: 39px;
}

@media screen and (max-width: 950px) {
  .item-title {
    margin-top: 20px;
    font-size: 2rem;
  }

  .item-subtitle {
    font-size: 1rem;
  }

  .item-body {
    font-size: 0.8rem;
  }

  .item-container{
    top: 540px;
    left: 25vw;
    width: 50vw;
    height: 170px;
    background-color: #ffffff;
  }

  .grey {
    width: 76.4vw;
  }
}


</style>