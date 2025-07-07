<template>
  <div class="container-fluid my-2 p-3" id="blog">
    <div class="row">
      <div class="col">
        <div class="container py-5">
          <!-- Section Title -->
          <div class="text-center mb-4">
            <span class="badge text-dark mb-0">Blog & Bacaan</span>
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
      <div class="col">
        <!-- Featured Article -->
        <div class="card border-0 mb-4">
          <img src="/images/images.jpg" class="img-fluid rounded-3" style="height: 400px; object-fit: cover;">
          <div class="card-body px-0">
            <h5 class="card-title fw-semibold">
              UX Meets Infrastructure: Why Both Matter In Digital Transformation
            </h5>
            <div class="d-flex align-items-center mt-2">
              <img src="/images/ava.png" alt="Author" class="rounded-circle me-2" width="24" height="24" />
              <small class="text-muted">Nana Masyadi &nbsp;•&nbsp; 12 Maret 2025</small>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <!-- Article Cards -->
        <div class="row g-3 mb-4">
          <div class="col-md-4" v-for="(item, index) in articles" :key="index">
            <div class="card h-100 border-0">
              <img :src="item.image" class="card-img-top" style="height: 300px; object-fit: cover;" alt="..." />
              <div class="card-body">
                <h6 class="card-title fw-semibold rounded">{{ item.title }}</h6>
              </div>
              <div class="card-footer bg-white border-0 d-flex align-items-center">
                <img src="/images/ava.png" alt="Author" class="rounded-circle me-2" width="24" height="24" />
                <small class="text-muted">Nana Masyadi • 12 Maret 2025</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const articles = [
  {
    title: 'Transforming Public Services Through Smart Digital Systems',
    image: '/images/images2.jpg',
  },
  {
    title: 'Behind The Build: Inside Our Latest Government App Launch',
    image: '/images/images3.jpg',
  },
  {
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