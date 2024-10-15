<template>
  <div class="flex items-center justify-center border-white">
    <div class="relative flex w-5/6 items-center justify-center">
      <input
        :value="modelValue"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
        @keyup.enter="$emit('search', modelValue)"
        class="h-10 w-full rounded border border-zinc-300 p-2 text-zinc-800"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: String,
  placeholder: String
})
</script>
