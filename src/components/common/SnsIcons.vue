<template>
  <div>
    <div class="instagram">
      <a href="https://www.instagram.com/handu_ai/">
        <v-img src="../../assets/instagram.png"></v-img>
      </a>
    </div>
    <div class="kakao" @click="access()">
      <v-img src="../../assets/kakaotalk.png"></v-img>
    </div>
    <div class="naver" @click="access()">
      <v-img src="../../assets/naver.png"></v-img>
    </div>
    <AlertModal v-if="showModal" @close="showModal = false">
      <h3 slot="header">알림</h3>
      <div slot="body">
        개설 예정입니다.
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
import AlertModal from "./AlertModal.vue";

export default {
    components: {
    AlertModal,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    access() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style scoped>
.instagram {
  position: fixed;
  width: 46px;
  top: 80%;
  left: 95%;
}

.kakao {
  position: fixed;
  width: 46px;
  top: 86%;
  left: 95%;
  cursor: pointer;
}

.naver {
  position: fixed;
  width: 46px;
  top: 92%;
  left: 95%;
  cursor: pointer;
}
</style>