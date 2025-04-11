<template>
  <div>
    <div v-if="videoOpen" class="fixed bottom-0 left-0 right-0 top-0 z-20 bg-black bg-opacity-50">
      <FullVideo :videoSource="selectedVideo" @close="closeVideo" />
    </div>

    <div class="relative min-h-[20rem] w-full lg:h-full lg:w-1/3 lg:p-10">
      <div
        id="LGearParent"
        class="absolute w-[330px] sm:left-[1rem] sm:top-[0] lg:left-[67rem] lg:top-[6.6rem]"
      >
        <div class="absolute inset-0 flex items-center justify-center">
          <img
            :src="`${thumbnail1}`"
            class="h-[220px] max-h-full w-[220px] rounded-full object-contain"
            alt="Large Gear Thumbnail"
            @error="console.error('Thumbnail failed to load')"
          />
        </div>
        <img
          id="large-gear"
          class="relative z-10 w-[350px] animate-spin-slow cursor-pointer"
          src="../assets/imgs/lg-gear.svg"
          alt=""
          @click="selectItem(link1)"
        />
      </div>

      <div
        id="MGearParent"
        class="absolute mx-auto w-[270px] sm:left-[20rem] sm:top-[3rem] lg:left-[83.5rem] lg:top-[20rem]"
      >
        <div class="absolute inset-0 bottom-[1rem] right-[1rem] flex items-center justify-center">
          <img
            class="h-[180px] max-h-full rounded-full object-contain"
            :src="`${thumbnail2}`"
            alt="Medium Gear Thumbnail"
            @error="console.error('Thumbnail failed to load')"
          />
        </div>
        <img
          id="med-gear"
          class="relative z-10 w-[290px] animate-spin-slower cursor-pointer transition-transform duration-300"
          src="../assets/imgs/med-gear.svg"
          alt="Medium Gear Thumbnail"
          @click="selectItem(link2)"
        />
      </div>

      <div id="SGearParent" class="absolute mx-auto lg:left-[72rem] lg:top-[28rem] lg:w-[200px]">
        <div class="absolute inset-0 flex items-center justify-center">
          <img
            class="max-h-full w-[130px] rounded-full"
            :src="thumbnail3"
            alt="Large Gear Thumbnail"
            @error="console.error('Thumbnail failed to load')"
          />
        </div>
        <img
          id="small-gear"
          class="animate-spin-med relative z-10 w-[200px] cursor-pointer"
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
    const thumbnail1 = computed(() => websiteData.videos[0]?.Sthumbnail || '')
    const thumbnail2 = computed(() => websiteData.videos[0]?.Mthumbnail || '')
    const thumbnail3 = computed(() => websiteData.videos[0]?.Lthumbnail || '')
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
      thumbnail1,
      thumbnail2,
      thumbnail3,
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
