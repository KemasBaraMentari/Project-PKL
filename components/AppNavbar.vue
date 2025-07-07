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
            <a class="nav-link m-2 fw-semibold" :class="{ active: activeIndex === index }" :href="item.link">
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
          link: "#beranda",
        },
        {
          name: "Tentang Kami",
          link: "#tentangkami",
        },
        {
          name: "Layanan",
          link: "#layanan",
        },
        {
          name: "Blog",
          link: "#blog",
        },
        {
          name: "Event",
          link: "#event",
        },
        {
          name: "Galeri",
          link: "#galeri",
        },
        {
          name: "Kontak",
          link: "#kontak",
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
