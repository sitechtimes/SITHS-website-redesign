<template>
  <div class="absolute">
    <div class="flex flex-col bg-white/80 backdrop-blur-sm text-black p-12 rounded-md w-2/3">
      <button @click="emit('closeEvent')" class="absolute w-8 h-8 self-end cursor-pointer">
        <img src="../assets/icons/x.png" alt="x" @click="selected = false">
      </button>
      <h2 class="pb-6">{{ item.name }}</h2>
      <PortableText :value="item.description"/>
    </div>
  </div>
</template>

<script setup>
import { PortableText } from '@portabletext/vue';

const emit = defineEmits(['closeEvent']);

defineProps({
  item: Object
})

</script>