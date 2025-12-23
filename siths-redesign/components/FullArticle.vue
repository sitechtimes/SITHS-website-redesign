<template>
  <div
    v-if="article"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
    @click="$emit('close')"
  >
    <div
      class="flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl bg-white text-black shadow-2xl"
      @click.stop
    >
      <div class="border-gray-200 flex items-start justify-between border-b p-6">
        <h2 class="text-gray-900 pr-4 text-2xl font-bold">{{ article.headline }}</h2>
        <button
          @click="$emit('close')"
          class="text-gray-400 hover:text-gray-600 p-1 transition-colors hover:cursor-pointer"
        ></button>
      </div>
      <div class="flex-1 overflow-y-auto p-6">
        <img
          v-if="article.imageUrl"
          :src="article.imageUrl"
          :alt="article.headline"
          class="mb-6 h-64 w-full rounded-lg object-cover"
        />
        <p class="text-gray-700 whitespace-pre-wrap text-base leading-relaxed">
          {{ article.fullContent }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    default: null
  }
})

defineEmits(['close'])
</script>
