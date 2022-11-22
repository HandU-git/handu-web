<template>
  <div class="wrapper">
    <div data-aos="fade-down" class="head">ABOUT</div>
    <div data-aos="fade-down" class="catch">
      핸듀만의 차별화된 기술, 당신만을 위한 서비스
    </div>
    <div class="about-container">
      <div class="container1" data-aos="fade-right">
        <img class="item-img1" src="../assets/ItmeOcr.png" alt="" />
        <div class="item-title1">OCR 손글씨 자동교정</div>
        <div class="item-body1">
          핸듀만의 기술로 높은 인식률을 자랑하는 OCR. <br />
          손글씨 자동 교정을 체험해 보세요.
        </div>
        <button @click="toDemoPage" class="btn">체험하기</button>
      </div>
      <div class="container2" data-aos="fade-left">
        <img class="item-img2" src="../assets/KiniandLumi.png" alt="" />
        <div class="item-title2">핸듀 포트폴리오</div>
        <div class="item-body2">핸듀의 포트폴리오를 확인해보세요.</div>
        <button @click="toPortfolio" class="btn">자세하게</button>
      </div>
    </div>
    <AlertModal v-if="showModal" @close="showModal = false">
      <h3 slot="header">알림</h3>
      <div slot="body">
        준비중입니다.
        <div style="text-align: right">
          <v-icon @click="showModal = false" style="top: 20px; color: #392012"
            >mdi-check</v-icon
          >
        </div>
      </div>
    </AlertModal>
  </div>
</template>

<script>
import AlertModal from "./common/AlertModal.vue";

export default {
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    toDemoPage() {
      this.showModal = !this.showModal;
    },
    async toPortfolio() {
      await this.$router.push("/portfolio");
      window.scrollTo(0, 0);
    },
  },

  components: {
    AlertModal,
  },
};
</script>

<style scoped>
.wrapper {
  padding-top: 0;
  background-color: #e7e6e6;
  text-align: center;
}

.about-container {
  padding-top: 528.5px;
  position: relative;
}

.container1 {
  position: absolute;
  top: 52px;
  right: 53.5vw;
  width: 500px;
  height: 374px;
  background-color: #fdfafa;
  border-radius: 5px;
}

.container2 {
  position: absolute;
  top: 52px;
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
  /* position: absolute;
  top: 62px;
  left: 43vw; */
  padding-top: 88px;
  font-family: "NanumSquareAcr";
  font-size: 58px;
  font-weight: 700;
}

.catch {
  /* position: absolute;
  top: 141px;
  left: 37vw; */
  padding-top: 9px;
  font-size: 26px;
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