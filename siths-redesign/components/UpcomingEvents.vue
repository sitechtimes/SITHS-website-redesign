<template>
  <div class="mt-6 flex flex-col items-center justify-center space-y-8">
    <h1 class="my-4 text-4xl font-semibold">UPCOMING EVENTS</h1>
    <div class="flex w-full flex-col items-center justify-center lg:flex-row">
      <!-- latest 5 events -->
      <div v-for="(event, index) in latestEvents" :key="index" class="flex flex-row items-center justify-center">
        <div class="flex flex-col items-center">
          <p class="mb-2 font-semibold underline underline-offset-2">{{ event.formattedDate }}</p>
          <div class="w-3/5 md:w-full text-center lg:w-32">
            <p>{{ event.event }}</p>
            <p class="opacity-80 text-sm truncate">{{ event.description }}</p>
          </div>
        </div>
        <!-- vertical line between each event, except for last event -->
        <div
          v-if="index < latestEvents.length - 1"
          class="flex h-24 w-[1px] bg-gold mx-4"
        ></div>
      </div>
    </div>
    <NuxtLink class="btn btn-link mt-8 text-lg" to="/calendar">
      Show All Events
    </NuxtLink>
  </div>
</template>

<script setup>
const websiteData = useWebsiteDataStore()
const events = ref(websiteData.events)

const latestEvents = computed(() => {
  //latest 5 events in ascending order
  return events.value.slice(0, 5).reverse().map(event => {
    const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    return {
      ...event,
      formattedDate
    }
  })
})
</script>
