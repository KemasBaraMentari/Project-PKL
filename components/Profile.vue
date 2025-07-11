<template>
  <div id="tentangkami">
    <!-- Navigation Tabs -->
    <div class="d-flex justify-content-start my-4 ms-5">
      <ul class="nav nav-pills bg-light rounded-pill p-2">
        <li class="nav-item" v-for="tab in tabs" :key="tab.id">
          <a class="nav-link px-4 mx-2"
            :class="{ active: activeTab === tab.id, 'text-dark': activeTab !== tab.id, 'rounded-pill': true }" href="#"
            @click.prevent="activeTab = tab.id">
            {{ tab.label }}
          </a>
        </li>
      </ul>
    </div>

    <!-- PROFIL -->
    <div class="content" v-if="activeTab === 'profil'">
      <section class="py-5">
        <div class="container">
          <span class="badge text-dark px-3 py-2 fw-light mb-2" style="font-size: 14px;">TENTANG KAMI</span>
          <div class="row">
            <div class="col-md-6 mb-4 mb-md-0">
              <h2 class="fw-semibold display-6 text-dark">
                Layanan Digital Pemerintah yang<br />
                Lebih Dekat & Mudah Diakses
              </h2>
            </div>
            <div class="col-md-6">
              <p class="text-secondary">
                Kami adalah inisiatif digitalisasi dari pemerintah daerah yang bertujuan untuk menyederhanakan,
                mempercepat, dan meningkatkan transparansi layanan publik. Kami percaya bahwa teknologi harus membuat
                hidup warga lebih mudah bukan sebaliknya.
              </p>
              <p class="text-secondary">
                Inisiatif ini bukan hanya tentang digitalisasi proses birokrasi, tapi tentang membangun kepercayaan
                melalui layanan yang manusiawi. Setiap fitur dan layanan yang kami kembangkan dirancang dengan prinsip
                keterbukaan data, keamanan informasi, serta inklusivitas digital bagi masyarakat dari berbagai latar
                belakang dan usia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- STRUKTUR ORGANISASI -->
    <section class="py-5 text-center text-md-start" v-if="activeTab === 'struktur'">
      <div class="container">
        <div class="mb-4">
          <span class="badge text-dark fw-light px-3 py-2" style="font-size: 14px;">Struktur Organisasi</span>
        </div>
        <h2 class="fw-semibold display-6 text-dark">
          Layanan Digital Pemerintah yang Lebih Dekat & Mudah Diakses
        </h2>
        <div class="text-center mt-5">
          <h4 class="fw-bold text-info text-uppercase">
            Struktur Organisasi
          </h4>
        </div>
        <div class="struktur">
          <div class="text-center">
            <img src="/images/struktur-organisasi.png" class="rounded" alt="Struktur Organisasi">
          </div>
        </div>
      </div>
    </section>

    <!-- VISI & MISI -->
    <section class="py-5" v-if="activeTab === 'visi'">
      <div class="container">
        <div class="mb-4">
          <span class="badge text-dark fw-light px-3 py-2 mb-3" style="font-size: 14px;">Visi & Misi</span>
        </div>

        <div class="row mb-5">
          <div class="col-md-2">
            <h2 class="fw-bold">Visi</h2>
          </div>
          <div class="col-md-10">
            <p class="text-secondary">
              Kami adalah inisiatif digitalisasi dari pemerintah daerah yang bertujuan untuk menyederhanakan,
              mempercepat, dan meningkatkan transparansi layanan publik. Kami percaya bahwa teknologi harus membuat
              hidup warga lebih mudah bukan sebaliknya.
            </p>
            <p class="text-secondary">
              Inisiatif ini bukan hanya tentang digitalisasi proses birokrasi, tapi tentang membangun kepercayaan
              melalui layanan yang manusiawi. Setiap fitur dan layanan yang kami kembangkan dirancang dengan prinsip
              keterbukaan data, keamanan informasi, serta inklusivitas digital bagi masyarakat dari berbagai latar
              belakang dan usia.
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-2">
            <h2 class="fw-bold">Misi</h2>
          </div>
          <div class="col-md-10">
            <p class="text-secondary">
              Kami adalah inisiatif digitalisasi dari pemerintah daerah yang bertujuan untuk menyederhanakan,
              mempercepat, dan meningkatkan transparansi layanan publik. Kami percaya bahwa teknologi harus membuat
              hidup warga lebih mudah bukan sebaliknya.
            </p>
            <p class="text-secondary">
              Inisiatif ini bukan hanya tentang digitalisasi proses birokrasi, tapi tentang membangun kepercayaan
              melalui layanan yang manusiawi. Setiap fitur dan layanan yang kami kembangkan dirancang dengan prinsip
              keterbukaan data, keamanan informasi, serta inklusivitas digital bagi masyarakat dari berbagai latar
              belakang dan usia.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- SOP KERJA -->
    <section class="py-5" v-if="activeTab === 'sop'">
      <div class="container">
        <!-- Badge SOP Kerja -->
        <span class="badge text-dark fw-light rounded px-4 py-2 mb-3"
          style="font-size: 14px;">
          SOP Kerja
        </span>

        <!-- Card Box -->
        <div class="d-flex justify-content-between align-items-center border rounded p-3">
          <!-- Kiri: Ikon dan Teks -->
          <a :href="pdfUrl" target="_blank" class="text-decoration-none text-dark d-flex align-items-center gap-3">
            <img src="/public/images/pdf.png" alt="PDF Icon" style="width: 40px; height: auto;" />
            <div>
              <h5 class="fw-semibold mb-1">SOP Kerja Tahun 2025</h5>
              <small class="text-muted">Pdf | 2389B</small>
            </div>
          </a>

          <!-- Kanan: Tombol Download -->
          <button class="btn rounded-circle p-2">
            <img src="/public/images/icon-download.png" alt="Download" style="width: 24px;" />
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('profil')
const pdfUrl = '/file/sop-kerja.pdf'
const tabs = [
  { id: 'profil', label: 'Profil' },
  { id: 'struktur', label: 'Struktur Organisasi' },
  { id: 'visi', label: 'Visi & Misi' },
  { id: 'sop', label: 'SOP Kerja' }
]
</script>

<style>
.nav-pills .nav-link {
  color: #444;
  font-weight: 500;
}

.nav-pills .nav-link.active {
  background-color: white;
  color: #000;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.badge {
  border: 1px solid grey;
}

.struktur img {
  width: 100%;
}
</style>
