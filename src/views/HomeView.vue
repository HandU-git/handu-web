<template>
  <div>
    <MainPoster/>
    <CompanyIntro/>
    <AboutTabVue/>
    <AppFooterVue/>
  </div>
</template>

<script>
import MainPoster from '@/components/MainPoster.vue';
import CompanyIntro from '@/components/CompanyIntro.vue';
import AboutTabVue from '@/components/AboutTab.vue';
import AppFooterVue from '@/components/AppFooter.vue';


export default {
    components: {
        MainPoster,
        CompanyIntro,
        AboutTabVue,
        AppFooterVue,
    },
}
</script>

<style>

</style>