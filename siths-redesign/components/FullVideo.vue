<template>
  <div class="relative h-full w-full bg-black">
    <button @click="close" class="absolute right-0 top-0 p-4 text-white">X</button>

    <iframe
      class="h-full w-full"
      :src="`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0`"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    videoId: String
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>
