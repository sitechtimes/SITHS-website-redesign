<template>
  <div>
    <div class="max-w-max">
      <input
        type="text"
        placeholder="I'm searching for"
        :value="searchInput"
        @keyup.enter="$emit('search', searchInput.toLowerCase())"
      />
    </div>
  </div>
</template>

<script setup>
const searchInput = ref('')
</script>
