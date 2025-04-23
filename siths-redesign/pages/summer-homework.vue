<template>
  <div v-if="websiteData.summerHomework.length > 0">
    <h1 class="text-2xl md:text-3xl lg:text-4xl text-center mb-4" v-html="websiteData.summerHomework[0]?.title"></h1>
    <div class="flex flex-col md:flex-row justify-center items-start px-4">
      <div class="flex items-center justify-center flex-col w-full md:w-5/6">
        <div class="w-full md:w-3/4 lg:w-1/2">
          <PortableText :value="websiteData.summerHomework[0]?.homePage"/>
          <!-- links for each grade's homework -->
          <div class="my-8 space-y-4 w-1/2">
            <a v-for="(link, grade) in gradeLinks" :key="grade" :href="link" target="_blank" class="block">
              <div class="flex justify-between items-center text-xl font-semibold border-b-2 border-gold">
                {{ grade }} Grade Homework
                <img class="inline h-5 w-5 mr-1 invert" src="../assets/icons/xlink.png" alt="external link">
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
 <!-- for if homework is not fully loaded in yet -->
  <div v-else class="flex justify-center items-center h-screen">
    <p>Loading...</p>
  </div>
</template>

<script setup>
import { PortableText } from '@portabletext/vue';

const websiteData = useWebsiteDataStore()

const gradeLinks = computed(() => {
  const homework = websiteData.summerHomework[0]
  return {
    'Ninth': homework?.ninth || '',
    'Tenth': homework?.tenth || '',
    'Eleventh': homework?.eleventh || '',
    'Twelfth': homework?.twelfth || ''
  }
})
</script>