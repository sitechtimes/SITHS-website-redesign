<template>
    <div v-for="(resource, index) in sortedResources" :key="index"
        class="flex flex-col w-full m-2 border border-white border-opacity-25 rounded-lg p-8">
        <h2 class="font-bold pb-3 text-xl">{{ resource.name }}</h2>
        <p class="text-pretty pb-3 text-lg">{{ resource.description }}</p>
        <a :href="resource.link" class="underline text-lg transition-colors duration-300 hover:text-gold">Link to
            resource</a>
    </div>
</template>

<script setup>
import { computed } from 'vue';
const websiteData = useWebsiteDataStore();

const sortedResources = computed(() => {
    return websiteData.resources.sort((a, b) => a.name.localeCompare(b.name));
});
</script>
