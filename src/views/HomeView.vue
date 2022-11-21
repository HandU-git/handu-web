<template>
  <div>
    <div
    data-aos="fade-up"
    data-aos-once="true"
    data-aos-offset="10">
    <MainPoster/></div>
    <CompanyIntro/>
    <AboutTab/>
    <TechTab/>
    <ContactTab/>
    <AppFooter/>
  </div>
</template>

<script>
import MainPoster from '@/components/MainPoster.vue';
import CompanyIntro from '@/components/CompanyIntro.vue';
import AboutTab from '@/components/AboutTab.vue';
import TechTab from '@/components/TechTab.vue';
import AppFooter from '@/components/AppFooter.vue';
import ContactTab from '@/components/ContactTab.vue';


export default {
    components: {
        MainPoster,
        CompanyIntro,
        TechTab,
        AboutTab,
        ContactTab,
        AppFooter,
    },
}
</script>

<style>

</style>