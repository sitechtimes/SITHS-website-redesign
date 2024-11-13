<template>
  <div class="mt-6 flex flex-col items-center justify-center space-y-8">
    <h2 class="my-4 text-4xl font-semibold">UPCOMING EVENTS</h2>
    <div class="flex w-full flex-col items-center justify-center lg:flex-row">
      <!-- latest 5 events -->
      <div
        v-for="(event, index) in latestEvents"
        :key="index"
        class="flex flex-row items-center justify-center"
      >
        <div class="flex flex-col items-center">
          <p class="mb-2 font-semibold underline underline-offset-2">{{ event.formattedDate }}</p>
          <div class="w-3/5 text-center md:w-full lg:w-32">
            <p>{{ event.event }}</p>
            <p class="truncate text-sm opacity-80">{{ event.description }}</p>
          </div>
        </div>
        <!-- vertical line between each event, except for last event -->
        <div v-if="index < latestEvents.length - 1" class="mx-4 flex h-24 w-[1px] bg-gold"></div>
      </div>
    </div>
    <NuxtLink class="font-bold mt-8 text-lg text-gold bg-left-bottom bg-gradient-to-r from-gold to-gold bg-[length:0%_2px] bg-no-repeat transition-all duration-500 ease-out hover:bg-[length:100%_2px]" 
    to="/calendar">
      Show All Events
    </NuxtLink>
  </div>
</template>

<script setup>
const websiteData = useWebsiteDataStore()

const latestEvents = computed(() => {
  //latest 5 events in ascending order
  return websiteData.events
    .slice(0, 5)
    .reverse()
    .map((event) => {
      const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
      return {
        ...event,
        formattedDate
      }
    })
})
</script>
