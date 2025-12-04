<template>
    <div v-if="videoOpen" class="fixed inset-0 z-20 bg-black bg-opacity-50">
      <FullVideo :videoSource="selectedVideo" @close="closeVideo" />
    </div>
    <div class="lg:w-90 lg:h-full">
      <div
        id="LGearParent"
        class="absolute left-0 top-0 mx-auto size-52 sm:left-0 sm:top-0 sm:size-60 md:left-20 md:top-40 lg:top-0 lg:size-80"
      >
        <div class="absolute inset-0 flex items-center justify-center">
          <img
            class="h-32 w-32 rounded-full object-cover sm:h-40 sm:w-40 md:size-40 lg:size-48"
            :src="Lthumbnail"
            alt="Large Gear Thumbnail"
            @error="console.error('Thumbnail failed to load')"
          />
        </div>
        <img
          id="lg-gear"
          class="relative z-10 w-60 animate-spin-slow cursor-pointer sm:w-80"
          src="../assets/imgs/lg-gear.svg"
          alt="Large Gear"
          <!-- @click="selectItem(Llink)" -->
        />
      </div>
      <div
        id="MGearParent"
        class="absolute right-0 top-48 mx-auto w-40 sm:left-0 sm:top-48 sm:w-60 md:left-20 md:top-0 lg:left-80 lg:top-60 lg:size-60"
      >
        <div class="absolute inset-0 flex items-center justify-center">
          <img
            class="size-28 rounded-full object-cover sm:h-40 sm:w-40 md:h-40 md:w-40 lg:h-40 lg:w-40"
            :src="Mthumbnail"
            alt="Medium Gear Thumbnail"
            @error="console.error('Thumbnail failed to load')"
          />
        </div>
        <img
          id="med-gear"
          class="relative z-10 w-60 animate-spin-slower cursor-pointer sm:w-72 lg:w-60"
          src="../assets/imgs/med-gear.svg"
          alt="Medium Gear"
          <!-- @click="selectItem(Mlink)" -->
        />
      </div>
      <div
        id="SGearParent"
        class="absolute left-[5%] top-72 mx-auto w-32 sm:left-80 sm:top-0 sm:w-52 md:left-[32rem] md:top-48 lg:left-48 lg:top-[28rem]"
      >
        <div class="absolute inset-0 flex items-center justify-center">
          <img
            class="max-h-full w-24 rounded-full sm:h-32 sm:w-32"
            :src="Sthumbnail"
            alt="Small Gear Thumbnail"
            @error="console.error('Thumbnail failed to load')"
          />
        </div>
        <img
          id="small-gear"
          class="relative z-10 w-52 animate-spin-med cursor-pointer"
          src="../assets/imgs/sml-gear.svg"
          alt="Small Gear"
          <!-- @click="selectItem(Slink)" -->
        />
      </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useWebsiteDataStore } from '~/stores/websiteData'
import FullVideo from './FullVideo.vue'

const websiteData = useWebsiteDataStore()

const [Llink, Mlink, Slink] = ['Llink', 'Mlink', 'Slink'].map((key) =>
  computed(() => websiteData.videos[0]?.[key] || '')
)
const [Lthumbnail, Mthumbnail, Sthumbnail] = ['Lthumbnail', 'Mthumbnail', 'Sthumbnail'].map((key) =>
  computed(() => websiteData.videos[0]?.[key] || '')
)

const videoOpen = ref(false)
const selectedVideo = ref('')

function closeVideo() {
  videoOpen.value = false
}

function selectItem(videoId) {
  selectedVideo.value = videoId
  videoOpen.value = true
}

onMounted(() => {
  console.log('Links', Llink, Mlink, SLink)
})

</script>