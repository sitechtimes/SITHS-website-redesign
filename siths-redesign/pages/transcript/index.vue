<template>
  <h1 class="p-6 text-center text-4xl font-semibold">{{ info?.title }}</h1>
  <div class="mb-20 flex flex-col items-start justify-center px-4 md:flex-row">
    <div class="flex w-full flex-col md:w-2/3">
      <div v-for="(item, index) in info?.instructions" :key="index">
        <PortableText
          v-if="item?.children?.length"
          :value="item"
          :components="myPortableTextComponents"
        />
      </div>
      <div class="m-8 self-center rounded-lg bg-stone-500 p-4 text-black">
        <div v-for="(item, index) in info?.emailInstructions" :key="index">
          <PortableText
            v-if="item?.children?.length"
            :value="item"
            :components="myPortableTextComponents"
          />
        </div>
      </div>

      <div v-for="(item, index) in info?.educationVerification" :key="index">
        <PortableText
          v-if="item?.children?.length"
          :value="item"
          :components="myPortableTextComponents"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { PortableText } from '@portabletext/vue'

const websiteData = useWebsiteDataStore()
const info = websiteData.transcript[0]
</script>
