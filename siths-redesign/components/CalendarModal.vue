<template>
  <div v-if="show"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 duration-300 transition-all ease-in-out">
    <div class="bg-gray border-white border border-1 rounded-lg p-6 w-[25rem] max-w-full mx-4">
      <div class="text-center mb-4">
        <h3 class="text-white font-semibold">{{ eventDetails.event }}</h3>
        <p class="text-sm">{{ formattedDate }}</p>
      </div>
      <p class="overflow-y-auto max-h-[8rem] mb-4">{{ eventDetails.description }}</p>
      <button @click="$emit('close')"
        class="bg-gold text-black rounded-md py-2 w-full font-semibold transition duration-300 hover:brightness-75">
        Close
      </button>
    </div>
  </div>
</template>

<script setup>
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

const formattedDate = computed(() => {
  const date = new Date(props.eventDetails.date);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
});
</script>
