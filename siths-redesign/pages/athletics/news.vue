<template>
    <h1 class="text-2xl md:text-3xl lg:text-4xl text-center mb-4">Athletics News</h1>
    <div class="flex flex-col md:flex-row justify-center items-start px-4">
      <SubpageMenu :pages="subpageLinks" :active="'Athletic News'" class="absolute top-48 left-8 w-full md:w-auto mb-4 md:mb-0 md:mr-8" />
      <div class="flex items-start justify-center flex-col w-full md:w-5/6">
        <p>PSAL News</p>
      </div>
    </div>
  </template>
  
  <script setup>
  const subpageLinks = [
      {
          name: 'About',
          path: '/athletics'
      },
      {
          name: "Athletic News",
          path: "/athletics/news",
      },
      {
          name: "Contacts",
          path: "/athletics/contacts",
      }
  ];
  </script>