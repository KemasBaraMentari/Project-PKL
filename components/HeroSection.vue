<template>
  <div class="hero-section mt-5">
    <div class="container-fluid p-5">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
          <div class="hero-content text-white">
            <h1 class="display-3 fw-semibold">
              Tempat Inovasi Dan Kota Bergerak Bersatu
            </h1>
            <p class="lead">
              Menyatukan solusi digital untuk menghubungkan masyarakat, bisnis, dan pemerintah menuju Surabaya yang cerdas dan berdaya saing.
            </p>
          </div>
        </div>

        <div class="col-lg-6 col-md-12 d-flex justify-content-center">
          <div class="hero-image-container">
            <img
              :src="gambarAktif"
              :class="['img-fluid', 'rounded', { fade: true, 'fade-out': isFading }]"
              alt="Gambar Slideshow"
              style="max-height: 500px; object-fit: cover;"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const gambarList = [
  '/images/surabaya2.jpg',
  '/images/surabaya3.jpg',
  '/images/surabaya4.jpg'
]

const gambarAktif = ref(gambarList[0])
const isFading = ref(false)
let index = 0
let intervalId

onMounted(() => {
  intervalId = setInterval(() => {
    isFading.value = true

    setTimeout(() => {
      index = (index + 1) % gambarList.length
      gambarAktif.value = gambarList[index]
      isFading.value = false
    }, 200)
  }, 3000)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<style scoped>
.hero-section {
  background-color: #133260;
  background-image:
    linear-gradient(to left, #133260 50%, transparent 50%),
    url('/images/Pattern.svg');
  background-size: cover, contain;
  background-repeat: no-repeat, repeat;
  background-position: left center, left center;
  border-radius: 20px;
  margin: auto 30px;
}


.hero-image-container img {
  border-radius: 20px;
  width: 865px;
  height: 665px;
}

.fade {
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

.fade.fade-out {
  opacity: 0;
}

h1, p {
  font-family: "Plus Jakarta Sans";
}
</style>
