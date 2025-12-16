<template>
  <h1 class="mb-4 text-center text-2xl md:text-3xl lg:text-4xl">Career and Technical Education</h1>
  <div class="mb-6 flex flex-col items-start justify-center px-4 md:flex-row">
    <SubpageMenu :pages="cteLinks" :active="'CDC in the News'" class="left-8 top-40 mb-4 block" />
    <div class="flex w-full flex-col items-center justify-center">
      <h2 class="mb-4 text-xl md:mb-8 md:text-2xl">CDC in the News</h2>
      <NewsArticleGrid :articles="websiteData.cdcNews" />
    </div>
  </div>
</template>

<script setup>
const websiteData = useWebsiteDataStore()

const cteLinks = [
  {
    name: 'About',
    path: '/cte'
  },
  {
    name: 'CDC in the News',
    path: '/cte/cdc'
  },
  {
    name: 'Makerspace',
    path: '/cte/makerspace'
  },
  {
    name: 'Certifications',
    path: '/cte/certifications'
  },
  {
    name: 'Partnerships',
    path: '/cte/partnerships'
  }
]
</script>
