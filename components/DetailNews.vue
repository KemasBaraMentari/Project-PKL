<template>
  <div class="container py-5">
    <h1>{{ article.title }}</h1>
    <img :src="article.image" class="img-fluid mb-4" />
    <p>{{ article.content }}</p>
  </div>
</template>

<script setup>
const route = useRoute()

const articles = [
  {
    slug: 'smart-digital-systems',
    title: 'Transforming Public Services Through Smart Digital Systems',
    image: '/images/images.jpg',
    content: 'Isi artikel lengkap di sini...',
  },
  {
    slug: 'government-app-launch',
    title: 'Behind The Build: Inside Our Latest Government App Launch',
    image: '/images/images2.jpg',
    content: 'Isi artikel lainnya...',
  },
]

const article = articles.find((a) => a.slug === route.params.slug)

if (!article) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found' })
}
</script>
