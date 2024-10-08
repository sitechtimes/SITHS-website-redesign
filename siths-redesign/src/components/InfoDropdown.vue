<template>
  <div class="flex flex-col items-center justify-center">
    <div v-for="(post, index) in posts" :key="index" class="m-8 w-[90vw] collapse collapse-plus bg-white text-black">
      <input type="checkbox" @click="getImageDimensions(post.imageUrl)">
      <div class="collapse-title text-xl font-medium">{{ post.PostTitle }}</div>
      <div class="collapse-content flex flex-col justify-center">
        <!-- everything in the collapse -->
        <div v-if="dimensions">
          <div v-if="dimensions.width > dimensions.height" class="flex flex-col justify-center">
            <!-- image horizontal -->
            <div class="flex flex-col">
              <h4 class="font-bold py-2">{{ post.author }}</h4>
              <p class="py-4" v-html="blocksToText(post.description)"></p>
            </div>
            <img v-if="post.imageUrl" :src="post.imageUrl" alt="post image" class="h-72">
          </div>
          <div v-if="dimensions.width <= dimensions.height" class="flex flex-row justify-around">
            <!-- image vertical/square -->
            <div class="flex flex-col">
              <h4 class="font-bold py-2">{{ post.author }}</h4>
              <p class="py-4" v-html="blocksToText(post.description)"></p>
            </div>
            <div class="flex flex-row justify-center items-center w-3/4">
              <img v-if="post.imageUrl" :src="post.imageUrl" alt="post image" class="w-7/12">
            </div>
          </div>
        </div>
        <!-- if there is no image in the post -->
        <div v-else>
          <div class="flex flex-col">
              <h4 class="font-bold py-2">{{ post.author }}</h4>
              <p class="py-4" v-html="blocksToText(post.description)"></p>
            </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  posts: {
    type: Array,
    required: true
  }
})

const dimensions = ref(null)

const getImageDimensions = (url) => {
  const image = new Image()

  image.onload = () => {
    dimensions.value = { width: image.width, height: image.height }
  }

  image.onerror = () => {
    dimensions.value = null // Handle error if the image fails to load
    console.log('Failed to load image. Please check the URL. Or post has no image.')
  }

  image.src = url
}

const defaults = { nonTextBehavior: 'remove' }

function blocksToText(blocks, opts = {}) {
  const options = Object.assign({}, defaults, opts)
  return blocks
    .map((block) => {
      if (block._type !== 'block' || !block.children) {
        return options.nonTextBehavior === 'remove' ? '' : `[${block._type} block]`
      }
      return block.children.map((child) => `<p class="flex-grow">${child.text}</p><br/>`).join('')
    })
    .join('\n\n')
}

</script>

<style lang="css" scoped></style>
