<template>
<div
  v-if="selectedPhoto"
  class="fixed inset-0 bg-black/70 backdrop-blur flex w-full items-center justify-center z-50"
>
  <button
    @click="selectedPhoto = null"
    class="absolute w-8 p-2 right-4 top-4 cursor-pointer rounded bg-stone-300 hover:bg-stone-600"
  >
    <img src="../assets/icons/x.png" alt="x" />
  </button>

  <img
    :src="selectedPhoto"
    class="w-full h-full object-scale-down p-4"
  />
</div>

<div class="my-8 lg:mx-16">
  <div
    v-for="(post, index) in posts"
    :key="index"
    class="my-2 collapse rounded-lg collapse-arrow bg-white border border-gold text-black w-full lg:w-3/4 mx-auto"
  >
    <input type="checkbox" class="peer" :checked="index === 0" />

    <div class ="collapse-title flex">
      <img v-if="post.thumbnail" class="relative object-contain mr-4 justify-start"
        :src="post.thumbnail"
        alt="post image"
      />
      <div> 
        <p class="text-3xl font-semibold text-black"
      >
      {{ post.PostTitle }}
      </p>
      <p
        v-if="post.subtitle"
        class="mt-1 text-black"
      >
        {{ post.subtitle }}
      </p>
      </div>
      
      </div>

    <div class="collapse-content flex flex-col justify-center">
      <div class="mx-1 mb-4 border-t border-gold"></div>

      <PortableText :value="post.description" :components="myPortableTextComponents" />

      <img
        v-for="(photo, index) in post.photos"
        :key="index"
        :src="photo.url"
        class="w-1/4 m-4 self-center hover:cursor-pointer"
        @click="selectedPhoto = photo.url"
      />
    </div>
  </div>
</div>
</template>

<script setup>
import { PortableText } from '@portabletext/vue';

const props = defineProps({
  posts: Array
})

const selectedPhoto = ref(null)
const dimensions = ref({})

const getImageDimensions = (url, index) => {
  if (!url) return
  const image = new Image()
  image.onload = () => {
    dimensions.value[index] = { width: image.width, height: image.height }
  }
  image.onerror = () => {
    dimensions.value[index] = null
  }
  image.src = url
}

const myPortableTextComponents = {
  types: {
    image: ({ value }) => h('img', { src: value.imageUrl }),
    callToAction: ({ value, isInline }, { slots }) =>
      isInline
        ? h('a', { href: value.url, class: 'text-black' }, value.text)
        : h('div', { class: 'callToAction' }, value.text),
  },

  list: {
    bullet: (_, { slots }) => h('li', { class: 'list-disc list-inside text-black' }, slots.default?.()),
    number: (_, { slots }) => h('ol', { class: 'list-decimal list-inside text-black' }, slots.default?.()),

    checkmarks: (_, { slots }) => h('ol', { class: 'm-auto text-lg' }, slots.default?.()),
  },

  marks: {
    em: (_, { slots }) => h('em', { class: 'text-red-600 font-semibold' }, slots.default?.()),
    link: ({ value }, { slots }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return h('a', { class: 'text-black underline font-semibold text-lg', href: value.href, rel }, slots.default?.());
    },
  },

  block: {
    normal: (_, { slots }) => h('p', { class: 'text-black text-lg mt-2' }, slots.default?.()),
    h1: (_, { slots }) => h('h1', { class: 'text-2xl text-left font-bold text-black p-0 mt-6' }, slots.default?.()),
    h2: (_, { slots }) => h('h2', { class: 'text-lg font-semibold text-black mt-4' }, slots.default?.()),
  },
};

onMounted(() => {
   props.posts.forEach((el) => {
    if (el.thumbnail) getImageDimensions(el.thumbnail)
    if (el.photos) el.photos.forEach(p => getImageDimensions(p.imageUrl))
  })
})
</script>
