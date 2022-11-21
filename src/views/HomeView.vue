<template>
  <div>
    <MainPoster 
    data-aos="fade-down"
    data-aos-once="true"
    />
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