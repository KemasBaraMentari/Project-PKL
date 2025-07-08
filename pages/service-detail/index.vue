<template>
<div>
    <AppNavbar />
    <SectionLayanan />
    <SectionGridLayanan />
    <FooterPage />
</div>
</template>

<script>
import AppNavbar from '~/components/AppNavbar.vue';
import SectionLayanan from '~/components/SectionLayanan.vue';
import SectionGridLayanan from '~/components/SectionGridLayanan.vue'
import FooterPage from '~/components/FooterPage.vue';
</script>

<style>
body {
  margin: 0;
  font-family: "Plus Jakarta Sans"; 
  overflow-x: hidden; 
}
</style>
