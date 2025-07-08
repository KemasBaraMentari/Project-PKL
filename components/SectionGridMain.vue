<template>
    <div class="container py-4">
        <!-- Filter dan Search -->
        <input type="text" class="form-control form-control-sm mb-3" placeholder="Search..." />
        <div class="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-2">
            <div>
                <button class="btn btn-outline-secondary btn-sm me-2">SEMUA</button>
                <button class="btn btn-outline-secondary btn-sm me-2">LIFE STYLE</button>
                <button class="btn btn-outline-secondary btn-sm me-2">TECHNOLOGY</button>
                <button class="btn btn-outline-secondary btn-sm">CAREER</button>
            </div>
        </div>

        <!-- Grid Artikel -->
        <div class="row">
            <div v-for="(article, index) in articles" :key="index" class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div class="card h-100 border-0">
                    <NuxtLink :to="`/main-container-detail/${article.slug}`" class="text-decoration-none text-dark">
                    <img :src="article.image" class="card-img-top object-fit-cover rounded" alt="article"
                        style="height: 180px;" />
                    <div class="card-body">
                        <h6 class="card-title">{{ article.title }}</h6>
                    </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const articles = [
    {
        slug: 'smart-digital-systems',
        title: "Transforming Public Services Through Smart Digital Systems",
        image: "/images/images.jpg",
    },
    {
        slug: 'government-app-launch',
        title: "Behind The Build: Inside Our Latest Government App Launch",
        image: "/images/images2.jpg",
    },
    {
        slug: 'smart-digital-systems3',
        title: "UX Meets Infrastructure: Why Both Matter In Digital Transformation",
        image: "/images/images3.jpg",
    },
    {
        slug: 'smart-digital-systems4',
        title: "UX Meets Infrastructure: Why Both Matter In Digital Transformation",
        image: "/images/images4.jpg",
    },
    {
        slug: 'smart-digital-systems5',
        title: "UX Meets Infrastructure: Why Both Matter In Digital Transformation",
        image: "/images/images.jpg",
    },
    {
        slug: 'smart-digital-systems6',
        title: "UX Meets Infrastructure: Why Both Matter In Digital Transformation",
        image: "/images/images2.jpg",
    },
    {
        slug: 'smart-digital-systems7',
        title: "UX Meets Infrastructure: Why Both Matter In Digital Transformation",
        image: "/images/images3.jpg",
    },
    {
        slug: 'smart-digital-systems8',
        title: "UX Meets Infrastructure: Why Both Matter In Digital Transformation",
        image: "/images/images4.jpg",
    },
];
</script>

<style scoped>
.object-fit-cover {
    object-fit: cover;
}
</style>
