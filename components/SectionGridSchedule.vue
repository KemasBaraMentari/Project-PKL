<template>
    <div>
        <!-- Tabs -->
        <div class="d-flex justify-content-start my-4 ms-5">
            <ul class="nav nav-pills bg-light rounded-pill p-2">
                <li class="nav-item" v-for="tab in tabs" :key="tab.id">
                    <a class="nav-link px-4 mx-2"
                        :class="{ active: activeTab === tab.id, 'text-dark': activeTab !== tab.id, 'rounded-pill': true }"
                        href="#" @click.prevent="activeTab = tab.id">
                        {{ tab.label }}
                    </a>
                </li>
            </ul>
        </div>

        <!-- List Event -->
        <div class="container my-5">
            <div v-if="activeTab === 'listEvent'">
                <div class="row row-cols-1 row-cols-md-3 g-4 mt-4">
                    <div class="col" v-for="(card, index) in agendaList" :key="index">
                        <div class="card border-0 position-relative overflow-hidden rounded-4 h-100">
                            <!-- Gambar -->
                            <img :src="card.image" class="w-100 h-100" style="object-fit: cover; max-height: 500px;"
                                :alt="card.title" />

                            <!-- Badge Baru -->
                            <span
                                class="badge bg-white text-dark position-absolute top-0 start-0 m-3 shadow-sm">Baru</span>

                            <!-- Overlay Konten -->
                            <div class="position-absolute bottom-0 start-0 end-0 text-white p-3"
                                style="background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0));">
                                <div class="mb-2 d-flex flex-wrap align-items-center gap-2">
                                    <small class="px-2 py-1 rounded" style="border: 1px solid white;">{{ card.date
                                        }}</small>
                                    <small class="px-2 py-1 rounded" style="border: 1px solid white;">{{ card.location
                                        }}</small>
                                </div>
                                <h5 class="fw-bold display-6 m-0">{{ card.title }}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Calendar Event -->
            <div v-if="activeTab === 'calendarEvent'">
                <FullCalendar :options="calendarOptions">
                    <template v-slot:eventContent="arg">
                        <div class="text-white bg-bs-danger border-0 rounded">
                            <span class="ms-1 text-truncate">{{ arg.event.title }}</span>
                        </div>
                    </template>
                </FullCalendar>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import idLocale from '@fullcalendar/core/locales/id'

export default {
    components: {
        FullCalendar
    },
    data() {
        return {
            activeTab: 'listEvent',
            tabs: [
                { id: 'listEvent', label: 'List Event' },
                { id: 'calendarEvent', label: 'Calendar Event' }
            ],
            agendaList: [
                {
                    title: 'Layanan Satu Pintu Digital',
                    date: '12 November 2025',
                    location: 'Baratajaya, Gubeng',
                    image: '/images/agenda.jpg',
                },
                {
                    title: 'Layanan Satu Pintu Digital',
                    date: '12 November 2025',
                    location: 'Baratajaya, Gubeng',
                    image: '/images/agenda.jpg',
                },
                {
                    title: 'Layanan Satu Pintu Digital',
                    date: '12 November 2025',
                    location: 'Baratajaya, Gubeng',
                    image: '/images/agenda.jpg',
                },
                {
                    title: 'Layanan Satu Pintu Digital',
                    date: '12 November 2025',
                    location: 'Baratajaya, Gubeng',
                    image: '/images/agenda.jpg',
                },
                {
                    title: 'Layanan Satu Pintu Digital',
                    date: '12 November 2025',
                    location: 'Baratajaya, Gubeng',
                    image: '/images/agenda.jpg',
                },
                {
                    title: 'Layanan Satu Pintu Digital',
                    date: '12 November 2025',
                    location: 'Baratajaya, Gubeng',
                    image: '/images/agenda.jpg',
                },
            ],
            calendarOptions: {
                plugins: [dayGridPlugin, interactionPlugin],
                initialView: 'dayGridMonth',
                locale: 'id',
                locales: [idLocale],
                selectable: true,
                editable: true,
                dayHeaderFormat: { weekday: 'long' },
                events: [
                    {
                        title: 'Acara 3 Hari',
                        start: '2025-07-04',
                        end: '2025-07-07'
                    },
                    {
                        title: 'Acara 1 Hari',
                        start: '2025-07-10',
                        end: '2025-07-11'
                    },
                    {
                        title: 'Acara 1 Hari',
                        start: '2025-07-10',
                        end: '2025-07-11'
                    },
                    {
                        title: 'Acara Full-Day',
                        start: '2025-07-15'
                    }
                ],
                headerToolbar: {
                    left: 'prev',
                    center: 'title',
                    right: 'next'
                }
            }
        }
    }
}
</script>

<style scoped>
.nav-pills .nav-link {
    color: #444;
    font-weight: 500;
}

.nav-pills .nav-link.active {
    background-color: white;
    color: #000;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

</style>
