<template>
  <div
    v-if="selectedPhoto"
    @click.self="selectedPhoto = null"
    class="fixed inset-0 z-50 flex w-full cursor-pointer items-center justify-center rounded-md bg-black/70 p-6 backdrop-blur-sm"
  >
    <button
      @click="selectedPhoto = null"
      class="absolute right-4 top-4 h-8 w-8 cursor-pointer rounded bg-slate-200 p-2 hover:bg-stone-500"
    >
      <img src="../assets/icons/x.png" alt="x" />
    </button>

    <img :src="selectedPhoto" class="h-screen object-contain p-6" />
  </div>

  <div
    v-for="(post, index) in posts"
    :key="index"
    class="collapse collapse-arrow mx-auto my-2 w-full rounded-lg border border-gold bg-white text-black lg:w-3/4"
  >
    <input type="checkbox" class="peer" :checked="index === 0" />

    <div class="collapse-title inline-flex text-wrap">
      <img
        v-if="post.thumbnail"
        :src="post.thumbnail"
        alt="post image"
        class="mr-4 mt-2 max-h-40 min-h-24 min-w-32 max-w-64 rounded-md object-contain"
      />
      <div v-if="post.subtitle">
        <p class="m-2 text-2xl font-semibold text-black">{{ post.PostTitle }}</p>
        <p v-if="post.subtitle" class="m-2 text-sm text-black">
          {{ post.subtitle }}
        </p>
      </div>
      <p v-else class="m-2 self-center text-2xl font-semibold text-black">
        {{ post.PostTitle }}
      </p>
    </div>

    <div class="collapse-content flex flex-col justify-center">
      <hr class="border-gold" />
      <PortableText :value="post.description || []" :components="myPortableTextComponents" />
      <div class="inline-flex justify-center">
        <img
          v-for="(photo, index) in post.photos || []"
          :key="index"
          :src="photo?.url || ''"
          class="m-4 w-1/4 hover:cursor-pointer"
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
