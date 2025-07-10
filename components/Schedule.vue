<template>
  <div class="container-fluid text-white my-5" id="event">
    <div class="row bg-wrap">
      <div class="col mt-3">
        <section class="agenda-section text-center py-5">
          <span class="badge text-dark fw-semibold rounded-pill px-3 py-2"
            style="background-color: #ffeaa7; font-size: 20px;">Agenda & Kegiatan</span>
          <h2 class="mt-3 fw-bold">Agenda Kota & Kegiatan Warga</h2>
          <p class="text-white-50">
            Lihat jadwal event dan partisipasi warga dalam membangun kota yang hidup,
            kolaboratif, dan penuh energi.
          </p>
        </section>
      </div>
    </div>

    <div class="row g-4 mt-4  flex-nowrap">
      <div class="event-card" v-for="(card, index) in agendaList" :key="index" style="width: calc(100%/3);">
        <div class="card text-white overflow-hidden position-relative border-0 rounded-4"
          @mouseover="hoverIndex = index" @mouseleave="hoverIndex = null"
          style="height: 500px; background-size: cover; background-position: center"
          :style="{ backgroundImage: `url(${card.image})` }">

          <!-- Badge Baru -->
          <span class="badge bg-white text-dark position-absolute top-0 start-0 m-3 shadow-sm">Baru</span>

          <!-- Overlay Konten -->
          <div class="position-absolute w-100 h-100 d-flex flex-column justify-content-end p-4 transition"
            :class="hoverIndex === index ? 'bg-dark bg-opacity-75' : ''">
            <p class="mb-1 small">
              <span class="badge bg-transparent text-white me-2" style="border: 1px solid white; font-size: 15px; border-radius: 25px;">{{ card.date }}</span>
              <span v-if="hoverIndex !== index" class="badge bg-transparent text-white" style="border: 1px solid white; font-size: 15px; border-radius: 25px;">{{ card.location }}</span>
            </p>

            <h5 class="fw-bold display-6">{{ card.title }}</h5>

            <!-- Konten saat hover -->
            <div v-if="hoverIndex === index" class="mt-2 text-white">
              <div class="d-flex align-items-center gap-3 mb-2">
                <span><img src="/images/map.svg"><i class="bi bi-geo-alt-fill me-1"></i>{{ card.location }}</span>
                <span><img src="/images/gen.svg"><i class="bi bi-clock me-1"></i> {{ card.time }}</span>
              </div>
              <p>{{ card.description }}</p>
              <div class="text-end">
                <button class="btn" style="border-radius: 100%;">
                  <img src="/images/arrow-right.svg">
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="row">
      <div class="col mb-5">
        <div class="mt-5 text-center">
          <nuxt-link to="/schedule-detail"><button class="btn btn-custom text-dark">Lihat Selengkapnya
              →</button></nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const hoverIndex = ref(null)

const agendaList = [
  {
    image: '/images/agenda.jpg',
    date: '20 November 2025',
    location: 'Tegalsari, Surabaya',
    title: 'Layanan Satu Pintu Digital',
    time: '10:00 - 15:00',
    description: 'Kenali sistem e-government terbaru yang akan mendukung transparansi dan efisiensi layanan publik.'
  },
  {
    image: '/images/agenda.jpg',
    date: '20 November 2025',
    location: 'Tegalsari, Surabaya',
    title: 'Layanan Satu Pintu Digital',
    time: '10:00 - 15:00',
    description: 'Kenali sistem e-government terbaru yang akan mendukung transparansi dan efisiensi layanan publik.'
  },
  {
    image: '/images/agenda.jpg',
    date: '20 November 2025',
    location: 'Tegalsari, Surabaya',
    title: 'Layanan Satu Pintu Digital',
    time: '10:00 - 15:00',
    description: 'Kenali sistem e-government terbaru yang akan mendukung transparansi dan efisiensi layanan publik.'
  },
];
</script>

<style scoped>
.container-fluid {
  background-color: #133260;
}

.badge-custom {
  background-color: #ffeaa7;
  color: #2d3436;
  font-weight: bold;
  border-radius: 1rem;
  padding: 5px 15px;
}

.card-img-overlay {
  background: rgba(0, 0, 0, 0.3);
  color: white;
}

.card-title {
  font-size: 1.3rem;
  font-weight: 600;
}

.btn-custom {
  background-color: white;
  border-radius: 25px;
  font-weight: 500;
  padding: 10px 20px;
  transition: all 0.3s ease;
}

.btn-custom:hover {
  background-color: #dfe6e9;
}

.bg-wrap {
  background-image: url('/images/Pattern.svg');
  background-size: 45%;
  background-position: left;
  background-repeat: no-repeat;
}

.event-card {
  transition: all 0.8s ease;
}

.event-card:hover {
  width: 40% !important;
  z-index: 10;
  position: relative;
}

.card:hover {
  /* width: 600px; */
  transition: all 0.3s ease;
}

.event-card .card {
  transition: all 0.3s ease-in-out;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}
</style>