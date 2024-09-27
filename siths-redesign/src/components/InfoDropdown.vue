<template>
  <div class="flex flex-col items-center justify-center">
    <div
      v-for="(post, index) in posts"
      :key="index"
      class="m-8 w-[90vw] collapse collapse-plus bg-white text-black"
    >
      <input type="checkbox" />
      <div class="collapse-title text-xl font-medium">{{ post.PostTitle }}</div>
      <div class="collapse-content">
        <h4 class="font-bold py-2">{{ post.author }}</h4>
        <div class="flex flex-row">
          <p class="py-4" v-html="blocksToText(post.description)"></p>
        </div>
        <img v-if="post.imageUrl" :src="post.imageUrl" alt="post image" class="h-72" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  posts: Array
})

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
