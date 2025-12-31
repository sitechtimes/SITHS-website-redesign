<!-- for athletics only -->
<template>
  <div class="flex w-full flex-col justify-center md:ml-8 lg:w-auto">
    <h3>{{ title }}</h3>
    <div
      v-for="contact in contacts"
      class="relative my-4 flex justify-center rounded-lg bg-white/20 p-6"
    >
      <p class="text-md absolute right-1 top-1 rounded-md bg-black/45 p-1 px-2 text-gold">
        {{ contact.season.toUpperCase() }}
      </p>
      <div class="mt-2 flex flex-wrap items-center lg:space-x-10">
        <div class="m-2 flex flex-col">
          <span>{{ contact.sport }}</span>
          <span
            v-for="item in contact.type"
            class="rounded-md bg-black/45 px-2 py-1 text-center text-sm text-gold"
          >
            {{ item.toUpperCase() }}
          </span>
        </div>
        <div class="m-2 flex flex-col">
          <span>
            {{ contact.coach }}
          </span>
          <span>
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
