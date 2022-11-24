<template>
  <div>
    <div
    data-aos="fade-up"
    data-aos-once="true"
    data-aos-offset="10">
    <MainPoster/></div>
    <CompanyIntro class="company-intro"/>
    <AboutTab/>
    <TechTab/>
    <ContactTab/>
    <AppFooter/>
    <SnsIcons/>
  </div>
</template>

<script>
import MainPoster from '@/components/MainPoster.vue';
import CompanyIntro from '@/components/CompanyIntro.vue';
import AboutTab from '@/components/AboutTab.vue';
import TechTab from '@/components/TechTab.vue';
import AppFooter from '@/components/AppFooter.vue';
import ContactTab from '@/components/ContactTab.vue';
import SnsIcons from '@/components/common/SnsIcons.vue';

export default {
    components: {
        MainPoster,
        CompanyIntro,
        TechTab,
        AboutTab,
        ContactTab,
        AppFooter,
        SnsIcons,
    },
}
</script>

<style scoped>

@media screen and (max-width: 650px) {
  .company-intro {
    display: none;
  }
}
</style>