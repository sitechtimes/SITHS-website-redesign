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
            class="w-full h-24 object-cover rounded-md"
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
          <PortableText :value="post.description" />
        </div>
        <div v-for="(photo, index) in post.photos" :key="index" class="w-1/4 m-4 self-center">
            <img :src="photo.url"></img>
        </div>
      </div>

      <div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { PortableText } from '@portabletext/vue'

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

</script>
