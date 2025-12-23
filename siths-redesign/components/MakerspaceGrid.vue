<template>
  <div class="w-full px-4 lg:w-3/5 xl:w-3/6">
    <div class="flex flex-col gap-6">
      <a
        v-for="article in paginatedArticles.filter((a) => a.externalLink)"
        :key="article._id"
        :href="article.externalLink"
        target="_blank"
        rel="noopener noreferrer"
        class="group cursor-pointer"
      >
        <div
          class="flex flex-col overflow-hidden rounded-lg bg-white text-black shadow-lg transition-all duration-300 hover:shadow-2xl md:flex-row"
        >
          <div
            v-if="article.imageUrl"
            class="h-64 w-full flex-shrink-0 overflow-hidden md:h-auto md:w-1/3 lg:w-2/5"
          >
            <img
              :src="article.imageUrl"
              :alt="article.headline"
              class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div class="flex flex-grow flex-col justify-between p-6 md:p-8">
            <div>
              <h3
                class="mb-3 flex items-start justify-between gap-2 text-xl font-semibold transition-colors duration-300 md:text-2xl"
              >
                <span class="flex-1">{{ article.headline }}</span>
                <img
                  src="../assets/icons/xlink.png"
                  alt="external link"
                  class="inline h-5 flex-shrink-0"
                />
              </h3>
              <p class="text-gray-700 text-base leading-relaxed">
                {{ truncateText(article.fullContent, 150) }}
              </p>
            </div>
            <div class="mt-4 text-sm font-semibold text-gold group-hover:underline">
              Read More →
            </div>
          </div>
        </div>
      </a>
      <div
        v-for="article in paginatedArticles.filter((a) => !a.externalLink)"
        :key="article._id"
        class="group cursor-pointer"
        @click="openArticle(article)"
      >
        <div
          class="flex flex-col overflow-hidden rounded-lg bg-white text-black shadow-lg transition-all duration-300 hover:shadow-2xl md:flex-row"
        >
          <div
            v-if="article.imageUrl"
            class="h-64 w-full flex-shrink-0 overflow-hidden md:h-auto md:w-1/3 lg:w-2/5"
          >
            <img
              :src="article.imageUrl"
              :alt="article.headline"
              class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div class="flex flex-grow flex-col justify-between p-6 md:p-8">
            <div>
              <h3
                class="mb-3 flex items-start justify-between gap-2 text-xl font-semibold transition-colors duration-300 md:text-2xl"
              >
                <span class="flex-1">{{ article.headline }}</span>
              </h3>
              <p class="text-gray-700 text-base leading-relaxed">
                {{ truncateText(article.fullContent, 150) }}
              </p>
            </div>
            <div class="mt-4 text-sm font-semibold text-gold group-hover:underline">
              Read More →
            </div>
          </div>
        </div>
      </div>
    </div>
    <FullArticle :article="selectedArticle" @close="selectedArticle = null" />
    <Pagination
      :current-page="currentPage"
      :total-pages="totalPages"
      @previous="previousPage"
      @next="nextPage"
      @go-to="goToPage"
    />
  </div>
</template>

<script setup>
import FullArticle from './FullArticle.vue'
import Pagination from './Pagination.vue'

const props = defineProps({
  articles: {
    type: Array,
    default: () => []
  },
  articlesPerPage: {
    type: Number,
    default: 5
  }
})
const selectedArticle = ref(null)

function openArticle(article) {
  selectedArticle.value = article
}

function truncateText(text, maxLength) {
  if (!text || text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

const currentPage = ref(1)
const totalPages = computed(function () {
  return Math.ceil(props.articles.length / props.articlesPerPage)
})
const paginatedArticles = computed(function () {
  const start = (currentPage.value - 1) * props.articlesPerPage
  const end = start + props.articlesPerPage
  return props.articles.slice(start, end)
})
function changePage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

function nextPage() {
  changePage(currentPage.value + 1)
}
function previousPage() {
  changePage(currentPage.value - 1)
}
function goToPage(page) {
  changePage(page)
}
</script>
