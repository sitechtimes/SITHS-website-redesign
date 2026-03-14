<template>
  <div class="flex min-h-screen w-full flex-col px-4 md:px-10">
    <h1 class="p-6 text-center text-4xl font-semibold">Resources</h1>
    <div class="flex flex-row justify-center space-x-4 md:mb-6">
      <div class="flex w-full flex-col justify-between md:flex-row">
        <input
          type="text"
          placeholder="Search"
          v-model="searchQuery"
          class="text-md mr-64 rounded-3xl bg-black p-2 px-3 opacity-90 focus:outline-none md:text-xl"
        />

        <div class="mx-20 my-2 flex justify-around rounded-3xl bg-black p-2 md:m-0">
          <label
            class="text-md relative cursor-pointer px-2 opacity-90 md:text-xl"
            :class="{
              'font-bold underline underline-offset-2 transition-all duration-300':
                selectedChoice === 'student,staff'
            }"
          >
            <input type="radio" v-model="selectedChoice" value="student,staff" class="hidden" />
            <p>All</p>
          </label>

          <label
            class="text-md relative cursor-pointer px-2 opacity-90"
            :class="{
              'font-bold underline underline-offset-2 transition-all duration-300':
                selectedChoice === 'student'
            }"
          >
            <input type="radio" v-model="selectedChoice" value="student" class="hidden" />
            <p>Student</p>
          </label>

          <label
            class="text-md relative cursor-pointer px-2 opacity-90"
            :class="{
              'font-bold underline underline-offset-2 transition-all duration-300':
                selectedChoice === 'staff'
            }"
          >
            <input type="radio" v-model="selectedChoice" value="staff" class="hidden" />
            <p>Staff</p>
          </label>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <ResourcesCard :resources="filteredResources" />
    </div>
  </div>
</template>

<script setup>
const websiteData = useWebsiteDataStore()
const searchQuery = ref('')
const selectedChoice = ref('student,staff')

const filteredResources = computed(() => {
  const categories = selectedChoice.value.split(',')

  return websiteData.resources
    .filter(
      (el) =>
        categories.some((category) => el.category.includes(category)) &
        el.name.toLowerCase().includes(searchQuery.value.toLowerCase()) //'some' checks if at least one element in the array passes the test
    )
    .sort((a, b) => a.name.localeCompare(b.name))
})
</script>
