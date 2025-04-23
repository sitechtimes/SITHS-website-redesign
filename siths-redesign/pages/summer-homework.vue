<template>
  <div v-if="websiteData.summerHomework.length > 0">
    <h1 class="text-2xl md:text-3xl lg:text-4xl text-center mb-4" v-html="websiteData.summerHomework[0]?.title"></h1>
    <div class="flex flex-col md:flex-row justify-center items-start px-4">
      <div class="flex items-center justify-center flex-col w-full md:w-5/6">
        <div class="w-full md:w-3/4 lg:w-1/2">
          <PortableText :value="websiteData.summerHomework[0]?.homePage" :components="myPortableTextComponents"/>
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

const myPortableTextComponents = {
  types: {
    image: ({ value }) => h('img', { src: value.imageUrl }),
    callToAction: ({ value, isInline }, { slots }) =>
      isInline
        ? h('a', { href: value.url, class: 'text-white' }, value.text)
        : h('div', { class: 'callToAction' }, value.text),
  },

  list: {
    // Ex. 1: customizing common list types
    bullet: (_, { slots }) => h('li', { class: 'list-disc list-inside text-white' }, slots.default?.()),
    number: (_, { slots }) => h('ol', { class: 'list-decimal list-inside text-white' }, slots.default?.()),

    // Ex. 2: rendering custom lists
    checkmarks: (_, { slots }) => h('ol', { class: 'm-auto text-lg' }, slots.default?.()),
  },

  marks: {
    em: (_, { slots }) => h('em', { class: 'text-red-600 font-semibold' }, slots.default?.()),
    link: ({ value }, { slots }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return h('a', { class: 'text-white underline font-semibold text-lg', href: value.href, rel }, slots.default?.());
    },
  },

  
  block: {
    normal: (_, { slots }) => h('p', { class: 'text-white text-lg mt-2' }, slots.default?.()),
    h1: (_, { slots }) => h('h1', { class: 'text-2xl text-left font-bold text-white p-0 mt-6' }, slots.default?.()),
    h2: (_, { slots }) => h('h2', { class: 'text-lg font-semibold text-white mt-4' }, slots.default?.()),
  },
};
</script>