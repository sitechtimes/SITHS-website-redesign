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
          <p class="py-4">{{ post.description }}</p>
        </div>
        <img :src="post.imageUrl" alt="post image" class="h-72" />

      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  posts: Array
})

</script>

<style lang="css" scoped></style>
