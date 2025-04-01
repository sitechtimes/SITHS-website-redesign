<template>
  <div
    class="absolute left-1/2 top-1/2 h-[85vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 transform overflow-hidden bg-black"
  >
    <button
      @click="close"
      class="absolute right-[1rem] top-[1rem] rounded-full bg-black p-4 text-white"
    >
      <img
        id="x-symbol"
        class="z-50 w-[35px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
        src="../assets/imgs/x-symbol.svg"
        @click="videoOpen = false"
        alt="exit symbol"
        aria-hidden="true"
      />
    </button>

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
