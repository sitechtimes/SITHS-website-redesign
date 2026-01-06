<template>
  <h1 class="mb-4 text-center text-2xl md:text-3xl lg:text-4xl">Athletic Forms</h1>
  <div class="flex flex-col items-start justify-center px-4 md:flex-row">
    <SubpageMenu :pages="subpageLinks" :active="'Athletic Forms'" />
    <div
      class="z-20 mb-10 flex w-full flex-col self-center rounded-lg bg-black/40 p-8 text-center md:mx-auto md:w-1/2"
    >
      <PortableText
        v-for="item in websiteData.athletics"
        :value="item.forms"
        :components="myPortableTextComponents"
      />
    </div>

    <img
      class="absolute right-28 top-40 z-0 h-1/2 brightness-125"
      src="@/assets/imgs/baller.png"
      alt=""
    />
    <img
      class="absolute bottom-36 left-40 z-0 h-1/3 brightness-125"
      src="@/assets/imgs/ballerina.png"
      alt=""
    />
  </div>
</template>

<script setup>
import { PortableText } from '@portabletext/vue'
const websiteData = useWebsiteDataStore()
const subpageLinks = [
  {
    name: 'About',
    path: '/athletics'
  },
  {
    name: 'Contacts',
    path: '/athletics/contacts'
  },
  {
    name: 'Athletic Forms',
    path: '/athletics/forms'
  },
  {
    name: 'Teams',
    path: 'https://www.psal.org/psalsports/school/psal_schoolprofile.asp?cschool=31511'
  },
  {
    name: 'Schedule',
    path: 'https://www.psal.org/profiles/school-profile.aspx#31511'
  }
]
</script>
