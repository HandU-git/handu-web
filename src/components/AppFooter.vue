<template>
  <div>
    <v-footer class="wrapper">
      <v-container>
        <v-row>
          <v-col align="center" style="padding-bottom: 0px">
            <v-img
              src="../assets/핸듀_텍스트_투명배경 1.png"
              alt="불러올 수 없음"
              width="249px"
            />
          </v-col>
        </v-row>

        <v-row style="margin-top: 0px"
          ><v-col align="center" style="padding-top: 0px">
            <div class="text1">
              핸듀의 AI 기술로 당신에게 도움을 드리겠습니다.
            </div>
          </v-col>
        </v-row>
      </v-container>
      <div class="text2">
        <div style="font-weight: 700">(주)핸듀 대표 홍진</div>
        <div>사업자등록번호 &emsp;&emsp; 0193849-949934</div>
        <div>주소 &emsp;&emsp; 서울 관악구 호암로27 6 307호</div>
      </div>
      <div class="instagram">
        <a href="https://www.instagram.com/handu_ai/">
          <v-img src="../assets/instagram.png"></v-img>
        </a>
      </div>
      <div class="kakao" @click="access()">
        <v-img src="../assets/kakaotalk.png"></v-img>
      </div>
      <div class="naver" @click="access()">
        <v-img src="../assets/naver.png"></v-img>
      </div>
      <hr class="straight" width="80%" />
    </v-footer>
    <AlertModal v-if="showModal" @close="showModal = false">
      <h3 slot="header">알림</h3>
      <div slot="body">
        개설 예정입니다.
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
import AlertModal from "./common/AlertModal.vue";
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
v-container {
  position: relative;
}

.text1 {
  color: #74726d;
  font-size: 18px;
}

.text2 {
  position: absolute;
  font-weight: 500;
  font-size: 18px;
  color: #8e8b83;
  top: 237px;
  left: 10%;
}
.wrapper {
  width: 100%;
  padding-bottom: 200px;
}

.instagram {
  position: absolute;
  width: 46px;
  top: 46px;
  left: 93.5%;
}

.kakao {
  position: absolute;
  width: 46px;
  top: 110px;
  left: 93.5%;
  cursor: pointer;
}

.naver {
  position: absolute;
  width: 46px;
  top: 177px;
  left: 93.5%;
  cursor: pointer;
}

.straight {
  position: absolute;
  top: 230px;
  left: 10%;
}
</style>