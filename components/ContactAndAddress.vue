<template>
  <div class="container-fluid text-white" style="margin-bottom: 120px;" id="kontak">
    <!-- Kontak Kami -->
    <div class="row bg-wrap">
      <div class="col">
        <div class="py-5">
          <div class="text-center">
            <span class="badge text-dark fw-semibold rounded-pill px-3 py-2" style="font-size: 20px;">
              Kontak Kami
            </span>
            <h2 class="fw-bold mt-3">Kontak Kami Lebih Lanjut</h2>
            <p class="text-light">
              Butuh bantuan atau informasi lebih lanjut? Tim kami siap membantu melalui kontak dan lokasi yang tersedia.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Gmaps -->
    <div class="row my-5">
      <div class="col ms-3" style="margin-bottom: 60px;">
        <div class="map-wrapper rounded-3">
          <GoogleMap api-key="AIzaSyBbd0dFoc5K1ZEU53ebYivOofSHGgqj-wI" mapId="98f051d6389bcfc"
            style="width: 100%; height: 350px;" :center="center" :zoom="15">
            <AdvancedMarker :options="markerOptions">
              <div>
                <svg width="54" height="58" viewBox="0 0 104 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_10075_4125)">
                    <rect x="12.7812" y="0.5" width="79" height="79" rx="39.5" fill="#1157BC" />
                    <path
                      d="M72.3267 54.3889H76.7812V58.5H27.7812V54.3889H32.2358V23.5556C32.2358 22.4203 33.233 21.5 34.4631 21.5H56.7358C57.9659 21.5 58.9631 22.4203 58.9631 23.5556V54.3889H63.4176V33.8333H70.0994C71.3296 33.8333 72.3267 34.7536 72.3267 35.8889V54.3889ZM41.1449 37.9444V42.0556H50.054V37.9444H41.1449ZM41.1449 29.7222V33.8333H50.054V29.7222H41.1449Z"
                      fill="white" />
                  </g>
                  <defs>
                    <filter id="filter0_d_10075_4125" x="0.78125" y="0.5" width="103" height="107"
                      filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha" />
                      <feMorphology radius="12" operator="erode" in="SourceAlpha"
                        result="effect1_dropShadow_10075_4125" />
                      <feOffset dy="16" />
                      <feGaussianBlur stdDeviation="12" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10075_4125" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10075_4125" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </AdvancedMarker>
          </GoogleMap>
        </div>
      </div>

      <div class="col-md-6 me-3">
        <!-- Alamat -->
        <div class="row mx-0 my-0">
          <div class="col rounded bg-white" style="margin-bottom: 20px;">
            <div class="d-flex flex-coloumn gap-3 align-items-center rounded-3 p-4"
              style="border-left: 6px solid transparent;">
              <!-- Ikon -->
              <svg width="100" height="100" viewBox="0 0 114 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_9087_70811)">
                  <rect x="14.7812" y="11.5" width="84" height="84" rx="42" fill="#F7C000" />
                  <path
                    d="M56.782 55.8824C59.6539 55.8824 61.982 53.5543 61.982 50.6824C61.982 47.8105 59.6539 45.4824 56.782 45.4824C53.9102 45.4824 51.582 47.8105 51.582 50.6824C51.582 53.5543 53.9102 55.8824 56.782 55.8824Z"
                    stroke="#292D32" stroke-width="3" />
                  <path
                    d="M42.8147 47.6507C46.0981 33.2173 67.4814 33.234 70.7481 47.6673C72.6647 56.134 67.3981 63.3007 62.7814 67.734C59.4314 70.9673 54.1314 70.9673 50.7647 67.734C46.1648 63.3007 40.8981 56.1173 42.8147 47.6507Z"
                    stroke="#292D32" stroke-width="3" />
                </g>
                <defs>
                  <filter id="filter0_d_9087_70811" x="0.18125" y="0.9" width="113.2" height="113.2"
                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="7.3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9087_70811" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9087_70811" result="shape" />
                  </filter>
                </defs>
              </svg>


              <!-- Konten -->
              <div>
                <h5 class="mb-1 text-dark fw-semibold">Alamat Lokasi</h5>
                <p class="mb-0 text-secondary small">
                  Jl. Barata Jaya III No.16 Baratajaya Kec. Gubeng Surabaya, Jawa Timur 60284, Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Lainnya -->
        <div class="row">
          <div class="col h-100">
            <div class="bg-white rounded p-4 shadow-sm h-100" style="border-left: 6px solid transparent;">
              <!-- Ikon -->
              <svg width="80" height="80" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_9087_70817)">
                  <rect x="14.7812" y="11" width="84" height="84" rx="42" fill="#F7C000" />
                  <path
                    d="M56.7799 70.9173C46.8966 70.9173 38.8633 62.884 38.8633 53.0007C38.8633 43.1173 46.8966 35.084 56.7799 35.084C66.6633 35.084 74.6966 43.1173 74.6966 53.0007C74.6966 62.884 66.6633 70.9173 56.7799 70.9173ZM56.7799 37.584C48.2799 37.584 41.3633 44.5007 41.3633 53.0007C41.3633 61.5007 48.2799 68.4173 56.7799 68.4173C65.2799 68.4173 72.1966 61.5007 72.1966 53.0007C72.1966 44.5007 65.2799 37.584 56.7799 37.584Z"
                    fill="#133260" />
                  <path
                    d="M62.963 59.5509C62.7464 59.5509 62.5297 59.5009 62.3297 59.3676L57.163 56.2842C55.8797 55.5176 54.9297 53.8342 54.9297 52.3509V45.5176C54.9297 44.8342 55.4964 44.2676 56.1797 44.2676C56.863 44.2676 57.4297 44.8342 57.4297 45.5176V52.3509C57.4297 52.9509 57.9297 53.8342 58.4464 54.1342L63.613 57.2176C64.213 57.5676 64.3964 58.3342 64.0464 58.9342C63.7964 59.3342 63.3797 59.5509 62.963 59.5509Z"
                    fill="#133260" />
                </g>
                <defs>
                  <filter id="filter0_d_9087_70817" x="0.18125" y="0.4" width="113.2" height="113.2"
                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="7.3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9087_70817" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9087_70817" result="shape" />
                  </filter>
                </defs>
              </svg>

              <!-- Konten -->
              <div>
                <h5 class="mb-1 text-dark fw-semibold mt-1">Jam Operasional</h5>
                <p class="mb-0 text-secondary small">
                  Senin - Jumat 08.00 - 16.30
                </p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="d-flex align-items-start flex-column bg-white rounded-3 p-4 shadow-sm"
              style="border-left: 6px solid transparent;">
              <!-- Ikon -->
              <svg width="80" height="80" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_9087_70823)">
                  <rect x="14.7812" y="11" width="84" height="84" rx="42" fill="#F7C000" />
                  <path
                    d="M65.8633 70.9173C63.9799 70.9173 61.9966 70.4673 59.9466 69.6007C57.9466 68.7507 55.9299 67.584 53.9633 66.1673C52.0133 64.734 50.1299 63.134 48.3466 61.384C46.5799 59.6007 44.9799 57.7173 43.5633 55.784C42.1299 53.784 40.9799 51.784 40.1633 49.8507C39.2966 47.784 38.8633 45.784 38.8633 43.9007C38.8633 42.6007 39.0966 41.3673 39.5466 40.2173C40.0133 39.034 40.7633 37.934 41.7799 36.984C43.0633 35.7173 44.5299 35.084 46.0966 35.084C46.7466 35.084 47.4133 35.234 47.9799 35.5007C48.6299 35.8007 49.1799 36.2507 49.5799 36.8507L53.4466 42.3007C53.7966 42.784 54.0633 43.2507 54.2466 43.7173C54.4633 44.2173 54.5799 44.7173 54.5799 45.2007C54.5799 45.834 54.3966 46.4507 54.0466 47.034C53.7966 47.484 53.4133 47.9673 52.9299 48.4507L51.7966 49.634C51.8133 49.684 51.8299 49.7173 51.8466 49.7507C52.0466 50.1007 52.4466 50.7007 53.2133 51.6007C54.0299 52.534 54.7966 53.384 55.5633 54.1673C56.5466 55.134 57.3633 55.9007 58.1299 56.534C59.08 57.334 59.6966 57.734 60.0633 57.9173L60.0299 58.0007L61.2466 56.8007C61.7633 56.284 62.2633 55.9007 62.7466 55.6507C63.6633 55.084 64.83 54.984 65.9966 55.4673C66.43 55.6507 66.8966 55.9007 67.3966 56.2507L72.93 60.184C73.5466 60.6007 73.9966 61.134 74.2633 61.7673C74.5133 62.4007 74.6299 62.984 74.6299 63.5673C74.6299 64.3673 74.4466 65.1673 74.0966 65.9173C73.7466 66.6673 73.3133 67.3173 72.7633 67.9173C71.8133 68.9673 70.7799 69.7173 69.58 70.2007C68.43 70.6673 67.18 70.9173 65.8633 70.9173ZM46.0966 37.584C45.1799 37.584 44.3299 37.984 43.5133 38.784C42.7466 39.5007 42.2133 40.284 41.8799 41.134C41.5299 42.0007 41.3633 42.9173 41.3633 43.9007C41.3633 45.4507 41.7299 47.134 42.4633 48.8673C43.2133 50.634 44.2633 52.4673 45.5966 54.3007C46.9299 56.134 48.4466 57.9173 50.1133 59.6007C51.7799 61.2507 53.5799 62.784 55.4299 64.134C57.2299 65.4507 59.0799 66.5173 60.9133 67.284C63.7633 68.5007 66.43 68.784 68.6299 67.8673C69.4799 67.5173 70.2299 66.984 70.9133 66.2173C71.2966 65.8007 71.5966 65.3507 71.8466 64.8173C72.0466 64.4007 72.1466 63.9673 72.1466 63.534C72.1466 63.2673 72.0966 63.0007 71.9633 62.7007C71.9133 62.6007 71.8133 62.4173 71.4966 62.2007L65.9633 58.2673C65.6299 58.034 65.3299 57.8673 65.0466 57.7507C64.6799 57.6007 64.5299 57.4507 63.9633 57.8007C63.6299 57.9673 63.3299 58.2173 62.9966 58.5507L61.7299 59.8007C61.08 60.434 60.08 60.584 59.3133 60.3007L58.8633 60.1007C58.1799 59.734 57.3799 59.1673 56.4966 58.4173C55.6966 57.734 54.8299 56.934 53.7799 55.9007C52.9633 55.0673 52.1466 54.184 51.2966 53.2007C50.5133 52.284 49.9466 51.5007 49.5966 50.8507L49.3966 50.3507C49.2966 49.9673 49.2633 49.7507 49.2633 49.5173C49.2633 48.9173 49.4799 48.384 49.8966 47.9673L51.1466 46.6673C51.4799 46.334 51.7299 46.0173 51.8966 45.734C52.0299 45.5173 52.0799 45.334 52.0799 45.1673C52.0799 45.034 52.0299 44.834 51.9466 44.634C51.8299 44.3673 51.6466 44.0673 51.4133 43.7507L47.5466 38.284C47.3799 38.0507 47.1799 37.884 46.9299 37.7673C46.6633 37.6507 46.3799 37.584 46.0966 37.584ZM60.0299 58.0173L59.7633 59.1507L60.2133 57.984C60.1299 57.9673 60.0633 57.984 60.0299 58.0173Z"
                    fill="#133260" />
                </g>
                <defs>
                  <filter id="filter0_d_9087_70823" x="0.18125" y="0.4" width="113.2" height="113.2"
                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="7.3" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9087_70823" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9087_70823" result="shape" />
                  </filter>
                </defs>
              </svg>

              <!-- Konten -->
              <div class="h-100">
                <h5 class="mb-1 text-dark fw-semibold mt-1">Nomor Telepon</h5>
                <p class="mb-0 text-secondary small">
                  +62 856-3306-260
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { GoogleMap, AdvancedMarker } from 'vue3-google-map'

const center = { lat: 40.689247, lng: -74.044502 }
const markerOptions = { position: center, title: 'LADY LIBERTY' }
const pinOptions = { background: '#FBBC04' }
</script>

<style scoped>
.container-fluid {
  margin-top: 30px;
  margin-bottom: 70px;
  background-color: #133260;
}

.badge {
  background-color: #ffeaa7;
}

.map-wrapper {
  overflow: hidden;
  width: 100%;
  height: 350px;
}

.bg-wrap{
  background-image: url('/images/Pattern.svg');
  background-size: 45%;
  background-position: left;
  background-repeat: no-repeat;
}
</style>