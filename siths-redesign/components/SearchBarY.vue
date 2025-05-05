<template>
  <div class="flex max-w-max items-center justify-center border-white">
    <div class="relative flex w-5/6 items-center justify-center">
      <input
        type="text"
        placeholder="I'm searching for..."
        :value="searchInput"
        @keyup.enter="$emit('search', searchInput.toLowerCase())"
        class="h-10 w-full rounded border border-zinc-300 p-2 text-zinc-800"
      />
    </div>
  </div>
</template>

<script setup>
defineEmits(['search'])
</script>
