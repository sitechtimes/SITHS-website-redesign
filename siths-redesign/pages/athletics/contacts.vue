<template>
  <h1 class="mb-4 text-center text-2xl md:text-3xl lg:text-4xl">Contacts</h1>
  <div class="flex flex-col items-start justify-center px-4 md:flex-row">
    <SubpageMenu
      :pages="subpageLinks"
      :active="'Contacts'"
      class="absolute left-8 top-48 mb-4 md:mb-0 md:mr-8"
    />
    <div class="flex w-1/2 flex-col items-center justify-center">
      <input
        type="text"
        placeholder="Search"
        v-model="searchQuery"
        class="mb-6 w-2/3 rounded-md p-2"
      />
      <contactCard
        v-for="item in websiteData.athletics"
        title="All (A-Z)"
        :contacts="item.contacts"
      />
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
