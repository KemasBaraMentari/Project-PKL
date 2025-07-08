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
        <div class="card border-0 position-relative overflow-hidden rounded-4">
          <!-- Gambar -->
          <img :src="card.image" class="w-100 h-100 object-fit-cover" style="max-height: 550px;" :alt="card.title" />

          <!-- Badge Baru -->
          <span class="badge bg-white text-dark position-absolute top-0 start-0 m-3 shadow-sm">Baru</span>

          <!-- Overlay Konten -->
          <div class="position-absolute bottom-0 start-0 end-0 text-white p-3"
            style="background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0));">
            <div class="mb-2 d-flex flex-wrap align-items-center gap-2">
              <small class="px-2 py-1 rounded" style="border: 1px solid white;">{{ card.date }}</small>
              <small class="px-2 py-1 rounded" style="border: 1px solid white;">{{ card.location }}</small>
            </div>
            <h5 class="fw-bold display-6 m-0">{{ card.title }}</h5>
          </div>
        </div>
      </div>
    </div>


    <div class="row">
      <div class="col mb-5">
        <div class="mt-5 text-center">
          <button class="btn btn-custom">Lihat Selengkapnya →</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const agendaList = [
  {
    title: 'Layanan Satu Pintu Digital',
    date: '12 November 2025',
    location: 'Baratajaya, Gubeng',
    image: '/images/agenda.jpg',
  },
  {
    title: 'Layanan Satu Pintu Digital',
    date: '12 November 2025',
    location: 'Baratajaya, Gubeng',
    image: '/images/agenda.jpg',
  },
  {
    title: 'Layanan Satu Pintu Digital',
    date: '12 November 2025',
    location: 'Baratajaya, Gubeng',
    image: '/images/agenda.jpg',
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
  color: #0c2d62;
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
  transition: all 0.3s ease;
}

.event-card:hover {
  transform: scale(1.05);
  z-index: 10;
  position: relative;
}

.card:hover {
  width: 600px;
  transition: all 0.3s ease;
}

.event-card .card {
  transition: all 0.3s ease-in-out;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}
</style>