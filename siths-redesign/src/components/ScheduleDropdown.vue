<template>
    <div class="flex flex-col items-center justify-center">
        <!-- iterate over each schedule and display it -->
        <div v-for="(schedule, index) in schedules" :key="index" class="mb-4 w-full flex flex-col justify-center items-center">
            <div
                @click="toggleVisibility(index)"
                class="bg-white text-gray text-2xl font-semibold w-4/5 lg:w-[50vw] rounded-2xl py-2 px-6 flex items-center justify-between cursor-pointer">
                <span>{{ schedule.name }}</span>
                <img class="w-4" src="../assets/icons/arrow.png" alt="Arrow icon">
            </div>

            <!-- table only shows if the index of the table is included in visibleSchedules array -->
            <div v-if="visibleSchedules.includes(index)" class="mt-2 p-2 bg-base-100 rounded-box w-screen lg:w-[50vw]">
                <div class="flex flex-col justify-center items-center">
                    <table class="table w-fit lg:w-full">
                        <thead class="text-lg">
                            <tr>
                                <th class="px-2">Period</th>
                                <th class="px-2">Start Time</th>
                                <th class="px-2">End Time</th>
                                <th class="px-2">Length<br class="lg:hidden"> (Minutes)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(period, index) in schedule.periods" :key="index">
                                <td class="px-4">{{ period.periodNumber }}</td>
                                <td class="px-4">{{ period.startTime }}</td>
                                <td class="px-4">{{ period.endTime }}</td>
                                <td class="px-4">{{ period.periodLength }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import sanityClient from '../client.js';

const schedules = ref([]);
const visibleSchedules = ref([]);

//fetch schedules from Sanity CMS
const fetchSchedules = async () => {
    const query = '*[_type == "schedules"]';
    try {
        const data = await sanityClient.fetch(query);
        if (data.length > 0) { //make sure we have data to display
            schedules.value = data;
        } else {
            console.log('No schedules found');
        }
    } catch (error) {
        console.error('Error fetching schedules:', error);
    }
};

const toggleVisibility = (index) => {
    if (visibleSchedules.value.includes(index)) { //if the table is already visible, remove it from the visibleSchedules array (toggles visibility off)
        visibleSchedules.value.splice(visibleSchedules.value.indexOf(index), 1);
    } else { //if the table is not already visible, make it visible
        visibleSchedules.value.push(index);
    }
};

onMounted(fetchSchedules);
</script>
