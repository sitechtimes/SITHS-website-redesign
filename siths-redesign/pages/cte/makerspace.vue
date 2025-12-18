<template>
  <h1 class="mb-4 text-center text-2xl md:text-3xl lg:text-4xl">Career and Technical Education</h1>
  <div class="mb-6 flex flex-col items-start justify-center px-4 md:flex-row">
    <SubpageMenu :pages="cteLinks" :active="'Makerspace'" />
    <div class="flex w-full flex-col items-center justify-center md:w-5/6">
      <h2 class="mb-4 text-xl md:mb-8 md:text-2xl">Makerspace</h2>
      <div class="w-full md:w-5/6 xl:w-2/3">
        <MakerspaceGrid :articles="websiteData.makerspace" />
      </div>
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
