<template>
  <div class="slide-container">
    <div class="slide-item">
      <div class="slide-title">
        {{ leftItem.title }}
      </div>
      <div class="slide-tags-container">
        <div
          class="slide-tag"
          v-for="(tag, index) in leftItem.tags"
          :key="index"
        >
          <img
            class="tag-image"
            :src="require(`../../assets/${tag}`)"
            alt="플랫폼 태그"
          />
        </div>
      </div>
      <div class="slide-body">
        <slot name="left-body">dafault body</slot>
      </div>
      <img class="slide-main-image" :src="require(`../../assets/${leftItem.main}`)" alt="메인사진" />
    </div>
    <div v-if="rightItem" class="slide-item">
      <div class="slide-title">
        {{ rightItem.title }}
      </div>
      <div class="slide-tags-container">
        <div
          class="slide-tag"
          v-for="(tag, index) in rightItem.tags"
          :key="index"
        >
          <img
            class="tag-image"
            :src="require(`../../assets/${tag}`)"
            alt="플랫폼 태그"
          />
        </div>
      </div>
      <div class="slide-body">
        <slot name="right-body">dafault body</slot>
      </div>
      <img class="slide-main-image" :src="require(`../../assets/${rightItem.main}`)" alt="메인사진" />
    </div>
    <div v-else class="slide-empty">

    </div>
  </div>
</template>

<script>
export default {
  props: {
    leftItem: Object,
    rightItem: Object,
  },
};
</script>

<style scoped>
.slide-item {
  position: relative;
  width: 47vw;
  height: 430px;
  margin: 1.5vw;
  background-color: #ffffff;
}


.slide-empty {
  position: relative;
  width: 47vw;
  height: 430px;
  margin: 1.5vw;
}
.slide-title {
  padding: 100px 0px 0px 43px;
  font-size: 24px;
  font-weight: 900;
}
.slide-tags-container {
  padding: 10px 0px 0px 38px;
  display: flex;
}

.slide-tag {
  padding-right: 12px;
}

.tag-image {
  width: 81px;
}

.slide-body {
  padding: 0 0 10px 43px;
  font-size: 20px;
  font-weight: 500;
  color: #787474;
  line-height: 39px;
}

.slide-main-image {
    position: absolute;
    left: 53.6%;
    top: 96px;
    width: 18.9vw;
}
</style>