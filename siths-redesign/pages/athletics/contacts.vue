<template>
  <h1 class="mb-4 text-center text-2xl md:text-3xl lg:text-4xl">Contacts</h1>
  <div class="flex flex-col items-start justify-center px-4 md:flex-row">
    <SubpageMenu :pages="subpageLinks" :active="'Contacts'" class="left-8 top-48 z-20" />
    <div class="z-20 mx-auto flex w-full flex-col items-center md:w-1/2">
      <input
        type="text"
        placeholder="Search"
        v-model="searchQuery"
        class="mb-6 w-full rounded-md p-2 text-black lg:w-2/3"
      />
      <contactCard v-for="item in filteredAthletics" title="All (A-Z)" :contacts="item.contacts" />
    </div>
  </div>
</template>

<script setup>
const websiteData = useWebsiteDataStore()
const searchQuery = ref('')
const filteredAthletics = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  if (!query) return websiteData.athletics
  return websiteData.athletics.map((athletic) => ({
    ...athletic,
    contacts: athletic.contacts.filter(
      //overwrites contacts
      (contact) =>
        contact.coach?.toLowerCase().includes(query) ||
        contact.email?.toLowerCase().includes(query) ||
        contact.sport?.toLowerCase().includes(query) ||
        contact.season?.toLowerCase().includes(query)
    )
  }))
})

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
