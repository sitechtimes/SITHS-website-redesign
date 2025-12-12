<template>
  <div class="my-8 flex flex-col items-center justify-center lg:mx-16">
    <div
      v-for="(post, index) in posts"
      :key="index"
      class="collapse collapse-arrow my-2 rounded-lg border-gold bg-white text-black"
    >
      <input
        v-if="index == 0"
        type="checkbox"
        class="peer"
        checked
        @click="getImageDimensions(post.imageUrl)"
      />
      <input v-else type="checkbox" class="peer" @click="getImageDimensions(post.imageUrl)" />
      <div class="collapse-title text-xl font-medium">
        <h3 class="font-semibold text-black">{{ post.postTitle }}</h3>
      </div>
      <div class="collapse-content flex flex-col justify-center">
        <div class="mx-1 mb-4 border-t-[1px] border-gold" />
        <!-- everything in the collapse -->
        <div v-if="dimensions" class="w-full">
          <div
            v-if="dimensions.width > dimensions.height"
            class="flex w-full flex-col items-center justify-center md:items-start"
          >
            <!-- image horizontal -->
            <div class="flex w-full flex-col">
              <PortableText :value="post.description" />
            </div>
            <img
              v-if="post.imageUrl"
              :src="post.imageUrl"
              alt="post image"
              class="md:w-4/5 lg:w-3/5"
            />
          </div>
          <div
            v-if="dimensions.width <= dimensions.height"
            class="flex w-full flex-col items-center justify-around md:flex-row md:items-start"
          >
            <!-- image vertical/square -->
            <div class="flex h-full w-full flex-col md:w-2/3">
              <PortableText :value="post.description" />
            </div>
            <div class="flex w-full flex-row items-center justify-center md:w-1/3">
              <img
                v-if="post.imageUrl"
                :src="post.imageUrl"
                alt="post image"
                class="w-3/4 max-w-60"
              />
            </div>
          </div>
        </div>
        <!-- if there is no image in the post -->
        <div v-else>
          <div class="flex flex-col">
            <PortableText :value="post.description" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PortableText } from '@portabletext/vue'

const props = defineProps({
  posts: Array
})

const dimensions = ref(null)

onMounted(() => {
  props.posts.forEach((el) => {
    getImageDimensions(el.imageUrl)
  })
})

const getImageDimensions = (url) => {
  const image = new Image()

  image.onload = () => {
    dimensions.value = { width: image.width, height: image.height }
  }

  image.onerror = () => {
    dimensions.value = null
  }

  image.src = url
}
</script>
