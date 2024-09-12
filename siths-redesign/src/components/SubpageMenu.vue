<template>
<div>
    <div v-for="subpage in page">
        <router-link :to="{name: subpage.link}" class="text-3xl text-white">{{subpage.name}}</router-link>
    </div>
</div>
</template>

<script setup>
defineProps({
  page: Array
})
</script>