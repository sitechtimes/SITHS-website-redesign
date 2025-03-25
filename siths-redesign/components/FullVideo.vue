<template>
  <div
    class="absolute left-1/2 top-1/2 h-[85vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 transform overflow-hidden"
  >
    <div class="flex h-[50px] justify-end px-[10px] py-[10px]" id="video-header">
      <img
        id="x-symbol"
        class="z-50 w-[35px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
        src="../assets/imgs/x-symbol.svg"
        @click="selected = false"
        alt="exit symbol"
        aria-hidden="true"
      />
    </div>

    <iframe
      class="inset-0 h-full w-full"
      id=""
      title=""
      width="300"
      height="200"
      src="https://www.youtube.com/embed/u8l1VSEzhEA?loop=1&playlist=u8l1VSEzhEA&autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0"
    >
    </iframe>
  </div>
</template>

<script>
const selected = ref(true)
</script>
