<template>
  <div style="background-color: #e7e5e5">
    <div style="text-align: center; padding-top: 100px;">
      <div class="portfolio-header">포트폴리오</div>
    </div>
    <div style="align-items: center">
      <ItemSlide :leftItem="obj1" :rightItem="obj2">
        <span slot="left-body">
          <div>글자 내 오탈자 인식</div>
          <div>오타 위치 및 교정 가이드 제공</div>
          <div>한국어, 영어 인식 학습 모델 제공</div>
          <div>일본어, 중국어 등 다국어 확장 예정</div>
        </span>
        <span slot="right-body">
          <div>태블릿 내 단어 첨삭 서비스 제공</div>
          <div>기존 학습 콘텐츠에 쓰기 콘텐츠 추가</div>
          <div>피드백 시간 단축 (3일 -> 30분)</div>
          <div>맞춤법, 스펠링 오류 혼자 파악 가능</div>
        </span>
      </ItemSlide>
      <ItemSlide :leftItem="obj3" :rightItem="obj4">
        <span slot="left-body">
          <div>학습 분석 및 보완점 제공</div>
          <div>웹/앱을 통한 편리한 접근</div>
          <div>리포트 형태로 확인하는 온라인 서비스</div>
        </span>
        <span slot="right-body">
          <div>수기 채점 비효율성 문제 해결</div>
          <div>단어 인식에 기반을 둔 서비스</div>
          <div>AI OCR이 글자 기반의 데이터 셋 구축</div>
        </span>
      </ItemSlide>
      <ItemSlide :leftItem="obj5">
        <span slot="left-body">
          <div>웹툰, K-POP 등 콘텐츠 제작사와 협업</div>
          <div>쓰기, 말하기를 통한 단어 학습 서비스</div>
          <div>손 글씨 자동 교정 + AI 음성 분석</div>
        </span>
      </ItemSlide>
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
        main: "pc.png",
      },
      obj2: {
        title: "AI 자동 첨삭 서비스",
        tags: ["mobiletag.png", "tablettag.png"],
        main: "aiservice.png",
      },
      obj3: {
        title: "학습 관리자 서비스",
        tags: ["mobiletag.png", "webtag.png"],
        body: [
          "학습 분석 및 보완점 제공",
          "웹/앱을 통한 편리한 접근",
          "리포트 형태로 확인하는 온라인 서비스",
        ],
        main: "testreport.png",
      },
      obj4: {
        title: "자동 채점 서비스",
        tags: ["mobiletag.png", "tablettag.png", "webtag.png"],
        main: "markingservice.png",
      },
      obj5: {
        title: "다국어 학습 단어장",
        tags: ["mobiletag.png", "tablettag.png"],
        main: "dictation.png",
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

.portfolio-header {
  font-size: 48px;
  font-weight: 500;
}
</style>
