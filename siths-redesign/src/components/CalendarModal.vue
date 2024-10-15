<template>
  <div
    v-if="show"
    class="absolute left-[20%] right-[20%] bg-gray top-[30%] flex flex-row m-auto mt-5 p-5 w-fit h-fit rounded-[1rem] border-solid border-2 border-white"
  >
    <div>
      <h2 class="text-white font-bold">Event Details</h2>
      <p class="text-white">{{ eventDetails.date }}</p>
      <p class="text-white">{{ eventDetails.event }}</p>
      <p class="text-white">{{ eventDetails.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  show: {
    type: Boolean,
    required: true
  },
  eventDetails: {
    type: Object,
    default: () => ({})
  }
});
</script>

<style scoped>

</style>
