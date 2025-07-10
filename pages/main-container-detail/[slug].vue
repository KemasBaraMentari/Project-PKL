<template>
  <div>
    <AppNavbar />
  </div>

  <div class="card card-wrap m-5 rounded text-white" style="background-color: #133260; height: 150px;">
    <div class="card-body d-flex align-items-center justify-content-between me-4">
      <p class="ms-5">Home / Detail Berita</p>
      <p class="h4 me-3">{{ article.title }}</p>
    </div>
  </div>

  <div class="container py-5">
    <img :src="article.image" class="img-fluid mt-2 mb-4 rounded-3"
      style="object-fit: cover; width: 100%; height: 500px;" />
    <h1>{{ article.title }}</h1>
    <div class="d-flex align-items-center justify-content-center my-4">
      <img src="/images/ava.png" alt="Author" class="rounded-circle me-2" width="24" height="24" />
      <small class="text-muted">Nana Masyadi</small>
    </div>

    <div class="d-flex justify-content-between my-4">
      <div>
        <button class="btn btn-outline-secondary btn-sm me-2 rounded-5">SEMUA</button>
        <button class="btn btn-outline-secondary btn-sm rounded-5">SEMUA</button>
      </div>
      <div class="ms-4">
        <a href=""><img src="/images/facebook-color.png" style="width: 30px;"></a>
        <a href=""><img src="/images/instagram-color.png" style="width: 30px;"></a>
        <a href=""><img src="/images/x-color.png" style="width: 30px;"></a>
        <a href=""><img src="/images/link.png" style="width: 30px;"></a>
      </div>
    </div>
    <p style="text-align: justify;">{{ article.content }}</p>
  </div>

  <div>
    <FooterPage />
  </div>
</template>

<script setup>
import AppNavbar from '~/components/AppNavbar.vue';

const route = useRoute()

const articles = [
  {
    slug: 'smart-digital-systems',
    title: 'Transforming Public Services Through Smart Digital Systems',
    image: '/images/images.jpg',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam corrupti beatae ex aspernatur quibusdam! Totam, sint fugit voluptatum facere quidem voluptates deleniti perferendis provident, tenetur commodi, optio reprehenderit iusto Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo consequuntur earum dolore sed quae vitae omnis accusamus debitis laudantium labore illo sequi officiis cum eaque deserunt culpa, expedita placeat repellat? Autem beatae quos provident veritatis. Consequatur corrupti temporibus debitis voluptatibus recusandae excepturi rem nam error porro quis rerum tempore dolores exercitationem harum quae impedit in non quaerat quas libero et at, blanditiis repellat! Quibusdam odio dolore eos eaque in maiores, molestiae illum iusto ipsa atque cumque impedit vero qui placeat tenetur quo voluptate tempora soluta, molestias fuga inventore! Qui nihil eius minima natus ea odit vitae delectus! In magni tempore iure cumque reiciendis optio alias quibusdam quos repellat? Nam eveniet asperiores, alias eos sapiente iure a saepe doloribus aliquid sed error distinctio, possimus similique nesciunt consequuntur voluptatum placeat tenetur. Perspiciatis doloremque sunt praesentium, officia sequi sit laboriosam adipisci pariatur minima nesciunt a saepe explicabo odit voluptas asperiores atque quisquam expedita eos veniam quibusdam natus? Vitae suscipit doloribus quibusdam sapiente beatae recusandae minima dignissimos temporibus eius obcaecati! Blanditiis officia quidem explicabo sapiente quaerat porro pariatur veritatis rem iusto hic vero dolorem est ipsa possimus, perferendis corrupti nostrum unde commodi temporibus exercitationem reprehenderit. Reiciendis, quas. Vitae voluptate asperiores repudiandae sed eius maiores exercitationem, quas vel, voluptates, sit beatae sequi officia voluptatem esse. Fuga voluptatem atque harum repellat provident quibusdam. Perspiciatis itaque laudantium dolorem quam necessitatibus, vitae eligendi officiis quae quia amet qui sequi soluta minima aut rem pariatur! Alias impedit fuga assumenda amet officiis exercitationem error, velit eius delectus dolore quasi, optio neque quae! Soluta debitis quo repellendus aut consequuntur voluptas temporibus, esse ducimus omnis animi recusandae velit vero ex cumque at. Sed magnam mollitia minima omnis velit repellat perferendis sapiente quod dolor, modi beatae vel culpa, quas optio, eum consequuntur ea dignissimos ullam aliquam tempore architecto? Dicta dolorem aliquam quidem ea?',
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

import FooterPage from '~/components/FooterPage.vue';
</script>

<style>
.card-wrap {
  background-color: #133260;
  background-image:
    linear-gradient(to left, #133260 65%, transparent 35%),
    url("/images/pattern.svg");
}
</style>
