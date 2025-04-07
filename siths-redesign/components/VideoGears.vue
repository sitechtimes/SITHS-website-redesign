<template>
  <div>
    <div v-if="videoOpen" class="fixed bottom-0 left-0 right-0 top-0 z-20 bg-black bg-opacity-50">
      <FullVideo :videoSource="selectedVideo" @close="closeVideo" />
    </div>

    <div class="lg:h-full lg:w-1/3 lg:p-10">
      <div id="LGearParent" class="absolute top-[6.6rem] mx-auto w-[350px] md:left-[67rem]">
        <div class="absolute inset-0 flex items-center justify-center">
          <iframe
            v-if="isYouTube(link1)"
            class="h-[230px] h-full max-h-full w-[230px] w-full rounded-full object-contain"
            :src="`https://www.youtube.com/embed/${getYouTubeId(link1)}?autoplay=0&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0`"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <video
            preload="metadata"
            v-else
            class="h-[230px] w-[230px] rounded-full"
            autoplay
            controls
            muted
          >
            <source :src="link1" type="video/mp4" />
          </video>
        </div>
        <img
          id="large-gear"
          class="relative z-10 w-[350px] rotate-[2deg] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
          src="../assets/imgs/lg-gear.svg"
          alt=""
          @click="selectItem(link1)"
        />
      </div>

      <div id="MGearParent" class="absolute left-[83.5rem] top-[20rem] mx-auto w-[290px]">
        <div class="absolute inset-0 bottom-[1rem] right-[1rem] flex items-center justify-center">
          <iframe
            v-if="isYouTube(link2)"
            class="h-[190px] w-[190px] rounded-full"
            :src="`https://www.youtube.com/embed/${getYouTubeId(link2)}?autoplay=0&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0`"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <video
            preload="metadata"
            v-else
            class="h-[190px] w-[190px] rounded-full"
            autoplay
            controls
            muted
          >
            <source :src="link2" type="video/mp4" />
          </video>
        </div>
        <img
          id="med-gear"
          class="relative z-10 w-[290px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
          src="../assets/imgs/med-gear.svg"
          alt=""
          @click="selectItem(link2)"
        />
      </div>

      <div id="SGearParent" class="absolute left-[73rem] top-[29rem] mx-auto w-[300px]">
        <div class="absolute inset-0 right-[1.5rem] flex items-center justify-center">
          <iframe
            v-if="isYouTube(link3)"
            class="h-[140px] w-[140px] rounded-full"
            :src="`https://www.youtube.com/embed/${getYouTubeId(link3)}?autoplay=0&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0`"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <video
            preload="metadata"
            v-else
            class="h-[140px] w-[140px] rounded-full"
            autoplay
            controls
            muted
          >
            <source :src="link3" type="video/mp4" />
          </video>
        </div>
        <img
          id="small-gear"
          class="relative z-10 w-[300px] rotate-[-33.34deg] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
          src="../assets/imgs/sml-gear.svg"
          alt=""
          @click="selectItem(link3)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useWebsiteDataStore } from '~/stores/websiteData'
import FullVideo from './FullVideo.vue'

export default {
  components: {
    FullVideo
  },
  setup() {
    const websiteData = useWebsiteDataStore()
    const link1 = computed(() => websiteData.videos[0]?.Llink || '')
    const link2 = computed(() => websiteData.videos[0]?.Mlink || '')
    const link3 = computed(() => websiteData.videos[0]?.Slink || '')
    const videoOpen = ref(false)
    const selectedVideo = ref('')

    function closeVideo() {
      videoOpen.value = false
    }

    function selectItem(videoId) {
      selectedVideo.value = videoId
      videoOpen.value = true
    }

    const isYouTube = (videoId) => {
      return typeof videoId === 'string' && videoId.includes('youtube.com')
    }

    const getYouTubeId = (videoUrl) => {
      const match = videoUrl?.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^&\n?#]+)/)
      return match ? match[1] : ''
    }

    return {
      link1,
      link2,
      link3,
      videoOpen,
      selectedVideo,
      selectItem,
      closeVideo,
      isYouTube,
      getYouTubeId
    }
  }
}
</script>
