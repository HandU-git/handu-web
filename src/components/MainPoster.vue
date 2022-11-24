<template>
  <div class="user-wrap">
    <div class="user-image">
      <img src="../assets/main.png" alt="불러올 수 없음" />
    </div>
    <!-- 글자 부분 이미지에 포함시켰음 -->
    <!-- <div>
      <p class="text1">We Are HandU</p>
      <p class="text2">오직 당신만을 위한 AI</p>
      <hr class="straight" size="1" width="12.5%"/>
    </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.user-wrap {
  width: 100%;
  position: relative;
  padding-top: 84px;
  margin-bottom: -6px;
}

.user-wrap img {
  width: 100%;
}

/* .text1 {
  position: absolute;
  color: #f4ebeb;
  font-weight: 500;
  font-style: normal;
  font-size: 5.9vw;
  top: 58.2%;
  left: 5.6%;
}
.text2 {
  position: absolute;
  color: #f4ebeb;
  font-size: 1.7vw;
  top: 79.3%;
  left: 19.7%;
} */

.straight {
  position: absolute;
  color: #f4ebeb;
  top: 83.3%;
  left: 5.6%;
}
</style>

