<template>
  <div>
    <div v-if="videoOpen" class="fixed bottom-0 left-0 right-0 top-0 z-20 bg-black bg-opacity-50">
      <FullVideo :videoId="selectedVideo" @close="closeVideo" />
    </div>

    <div class="lg:h-full lg:w-1/3 lg:p-10">
      <div id="LGearParent">
        <div class="relative left-[9.4rem] top-[6.3rem] z-0 h-64 w-64 overflow-hidden rounded-full">
          <iframe class="absolute inset-0 h-full w-full" :src="getVideoUrl('u8l1VSEzhEA')"></iframe>
        </div>
        <img
          id="large-gear"
          class="absolute bottom-auto top-[6.6rem] z-10 w-[350px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 md:left-[67rem]"
          src="../assets/imgs/lg-gear.svg"
          alt=""
          @click="selectItem('u8l1VSEzhEA')"
        />
      </div>

      <div id="MGearParent">
        <div
          class="relative left-[26rem] top-[4rem] z-0 h-[180px] w-[180px] overflow-hidden rounded-full"
        >
          <iframe class="absolute inset-0 h-full w-full" :src="getVideoUrl('3KePcASD0NQ')"></iframe>
        </div>
        <img
          id="med-gear"
          class="absolute bottom-auto left-[83.5rem] top-[20rem] z-10 w-[280px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
          src="../assets/imgs/med-gear.svg"
          alt=""
          @click="selectItem('3KePcASD0NQ')"
        />
      </div>

      <div id="SGearParent">
        <div
          class="relative left-[17rem] top-[4rem] z-0 h-[140px] w-[140px] overflow-hidden rounded-full"
        >
          <iframe class="absolute inset-0 h-full w-full" :src="getVideoUrl('f7oXhDatwtY')"></iframe>
        </div>
        <img
          id="small-gear"
          class="absolute bottom-auto left-[73rem] top-[29rem] z-10 w-[300px] rotate-[-36.34deg] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
          src="../assets/imgs/sml-gear.svg"
          alt=""
          @click="selectItem('f7oXhDatwtY')"
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
      videoOpen,
      selectedVideo,
      selectItem,
      closeVideo,
      getVideoUrl
    }
  }
}
</script>
