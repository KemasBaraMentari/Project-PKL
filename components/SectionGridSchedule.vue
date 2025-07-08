<template>
    <div>
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
    </div>

    <div>

    </div>

    <div>
        <div>
            <client-only>
                <h2>Calendar</h2>
                <VCalendar v-model="date" />
                <h2>Date Picker</h2>
                <VDatePicker v-model="date" :attributes="attrs" />
            </client-only>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'

const date = ref(new Date())

const attrs = ref([
    {
        key: 'today',
        highlight: {
            color: 'green',
            fillMode: 'solid'
        },
        dates: new Date()
    }
])

const activeTab = ref('listEvent')

const tabs = [
  { id: 'listEvent', label: 'List Event' },
  { id: 'calendarEvent', label: 'Calendar Event' },
]
</script>

<style>
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