<template>
  <div class="container">
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
.container {
    display: flex;
    position: relative;
    width: 100%;
    height: 720px;
    /* background-color: #FAF7F7; */
    background-color: #FAF7F7;
}



</style>