<template>
    <div>
      <input type="file" @change="onFileChange" />
      <div v-if="dimensions">
        <p>Width: {{ dimensions.width }} px</p>
        <p>Height: {{ dimensions.height }} px</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const dimensions = ref(null);
  
  const onFileChange = (event) => {
    const file = event.target.files[0];
    
    if (file) {
      const image = new Image();
      const reader = new FileReader();
  
      reader.onload = (e) => {
        image.src = e.target.result;
      };
  
      image.onload = () => {
        dimensions.value = { width: image.width, height: image.height };
      };
  
      reader.readAsDataURL(file);
    }
  };
  </script>
  
  <style scoped>
  /* Add any styles here */
  </style>
  