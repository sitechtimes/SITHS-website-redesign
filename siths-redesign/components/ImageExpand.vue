<template>
  <!-- <div class="absolute">
    <div class="flex flex-col bg-stone-200 text-black p-12 rounded-md w-full z-20">
      <button @click="closePopup = false" class="absolute w-8 p-2 h-8 self-end cursor-pointer">
        <img src="../assets/icons/x.png" alt="x" >
      </button>
      <div class="w-full h-auto">
      <img :src="image"></img>
      </div>
      </div>
    </div> -->

</template>

<script setup>


defineProps({
image: String 
})
</script>
