<template>
    <div class="w-full lg:w-3/5 xl:w-3/6 px-4">
        <div class="flex flex-col gap-6">
            <articleRows 
                v-for="article in paginatedArticles" 
                :key="article._id"
                :is="article.externalLink ? 'a' : 'div'"
                :href="article.externalLink || undefined"
                :target="article.externalLink ? '_blank' : undefined"
                :rel="article.externalLink ? 'noopener noreferrer' : undefined"
                :class="article.externalLink ? 'group cursor-pointer' : ''"
            >
                <div
                    :class="['bg-white text-black rounded-lg overflow-hidden shadow-lg transition-all duration-300 flex flex-col md:flex-row', article.externalLink ? 'hover:shadow-2xl' : '']">
                    <div v-if="article.imageUrl" class="w-full md:w-1/3 lg:w-2/5 h-64 md:h-auto flex-shrink-0 overflow-hidden">
                        <img :src="article.imageUrl" :alt="article.headline"
                            :class="['w-full h-full object-cover transition-transform duration-300', article.externalLink ? 'group-hover:scale-105' : '']">
                    </div>
                    <div class="p-6 md:p-8 flex flex-col flex-grow justify-between">
                        <div>
                            <h3
                                :class="['text-xl md:text-2xl font-semibold mb-3 transition-colors duration-300 flex items-start justify-between gap-2']">
                                <span class="flex-1">{{ article.headline }}</span>
                                <img v-if="article.externalLink" src="../assets/icons/xlink.png" alt="external link"
                                    class="inline h-5 flex-shrink-0">
                            </h3>
                            <p class="text-gray-700 text-base leading-relaxed whitespace-pre-wrap">{{ article.fullContent }}</p>
                        </div>
                        <div v-if="article.externalLink" class="mt-4 text-gold font-semibold text-sm group-hover:underline">
                            Read More →
                        </div>
                    </div>
                </div>
            </articleRows>
        </div>
        <div v-if="totalPages > 1" class="flex justify-center items-center gap-4 mt-8 w-full">
            <button 
                @click="currentPage > 1 ? previousPage() : null" 
                :class="currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'" 
                class="btn inline-flex">
                ← Previous
            </button>
            <div class="flex gap-2">
                <button v-for="page in totalPages" :key="page" @click="goToPage(page)"
                    :class="{ 'btn-active': currentPage === page }" class="join-item btn">
                    {{ page }}
                </button>
            </div>
            <button 
                @click="currentPage < totalPages ? nextPage() : null" 
                :class="currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'" 
                class="btn inline-flex">
                Next →
            </button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    articles: {
        type: Array,
        default: function() { return [] }
    },
    articlesPerPage: {
        type: Number,
        default: 5
    }
})

const currentPage = ref(1)
const totalPages = computed(function() {
    return Math.ceil(props.articles.length / props.articlesPerPage)
})
const paginatedArticles = computed(function() {
    const start = (currentPage.value - 1) * props.articlesPerPage
    const end = start + props.articlesPerPage
    return props.articles.slice(start, end)
})
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
function nextPage() {
    if (currentPage.value < totalPages.value) {
        currentPage.value++
        scrollToTop()
    }
}
function previousPage() {
    if (currentPage.value > 1) {
        currentPage.value--
        scrollToTop()
    }
}
function goToPage(page) {
    currentPage.value = page
    scrollToTop()
}
</script>

