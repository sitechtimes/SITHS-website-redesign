<template>
  <h1>Bake Sales</h1>
  <div class="flex flex-col items-start justify-center px-4 md:flex-row">
    <SubpageMenu :pages="ptaLinks" active="'Bake Sales'" />
    <div
      class="mb-10 flex w-full flex-col self-center rounded-lg bg-black/40 p-8 text-center md:mx-auto md:w-1/2"
    >
      <PortableText
        v-for="item in websiteData.pta"
        :value="item.bakeSales"
        :components="myPortableTextComponents"
      />
    </div>
  </div>
</template>
<script setup>
import { PortableText } from '@portabletext/vue'

const websiteData = useWebsiteDataStore()
const ptaLinks = [
  {
    name: 'About',
    path: '/pta'
  },
  {
    name: 'Communications',
    path: '/pta/communications'
  },
  {
    name: 'Bake Sales',
    path: '/pta/bakesales'
  },
  {
    name: 'NYC Dept of Education',
    path: 'https://www.schools.nyc.gov/home'
  }
]
</script>
