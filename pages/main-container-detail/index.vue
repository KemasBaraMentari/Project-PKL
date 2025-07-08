<template>
    <div>
        <AppNavbar />
        <SectionMain />
        <SectionGridMain />
        <FooterPage />
    </div>
</template>

<script>
import AppNavbar from '~/components/AppNavbar.vue';
import SectionMain from '~/components/SectionMain.vue';
import SectionGridMain from '~/components/SectionGridMain.vue';
import FooterPage from '~/components/FooterPage.vue';
</script>

<style>
body {
  margin: 0;
  font-family: "Plus Jakarta Sans"; 
  overflow-x: hidden; 
}
</style>