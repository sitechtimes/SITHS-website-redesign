<template>
  <!-- <div class="align-center mx-8 flex w-1/4 flex-col rounded-md bg-white p-10 text-black">
    <btn class="my-5 flex flex-row">
      <img class="mx-5" src="../assets/icons/home.svg" alt="home icon" />
      <h3>Welcome</h3>
    </btn>
    <btn class="my-5 flex flex-row">
      <img class="mx-5" src="../assets/icons/selection.svg" alt="selection icon" />
      <h3>Selection</h3>
    </btn>
    <btn class="my-5 flex flex-row">
      <img class="mx-5 max-w-[5rem]" src="../assets/icons/english.svg" alt="english icon" />
      <h3>English</h3>
    </btn>
    <btn class="my-5 flex flex-row">
      <img class="mx-5" src="../assets/icons/russian.svg" alt="russian icon" />
      <h3>Russian</h3>
    </btn>
    <btn class="my-5 flex flex-row">
      <img class="mx-5" src="../assets/icons/history.svg" alt="history icon" />
      <h3>History</h3>
    </btn>
    <btn class="my-5 flex flex-row">
      <img class="mx-5" src="../assets/icons/science.svg" alt="science icon" />
      <h3>Science</h3>
    </btn>
    <btn class="my-5 flex flex-row">
      <img class="mx-5" src="../assets/icons/math.svg" alt="math icon" />
      <h3>Math</h3>
    </btn>
    <btn class="my-5 flex flex-row">
      <img class="mx-5" src="../assets/icons/technology.svg" alt="technology icon" />
      <h3>Technology</h3>
    </btn>
    <btn class="my-5 flex flex-row">
      <img class="mx-5" src="../assets/icons/rubric.svg" alt="rubric icon" />
      <h3>Rubric</h3>
    </btn>
  </div> -->
  <h2 class="py-4">{{ type }}</h2>
  <div class="grid grid-cols-3 gap-4 py-2">
    <div
      v-for="item in resources"
      :key="item.name"
      class="w-7/8 rounded-md border-[1px] border-white p-8 transition-all duration-300 hover:border-gold"
      @click="
        selected = true
        selectedItem = item
      "
    >
      <div>
        <h4 class="pb-2">{{ item.name }}</h4>
        <p class="text-sm">{{ item.note }}</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>
