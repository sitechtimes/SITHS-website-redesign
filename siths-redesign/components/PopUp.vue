<template>
  <div class="absolute">
    <div class="z-20 flex w-2/3 flex-col rounded-md bg-stone-200 p-12 text-black">
      <button @click="selected = false" class="absolute h-8 w-8 cursor-pointer self-end">
        <img src="../assets/icons/x.png" alt="x" />
      </button>
      <h2 class="pb-6">{{ item.name }}</h2>
      <PortableText :value="item.description" :components="myPortableTextComponents" />
    </div>
  </div>
</template>

<script setup>
import { PortableText } from '@portabletext/vue'

defineProps({
  item: Object
})

const myPortableTextComponents = {
  types: {
    image: ({ value }) => h('img', { src: value.imageUrl }),
    callToAction: ({ value, isInline }, { slots }) =>
      isInline
        ? h('a', { href: value.url }, value.text)
        : h('div', { class: 'callToAction' }, value.text)
  },

  list: {
    // Ex. 1: customizing common list types
    bullet: (_, { slots }) => h('li', { class: 'list-disc list-inside' }, slots.default?.()),
    number: (_, { slots }) => h('ol', { class: 'list-decimal list-inside' }, slots.default?.()),

    // Ex. 2: rendering custom lists
    checkmarks: (_, { slots }) => h('ol', { class: 'm-auto text-lg' }, slots.default?.())
  },

  marks: {
    em: (_, { slots }) => h('em', { class: 'text-red-600 font-semibold' }, slots.default?.()),
    link: ({ value }, { slots }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return h(
        'a',
        { class: 'text-gray underline font-semibold', href: value.href, rel },
        slots.default?.()
      )
    }
  }
}
</script>
