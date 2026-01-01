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
    class="collapse collapse-arrow mx-auto my-2 w-5/6 rounded-lg border border-gold bg-white text-black lg:w-3/4"
  >
    <input type="checkbox" class="peer" :checked="index === 0" />

    <div class="collapse-title flex w-full flex-col items-center lg:flex-row">
      <div v-if="post.thumbnail" class="flex w-full justify-center lg:max-w-64 lg:pr-4">
        <img :src="post.thumbnail" alt="post image" class="max-h-32 max-w-full object-contain" />
      </div>

      <div class="m-2 min-w-0 space-y-2 text-center lg:text-start">
        <p class="text-lg font-semibold text-black md:text-2xl">{{ post.postTitle }}</p>
        <p v-if="post.subtitle" class="text-sm text-black">
          {{ post.subtitle }}
        </p>
      </div>
    </div>

    <div class="collapse-content flex w-full flex-col overflow-hidden">
      <hr class="border-gold" />
      <PortableText :value="post.description || []" :components="myPortableTextComponents" />

      <div class="flex flex-col justify-center lg:flex-row">
        <img
          v-for="(photo, index) in post.photos || []"
          :key="index"
          :src="photo?.url || ''"
          class="w-full object-contain p-4 lg:w-1/3"
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
