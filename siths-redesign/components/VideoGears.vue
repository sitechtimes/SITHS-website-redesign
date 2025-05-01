<template>
  <div>
    <div v-if="videoOpen" class="fixed bottom-0 left-0 right-0 top-0 z-20 bg-black bg-opacity-50">
      <FullVideo :videoSource="selectedVideo" @close="closeVideo" />
    </div>

    <div class="lg:h-full lg:w-1/3">
      <div id="LGearParent" class="w-70 absolute sm:top-28 sm:w-80 md:left-8 lg:top-28">
        <div class="absolute inset-0 flex items-center justify-center">
          <img
            :src="thumbnail1"
            class="sm:max-w-9/10 relative rounded-full object-cover sm:h-48 sm:w-48"
            alt="Large Gear Thumbnail"
            @error="console.error('Thumbnail failed to load')"
          />
        </div>
        <img
          id="large-gear"
          class="relative z-10 animate-spin-slow cursor-pointer sm:w-80"
          src="../assets/imgs/lg-gear.svg"
          alt="Large Gear"
          @click="selectItem(link1)"
        />
      </div>

      <div
        id="MGearParent"
        class="absolute left-[30%] top-[15rem] mx-auto w-[190px] sm:left-[20rem] sm:top-[13rem] sm:w-[270px] md:left-[22rem] md:top-[10rem] lg:top-[20rem]"
      >
        <div class="absolute inset-0 flex items-center justify-center">
          <img
            class="max-h-full rounded-full object-contain sm:h-[180px] lg:h-[100px]"
            :src="thumbnail2"
            alt="Medium Gear Thumbnail"
            @error="console.error('Thumbnail failed to load')"
          />
        </div>
        <img
          id="med-gear"
          class="relative z-10 w-[240px] animate-spin-slower cursor-pointer transition-transform duration-300 sm:w-[290px]"
          src="../assets/imgs/med-gear.svg"
          alt="Medium Gear"
          @click="selectItem(link2)"
        />
      </div>

      <div
        id="SGearParent"
        class="absolute left-[5%] top-[25rem] mx-auto w-[130px] sm:left-[22rem] sm:top-[0rem] sm:w-[200px] md:left-[37rem] md:top-[3rem] lg:left-[12rem] lg:top-[33rem]"
      >
        <div class="absolute inset-0 flex items-center justify-center">
          <img
            class="max-h-full w-[100px] rounded-full sm:w-[130px]"
            :src="thumbnail3"
            alt="Small Gear Thumbnail"
            @error="console.error('Thumbnail failed to load')"
          />
        </div>
        <img
          id="small-gear"
          class="relative z-10 w-[200px] animate-spin-med cursor-pointer"
          src="../assets/imgs/sml-gear.svg"
          alt="Small Gear"
          @click="selectItem(link3)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useWebsiteDataStore } from '~/stores/websiteData'
import FullVideo from './FullVideo.vue'

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
</script>
