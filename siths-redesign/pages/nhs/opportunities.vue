<template>
  <h1 class="text-2xl md:text-3xl lg:text-4xl text-center mb-4">National Honor Society</h1>
  <div class="flex flex-col md:flex-row justify-center items-start px-4">
    <SubpageMenu :pages="subpageLinks" :active="'Opportunities'" class="absolute top-48 left-8 mb-4 md:mb-0 md:mr-8" />
    <div v-for="item in websiteData.nhs" class="flex items-start justify-center flex-col items-center md:w-5/6">
      <div v-for="opp in item.opportunities" class="bg-black/40 rounded-lg p-8 my-4 w-2/3 z-20">
        <div @click="() => { selected = true; selectedItem = item }">{{ opp.title }}</div>
        <PopUp v-if="selected" :item="opp" @closeEvent="closePopup"
        class="absolute inset-0 flex items-center justify-center" />      </div>
    </div>
  </div>
</template>

<script setup>
import { PortableText } from '@portabletext/vue';
const websiteData = useWebsiteDataStore()
const subpageLinks = [
  {
    name: 'About',
    path: '/nhs'
  },
  {
    name: "Faculty",
    path: "/nhs/nhs-faculty",
  },
  {
    name: "Opportunities",
    path: "/nhs/opportunities"
  }
];

const selected = ref(false)
const selectedItem = ref({})

const closePopup = () => {
  selected.value = false
}

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