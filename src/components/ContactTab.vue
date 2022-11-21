<template>
  <div class="wrapper">
    <contact-form
    data-aos="fade-right"
      class="form"
      @notAgreed="modalOn"
    ></contact-form>
    <kakao-map 
    data-aos="fade-left"
    class="map"></kakao-map>
    <AlertModal v-if="showModal" @close="showModal = false">
      <h3 slot="header">알림</h3>
      <div slot="body">
        먼저 개인정보 처리 약관에 동의해야 합니다.
        <div style="text-align: right">
          <v-icon
          @click="showModal = false"
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
      showModal: false,
    };
  },
  components: {
    ContactForm,
    KakaoMap,
    AlertModal,
  },
  methods: {
    modalOn() {
      this.showModal = !this.showModal
    }
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  position: relative;
  width: 100vw;
  height: 720px;
  margin: 0px;
  padding: 0px;
  background-color: #faf7f7;
}

.form {
  padding: 64px 6vw 54px 10vw;
}

.map {
  padding: 64px 39px 86px 0px;
}
</style>