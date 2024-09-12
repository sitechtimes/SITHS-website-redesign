<template>
    <div class="p-4 rounded-md bg-white w-72 m-8">
        <div v-for="subpage in page" class="">
        <router-link :to="{name: 'home'}" class="text-md text-black">{{subpage.name}}</router-link>
    </div>
</div>
</template>

<script setup>
defineProps({
  page: Array
})
</script>