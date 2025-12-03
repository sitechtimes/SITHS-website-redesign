<template>
  <div class="flex flex-col items-center justify-center my-8 mx-4 lg:mx-auto lg:max-w-[70vw]">
    <div v-for="(post, index) in posts" :key="index" class="my-2 collapse rounded-lg collapse-arrow bg-white border-gold text-black">
      <input v-if="index == 0" type="checkbox" class="peer" checked @click="getImageDimensions(post.imageUrl)"/>
      <input v-else type="checkbox" class="peer" @click="getImageDimensions(post.imageUrl)"/>
      <div class="collapse-title text-xl font-medium">
        <h3 class="font-semibold text-black">{{ post.PostTitle }}</h3>
      </div>
      <div class="collapse-content flex flex-col justify-center">
        <div class="mx-1 mb-4 border-t-[1px] border-gold"/>
        <!-- everything in the collapse -->
        <div v-if="dimensions" class="w-full">
          <div v-if="dimensions.width > dimensions.height"
            class="flex flex-col w-full items-center md:items-start justify-center">
            <!-- image horizontal -->
            <div class="flex flex-col w-full">
              <PortableText :value="post.description"/>
            </div>
            <img v-if="post.imageUrl" :src="post.imageUrl" alt="post image" class="md:w-4/5 lg:w-3/5">
          </div>
          <div v-if="dimensions.width <= dimensions.height"
            class="flex flex-col w-full md:flex-row items-center md:items-start justify-around">
            <!-- image vertical/square -->
            <div class="flex flex-col h-full w-full md:w-2/3">
              <PortableText :value="post.description"/>
            </div>
            <div class="flex flex-row justify-center items-center w-full md:w-1/3">
              <img v-if="post.imageUrl" :src="post.imageUrl" alt="post image" class="w-3/4 max-w-60">
            </div>
          </div>
        </div>
        <!-- if there is no image in the post -->
        <div v-else>
          <div class="flex flex-col">
            <PortableText :value="post.description"/>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PortableText } from '@portabletext/vue';

const props = defineProps({
  posts: Array
})

const dimensions = ref(null)

onMounted(()=>{
  props.posts.forEach((el)=>{
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
