<template>
  <div class="m-2 mx-4 w-5/6">
    <h2 class="py-4">{{ type }}</h2>
    <div class="flex flex-row justify-between py-2">
      <div v-for="item in resources" class="w-1/4 rounded-md">
        <h4 class="text-white pb-2">{{ item.name }}</h4>
        <p class="text-sm">{{ item.note }}</p>
      </div>
    </div>

  </div>
</template>

<script setup>
defineProps({
  type: String,
  resources: Array
})
</script>