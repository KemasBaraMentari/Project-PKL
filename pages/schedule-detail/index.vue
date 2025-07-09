<template>
<div>
    <AppNavbar />
    <SectionSchedule />
    <SectionGridSchedule />
    <CardEvent />
    <FooterPage />
</div>
</template>

<script setup>
import AppNavbar from '~/components/AppNavbar.vue';
import SectionSchedule from '~/components/SectionSchedule.vue'
import SectionGridSchedule from '~/components/SectionGridSchedule.vue'
import CardEvent from '~/components/CardEvent.vue'
import FooterPage from '~/components/FooterPage.vue';
</script>

<style scoped>
body {
  margin: 0;
  font-family: "Plus Jakarta Sans"; 
  overflow-x: hidden; 
}
</style>