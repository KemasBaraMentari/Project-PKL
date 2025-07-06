<template>
  <div>
    <AppNavbar />
    <HeroSection />
    <Profile />
    <Service />
    <MainContainer />
    <Schedule />
    <Gallery />
    <ContactAndAddress />
    <FooterPage />
  </div>
</template>

<script setup>
import AppNavbar from '~/components/AppNavbar.vue';
import HeroSection from '~/components/HeroSection.vue';
import Profile from '~/components/Profile.vue';
import Service from '~/components/Service.vue';
import MainContainer from '~/components/MainContainer.vue';
import Schedule from '~/components/Schedule.vue';
import Gallery from '~/components/Gallery.vue';
import ContactAndAddress from '~/components/ContactAndAddress.vue';
import FooterPage from '~/components/FooterPage.vue';
</script>

<style>
body {
  margin: 0;
  font-family: "Plus Jakarta Sans"; 
  overflow-x: hidden; 
}
</style>