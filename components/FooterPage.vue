<template>
    <footer class="container-fluid text-white py-5">
        <div class="row ms-2">
            <!-- Kolom 1 -->
            <div class="col-lg-6 col-md-6 mb-4">
                <h5 class="fw-bold mb-3">Surabaya ID</h5>
                <p class="my-1">Transparansi, partisipasi, dan pelayanan publik <br>yang efisien dalam genggaman Anda.</p>
                <div class="d-flex gap-3 my-3">
                    <i class="bi bi-facebook fs-4">
                        <a href="#"><img src="/images/facebook.png" alt=""></a>
                    </i>
                    <i class="bi bi-instagram fs-4">
                        <a href="#"><img src="/images/instagram.png" alt=""></a>
                    </i>
                    <i class="bi bi-linkedin fs-4">
                        <a href="#"><img src="/images/linkedin.png" alt=""></a>
                    </i>
                    <i class="bi bi-youtube fs-4">
                        <a href="#"><img src="/images/youtube.png" alt=""></a>
                    </i>
                </div>
            </div>

            <!-- Kolom 2 -->
            <div class="col-lg-2 col-md-6">
                <h6 class="fw-semibold">Menu & Preferensi</h6>
                <ul class="list-unstyled my-3">
                    <li class="mb-1"><a href="/" class="text-white text-decoration-none">Beranda</a></li>
                    <li class="mb-1"><a href="/components/Profile.vue" class="text-white text-decoration-none">Tentang Kami</a></li>
                    <li class="mb-1"><a href="/components/Schedule.vue" class="text-white text-decoration-none">Event</a></li>
                    <li class="mb-1"><a href="/components/MainContainer.vue" class="text-white text-decoration-none">Blog</a></li>
                    <li class="mb-1"><a href="/components/ContactAndAddress.vue" class="text-white text-decoration-none">Kontak</a></li>
                </ul>
            </div>

            <!-- Kolom 3 -->
            <div class="col-lg-2 col-md-6">
                <h6 class="fw-semibold">Berita</h6>
                <ul class="list-unstyled my-3">
                    <li class="mb-1"><a href="#" class="text-white text-decoration-none">Seni & Budaya</a></li>
                    <li class="mb-1"><a href="#" class="text-white text-decoration-none">Pemerintahan</a></li>
                    <li class="mb-1"><a href="#" class="text-white text-decoration-none">Kebersihan</a></li>
                    <li class="mb-1"><a href="#" class="text-white text-decoration-none">Citizen</a></li>
                    <li class="mb-1"><a href="#" class="text-white text-decoration-none">Ekonomi & Bisnis</a></li>
                </ul>
            </div>

            <!-- Kolom 4 -->
            <div class="col-lg-2 col-md-6">
                <h6 class="fw-semibold">Sosial Media</h6>
                <ul class="list-unstyled my-3">
                    <li class="mb-1"><a href="#" class="text-white text-decoration-none">Facebook</a></li>
                    <li class="mb-1"><a href="#" class="text-white text-decoration-none">Instagram</a></li>
                    <li class="mb-1"><a href="#" class="text-white text-decoration-none">Youtube</a></li>
                    <li class="mb-1"><a href="#" class="text-white text-decoration-none">Linkedin</a></li>
                </ul>
            </div>
        </div>

        <hr class="border-light mx-3">

        <div class="d-flex justify-content-between flex-wrap">
            <p class="mb-0 ms-4">© Copyright SURABAYA ID 2025 All Right Reserved</p>
            <div>
                <a href="#" class="text-white text-decoration-none mx-4">Privacy Policy</a>
                <a href="#" class="text-white text-decoration-none mx-4">Terms & Condition</a>
            </div>
        </div>
    </footer>

</template>

<script setup>

</script>

<style scoped>
.container-fluid{
    background-color: #133260;
    background-image: url('/images/Pattern.svg');
    background-size: 32%;
    background-position: left;
    background-repeat: no-repeat;
}
</style>