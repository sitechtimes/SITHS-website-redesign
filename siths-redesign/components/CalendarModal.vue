<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-all duration-300 ease-in-out"
  >
    <div class="border-1 mx-4 w-[25rem] max-w-full rounded-lg border border-gold bg-gray p-6">
      <div class="mb-4 text-center">
        <h3 class="font-semibold text-white">{{ eventDetails.title }}</h3>
        <p class="text-sm">{{ formattedDate }}</p>
      </div>
      <div class="mb-4">
        <p class="text-xs uppercase text-zinc-300">What</p>
        <h3 class="text-sm text-white">
          {{ eventDetails.title }}
        </h3>
      </div>

      <!-- WHEN -->
      <div class="mb-4">
        <p class="text-xs uppercase text-zinc-300">When</p>
        <p class="text-sm text-white">
          {{ formattedWhen }}
        </p>
      </div>

      <!-- WHERE -->
      <div class="mb-4">
        <p class="text-xs uppercase text-zinc-300">Where</p>
        <p class="text-sm text-white">
          {{ eventDetails.location || 'No location provided' }}
        </p>
      </div>
      <div v-if="hasRealDescription" class="mb-4">
        <p class="text-xs uppercase text-zinc-300">Details</p>
        <div
          v-html="eventDetails.description"
          class="max-h-[8rem] overflow-y-auto text-sm text-white"
        />
      </div>

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
const hasRealDescription = computed(() => {
  const html = props.eventDetails?.description
  if (!html) return false

  // remove HTML tags
  const text = html.replace(/<[^>]*>/g, '').trim()

  // also remove whitespace + invisible breaks
  return text.length > 0
})
const formattedWhen = computed(() => {
  if (!props.eventDetails?.start) return ''

  const start = new Date(props.eventDetails.start)
  const end = props.eventDetails.end ? new Date(props.eventDetails.end) : null

  const startStr = start.toLocaleString('en-US', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  })

  if (!end) return startStr

  const endStr = end.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit'
  })

  return `${startStr} – ${endStr}`
})

const formattedDate = computed(() => {
  if (!props.eventDetails?.start) return ''

  const date = new Date(props.eventDetails.start)

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})
</script>
