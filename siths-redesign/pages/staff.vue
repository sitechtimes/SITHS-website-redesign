<template>
  <div class="mx-4 h-fit lg:mx-10">
    <h1 class="p-6 text-center text-5xl font-semibold mb-4">
      Faculty and Staff
    </h1>
    <div v-for="category in categories" :key="category.value" class="lg:mx-8">
      <div class="flex flex-row items-center justify-center text-center">
        <!-- category title and separators -->
        <div class="h-0.5 w-20 flex-grow bg-white"></div>
        <h2 class="mx-2 text-3xl font-bold">{{ category.name }}</h2>
        <div class="h-0.5 w-20 flex-grow bg-white"></div>
      </div>
      <!-- staff component -->
      <div class="my-16 flex w-full flex-row flex-wrap justify-between gap-4 lg:mx-10 lg:w-auto lg:gap-12">
        <div v-for="staffMember in filteredStaff(category)" :key="staffMember._id"
          class="flex flex-row items-center gap-4 p-2 lg:gap-6">
          <div class="w-20 md:w-24 lg:w-28">
            <img :src="staffMember.imageUrl" :alt="staffMember.name + `'s photo`"
              class="w-full rounded-full object-cover outline outline-2 outline-white" />
          </div>
          <div class="flex flex-col justify-center gap-1 lg:gap-2">
            <h2 class="text-xl font-semibold lg:text-2xl">{{ staffMember.name }}</h2>
            <p>{{ staffMember.role }}</p>
            <div class="flex items-center">
              <img src="../assets/icons/email.png" alt="email icon" class="mr-2 w-5" />
              <span>
                <a :href="'mailto:' + staffMember.email"
                  class="text-sm text-white transition duration-300 ease-in-out hover:underline lg:text-lg">
                  {{ staffMember.email }}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const websiteData = useWebsiteDataStore()
const staff = ref(websiteData.staff)

const categories = ref([
  { name: 'Administrators', value: 'administrators' },
  { name: 'Teachers', value: 'teachers' },
  { name: 'Other Employees', value: 'otherEmployees' }
])

const searchValue = ref('')

function filteredStaff(category) {
  const search = searchValue.value.toLowerCase()
  return staff.value
    ?.filter((staffMember) => staffMember.category === category.value)
    ?.filter((staffMember) => {
      return (
        staffMember.name.toLowerCase().includes(search) ||
        staffMember.email.toLowerCase().includes(search) ||
        staffMember.role.toLowerCase().includes(search)
      )
    })
}
</script>
