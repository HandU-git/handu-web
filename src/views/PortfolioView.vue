<template>
  <div style="background-color: #e7e5e5">
    <div style="text-align: center">
      <h1>포트폴리오</h1>
    </div>
    <div style="align-items: center">
      <ItemSlide :leftItem="obj1" :rightItem="obj2">
        <span slot="left-body">
          <div>글자 내 오탈자 인식</div>
          <div>오타 위치 및 교정 가이드 제공</div>
          <div>한국어, 영어 인식 학습 모델 제공</div>
          <div>일본어, 중국어 등 다국어 확장 예정</div>
        </span>
      </ItemSlide>
      <div class="slide-container">
        <div class="left-item">
          <div class="slide-title">학습 관리자 서비스</div>
        </div>
        <div class="right-item">자동 채점 서비스</div>
      </div>
      <div class="slide-container">
        <div class="left-item">다국어 학습 단어장</div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemSlide from "@/components/common/ItemSlide.vue";

export default {
  data() {
    return {
      obj1: {
        title: "AI 손글씨 자동 교정",
        tags: ["mobiletag.png", "tablettag.png"],
        body: [
          "글자 내 오탈자 인식",
          "오타 위치 및 교정 가이드 제공",
          "한국어, 영어 인식 학습 모델 제공",
          "일본어, 중국어 등 다국어 확장 예정",
        ],
      },
      obj2: {
        title: "AI 자동 첨삭 서비스",
        tags: ["mobiletag.png", "tablettag.png"],
        body: [
          "태블릿 내 단어 첨삭 서비스 제공",
          "기존 학습 콘텐츠에 쓰기 콘텐츠 추가",
          "피드백 시간 단축 (3일 -> 30분)",
          "맞춤법, 스펠링 오류 혼자 파악 가능",
        ],
      },
    };
  },

  components: {
    ItemSlide,
  },
};
</script>

<style scoped>
.slide-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
