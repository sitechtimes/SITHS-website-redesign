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
      <div>
        <p class="m-2 text-2xl font-semibold text-black">{{ post.postTitle }}</p>
        <p v-if="post.subtitle" class="m-2 text-sm text-black">
          {{ post.subtitle }}
        </p>
      </div>
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
</script>
