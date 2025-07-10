<template>
    <div>
        <AppNavbar />
    </div>

    <div class="card card-wrap m-5 rounded text-white" style="background-color: #133260; height: 150px;">
        <div class="card-body d-flex align-items-center justify-content-between me-4">
            <p class="ms-5">Home/ Detail Event</p>
            <p class="h4 me-3">{{ card.title }}</p>
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
                    <div class="d-flex justify-content-between">
                        <h4 class="fw-bold h2">{{ card.title }}</h4>
                        <h5 class="text-dark fw-semibold h2">Rp 25.000</h5>
                    </div>


                    <div class="d-flex align-items-center text-muted my-2">
                        <i class="bi bi-clock me-2"></i>
                        <span class="mx-2">
                            <svg width="23" height="23" viewBox="0 0 20 21" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_10733_17922)">
                                    <path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M9.97056 18.527C5.97412 18.527 2.73438 15.2873 2.73438 11.2909C2.73438 7.29444 5.97412 4.05469 9.97056 4.05469C13.967 4.05469 17.2067 7.29444 17.2067 11.2909C17.2067 15.2873 13.967 18.527 9.97056 18.527Z"
                                        fill="#B5B5C3" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M9.9375 6.86719H10.0054C10.212 6.86719 10.3849 7.02369 10.4054 7.2292L10.7713 10.8873L13.3828 12.3796C13.508 12.4512 13.5853 12.5844 13.5853 12.7286V12.8973C13.5853 13.0669 13.4479 13.2044 13.2783 13.2044C13.251 13.2044 13.2238 13.2008 13.1975 13.1936L9.48375 12.1807C9.29771 12.13 9.17391 11.9543 9.1887 11.7621L9.53667 7.23836C9.55278 7.02892 9.72743 6.86719 9.9375 6.86719Z"
                                        fill="#B5B5C3" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_10733_17922">
                                        <rect width="19.2965" height="19.2965" fill="white"
                                            transform="translate(0.320312 0.835938)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                        <span>12:00 - 14:00</span>
                        <span class="mx-2">
                            <svg width="23" height="23" viewBox="0 0 20 21" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.3"
                                    d="M16.9561 18.527H2.48371C2.0013 18.527 1.67969 18.2054 1.67969 17.723V4.85871C1.67969 4.3763 2.0013 4.05469 2.48371 4.05469H16.9561C17.4385 4.05469 17.7601 4.3763 17.7601 4.85871V17.723C17.7601 18.2054 17.4385 18.527 16.9561 18.527Z"
                                    fill="#A1A5B7" />
                                <path
                                    d="M4.89777 5.66139C4.41536 5.66139 4.09375 5.33978 4.09375 4.85737V3.24933C4.09375 2.76692 4.41536 2.44531 4.89777 2.44531C5.38018 2.44531 5.70179 2.76692 5.70179 3.24933V4.85737C5.70179 5.33978 5.38018 5.66139 4.89777 5.66139ZM8.91787 4.85737V3.24933C8.91787 2.76692 8.59626 2.44531 8.11385 2.44531C7.63144 2.44531 7.30983 2.76692 7.30983 3.24933V4.85737C7.30983 5.33978 7.63144 5.66139 8.11385 5.66139C8.59626 5.66139 8.91787 5.33978 8.91787 4.85737ZM12.134 4.85737V3.24933C12.134 2.76692 11.8123 2.44531 11.3299 2.44531C10.8475 2.44531 10.5259 2.76692 10.5259 3.24933V4.85737C10.5259 5.33978 10.8475 5.66139 11.3299 5.66139C11.8123 5.66139 12.134 5.33978 12.134 4.85737ZM15.35 4.85737V3.24933C15.35 2.76692 15.0284 2.44531 14.546 2.44531C14.0636 2.44531 13.742 2.76692 13.742 3.24933V4.85737C13.742 5.33978 14.0636 5.66139 14.546 5.66139C15.0284 5.66139 15.35 5.33978 15.35 4.85737Z"
                                    fill="#A1A5B7" />
                                <path
                                    d="M7.14741 11.3727C7.46902 11.3727 7.71022 11.2923 7.87103 11.1315C8.03183 10.9707 8.19264 10.7294 8.19264 10.4078C8.19264 10.1666 8.11224 9.92543 7.95143 9.76462C7.79063 9.60382 7.54942 9.52342 7.30822 9.52342C7.14741 9.52342 6.9866 9.52341 6.8258 9.60381C6.66499 9.68421 6.5846 9.76462 6.5042 9.84502C6.42379 9.92542 6.34339 10.0058 6.26299 10.1666C6.18259 10.3274 6.10219 10.4078 6.10219 10.5686C6.10219 10.649 6.02179 10.649 5.94138 10.7294C5.86098 10.8098 5.78057 10.8098 5.61977 10.8098C5.45896 10.8098 5.37857 10.7294 5.29817 10.649C5.21776 10.5686 5.13736 10.4078 5.13736 10.247C5.13736 10.0862 5.21776 9.92543 5.29817 9.76462C5.37857 9.60382 5.53937 9.44301 5.70018 9.28221C5.86098 9.1214 6.10218 8.9606 6.42379 8.8802C6.7454 8.79979 6.98661 8.7194 7.38862 8.7194C7.71023 8.7194 7.95144 8.79979 8.19264 8.8802C8.43385 8.9606 8.67505 9.1214 8.83585 9.2018C8.99665 9.2822 9.15746 9.52342 9.23786 9.76462C9.31826 10.0058 9.39867 10.1666 9.39867 10.4078C9.39867 10.7294 9.31827 10.9706 9.15746 11.2119C8.99666 11.4531 8.83586 11.6943 8.59465 11.8551C8.83586 12.0159 9.07706 12.1767 9.23786 12.3375C9.39866 12.4983 9.55947 12.6591 9.63987 12.9003C9.72027 13.1415 9.80068 13.3023 9.80068 13.5435C9.80068 13.8651 9.72027 14.1063 9.63987 14.3475C9.55947 14.5887 9.31827 14.8299 9.15746 15.0711C8.99666 15.3124 8.67505 15.4732 8.35344 15.5536C8.03184 15.634 7.71023 15.7144 7.30822 15.7144C6.90621 15.7144 6.5846 15.634 6.26299 15.4732C5.94138 15.3124 5.70018 15.1516 5.53937 14.9908C5.37857 14.83 5.21777 14.5887 5.13736 14.3475C5.05696 14.1063 4.97656 13.9455 4.97656 13.7847C4.97656 13.6239 5.05696 13.4631 5.13736 13.3827C5.21777 13.3023 5.37857 13.2219 5.53937 13.2219C5.61978 13.2219 5.70018 13.2219 5.78058 13.3023C5.86098 13.3827 5.94138 13.3827 5.94138 13.4631C6.10219 13.8651 6.26299 14.1867 6.5042 14.4279C6.7454 14.6691 6.98661 14.7495 7.30822 14.7495C7.46902 14.7495 7.71022 14.6691 7.87103 14.5887C8.03183 14.5083 8.19264 14.3475 8.35344 14.1867C8.51425 14.0259 8.51425 13.7847 8.51425 13.5435C8.51425 13.1415 8.43385 12.9003 8.19264 12.6591C7.95144 12.4179 7.71023 12.3375 7.38862 12.3375C7.30822 12.3375 7.22781 12.3375 7.06701 12.3375C6.9062 12.3375 6.8258 12.3375 6.8258 12.3375C6.66499 12.3375 6.50419 12.2571 6.42379 12.1767C6.34339 12.0963 6.26299 11.9355 6.26299 11.8551C6.26299 11.6943 6.34339 11.6139 6.42379 11.4531C6.50419 11.2923 6.665 11.2923 6.90621 11.2923H7.14741V11.3727ZM12.3735 14.9103V10.649C11.5695 11.2923 11.0067 11.5335 10.7655 11.5335C10.6047 11.5335 10.5243 11.4531 10.4439 11.3727C10.3635 11.2923 10.2831 11.1315 10.2831 10.9707C10.2831 10.8099 10.3635 10.7294 10.4439 10.649C10.5243 10.5686 10.6851 10.4882 11.0067 10.3274C11.4087 10.1666 11.7303 9.92543 11.8911 9.76462C12.0519 9.60382 12.2931 9.36261 12.5343 9.12141C12.7756 8.8802 12.8559 8.71939 12.8559 8.63899C12.8559 8.55859 13.0168 8.55859 13.1776 8.55859C13.3384 8.55859 13.4992 8.63899 13.5796 8.7194C13.66 8.7998 13.7404 9.041 13.7404 9.28221V14.6691C13.7404 15.3124 13.4992 15.634 13.0972 15.634C12.9364 15.634 12.7756 15.5536 12.6148 15.4732C12.4539 15.3928 12.3735 15.1516 12.3735 14.9103Z"
                                    fill="#A1A5B7" />
                            </svg>
                        </span>
                        <span>5 Mei 2025 - 9 Mei 2025</span>
                        <span class="mx-2">
                            <svg width="23" height="23" viewBox="0 0 20 21" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_10733_17935)">
                                    <path
                                        d="M4.09375 9.28015C4.09375 5.66206 6.50581 3.25 10.1239 3.25C13.742 3.25 16.1541 6.26508 16.1541 9.28015C16.1541 11.1556 14.4042 13.7309 10.9046 17.0062C10.4579 17.4243 9.76893 17.4416 9.30175 17.0466C5.82975 14.1106 4.09375 11.5218 4.09375 9.28015ZM10.1239 10.4862C11.234 10.4862 12.134 9.58625 12.134 8.47613C12.134 7.36601 11.234 6.46608 10.1239 6.46608C9.01378 6.46608 8.11385 7.36601 8.11385 8.47613C8.11385 9.58625 9.01378 10.4862 10.1239 10.4862Z"
                                        fill="#B5B5C3" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_10733_17935">
                                        <rect width="19.2965" height="19.2965" fill="white"
                                            transform="translate(0.0703125 0.835938)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </span>
                        <span>Gubeng, Surabaya</span>
                    </div>

                    <button class="btn my-3 w-100 fw-bold text-white" style="background-color: #133260;">Daftar
                        Event</button>

                    <!-- Tab Detail / Maps -->
                    <div class="d-flex justify-content-between my-4 mx-1">
                        <ul class="nav nav-pills bg-light rounded-pill p-2" style="width: 100%;">
                            <li class="nav-item" style="width: 50%;" v-for="tab in tabs" :key="tab.id">
                                <a class="nav-link text-center px-4 mx-2"
                                    :class="{ active: activeTab === tab.id, 'text-dark': activeTab !== tab.id, 'rounded-pill': true }"
                                    href="#" @click.prevent="activeTab = tab.id">
                                    {{ tab.label }}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="tab-content" id="eventTabContent">
                        <!-- Detail Event -->
                        <div class="content" v-if="activeTab === 'detail'">
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
                        <div class="py-5 text-center text-md-start" v-if="activeTab === 'maps'">
                            <div class="map-wrap">
                                <GoogleMap api-key="AIzaSyBbd0dFoc5K1ZEU53ebYivOofSHGgqj-wI" mapId="98f051d6389bcfc"
                                    style="width: 100%; height: 350px;" :center="center" :zoom="15">
                                    <AdvancedMarker :options="markerOptions">
                                        <div>
                                            <svg width="54" height="58" viewBox="0 0 104 108" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <g filter="url(#filter0_d_10075_4125)">
                                                    <rect x="12.7812" y="0.5" width="79" height="79" rx="39.5"
                                                        fill="#1157BC" />
                                                    <path
                                                        d="M72.3267 54.3889H76.7812V58.5H27.7812V54.3889H32.2358V23.5556C32.2358 22.4203 33.233 21.5 34.4631 21.5H56.7358C57.9659 21.5 58.9631 22.4203 58.9631 23.5556V54.3889H63.4176V33.8333H70.0994C71.3296 33.8333 72.3267 34.7536 72.3267 35.8889V54.3889ZM41.1449 37.9444V42.0556H50.054V37.9444H41.1449ZM41.1449 29.7222V33.8333H50.054V29.7222H41.1449Z"
                                                        fill="white" />
                                                </g>
                                                <defs>
                                                    <filter id="filter0_d_10075_4125" x="0.78125" y="0.5" width="103"
                                                        height="107" filterUnits="userSpaceOnUse"
                                                        color-interpolation-filters="sRGB">
                                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                            result="hardAlpha" />
                                                        <feMorphology radius="12" operator="erode" in="SourceAlpha"
                                                            result="effect1_dropShadow_10075_4125" />
                                                        <feOffset dy="16" />
                                                        <feGaussianBlur stdDeviation="12" />
                                                        <feComposite in2="hardAlpha" operator="out" />
                                                        <feColorMatrix type="matrix"
                                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0" />
                                                        <feBlend mode="normal" in2="BackgroundImageFix"
                                                            result="effect1_dropShadow_10075_4125" />
                                                        <feBlend mode="normal" in="SourceGraphic"
                                                            in2="effect1_dropShadow_10075_4125" result="shape" />
                                                    </filter>
                                                </defs>
                                            </svg>
                                        </div>
                                    </AdvancedMarker>
                                </GoogleMap>
                            </div>
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

<script setup>
import AppNavbar from '~/components/AppNavbar.vue';
import FooterPage from '~/components/FooterPage.vue';
import { useRoute, createError } from 'nuxt/app'
import { ref } from 'vue'
import { GoogleMap, AdvancedMarker } from 'vue3-google-map'

const activeTab = ref('detail')
const tabs = [
    { id: 'detail', label: 'Detail Event' },
    { id: 'maps', label: 'Maps Event' },
]

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

// Ambil event berdasarkan slug dari URL
const card = agendaList.find((a) => a.slug === route.params.slug)

if (!card) {
    throw createError({ statusCode: 404, statusMessage: 'Event not found' })
}

const center = { lat: 40.689247, lng: -74.044502 }
const markerOptions = { position: center, title: 'LADY LIBERTY' }
const pinOptions = { background: '#FBBC04' }

</script>

<style>
.map-wrap {
    border-radius: 20px;
    overflow: hidden;
}
</style>