<template>
  <div class="flex flex-col items-center justify-center">
    <!-- iterate over each schedule and display it -->
    <div
      v-for="(schedule, index) in schedules"
      :key="index"
      class="mb-4 flex w-full flex-col items-center justify-center"
    >
      <div
        @click="toggleVisibility(index)"
        class="flex w-4/5 cursor-pointer items-center justify-between rounded-2xl bg-white px-6 py-2 text-xl font-semibold text-gray md:w-2/3 md:text-2xl lg:w-1/2"
      >
        <span>{{ schedule.name }}</span>
        <!-- TODO: rotate this arrow if dropped down -->
        <img class="w-4" src="../assets/icons/arrow.png" alt="Arrow icon" />
      </div>

      <!-- table only shows if the index of the table is included in visibleSchedules array -->
      <div
        v-if="visibleSchedules.includes(index)"
        class="mt-2 w-screen rounded-box p-2 lg:w-1/2"
      >
        <div class="flex flex-col items-center justify-center">
          <table class="table w-fit md:w-2/3 lg:w-full">
            <thead class="text-lg">
              <tr class="text-white">
                <th class="px-2">Period</th>
                <th class="px-2">Start Time</th>
                <th class="px-2">End Time</th>
                <th class="px-2">
                  Length<br class="md:hidden lg:hidden" />
                  (Minutes)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(period, index) in schedule.periods" :key="index">
                <td class="px-3">{{ period.periodNumber }}</td>
                <td class="px-3">{{ period.startTime }}</td>
                <td class="px-3">{{ period.endTime }}</td>
                <td class="px-3">{{ period.periodLength }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  schedules: Array,
})
const visibleSchedules = ref([])

const toggleVisibility = (index) => {
  if (visibleSchedules.value.includes(index)) {
    //if the table is already visible, remove it from the visibleSchedules array (toggles visibility off)
    visibleSchedules.value.splice(visibleSchedules.value.indexOf(index), 1)
  } else {
    //if the table is not already visible, make it visible
    visibleSchedules.value.push(index)
  }
}
</script>
