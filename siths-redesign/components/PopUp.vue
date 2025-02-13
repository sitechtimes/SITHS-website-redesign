<template>
  <div class="absolute">
    <div class="flex flex-col bg-white/80 backdrop-blur-sm text-black p-12 rounded-md w-2/3">
      <button @click="emit('closeEvent')" class="absolute w-8 h-8 self-end cursor-pointer">
        <img src="../assets/icons/x.png" alt="x" @click="selected = false">
      </button>
      <h2 class="pb-6">{{ item.name }}</h2>
      <PortableText :value="item.description" :components="myPortableTextComponents" />
    </div>
  </div>
</template>

<script setup>
import { PortableText } from '@portabletext/vue';

const emit = defineEmits(['closeEvent']);

defineProps({
  item: Object
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
    bullet: (_, { slots }) => h('li', { class: 'li list-disc' }, slots.default?.()),
    number: (_, { slots }) => h('ol', { class: 'list-decimal' }, slots.default?.()),

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