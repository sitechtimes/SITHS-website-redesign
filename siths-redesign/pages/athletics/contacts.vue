<template>
  <h1 class="text-2xl md:text-3xl lg:text-4xl text-center mb-4">Contacts</h1>
  <div class="flex flex-col md:flex-row justify-center items-start px-4">
    <SubpageMenu :pages="subpageLinks" :active="'Contacts'" class="absolute top-48 left-8 mb-4 md:mb-0 md:mr-8" />
    <div class="flex flex-col justify-center items-center w-1/2">
      <input type="text" placeholder="Search" v-model="searchQuery" class="mb-6 p-2 rounded-md w-2/3">
      <contactCard v-for="item in websiteData.athletics" title="All (A-Z)" :contacts="item.contacts" />
    </div>
  </div>
</template>

<script setup>
const websiteData = useWebsiteDataStore()
const searchQuery = ref('')

const subpageLinks = [
  {
    name: 'About',
    path: '/athletics'
  },
  {
    name: "Contacts",
    path: "/athletics/contacts",
  }
];


</script>=