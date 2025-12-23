<template>
  <div v-if="totalPages > 1" class="mt-8 flex w-full items-center justify-center gap-4">
    <button
      @click="currentPage > 1 ? $emit('previous') : null"
      :class="[
        'btn inline-flex',
        currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
      ]"
    >
      ← Previous
    </button>
    <div class="flex gap-2">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="$emit('go-to', page)"
        :class="{ 'btn-active': currentPage === page }"
        class="btn join-item"
      >
        {{ page }}
      </button>
    </div>
    <button
      @click="currentPage < totalPages ? $emit('next') : null"
      :class="[
        'btn inline-flex',
        currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
      ]"
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
