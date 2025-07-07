<template>
    <div class="container py-5" id="galeri">
        <div class="text-center mb-5">
            <span class="badge text-dark mb-2">Galeri</span>
            <h2 class="fw-bold">Agenda Kota & Kegiatan Warga</h2>
            <p class="text-muted">
                Jelajahi momen-momen spesial dan wajah kota melalui galeri visual Surabaya.
            </p>
        </div>

        <div class="row g-3">
            <div id="photo-galery" class="py-5">
                <div class="gallery masonry">
                    <!-- Item 1 -->
                    <div class="item img-wrapper" v-for="(image, index) in images">
                        <img :src="image.gambar" class="img-fluid w-100 object-fit-cover" alt="Galeri Surabaya"
                            style="object-fit: cover;" :style="{height: image.height}" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const images = [
    {
        gambar: '/images/gallery1.jpg',
        height: '250px',
    },
    {
        gambar: '/images/gallery2.jpg',
        height: '550px',
    },
    {
        gambar: '/images/gallery3.jpg',
        height: '250px',
    },
    {
        gambar: '/images/gallery4.jpg',
        height: '550px',
    },
    {
        gambar: '/images/gallery5.jpg',
        height: '250px',
    },
    {
        gambar: '/images/gallery6.jpg',
        height: '250px',
    },
    {
        gambar: '/images/gallery7.jpg',
        height: '250px',
    },
    {
        gambar: '/images/gallery8.jpg',
        height: '250px',
    },
    {
        gambar: '/images/gallery9.jpg',
        height: '550px',
    },
    {
        gambar: '/images/gallery1.jpg',
        height: '250px',
    },
    {
        gambar: '/images/gallery2.jpg',
        height: '550px',
    },
    {
        gambar: '/images/gallery1.jpg',
        height: '250px',
    }
];
</script>

<style scoped>
.object-fit-cover {
    object-fit: cover;
}

.badge {
    background-color: #FFF8DD;
    font-size: 20px;
}

.gallery img,
.gallery video {
    width: 100%;
    border-radius: 8px;
}

.masonry {
    column-count: 5;
    column-gap: .5rem;
}

.item {
    break-inside: avoid;
    margin-bottom: 0.5rem;
    /* border: 1px solid #eee;
    padding: 5px;
    border-radius: 10px; */
}

.img-wrapper {
  overflow: hidden;
  border-radius: 8px; /* opsional */
}

.img-wrapper img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

/* // X-Small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
    .masonry {
        column-count: 2;
    }
}

/* // Small devices (landscape phones, less than 768px) */
@media (min-width: 575.99px) and (max-width: 767.98px) {
    .masonry {
        column-count: 2;
    }
}

/* // Medium devices (tablets, less than 992px) */
@media (min-width: 767.99px) and (max-width: 991.98px) {
    .masonry {
        column-count: 3;
    }
}

/* // Large devices (desktops, less than 1200px) */
@media (min-width: 991.99px) and (max-width: 1199.98px) {
    .masonry {
        column-count: 4;
    }
}

/* // X-Large devices (large desktops, less than 1400px) */
@media (min-width: 1399.99px) {
    .masonry {
        column-count: 4;
    }
}
</style>