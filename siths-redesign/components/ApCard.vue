<template>
  <div class="flex flex-col items-center">
    <h1 class="py-2 text-2xl font-extrabold">{{ currentCourseTitle }}</h1>
    <div class="flex w-screen flex-row justify-center">
      <div class="static m-8 h-[25rem] w-[15%] rounded-md bg-white">
        <div v-for="(APpage, index) in page" :key="index">
          <button
            @click="selectedPage = APpage.name"
            class="text-md m-2 ml-7 rounded-md p-2 text-lg font-bold text-black transition duration-300 ease-in-out hover:bg-light-gray"
          >
            {{ APpage.name }}
          </button>
        </div>
      </div>
      <div
        v-for="(subject, index) in filteredSubjects"
        :key="index"
        class="mb-4 flex w-[50%] flex-col items-center justify-center text-black"
      >
        <div
          v-for="(card, index) in subject.cards"
          :key="index"
          class="text-blac m-8 rounded-md bg-white p-7"
        >
          <h2 class="text-4xl font-bold">{{ card.courseName }}</h2>
          <h3 class="my-4 text-2xl">Taken {{ card.courseGrade }} Grade</h3>
          <p class="w-[75%] text-lg">
            {{ card.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedPage = ref('AP English')
const props = defineProps({
  page: Array,
  subjects: Array
})

const filteredSubjects = computed(() => {
  return props.subjects.filter((subject) => subject.name === selectedPage.value)
})

const currentCourseTitle = computed(() => {
  return selectedPage.value
})
</script>
