<template>
  <div class="flex flex-col">
    <h1 class="py-2 text-2xl font-extrabold">{{currentCourseTitle}}</h1>
    <div class="flex w-[90%] flex-row justify-end">
      <div class="static m-8 h-[25rem] w-[15%] box-border rounded-md bg-white">
        <div v-for="(schoolpolicies, index) in page" :key="index">
          <button
            class="text-md m-2 ml-7 rounded-md p-2 text-lg font-bold text-black transition duration-300 ease-in-out hover:bg-light-gray"
          >
            {{ schoolpolicies.name }}
          </button>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedPage = ref('Cutting Classes')
const props = defineProps({
  page: Array,
  policies: Array
})

const filteredPolicies = computed(() => {
  return props.policies.filter((policy) => policy.name === selectedPage.value)
})

const currentCourseTitle = computed(() => {
  return selectedPage.value
})
</script>
