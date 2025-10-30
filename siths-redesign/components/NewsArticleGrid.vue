<template>
    <div class="w-full lg:w-3/5 xl:w-3/6 px-4">
        <div class="flex flex-col gap-6">
            <a v-for="article in paginatedArticles" :key="article._id" :href="article.link" target="_blank"
                rel="noopener noreferrer" class="group">
                <div
                    class="bg-white text-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col lg:flex-row">
                    <div class="w-full lg:w-2/5 h-32 md:h-auto flex-shrink-0 overflow-hidden">
                        <img :src="article.imageUrl" :alt="article.headline"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                    </div>
                    <div class="p-6 md:p-8 flex flex-col flex-grow justify-between">
                        <div>
                            <h3
                                class="text-xl md:text-2xl font-semibold mb-3 group-hover:text-gold transition-colors duration-300 flex items-start justify-between gap-2">
                                <span class="flex-1">{{ article.headline }}</span>
                                <img src="../assets/icons/xlink.png" alt="external link"
                                    class="inline h-5 flex-shrink-0">
                            </h3>
                            <p class="text-gray-700 text-base leading-relaxed">{{ article.description }}</p>
                        </div>
                        <div class="mt-4 text-gold font-semibold text-sm group-hover:underline">
                            Read More →
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <div v-if="totalPages > 1" class="flex justify-center items-center gap-4 mt-8">
            <button @click="previousPage" :disabled="currentPage === 1" class="btn">
                ← Previous
            </button>
            <div class="join">
                <button v-for="page in totalPages" :key="page" @click="goToPage(page)"
                    :class="{ 'btn-active': currentPage === page }" class="join-item btn">
                    {{ page }}
                </button>
            </div>
            <button @click="nextPage" :disabled="currentPage === totalPages" class="btn">
                Next →
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
    articles: {
        type: Array,
        default: () => []
    },
})

const currentPage = ref(1)
const articlesPerPage = 5

const totalPages = computed(() => {
    return Math.ceil(props.articles.length / articlesPerPage)
})
const paginatedArticles = computed(() => {
    const start = (currentPage.value - 1) * articlesPerPage
    const end = start + articlesPerPage
    return props.articles.slice(start, end)
})
const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
}
const previousPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
}
const goToPage = (page) => {
    currentPage.value = page
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
