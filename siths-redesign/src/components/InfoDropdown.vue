<template>
  <div class="flex flex-col items-center justify-center">
    <div v-for="(post, index) in posts" :key="index" class="m-8 w-[90vw] collapse collapse-plus bg-white text-black">
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium">{{ post.PostTitle }}</div>
      <div class="collapse-content flex flex-col justify-center">
        <h4 class="font-bold py-2">{{ post.author }}</h4>
        <div class="flex flex-row">
          <p class="py-4" v-html="blocksToText(post.description)"></p>
        </div>
        <div>
          <button @click="getImageDimensions(post.imageUrl)">Get Dimensions</button>
          <div v-if="dimensions">
            <div v-if="dimensions.width > dimensions.height">
              <p>Horizontal Image</p>
              <img v-if="post.imageUrl" :src="post.imageUrl" alt="post image" class="h-72">
            </div>
            <div v-if="dimensions.width <= dimensions.height">
              <p>Vertical/Square Image</p>
              <img v-if="post.imageUrl" :src="post.imageUrl" alt="post image" class="h-72">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  posts: Array
})

const dimensions = ref(null)

const getImageDimensions = (url) => {
  const image = new Image()

  image.onload = () => {
    dimensions.value = { width: image.width, height: image.height }
  }

  image.onerror = () => {
    dimensions.value = null // Handle error if the image fails to load
    alert('Failed to load image. Please check the URL.')
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
      return block.children.map((child) => `<p>${child.text}</p><br/>`).join('')
    })
    .join('\n\n')
}
</script>

<style lang="css" scoped></style>
