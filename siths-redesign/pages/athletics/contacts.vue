<template>
  <h1 class="text-2xl md:text-3xl lg:text-4xl text-center mb-4">Contacts</h1>
  <div class="flex flex-col md:flex-row justify-center items-start px-4">
    <SubpageMenu :pages="subpageLinks" :active="'Contacts'" class="absolute top-48 left-8 w-full md:w-auto mb-4 md:mb-0 md:mr-8" />
    <div class="w-full md:w-5/6">
      <contactCard title="All (A-Z)" :contacts="websiteData.athletics[0].contacts"/>
    </div>

  </div>
</template>

<script setup>
const websiteData = useWebsiteDataStore()


console.log(websiteData.athletics[0].contacts.filter((el)=> el.season == 'Spring'))
const subpageLinks = [
  {
    name: 'About',
    path: '/athletics'
  },
  {
    name: "Athletic News",
    path: "/athletics/news",
  },
  {
    name: "Contacts",
    path: "/athletics/contacts",
  }
];

</script>=