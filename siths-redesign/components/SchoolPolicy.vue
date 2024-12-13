<template>
  <div class="flex flex-col">
    <h1 class="py-2 text-2xl font-extrabold">{{ currentCourseTitle }}</h1>
    <div class="flex w-screen flex-row justify-end">
      <div class="static m-8 mr-[10rem] box-border w-[15%] rounded-md bg-white py-5">
        <div v-for="(APpage, index) in page" :key="index">
          <button
            @click="selectedPage = APpage.name"
            class="text-md m-2 ml-7 rounded-md p-2 text-lg font-bold text-black transition duration-300 ease-in-out hover:bg-light-gray"
          >
            {{ APpage.name }}
          </button>
        </div>
      </div>
      <!-- <div
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
        </div> -->
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  page: Array,
  subjects: Array
})
</script>
