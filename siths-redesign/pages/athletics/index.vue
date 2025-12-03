<template>
  <h1 class="text-2xl md:text-3xl lg:text-4xl text-center md:mb-4">Athletics</h1>
  <div class="flex flex-col md:flex-row justify-center items-start px-4">
    <SubpageMenu :pages="subpageLinks" :active="'About'" class="block lg:absolute top-48 left-8 mb-4 md:mb-0 md:mr-8" />
    <div class="flex justify-center flex-col items-center md:w-5/6">
      <div class="flex flex-col gap-2 text-center">
        <h3>McKee - Staten Island Tech Public Schools Athletics League</h3>
        <p>Home of the Seagulls</p>
      </div>
      <!-- psal director message -->
      <div class="bg-black/40 rounded-lg p-8 my-4 md:w-2/3 z-20">
        <PortableText v-for="item in websiteData.athletics" :value="item.description"
          :components="myPortableTextComponents" />
      </div>
    </div>
    <img class="absolute bottom-12 md:left-auto top-80 h-2/3 lg:top-60 lg:h-1/2 max-h-[800px] z-0 brightness-0" src="@/assets/imgs/background-athletes.png" alt="">

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