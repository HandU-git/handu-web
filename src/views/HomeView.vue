<template>
  <div>
    <MainPoster/>
    <CompanyIntro/>
    <AppFooterVue/>
  </div>
</template>

<script>
import MainPoster from '@/components/MainPoster.vue';
import CompanyIntro from '@/components/CompanyIntro.vue';
import AppFooterVue from '@/components/AppFooter.vue';


export default {
    components: {
        MainPoster,
        CompanyIntro,
        AppFooterVue,
    },
}
</script>

<style>

</style>