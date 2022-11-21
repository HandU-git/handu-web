<template>
  <div>
    <v-footer class="footer-wrapper">
      <v-container>
        <v-row>
          <v-col align="center" style="padding-bottom: 0px">
            <img
              src="../assets/HandULogo.png"
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
        <div>사업자등록번호 &emsp;&emsp; 148-86-02323</div>
        <div>주소 &emsp;&emsp; 서울 관악구 호암로27 6 404호</div>
      </div>
      <hr class="straight" width="80%" />
    </v-footer>
  </div>
</template>

<script>

export default {
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
.footer-wrapper {
  width: 100%;
  padding-bottom: 200px;
}



.straight {
  position: absolute;
  top: 230px;
  left: 10%;
}
</style>