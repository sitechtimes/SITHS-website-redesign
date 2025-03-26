<template>
  <div v-if="videoOpen" class="z-20">
    <FullVideo />
  </div>
  <button @click="videoOpen = !videoOpen">tcmmwtkms</button>
  <div class="px-10 lg:h-full lg:w-1/3 lg:p-10">
    <div id="LGearParent">
      <div class="relative left-[9.4rem] top-[6.3rem] z-0 h-64 w-64 overflow-hidden rounded-full">
        <iframe
          class="absolute inset-0 h-full w-full"
          id="video-displayed"
          width="300"
          height="200"
          src="https://www.youtube.com/embed/u8l1VSEzhEA?loop=1&playlist=u8l1VSEzhEA&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0"
        >
        </iframe>
      </div>
      <img
        id="large-gear"
        class="absolute bottom-auto top-[6.6rem] z-10 w-[350px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 md:left-[67rem]"
        src="../assets/imgs/lg-gear.svg"
        alt=""
        aria-hidden="true"
      />
    </div>
    <div id="MGearParent">
      <div
        class="relative left-[26rem] top-[4rem] z-0 h-[180px] w-[180px] overflow-hidden rounded-full"
      >
        <iframe
          class="absolute inset-0 h-full w-full"
          id="video-displayed"
          width="300"
          height="200"
          src="https://www.youtube.com/embed/3KePcASD0NQ?loop=1&playlist=3KePcASD0NQ&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0"
        >
          <!-- src="https://www.youtube.com/embed/<VIDEO ID>?loop=1&playlist=<VIDEO ID>&autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0" ask the user to plug in the link, then get the video id from the last part of their youtube link ("https://www.youtube.com/watch?v=<THIS PART IS THE VIDEO ID>")-->
        </iframe>
      </div>
      <img
        id="med-gear"
        class="absolute bottom-auto left-[83.5rem] top-[20rem] z-10 w-[280px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
        src="../assets/imgs/med-gear.svg"
        alt=""
        aria-hidden="true"
      />
    </div>
    <div id="SGearParent">
      <div
        class="relative left-[17rem] top-[4rem] z-0 h-[140px] w-[140px] overflow-hidden rounded-full"
      >
        <iframe
          class="absolute inset-0 h-full w-full"
          id="video-displayed"
          width="300"
          height="200"
          src="https://www.youtube.com/embed/f7oXhDatwtY?loop=1&playlist=f7oXhDatwtY&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0"
        >
          <!-- src="https://www.youtube.com/embed/<VIDEO ID>?loop=1&playlist=<VIDEO ID>&autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0" ask the user to plug in the link, then get the video id from the last part of their youtube link ("https://www.youtube.com/watch?v=<THIS PART IS THE VIDEO ID>")-->
        </iframe>
      </div>
      <img
        id="small-gear"
        class="absolute bottom-auto left-[73rem] top-[29rem] z-10 w-[300px] rotate-[-36.34deg] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
        src="../assets/imgs/sml-gear.svg"
        alt=""
        aria-hidden="true"
      />
    </div>
    <!-- filler -->
    <!-- <p id="right-side" class="leading-relaxed"></p> -->
  </div>
</template>

<script>
const videoOpen = ref(true)
function selectItem(video) {}
</script>
