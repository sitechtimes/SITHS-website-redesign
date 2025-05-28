<template>
  <div>
    <ApNavbar />
    <ApCard v-if="courseGroup" :heading="subjectHeading" :courseGroup="courseGroup" />
    <div v-else class="p-4 text-red-600">No course found for "{{ subjectHeading }}"</div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useWebsiteDataStore } from '~/stores/websiteData'
import ApNavbar from '~/components/ApNavbar.vue'
import ApCard from '~/components/ApCard.vue'

const route = useRoute()
const websiteData = useWebsiteDataStore()

const subjectSlug = computed(() => route.params.subject || '')

const subjectHeading = computed(() =>
  subjectSlug.value.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())
)

const courseGroup = computed(() =>
  websiteData.apCourses.find(
    (group) => group.heading?.toLowerCase().replace(/\s+/g, '-') === subjectSlug.value
  )
)
</script>
