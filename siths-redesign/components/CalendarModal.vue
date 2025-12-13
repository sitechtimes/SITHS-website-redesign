<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-all duration-300 ease-in-out"
  >
    <div class="border-1 mx-4 w-[25rem] max-w-full rounded-lg border border-gold bg-gray p-6">
      <div class="mb-4 text-center">
        <h3 class="font-semibold text-white">{{ eventDetails.subject }}</h3>
        <p class="text-sm">{{ formattedDate }}</p>
      </div>
      <p class="mb-4 max-h-[8rem] overflow-y-auto">{{ eventDetails.descriptionPreview }}</p>
      <button
        @click="$emit('close')"
        class="w-full rounded-md bg-gold py-2 font-semibold text-black transition duration-300 hover:brightness-75"
      >
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
})

const formattedDate = computed(() => {
  const startDate =
    typeof props.eventDetails.date === 'object'
      ? props.eventDetails.date.start
      : props.eventDetails.date
  const date = new Date(startDate)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})
</script>
