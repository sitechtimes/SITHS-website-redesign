<template>
    <div class="py-2 rounded-md bg-white w-[18vw] m-8">
      <div v-for="subpage in page" class="py-2">
        <router-link :to="{name: 'home'}" class="rounded-md text-md text-black hover:bg-light-gray p-2 m-2">{{subpage.name}}</router-link>
    </div>
</div>
</template>

<script setup>
defineProps({
  page: Array
})
</script>