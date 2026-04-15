<template>
  <div class="absolute">
    <div class="z-20 flex w-2/3 flex-col rounded-md bg-stone-600 p-12 text-white">
      <button @click="selected = false" class="absolute h-8 w-8 cursor-pointer self-end">
        <img src="../assets/icons/x.png" alt="x" />
      </button>
      <h2 class="pb-6">{{ item.name }}</h2>
      <PortableText :value="item.description" :components="myPortableTextComponents" />
    </div>
  </div>
</template>

<script setup>
import { PortableText } from '@portabletext/vue'

defineProps({
  item: Object
})
</script>
