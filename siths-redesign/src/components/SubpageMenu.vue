<template>
    <div class="py-2 rounded-md bg-white w-fit m-8">
      <div v-for="subpage in page" class="py-2">
        <router-link :to="{name: 'home'}" class="rounded-md hover:bg-light-gray p-2 m-2 transition ease-in-out duration-300">
          <h4 class="text-gray">{{subpage.name}}</h4>
        </router-link>
    </div>
</div>
</template>

<script setup>
defineProps({
  page: Array
})
</script>