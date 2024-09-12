<template>
    <div class="relative flex justify-center">
        <button @click="toggleDropdown"
            class="bg-white text-gray text-2xl font-semibold w-3/5 rounded-2xl py-2 px-6 flex items-center justify-between">
            <span>Standard Bell Schedule</span>
            <!-- arrow rotates 90 degrees if showDropdown is true -->
            <img src="../assets/icons/arrow.png" alt="" class="w-4 transition-transform duration-300"
                :style="{ transform: `rotate(${showDropdown ? 90 : 0}deg)` }" />
        </button>
        <div v-if="showDropdown"
            class="absolute  transform  top-full mt-2 p-2 menu bg-base-100 rounded-box z-10">
            <!-- dropped down schedule table -->
            <div class="overflow-x-auto">
                <table class="table">
                    <!-- head -->
                    <thead class="text-lg">
                        <tr>
                            <th></th>
                            <th>Period</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Length</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- row 1 -->
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        <!-- row 2 -->
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        <!-- row 3 -->
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const showDropdown = ref(false);

const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value;
};
</script>

<style lang="css" scoped></style>