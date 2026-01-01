<template>
  <h1 class="mb-4 text-center text-2xl md:text-3xl lg:text-4xl">Athletics</h1>
  <div class="flex flex-col items-start justify-center px-4 md:flex-row">
    <SubpageMenu
      :pages="subpageLinks"
      :active="'About'"
      class="absolute left-8 top-48 mb-4 md:mb-0 md:mr-8"
    />
    <div class="flex flex-col items-center justify-center md:w-5/6">
      <h3>McKee - Staten Island Tech Public Schools Athletics League</h3>
      <p>Home of the Seagulls</p>
      <!-- psal director message -->
      <div class="z-20 my-4 w-2/3 rounded-lg bg-black/40 p-8">
        <PortableText
          v-for="item in websiteData.athletics"
          :value="item.description"
          :components="myPortableTextComponents"
        />
      </div>
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
