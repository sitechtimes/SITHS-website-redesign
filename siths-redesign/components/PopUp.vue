<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    @click.self="emit('closeEvent')"
  >
    <div
      class="w-full max-w-full overflow-hidden rounded-2xl border border-white/15 bg-stone-800 text-white shadow-2xl sm:max-w-xl md:max-w-2xl"
    >
      <div class="flex max-h-[85vh] flex-col">
        <header class="flex shrink-0 items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6">
          <h2 class="min-w-0 flex-1 text-left text-lg font-semibold leading-snug sm:text-xl">
            {{ item.name }}
          </h2>
          <button
            type="button"
            class="mt-0.5 shrink-0 rounded-full bg-stone-100 p-2.5 shadow ring-1 ring-stone-400/40 transition hover:bg-white"
            aria-label="Close"
            @click="emit('closeEvent')"
          >
            <img src="../assets/icons/x.png" alt="" class="h-5 w-5" />
          </button>
        </header>
        <div class="min-h-0 flex-1 overflow-y-auto px-5 py-4 sm:px-6">
          <PortableText :value="item.description" :components="myPortableTextComponents" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PortableText } from '@portabletext/vue'

defineProps({
  item: Object
})

const emit = defineEmits(['closeEvent'])
</script>
