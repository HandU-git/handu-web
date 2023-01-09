<template>
  <div class="wrapper">
    <contact-form
    data-aos="fade-right"
    data-aos-offset="300"
      class="form"
      @notAgreed="warnModalOn"
      @success="sucessModalOn"
    ></contact-form>
    <kakao-map 
    data-aos="fade-left"
    data-aos-offset="300"
    class="map"></kakao-map>
    <AlertModal v-if="warnModal" @close="warnModal = false">
      <h3 slot="header">알림</h3>
      <div slot="body">
        먼저 개인정보 처리 약관에 동의해야 합니다.
        <div style="text-align: right">
          <v-icon
          @click="warnModal = false"
          style="top: 20px; color: #392012"
          >mdi-check</v-icon
        >  
        </div>
      </div>
    </AlertModal>
    <AlertModal v-if="sucessModal" @close="sucessModal = false">
      <h3 slot="header">알림</h3>
      <div slot="body">
        이메일이 성공적으로 전송되었습니다.
        <div style="text-align: right">
          <v-icon
          @click="sucessModal = false"
          style="top: 20px; color: #392012"
          >mdi-check</v-icon
        >  
        </div>
      </div>
    </AlertModal>
  </div>
</template>

<script>
import ContactForm from "./common/ContactForm.vue";
import KakaoMap from "./common/KakaoMap.vue";
import AlertModal from "./common/AlertModal.vue";

export default {
  data() {
    return {
      warnModal: false,
      sucessModal: false,
    };
  },
  components: {
    ContactForm,
    KakaoMap,
    AlertModal,
  },
  methods: {
    warnModalOn() {
      this.warnModal = !this.warnModal;
    },
    sucessModalOn() {
      this.sucessModal = !this.sucessModal;
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  height: 720px;
  margin: 0px;
  padding: 0px;
  background-color: #faf7f7;
}

.form {
  padding: 64px auto 54px 0;
  margin: auto;
  margin-right: 0;
}

.map {
  padding: 64px 0 54px 0;
  margin: auto 50px;
}

@media screen and (max-width: 1250px) {

  .form {
    margin-right: auto;
    padding-top: 64px;
  }
  .map {
    padding-top: 64px;
  }

  .wrapper {
  display: block;
  width: 100%;
  height: 1450px;
  margin: 0px;
  padding: 0px;
  background-color: #faf7f7;
}

@media screen and (max-width: 650px) {
  .map {
    padding-top: 35px;
  }

  .form {
  }
}
  
}
</style>