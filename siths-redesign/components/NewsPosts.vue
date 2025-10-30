<template>
  <div class="flex flex-col items-center justify-center my-8 lg:mx-16">
    <div
      v-for="(post, index) in posts"
      :key="index"
      class="my-2 collapse rounded-lg collapse-arrow bg-white border border-gold text-black w-full lg:w-3/4"
    >
      <!-- Input controls open/closed -->
      <input type="checkbox" class="peer" :checked="index === 0" />

      <!-- COLLAPSE TITLE: visible header area -->
      <div class="collapse-title flex flex-row items-center gap-4">
        <div v-if="post.thumbnail" class="flex-shrink-0">
          <img
            :src="post.thumbnail"
            alt="post image"
            class="w-full h-24 max-w-80 object-cover rounded-md"
          />
        </div>

        <div class="flex flex-col justify-center text-left">
          <h3 class="font-semibold text-black text-lg">
            {{ post.PostTitle }}
          </h3>
          <h4 v-if="post.subtitle" class="font-medium mt-1 text-black text-base" >
            {{ post.subtitle }}
          </h4>
        </div>
      </div>

      <!-- COLLAPSE CONTENT: toggled area -->
      <div class="collapse-content flex flex-col justify-center">
        <div class="mx-1 mb-4 border-t border-gold"></div>
        <div class="flex flex-col">
          <PortableText :value="post.description" :components="myPortableTextComponents"/>
        </div>
        <div class="flex flex-row content-start justify-center">
            <div v-for="(photo, index) in post.photos" :key="index" class="w-1/4 m-4 self-center">
            <img :src="photo.url"></img>
        </div>
        </div>
        
      </div>

      <div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { PortableText } from '@portabletext/vue';

const props = defineProps({
  posts: Array
})


const dimensions = ref({})

onMounted(() => {
   props.posts.forEach((el) => {
    if (el.thumbnail) getImageDimensions(el.thumbnail)
    if (el.photos) el.photos.forEach(p => getImageDimensions(p.imageUrl))
  })
})

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
    // Ex. 1: customizing common list types
    bullet: (_, { slots }) => h('li', { class: 'list-disc list-inside text-black' }, slots.default?.()),
    number: (_, { slots }) => h('ol', { class: 'list-decimal list-inside text-black' }, slots.default?.()),

    // Ex. 2: rendering custom lists
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

</script>
