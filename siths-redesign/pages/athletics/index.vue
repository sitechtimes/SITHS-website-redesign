<template>
  <h1 class="text-2xl md:text-3xl lg:text-4xl text-center mb-4">Athletics</h1>
  <div class="flex flex-col md:flex-row justify-center items-start px-4">
    <SubpageMenu :pages="subpageLinks" :active="'About'" class="absolute top-48 left-8 mb-4 md:mb-0 md:mr-8" />
    <div class="flex items-start justify-center flex-col items-center md:w-5/6">
      <h3>McKee - Staten Island Tech Public Schools Athletics League</h3>
      <p>Home of the Seagulls</p>
      <!-- psal director message -->
      <div class="bg-black/40 rounded-lg p-8 my-4 w-2/3 z-20">
        <PortableText v-for="item in websiteData.athletics" :value="item.description"
          :components="myPortableTextComponents" />
      </div>
    </div>
    <img class="absolute top-40 right-28 brightness-125 h-1/2 z-0" src="@/assets/imgs/baller.png" alt="">
    <img class="absolute bottom-36 left-40 brightness-125 h-1/3 z-0" src="@/assets/imgs/ballerina.png" alt="">

  </div>

</template>

<script setup>
import { PortableText } from '@portabletext/vue';
const websiteData = useWebsiteDataStore()
const subpageLinks = [
  {
    name: 'About',
    path: '/athletics'
  },
  {
    name: "Contacts",
    path: "/athletics/contacts",
  }
];

const myPortableTextComponents = {
  types: {
    image: ({ value }) => h('img', { src: value.imageUrl }),
    callToAction: ({ value, isInline }, { slots }) =>
      isInline
        ? h('a', { href: value.url }, value.text)
        : h('div', { class: 'callToAction' }, value.text),
  },

  list: {
    // Ex. 1: customizing common list types
    bullet: (_, { slots }) => h('li', { class: 'list-disc list-inside' }, slots.default?.()),
    number: (_, { slots }) => h('ol', { class: 'list-decimal list-inside' }, slots.default?.()),

    // Ex. 2: rendering custom lists
    checkmarks: (_, { slots }) => h('ol', { class: 'm-auto text-lg' }, slots.default?.()),
  },

  marks: {
    em: (_, { slots }) => h('em', { class: 'text-red-600 font-semibold' }, slots.default?.()),
    link: ({ value }, { slots }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return h('a', { class: 'text-blue-500 underline font-semibold', href: value.href, rel }, slots.default?.());
    },
  },
};

</script>