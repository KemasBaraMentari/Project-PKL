<template>
    <div>
        <AppNavbar />
    </div>

    <div class="card card-wrap m-5 rounded text-white" style="background-color: #133260; height: 150px;">
        <div class="card-body d-flex align-items-center justify-content-end me-4">
            <p class="h4">{{ card.title }}</p>
        </div>
    </div>

    <div>
        <div class="container my-5">
            <div class="row g-4">
                <!-- Gambar kiri -->
                <div class="col-lg-6">
                    <img :src="card.image" class="img-fluid rounded" alt="Event Poster" />
                </div>

                <!-- Detail Event kanan -->
                <div class="col-lg-6">
                    <h4 class="fw-bold">{{ card.title }}</h4>
                    <h5 class="text-primary fw-semibold">Rp 25.000</h5>

                    <div class="d-flex align-items-center text-muted my-2">
                        <i class="bi bi-clock me-2"></i>
                        <span>12:00 - 14:00</span>
                        <span class="mx-2">•</span>
                        <span>5 Mei 2025 - 9 Mei 2025</span>
                        <span class="mx-2">•</span>
                        <span>Gubeng, Surabaya</span>
                    </div>

                    <button class="btn btn-primary my-3 w-100 fw-bold">Daftar Event</button>

                    <!-- Tab Detail / Maps -->
                    <ul class="nav nav-tabs mb-3" id="eventTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="detail-tab" data-bs-toggle="tab"
                                data-bs-target="#detail" type="button">Detail Event</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="map-tab" data-bs-toggle="tab" data-bs-target="#map"
                                type="button">Maps Lokasi</button>
                        </li>
                    </ul>

                    <div class="tab-content" id="eventTabContent">
                        <!-- Detail Event -->
                        <div class="tab-pane fade show active" id="detail">
                            <p>Ingin menulis konten digital yang tidak hanya menarik, tapi juga tepat sasaran? Dalam
                                pelatihan ini, kamu akan belajar cara berpikir strategis seperti seorang pebisnis
                                melalui alat bantu Business Model Canvas (BMC).</p>
                            <p>Pelatihan ini dirancang khusus untuk para UX Writer, Content Strategist, dan siapa saja
                                yang ingin memahami bagaimana model bisnis memengaruhi keputusan penulisan konten produk
                                digital.</p>

                            <ul>
                                <li>Mengenal 9 elemen utama dalam BMC</li>
                                <li>Menganalisis kebutuhan pengguna dari perspektif bisnis</li>
                                <li>Menyusun konten yang selaras dengan value proposition produk</li>
                                <li>Praktik langsung membuat draft UX copy berdasarkan skenario BMC</li>
                            </ul>

                            <p class="fw-bold mt-3">Detail Jadwal :</p>
                            <ul class="mb-0">
                                <li>5 Mei 2025 Pukul 10:00 - 18:00</li>
                                <li>6 Mei 2025 Pukul 10:00 - 18:00</li>
                                <li>7 Mei 2025 Pukul 10:00 - 18:00</li>
                                <li>8 Mei 2025 Pukul 10:00 - 18:00</li>
                                <li>9 Mei 2025 Pukul 10:00 - 18:00</li>
                            </ul>
                        </div>

                        <!-- Maps Lokasi -->
                        <div class="tab-pane fade" id="map">
                            <iframe class="w-100 rounded" height="300" style="border:0" loading="lazy" allowfullscreen
                                src="https://www.google.com/maps?q=Gubeng,Surabaya&output=embed"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

        <div>
            <FooterPage />
        </div>
</template>

<script>
import AppNavbar from '~/components/AppNavbar.vue';

const route = useRoute()

const agendaList = [
    {
        slug: 'event-satu',
        title: 'Layanan Satu Pintu Digital',
        date: '12 November 2025',
        location: 'Baratajaya, Gubeng',
        image: '/images/agenda.jpg',
    },
    {
        slug: 'event-dua',
        title: 'Layanan Satu Pintu Digital',
        date: '12 November 2025',
        location: 'Baratajaya, Gubeng',
        image: '/images/agenda.jpg',
    },
    {
        slug: 'event-tiga',
        title: 'Layanan Satu Pintu Digital',
        date: '12 November 2025',
        location: 'Baratajaya, Gubeng',
        image: '/images/agenda.jpg',
    },
    {
        slug: 'event-satu',
        title: 'Layanan Satu Pintu Digital',
        date: '12 November 2025',
        location: 'Baratajaya, Gubeng',
        image: '/images/agenda.jpg',
    },
    {
        slug: 'event-satu',
        title: 'Layanan Satu Pintu Digital',
        date: '12 November 2025',
        location: 'Baratajaya, Gubeng',
        image: '/images/agenda.jpg',
    },
    {
        slug: 'event-satu',
        title: 'Layanan Satu Pintu Digital',
        date: '12 November 2025',
        location: 'Baratajaya, Gubeng',
        image: '/images/agenda.jpg',
    },
]

const card = card.find((a) => a.slug === route.params.slug)

if (!card) {
    throw createError({ statusCode: 404, statusMessage: 'Event not found' })
}

import FooterPage from '~/components/FooterPage.vue';
</script>

<style></style>