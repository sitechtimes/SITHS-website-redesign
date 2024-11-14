<template>
  <div class="m-4 p-1 w-1/6 rounded-md">
    <div v-for="subpage in page" class="text-md text-white p-2 border-b border-white transition duration-300 ease-in-out hover:text-gold">
      <button @click="selectChoice(subpage.name)" class="text-left">
        {{ subpage.name }}</button>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';
const emit = defineEmits(['update:modelValue']);

const selectChoice = (choice) => {
  emit('update:modelValue', choice);
};


defineProps({
  page: Array
})
</script>
