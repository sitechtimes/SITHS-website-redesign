<template>
    <div class="flex flex-col items-center justify-center">
        <!-- iterate over each schedule and display it -->
        <div v-for="(schedule, index) in schedules" :key="schedule.index" class="mb-4 flex flex-col justify-center items-center">
            <div
                class="bg-white text-gray text-2xl font-semibold w-[50vw] rounded-2xl py-2 px-6 flex items-center justify-between">
                <span>{{ schedule.name }}</span>
                <img class="w-4" src="../assets/icons/arrow.png" alt="Arrow icon">
            </div>

            <!-- schedule table -->
            <div class="mt-2 p-2 bg-base-100 rounded-box w-[50vw]">
                <div class="flex flex-col justify-center items-center">
                    <table class="table">
                        <thead class="text-lg">
                            <tr>
                                <th>Period</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                                <th>Length (Minutes)</th>
                            </tr>
                        </thead>
                        <tbody class="">
                            <tr v-for="(period, index) in schedule.periods" :key="index">
                                <td>{{ period.periodNumber }}</td>
                                <td>{{ period.startTime }}</td>
                                <td>{{ period.endTime }}</td>
                                <td>{{ period.periodLength }}</td>
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
// if the dropdown is clicked and the index is the same, then rtoggle an "active" class
const fetchSchedules = async () => {
    const query = '*[_type == "schedules"]';
    try {
        const data = await sanityClient.fetch(query);
        if (data.length > 0) {
            schedules.value = data;
        } else {
            console.log('No schedules found');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

onMounted(fetchSchedules);
</script>

<style lang="css" scoped></style>