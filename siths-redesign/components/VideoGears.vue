<template>
  <div>
    <div v-if="videoOpen" class="fixed bottom-0 left-0 right-0 top-0 z-20 bg-black bg-opacity-50">
      <FullVideo :videoId="selectedVideo" @close="closeVideo" />
    </div>

    <div class="lg:h-full lg:w-1/3 lg:p-10">
      <div id="LGearParent" class="relative left-[9.4rem] top-[6.3rem] mx-auto w-[350px]">
        <div class="absolute inset-0 flex items-center justify-center">
          <iframe class="h-[230px] w-[230px] rounded-full" :src="getVideoUrl(link1)"> </iframe>
        </div>
        <img
          id="large-gear"
          class="relative z-10 w-[350px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
          src="../assets/imgs/lg-gear.svg"
          alt=""
          @click="selectItem(link1)"
        />
      </div>

      <div id="MGearParent" class="relative left-[23rem] top-[2rem] mx-auto w-[290px]">
        <div class="absolute inset-0 flex items-center justify-center">
          <iframe class="h-[190px] w-[190px] rounded-full" :src="getVideoUrl(link2)"> </iframe>
        </div>
        <img
          id="med-gear"
          class="relative z-10 w-[290px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
          src="../assets/imgs/med-gear.svg"
          alt=""
          @click="selectItem(link2)"
        />
      </div>
      <div id="SGearParent" class="relative left-[17rem] top-[4rem] mx-auto w-[300px]">
        <div class="absolute inset-0 flex items-center justify-center">
          <iframe class="h-[140px] w-[140px] rounded-full" :src="getVideoUrl(link3)"> </iframe>
        </div>
        <img
          id="small-gear"
          class="relative z-10 w-[300px] rotate-[-36.34deg] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
          src="../assets/imgs/sml-gear.svg"
          alt=""
          @click="selectItem(link3)"
        />
      </div>
    </div>
  </div>
</template>
<!-- src="https://www.youtube.com/embed/<VIDEO ID>?loop=1&playlist=<VIDEO ID>&autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0" ask the user to plug in the link, then get the video id from the last part of their youtube link ("https://www.youtube.com/watch?v=<THIS PART IS THE VIDEO ID>")-->

<script>
import { ref } from 'vue'
import FullVideo from './FullVideo.vue'

export default {
  components: {
    FullVideo
  },
  setup() {
    const link1 = 'u8l1VSEzhEA'
    const link2 = '3KePcASD0NQ'
    const link3 = 'u8l1VSEzhEA'
    const videoOpen = ref(false)
    const selectedVideo = ref('')

    function closeVideo() {
      videoOpen.value = false
    }

    function selectItem(videoId) {
      selectedVideo.value = videoId
      videoOpen.value = true
    }

    const getVideoUrl = (videoId) => {
      return `https://www.youtube.com/embed/${videoId}?loop=1&playlist=${videoId}&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0`
    }

    return {
      link1,
      link2,
      link3,
      videoOpen,
      selectedVideo,
      selectItem,
      closeVideo,
      getVideoUrl
    }
  }
}
</script>
