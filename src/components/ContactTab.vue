<template>
  <div class="wrapper">
    <contact-form class="form"></contact-form>
    <kakao-map class="map"></kakao-map>
  </div>
</template>

<script>
import ContactForm from './common/ContactForm.vue';
import KakaoMap from './common/KakaoMap.vue';

export default {
    components: {
        ContactForm,
        KakaoMap,
    }
}
</script>

<style scoped>
.wrapper {
    display: flex;
    position: relative;
    width: 100vw;
    height: 720px;
    margin: 0px;
    padding: 0px;
    background-color: #FAF7F7;
}

.form {
  padding: 64px 3.7vw 54px  96px;
}

.map {
  padding: 78px 39px 86px 0px;
}




</style>