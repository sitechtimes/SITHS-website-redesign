<template>
  <div>
    <div class="grid grid-cols-1 gap-4 m-2">
      <div v-for="item in resources" class="mb-12 group">
        <a :href="item.url" target="_blank">
          <h3 class="flex justify-between items-center text-2xl font-semibold border-b-[2px] border-gold pr-4 py-2">{{
            item.name
            }}
            <img class="inline invert h-8" src="../assets/icons/xlink.png" alt="external link">
          </h3>
        </a>
        <PortableText v-if="isBlock" :value="item.description" :components="myPortableTextComponents" />
        <p v-if="!isBlock" class="pt-2 transition-all duration-300">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PortableText } from '@portabletext/vue';

defineProps({
  resources: Array,
  isBlock: Boolean
})

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
    bullet: (_, { slots }) => h('ul', { class: 'list-disc list-inside' }, slots.default?.()),
    number: (_, { slots }) => h('ol', { class: 'list-decimal list-inside' }, slots.default?.()),

    // Ex. 2: rendering custom lists
    checkmarks: (_, { slots }) => h('ol', { class: 'm-auto text-lg' }, slots.default?.()),
  },

  marks: {
    em: (_, { slots }) => h('em', { class: 'text-red-600 font-semibold' }, slots.default?.()),
    link: ({ value }, { slots }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return h('a', { class: 'text-gray underline font-semibold', href: value.href, rel }, slots.default?.());
    },
  },
};
</script>