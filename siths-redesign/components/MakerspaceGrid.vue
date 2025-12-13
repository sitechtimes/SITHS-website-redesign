<template>
  <div class="w-full px-4 lg:w-3/5 xl:w-3/6">
    <div class="flex flex-col gap-6">
      <div
        v-for="article in paginatedArticles"
        :key="article._id"
        :is="article.externalLink ? 'a' : 'div'"
        :href="article.externalLink || undefined"
        :target="article.externalLink ? '_blank' : undefined"
        :rel="article.externalLink ? 'noopener noreferrer' : undefined"
        :class="article.externalLink ? 'group cursor-pointer' : ''"
      >
        <div
          :class="[
            'flex flex-col overflow-hidden rounded-lg bg-white text-black shadow-lg transition-all duration-300 md:flex-row',
            article.externalLink ? 'hover:shadow-2xl' : ''
          ]"
        >
          <div
            v-if="article.imageUrl"
            class="h-64 w-full flex-shrink-0 overflow-hidden md:h-auto md:w-1/3 lg:w-2/5"
          >
            <img
              :src="article.imageUrl"
              :alt="article.headline"
              :class="[
                'h-full w-full object-cover transition-transform duration-300',
                article.externalLink ? 'group-hover:scale-105' : ''
              ]"
            />
          </div>
          <div class="flex flex-grow flex-col justify-between p-6 md:p-8">
            <div>
              <h3
                :class="[
                  'mb-3 flex items-start justify-between gap-2 text-xl font-semibold transition-colors duration-300 md:text-2xl'
                ]"
              >
                <span class="flex-1">{{ article.headline }}</span>
                <img
                  v-if="article.externalLink"
                  src="../assets/icons/xlink.png"
                  alt="external link"
                  class="inline h-5 flex-shrink-0"
                />
              </h3>
              <p class="text-gray-700 whitespace-pre-wrap text-base leading-relaxed">
                {{ article.fullContent }}
              </p>
            </div>
            <a
              v-if="article.externalLink"
              :href="article.externalLink"
              target="_blank"
              class="mt-4 text-sm font-semibold text-gold group-hover:underline"
            >
              Read More →
            </a>
          </div>
        </div>
      </div>
    </div>
    <div v-if="totalPages > 1" class="mt-8 flex w-full items-center justify-center gap-4">
      <button
        @click="currentPage > 1 ? previousPage() : null"
        :class="[
          'btn inline-flex',
          currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
        ]"
      >
        ← Previous
      </button>
      <div class="flex gap-2">
        <button
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          :class="{ 'btn-active': currentPage === page }"
          class="btn join-item"
        >
          {{ page }}
        </button>
      </div>
      <button
        @click="currentPage < totalPages ? nextPage() : null"
        :class="[
          'btn inline-flex',
          currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
        ]"
      >
        Next →
      </button>
    </div>
  </div>
</template>

<script setup>
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
