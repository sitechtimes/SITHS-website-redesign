<template>
    <h2>{{ type }}</h2>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    required: true
  },
  resources: {
    type: Array,
    required: false
  }
  
});
</script>