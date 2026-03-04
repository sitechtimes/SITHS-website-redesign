<template>
  <div class="flex flex-col gap-4">
    <div
      v-for="course in courses"
      :key="course._id || course.title"
      tabindex="0"
      class="collapse collapse-arrow rounded-xl bg-gold/10 shadow-md transition-all duration-300 hover:shadow-lg"
    >
    <input type="checkbox" />
      <div class="collapse-title text-lg font-bold text-gold">
        {{ course.title }}
        <span v-if="course.subtitle" class="block text-sm font-normal text-white/70">
          {{ course.subtitle }}
        </span>
      </div>
      <div class="collapse-content pt-2">
        <div class="rounded-lg bg-white/5 p-4">
          <div v-if="course.links?.length" class="mb-4 flex flex-col gap-2">
            <a
              v-for="(link, index) in course.links"
              :key="index"
              :href="link.url"
              :target="isExternalLink(link.url) ? '_blank' : undefined"
              :rel="isExternalLink(link.url) ? 'noopener noreferrer' : undefined"
              class="text-sm font-semibold text-gold underline hover:text-gold/80"
            >
              {{ link.label }}
            </a>
          </div>
          <template v-if="course.description">
            <p
              v-for="(paragraph, index) in splitParagraphs(course.description)"
              :key="index"
              class="mb-4 text-sm md:text-base"
            >
              {{ paragraph }}
            </p>
          </template>
          <p v-if="course.list && course.list.length" class="mb-4 text-sm font-semibold text-gold">
            This course focuses on:
          </p>
          <ul
            v-if="course.list && course.list.length"
            class="mb-4 ml-4 list-inside list-disc space-y-3 text-sm md:text-base"
          >
            <li v-for="(item, index) in course.list" :key="index">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  courses: {
    type: Array,
    default: () => []
  }
})

function splitParagraphs(text) {
  if (!text) return []
  return text
    .split('\n\n')
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
}

function isExternalLink(url) { 
  if (!url) return false 
  return /^(https?:)?\/\//.test(url) 
}
</script>
