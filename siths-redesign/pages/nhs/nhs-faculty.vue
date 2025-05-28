<template>
  <h1 class="text-2xl md:text-3xl lg:text-4xl text-center mb-4">NHS Faculty</h1>
  <div class="flex flex-col md:flex-row justify-center items-start px-4">
    <SubpageMenu :pages="subpageLinks" :active="'Faculty'" class="absolute top-48 left-8 mb-4 md:mb-0 md:mr-8" />
    <!-- staff component -->
    <div
      class="my-12 flex w-full flex-row flex-wrap justify-between gap-4 lg:grid lg:grid-cols-2 lg:mx-4 lg:w-auto lg:gap-6">
      <div v-for="staffMember in websiteData.staff" :key="staffMember._id"
        class="flex flex-row items-center gap-4 p-2 lg:gap-6">
        <div class="w-20 md:w-24">
          <img :src="staffMember.imageUrl" :alt="staffMember.name + `'s photo`"
            class="w-full rounded-full object-cover outline outline-2 outline-white" />
        </div>
        <div class="flex flex-col justify-center gap-1 lg:gap-2">
          <h3 class="text-white lg:text-2xl text-xl">{{ staffMember.name }}</h3>
          <p>{{ staffMember.role }}</p>
          <div class="flex items-center">
            <img src="@/assets/icons/email.png" alt="email icon" class="mr-2 w-5" />
            <span>
              <a :href="'mailto:' + staffMember.email"
                class="text-sm text-white transition duration-300 ease-in-out break-words hover:underline">
                {{ staffMember.email }}
              </a>
            </span>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const websiteData = useWebsiteDataStore()
const subpageLinks = [
  {
    name: 'About',
    path: '/nhs'
  },
  {
    name: "Faculty",
    path: "/nhs/nhs-faculty",
  },
  {
    name: "Opportunities",
    path: "/nhs/opportunities"
  }
];

</script>