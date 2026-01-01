<template>
  <div
    class="absolute left-1/2 top-1/2 h-[85vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 transform overflow-hidden bg-black"
  >
    <button
      @click="emit('close')"
      class="absolute right-4 top-4 z-50 rounded-full bg-black p-2 text-white"
    >
      <img
        id="x-symbol"
        class="w-5 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
        src="../assets/imgs/x-symbol.svg"
        alt="exit symbol"
        aria-hidden="true"
      />
    </button>

    <iframe
      v-if="isYouTube(videoSource)"
      class="allow-popups h-full w-full"
      :src="getYouTubeEmbedUrl(videoSource)"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    ></iframe>

    <video v-else class="h-full w-full" autoplay controls>
      <source :src="videoSource" type="video/mp4" />
    </video>
  </div>
</template>

<script setup>
const props = defineProps({
  videoSource: String
})

const emit = defineEmits(['close'])

function isYouTube(url) {
  return typeof url === 'string' && (url.includes('youtube.com') || url.includes('youtu.be'))
}

function getYouTubeVideoId(url) {
  const match = url.match(
    /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  )
  return match ? match[1] : null
}

function getYouTubeEmbedUrl(url) {
  const videoId = getYouTubeVideoId(url)
  return videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&playlist=${videoId}&loop=1`
    : ''
}
</script>
