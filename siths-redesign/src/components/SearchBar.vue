<template>
  <div class="border-white flex justify-center items-center">
    <div class="flex justify-center items-center relative w-5/6">
      <input
        :value="modelValue"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)" 
        @keyup.enter="$emit('search', modelValue)"
        class="border border-zinc-300 rounded w-full h-10 p-2 text-zinc-800"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: String,  
  placeholder: String
});
</script>
