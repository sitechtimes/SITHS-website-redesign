<template>
  <h1>Bake Sales</h1>
  <SubpageMenu :pages="ptaLinks" :active="'Bake Sales'" class="absolute left-8 top-40 mb-4" />
  <div
    class="z-20 mb-10 flex w-full flex-col self-center rounded-lg bg-black/40 p-8 text-center md:mx-auto md:w-1/2"
  >
    <PortableText
      v-for="item in websiteData.pta"
      :value="item.bakesales"
      :components="myPortableTextComponents"
    />
  </div>
</template>
<script>
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
