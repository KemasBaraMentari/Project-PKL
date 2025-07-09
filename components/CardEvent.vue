<template>
  <div class="container py-5">
    <h2 class="mb-4">Event Terbaru</h2>
    <div class="row g-4">
      <div class="col-md-6 col-lg-4" v-for="(event, index) in events" :key="index">
        <!-- Card -->
        <div
          class="card text-white overflow-hidden position-relative border-0 rounded-4"
          @mouseover="hoverIndex = index"
          @mouseleave="hoverIndex = null"
          style="height: 400px; background-size: cover; background-position: center"
          :style="{ backgroundImage: `url(${event.image})` }"
        >
          <span class="badge bg-white text-dark position-absolute top-2 start-2 fw-bold">Baru</span>

          <div
            class="position-absolute w-100 h-100 d-flex flex-column justify-content-end p-4 transition"
            :class="hoverIndex === index ? 'bg-dark bg-opacity-75' : ''"
          >
            <p class="mb-1 small">
              <span class="badge bg-dark text-white">{{ event.date }}</span>
              <span v-if="hoverIndex !== index" class="badge bg-dark text-white">{{ event.location }}</span>
            </p>

            <h5 class="fw-bold">{{ event.title }}</h5>

            <!-- Konten saat hover -->
            <div v-if="hoverIndex === index" class="mt-2 text-white small">
              <div class="d-flex align-items-center gap-3 mb-2">
                <span><i class="bi bi-geo-alt-fill me-1"></i> {{ event.location }}</span>
                <span><i class="bi bi-clock me-1"></i> {{ event.time }}</span>
              </div>
              <p>{{ event.description }}</p>
              <div class="text-end">
                <button class="btn btn-outline-light rounded-circle">
                  <i class="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- End Card -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const hoverIndex = ref(null)

// Data event dinamis (bisa diganti pakai API)
const events = [
  {
    image: '/images/agenda.jpg',
    date: '12 November 2025',
    location: 'Baratajaya, Gubeng',
    title: 'Layanan Satu Pintu Digital',
    time: '12:00 - Selesai',
    description: 'Dinas Kominfo memperkenalkan inisiatif smart city yang akan mengubah wajah kota. Ikuti diskusi panel dan tanya jawab langsung.'
  },
  {
    image: '/images/agenda.jpg',
    date: '20 November 2025',
    location: 'Tegalsari, Surabaya',
    title: 'Peluncuran e-Gov Terpadu',
    time: '10:00 - 15:00',
    description: 'Kenali sistem e-government terbaru yang akan mendukung transparansi dan efisiensi layanan publik.'
  }
]
</script>

<style scoped>
.transition {
  transition: background-color 0.3s ease;
}
</style>
