<!-- for athletics only -->
<template>
  <div class="flex w-full flex-col justify-center">
    <h3>{{ title }}</h3>
    <div
      v-for="contact in contacts"
      class="w-200 relative my-4 ml-0 flex justify-center rounded-lg bg-white/20 p-6"
    >
      <p class="text-md absolute right-1 top-1 rounded-md bg-black/45 p-1 px-2 text-gold">
        {{ contact.season.toUpperCase() }}
      </p>
      <div class="mt-2 flex flex-wrap items-center md:flex-row">
        <div class="p-2">
          <p class="my-1">{{ contact.sport }}</p>
          <p
            v-for="item in contact.type"
            class="my-2 inline rounded-md bg-black/45 px-2 py-1 text-sm text-gold"
          >
            {{ item.toUpperCase() }}
          </p>
        </div>
        <div class="my-1 p-4">
          <p>
            {{ contact.coach }}
          </p>
          <p>
            {{ contact.email }}
          </p>
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
