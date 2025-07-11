<template>
  <div class="container-fluid my-2 p-3" id="blog">
    <div class="row">
      <div class="col">
        <div class="container mt-5 mb-0">
          <!-- Section Title -->
          <div class="text-center mb-0">
            <span class="badge text-dark border-0 mb-2 rounded-pill" style="background-color: #ffeaa7">Blog & Bacaan</span>
            <h2 class="fw-bold">Cerita Transformasi & Inovasi Kota</h2>
            <p class="text-muted">
              Baca artikel, opini, dan kisah sukses seputar teknologi, kota pintar, dan inovasi layanan publik di
              Surabaya.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="row p-5">
        <!-- Featured Article -->
        <div class="card border-0 mb-2">
          <nuxt-link to="/main-container-detail/smart-digital-systems" class="text-decoration-none text-dark">
            <img src="/images/images.jpg" class="img-fluid rounded-3" style="height: 400px; width: 100%; object-fit: cover;">
            <div class="card-body px-0">
              <h5 class="card-title fw-semibold">
                UX Meets Infrastructure: Why Both Matter In Digital Transformation
              </h5>
            </div>
          </nuxt-link>
          <div class="d-flex align-items-center" style="margin-top: -15px;">
            <img src="/images/ava.png" alt="Author" class="rounded-circle me-2" width="24" height="24" />
            <small class="text-muted">Nana Masyadi &nbsp;•&nbsp; 12 Maret 2025</small>
          </div>
      </div>

      <div class="row">
        <!-- Article Cards -->
        <div class="row g-3 mb-4">
          <div class="col-md-4" v-for="(item, index) in articles" :key="index">
            <div class="card h-100 border-0">
              <NuxtLink :to="`/main-container-detail/${item.slug}`" class="text-decoration-none text-dark">
                <img :src="item.image" class="card-img-top" style="height: 300px; object-fit: cover;" alt="..." />
                <div class="card-body">
                  <h6 class="card-title fw-semibold rounded">{{ item.title }}</h6>
                </div>
              </NuxtLink>
              <div class="card-footer bg-white border-0 d-flex align-items-center" style="margin-top: -20px;">
                <img src="/images/ava.png" alt="Author" class="rounded-circle me-2" width="24" height="24" />
                <small class="text-muted">Nana Masyadi • 12 Maret 2025</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row text-center">
      <div class="col">
        <NuxtLink to="/main-container-detail" class="btn fw-semibold mt-3 rounded-pill px-4 py-2 text-white"
          style="background-color: #133260;">Lihat Selengkapnya</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const articles = [
  {
    slug: 'smart-digital-systems',
    title: 'Transforming Public Services Through Smart Digital Systems',
    image: '/images/images2.jpg',
  },
  {
    slug: 'smart-digital-systems',
    title: 'Behind The Build: Inside Our Latest Government App Launch',
    image: '/images/images3.jpg',
  },
  {
    slug: 'smart-digital-systems',
    title: 'UX Meets Infrastructure: Why Both Matter In Digital Transformation',
    image: '/images/images4.jpg',
  },
];
</script>

<style scoped>
.badge {
  background-color: #FFF8DD;
  font-size: 18px;
}
</style>