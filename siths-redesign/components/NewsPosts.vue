<template>
  <div
    v-if="selectedPhoto"
    class="max-h-3/4 fixed inset-0 z-50 flex max-w-3xl items-center justify-center rounded-md bg-black/70 p-6 backdrop-blur-sm"
  >
    <button
      @click="selectedPhoto = null"
      class="absolute right-4 h-8 w-8 cursor-pointer rounded p-2 hover:bg-stone-500"
    >
      <img src="../assets/icons/x.png" alt="x" />
    </button>

    <img
      :src="selectedPhoto"
      class="h-screen w-full rounded-lg object-scale-down shadow-lg transition"
    />
  </div>

  <div class="my-8 lg:mx-16">
    <div
      v-for="(post, index) in posts"
      :key="index"
      class="collapse collapse-arrow mx-auto my-2 w-full rounded-lg border border-gold bg-white text-black lg:w-3/4"
    >
      <input type="checkbox" class="peer" :checked="index === 0" />

      <div v-if="post.thumbnail" class="collapse-title flex items-center gap-4">
        <img
          :src="post.thumbnail"
          alt="post image"
          class="h-24 w-full max-w-80 rounded-md object-cover"
        />
      </div>

      <h1 class="text-lg font-semibold text-black">{{ post.PostTitle }}</h1>

      <h2 v-if="post.subtitle" class="mt-1 text-base font-medium text-black">
        {{ post.subtitle }}
      </h2>

      <div class="collapse-content flex flex-col justify-center">
        <div class="mx-1 mb-4 border-t border-gold"></div>

        <PortableText :value="post.description || []" :components="myPortableTextComponents" />

        <img
          v-for="(photo, index) in post.photos || []"
          :key="index"
          :src="photo?.url || ''"
          class="m-4 w-1/4 self-center hover:cursor-pointer"
          @click="selectedPhoto = photo?.url"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { PortableText } from '@portabletext/vue'

const props = defineProps({
  posts: Array
})

const selectedPhoto = ref(null)

const myPortableTextComponents = {
  types: {
    image: ({ value }) => (value?.imageUrl ? h('img', { src: value.imageUrl }) : null),
    callToAction: ({ value, isInline }, { slots }) =>
      isInline
        ? h('a', { href: value.url, class: 'text-black' }, value.text)
        : h('div', { class: 'callToAction' }, value.text)
  },

  list: {
    bullet: (_, { slots }) =>
      h('li', { class: 'list-disc list-inside text-black' }, slots.default?.()),
    number: (_, { slots }) =>
      h('ol', { class: 'list-decimal list-inside text-black' }, slots.default?.()),

    checkmarks: (_, { slots }) => h('ol', { class: 'm-auto text-lg' }, slots.default?.())
  },

  marks: {
    em: (_, { slots }) => h('em', { class: 'text-red-600 font-semibold' }, slots.default?.()),
    link: ({ value }, { slots }) => {
      const rel = !value.href?.startsWith?.('/') ? 'noreferrer noopener' : undefined
      return h(
        'a',
        { class: 'text-black underline font-semibold text-lg', href: value.href, rel },
        slots.default?.()
      )
    }
  },

  block: {
    normal: (_, { slots }) => h('p', { class: 'text-black text-lg mt-2' }, slots.default?.()),
    h1: (_, { slots }) =>
      h('h1', { class: 'text-2xl text-left font-bold text-black p-0 mt-6' }, slots.default?.()),
    h2: (_, { slots }) =>
      h('h2', { class: 'text-lg font-semibold text-black mt-4' }, slots.default?.())
  }
}
</script>
