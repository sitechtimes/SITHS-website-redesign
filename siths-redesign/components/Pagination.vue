<template>
  <div v-if="totalPages > 1" class="mt-8 flex w-full items-center justify-center gap-4">
    <button
      @click="$emit('previous')"
      class="btn inline-flex"
      :class="[currentPage === 1 && 'pointer-events-none opacity-80']"
    >
      ← Previous
    </button>
    <div class="flex gap-2">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="$emit('go-to', page)"
        class="btn join-item"
        :class="{ 'btn-active': currentPage === page }"
      >
        {{ page }}
      </button>
    </div>
    <button
      @click="$emit('next')"
      class="btn inline-flex"
      :class="[currentPage === totalPages && 'pointer-events-none opacity-80']"
    >
      Next →
    </button>
  </div>
</template>

<script setup>
defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  }
})

defineEmits(['previous', 'next', 'go-to'])
</script>
