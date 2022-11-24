<template>
  <div>
    <div class="about-wrapper">
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
.about-wrapper {
  padding-top: 0;
  background-color: #e7e6e6;
  text-align: center;
}

.about-container {
  padding: 52px 0 100px 0;
  margin: 0 70px 0 70px;
  display: flex;
}

.container1 {
  width: 500px;
  height: 374px;
  margin: auto;
  background-color: #fdfafa;
  border-radius: 5px;
}

.container2 {
  width: 500px;
  height: 374px;
  margin: 30px auto;
  border-radius: 5px;
  background-color: #fdfafa;
}

.btn {
  /* position: absolute; */
  font-weight: 500;
  font-size: 20px;
  /* top: 290px; */
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
  padding-top: 46px;
  width: 160px;
}

.item-img2 {
  /* position: absolute; */
  /* top: 39px; */
  padding-top: 39px;
  /* left: 21%; */
  width: 297px;
}

.item-title1 {
  /* position: relative; */
  text-align: center;
  padding-top: 12px;
  font-size: 20px;
  font-weight: 700;
}

.item-title2 {
  /* position: relative; */
  text-align: center;
  padding-top: 4px;
  font-size: 20px;
  font-weight: 700;
}

.item-body1 {
  /* position: relative; */
  text-align: center;
  /* top: 200px; */
  padding-top: 10px;
  padding-bottom: 18px;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
}

.item-body2 {
  /* position: relative; */
  text-align: center;
  /* top: 215px; */
  padding-top: 18px;
  padding-bottom: 40px;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
}

@media screen and (max-width: 1250px) {
  .about-container {
    display: block;
  }
  .container2 {
    margin-top: 20px;
  }
}

@media screen and (max-width: 650px) {

  .about-container {
    margin: auto;
  }
  .container1, .container2 {
    width: 77vw;
    height: 350px;
  }

  .item-title1, .item-title2, .item-body1, .item-body2 {
    font-size: 4vw;
    line-height: 4.2vw;
  }

  .item-body2 {
    padding-bottom: 4vw;
  }
  .btn {
    width: 100px;
    height: 30px;
    font-size: 16px;
  }
  .head {
    font-size: 40px;
  }

  .catch {
    font-size: 20px;
  }

}
</style>