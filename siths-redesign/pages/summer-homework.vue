<template>
  <div v-if="websiteData.summerHomework.length > 0">
    <h1
      class="mb-4 text-center text-2xl md:text-3xl lg:text-4xl"
      v-html="websiteData.summerHomework[0]?.title"
    ></h1>
    <div class="flex flex-col items-start justify-center px-4 md:flex-row">
      <div class="flex w-full flex-col items-center justify-center md:w-5/6">
        <div class="w-4/5">
          <PortableText
            :value="websiteData.summerHomework[0]?.homePage"
            :components="myPortableTextComponents"
          />
          <!-- links for each grade's homework -->
          <div class="my-8 w-1/2 space-y-4">
            <a
              v-for="(link, grade) in gradeLinks"
              :key="grade"
              :href="link"
              target="_blank"
              class="block"
            >
              <div
                class="flex items-center justify-between border-b-2 border-gold text-xl font-semibold"
              >
                {{ grade }} Grade Homework
                <img
                  class="mr-1 inline h-6 invert"
                  src="../assets/icons/xlink.png"
                  alt="external link"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- for if homework is not fully loaded in yet -->
  <div v-else class="flex h-screen items-center justify-center">
    <p>Loading...</p>
  </div>
</template>

<script setup>
import { PortableText } from '@portabletext/vue'

const websiteData = useWebsiteDataStore()

const gradeLinks = computed(() => {
  const homework = websiteData.summerHomework[0]
  return {
    Ninth: homework?.ninth || '',
    Tenth: homework?.tenth || '',
    Eleventh: homework?.eleventh || '',
    Twelfth: homework?.twelfth || ''
  }
})
</script>
