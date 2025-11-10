<template> 

  <h1 class="p-6 text-center text-4xl font-semibold"> {{ info?.title }}</h1>
  <div class="flex flex-col md:flex-row justify-center items-start px-4 mb-20" >
    <div class="flex flex-col w-full md:w-2/3 ">
       <div v-for="(item, index) in info?.instructions" :key="index">
        <PortableText v-if="item?.children?.length" :value="item" :components="myPortableTextComponents" />
        <div v-else>No content found</div>
      </div> 
      <div class="p-4 m-8 self-center bg-stone-500 text-black rounded-lg">
        <div v-for="(item, index) in info?.email_instr" :key="index">
        <PortableText v-if="item?.children?.length" :value="item" :components="myPortableTextComponents" />
        <div v-else>No content found</div>
      </div> 
      </div>
       
       <div v-for="(item, index) in info?.edu_ver" :key="index" >
        <PortableText v-if="item?.children?.length" :value="item" :components="myPortableTextComponents" />
        <div v-else>No content found</div>
      </div> 

      
  </div>
  </div>
</template>


<script setup>
import { PortableText } from '@portabletext/vue';

const websiteData = useWebsiteDataStore()

const info = websiteData.transcript[0]

onMounted(()=> {
  console.log(websiteData.transcript[0])
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
    bullet: (_, { slots }) => h('li', { class: 'text-white ml-10 mb-4' }, slots.default?.()),
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
    normal: (_, { slots }) => h('p', { class: 'text-white text-lg mt-2 mb-2' }, slots.default?.()),
    h1: (_, { slots }) => h('h1', { class: 'text-2xl text-center font-bold text-white p-0 mt-6 mb-6' }, slots.default?.()),
    h2: (_, { slots }) => h('h2', { class: 'text-xl text-left font-semibold text-white mt-4 mb-4' }, slots.default?.()),
  },
};


</script>
