<template>
    <div class="accordion">
      <div v-for="(item, index) in items" :key="index" class="accordion-item">
        <!-- Input Checkbox to toggle the accordion -->
        <input type="checkbox" :id="'accordion-item-' + index" class="peer hidden" />
        
        <!-- Label that acts as the accordion title -->
        <label :for="'accordion-item-' + index" class="accordion-title">
          {{ item.title }}
        </label>
  
        <!-- Accordion Content -->
        <div class="accordion-content peer-checked:block hidden">
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Accordion items data
  const items = [
    { title: 'Accordion Item 1', content: 'This is content for item 1' },
    { title: 'Accordion Item 2', content: 'This is content for item 2' },
    { title: 'Accordion Item 3', content: 'This is content for item 3' }
  ]
  </script>
  
  <style scoped>
  /* Title styles for the accordion item */
  .accordion-title {
    @apply bg-primary text-white p-4 cursor-pointer border-b border-gray;
  }
  
  /* Content styles when collapsed */
  .accordion-content {
    @apply bg-base-200 p-4 border-b border-gray;
    @apply transition-all duration-300 ease-in-out; /* Smooth transition */
    max-height: 0;  /* Collapsed by default */
    overflow: hidden;
  }
  
  /* When the checkbox is checked (i.e., when the accordion is open), we show the content */
  .peer-checked .accordion-content {
    max-height: 1000px;  /* Adjust this to fit your content height */
  }
  
  .accordion-item {
    margin-bottom: 1rem;
  }
  </style>
  