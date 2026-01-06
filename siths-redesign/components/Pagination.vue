<template>
  <div v-if="totalPages > 1" class="mt-8 flex w-full items-center justify-center gap-4">
    <button
      @click="$emit('previous')"
      :disabled="currentPage === 1"
      class="btn inline-flex disabled:cursor-not-allowed disabled:opacity-50"
    >
      ← Previous
    </button>
    <div class="flex gap-2">
      <button
        v-for="page in totalPages"
        :key="page"
        @click="$emit('go-to', page)"
        :disabled="currentPage === page"
        :class="{ 'btn-active': currentPage === page }"
        class="btn join-item"
      >
        {{ page }}
      </button>
    </div>
    <button
      @click="$emit('next')"
      :disabled="currentPage === totalPages"
      class="btn inline-flex disabled:cursor-not-allowed disabled:opacity-50"
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
