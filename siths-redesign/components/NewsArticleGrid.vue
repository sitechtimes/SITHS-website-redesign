<template>
    <div class="w-full px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a v-for="article in articles" :key="article._id" 
               :href="article.link" 
               target="_blank" 
               rel="noopener noreferrer"
               class="group">
                <div class="bg-white text-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    <div class="w-full h-48 overflow-hidden">
                        <img :src="article.imageUrl" 
                             :alt="article.headline" 
                             class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="p-4 flex-grow flex flex-col">
                        <h3 class="text-lg font-semibold mb-2 group-hover:text-gold transition-colors duration-300 flex items-start justify-between">
                            <span>{{ article.headline }}</span>
                            <img src="../assets/icons/xlink.png" alt="external link" class="inline h-5 ml-2 flex-shrink-0">
                        </h3>
                        <p class="text-gray-700 text-sm flex-grow">{{ article.description }}</p>
                        <div class="mt-4 text-gold font-semibold text-sm group-hover:underline">
                            Read More →
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script setup>
defineProps({
    articles: {
        type: Array,
        default: () => []
    },
})
</script>

