<template>
  <div class="flex flex-col items-center px-4">
    <h1 class="mb-4 text-center text-2xl md:text-3xl lg:text-4xl">Parent Coordinator</h1>
    <div class="z-20 my-4 w-2/3 rounded-lg bg-black/40 p-8">
      <PortableText
        :value="websiteData.parent.coordinator"
        :components="myPortableTextComponents"
      />
    </div>
  </div>
</template>

<script setup>
import { PortableText } from '@portabletext/vue'
const websiteData = useWebsiteDataStore()
</script>
