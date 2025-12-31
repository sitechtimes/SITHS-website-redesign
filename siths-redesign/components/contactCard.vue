<!-- for athletics only -->
<template>
  <div class="flex w-full flex-col justify-center">
    <h3 class="mb-6 text-2xl font-semibold">
      {{ title }}
    </h3>
    <div class="flex flex-col gap-4">
      <div
        v-for="contact in contacts"
        class="relative flex flex-col justify-between rounded-lg bg-white/20 p-5 hover:bg-white/30 sm:flex-row sm:items-center"
      >
        <span
          class="static order-last ml-auto rounded-md bg-black/50 px-3 py-1 text-sm font-semibold text-gold"
        >
          {{ contact.season.toUpperCase() }}
        </span>
        <div class="flex flex-col gap-2 sm:w-1/3">
          <span class="text-lg font-semibold">
            {{ contact.sport }}
          </span>
          <span
            v-for="item in contact.type"
            class="w-fit rounded-full bg-black/45 px-3 py-1 text-xs font-medium text-gold"
          >
            {{ item.toUpperCase() }}
          </span>
        </div>
        <div class="mt-4 flex flex-col gap-1 text-sm sm:mt-0 sm:w-1/3">
          <span class="font-medium">
            {{ contact.coach }}
          </span>
          <span class="break-all text-white/80">
            {{ contact.email }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  contacts: Array
})
</script>
