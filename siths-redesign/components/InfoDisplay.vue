<template>
  <div>
    <div class="m-2 grid grid-cols-1 gap-4">
      <div v-for="item in resources" class="group mb-12">
        <a :href="item.url" target="_blank">
          <h3
            class="flex items-center justify-between border-b-[2px] border-gold py-2 pr-4 text-2xl font-semibold"
          >
            {{ item.name }}
            <img class="inline h-8 invert" src="../assets/icons/xlink.png" alt="external link" />
          </h3>
        </a>
        <PortableText
          v-if="isBlock"
          :value="item.description"
          :components="myPortableTextComponents"
        />
        <p v-if="!isBlock" class="pt-2 transition-all duration-300">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PortableText } from '@portabletext/vue'

defineProps({
  resources: Array,
  isBlock: Boolean
})
</script>
