<template>
    <div class="border-white flex justify-center items-center">
      <div class="flex justify-center items-center relative w-5/6">
        <input
          :value="searchValue"
          :placeholder="placeholder"
          @input="$emit('update:searchValue', $event?.target?.value)"
          class="border border-zinc-300 rounded w-full h-10 p-2 text-zinc-800"
        />
        
      </div>
    </div>
  </template>
  
  <script setup>
defineProps({
    searchValue: String,
    placeholder: String
  })   
  </script>