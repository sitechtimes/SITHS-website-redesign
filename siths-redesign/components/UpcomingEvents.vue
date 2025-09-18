<template>
  <div class="mt-6 flex flex-col items-center justify-center space-y-8">
    <h2 class="my-2 text-3xl font-semibold lg:text-4xl">UPCOMING EVENTS</h2>
    <div class="flex w-full flex-col items-center justify-center lg:flex-row">
      <!-- latest 5 events -->
      <div
        v-for="(event, index) in latestEvents"
        :key="index"
        class="flex flex-col items-center justify-center md:flex-row"
      >
        <div class="flex flex-col items-center">
          <p class="mb-2 font-semibold underline underline-offset-2">{{ event.formattedDate }}</p>
          <div class="w-3/5 text-center md:w-full lg:w-32">
            <p>{{ event.event }}</p>
            <p class="truncate text-sm opacity-80">{{ event.description }}</p>
          </div>
        </div>
        <!-- vert/horz line between each event, except for last event -->
        <span
          v-if="index < latestEvents.length - 1"
          class="my-4 inline h-[1px] w-24 bg-gold md:mx-4 md:h-24 md:w-[1px]"
        ></span>
      </div>
    </div>
    <NuxtLink
      class="mt-8 bg-gradient-to-r from-gold to-gold bg-[length:0%_2px] bg-left-bottom bg-no-repeat text-lg font-bold text-gold transition-all duration-500 ease-out hover:bg-[length:100%_2px]"
      to="/calendar"
    >
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
      const startDate = typeof event.date === 'object' ? event.date.start : event.date
      const formattedDate = new Date(startDate).toLocaleDateString('en-US', {
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
