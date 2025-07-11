<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold ms-5 fs-4" href="/">Surabaya ID</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse m-2" id="navbarNav">
        <ul class="navbar-nav ms-auto nav-underline">
          <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
            <a class="nav-link m-2 fw-semibold" :class="{ active: $route.path === item?.path }" :href="item.link">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          name: "Beranda",
          link: "/",
          path: '/'
        },
        {
          name: "Tentang Kami",
          link: "/#tentangkami",
          path: '/components/Profile.vue'
        },
        {
          name: "Layanan",
          link: "/#layanan",
          path: '/service-detail'
        },
        {
          name: "Blog",
          link: "/#blog",
          path: "/main-container-detail"
        },
        {
          name: "Event",
          link: "/#event",
          path: "/schedule-detail"
        },
        {
          name: "Galeri",
          link: "/#galeri",
          path: '/components/Gallery.vue'
        },
        {
          name: "Kontak",
          link: "/#kontak",
          path: '/components/ContactAndAddress.vue'
        }
      ],
      activeIndex: 0, // default active
    };
  },
  methods: {
    setActive(index) {
      this.activeIndex = index;
    },
  },
};
</script>

<style scoped>
.nav-underline .nav-link {
  position: relative;
  transition: color 0.3s ease;
  color: #1d2b53;
}

.nav-underline .nav-link::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0%;
  height: 3px;
  background-color: #1d2b53;
  transition: width 0.3s ease;
}

.nav-underline .nav-link.active::after {
  width: 100%;
}

.nav-underline .nav-link.active {
  color: #1d2b53;
}

a {
  font-family: "Plus Jakarta Sans", sans-serif;
}
</style>
