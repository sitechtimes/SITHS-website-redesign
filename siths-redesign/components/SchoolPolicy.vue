<template>
  <div class="flex flex-col items-center">
    <div class="flex w-screen flex-row justify-center">
      <div class="static m-8 h-[25rem] w-[15%] rounded-md bg-white">
        <div v-for="(schoolpolicies, index) in page" :key="index">
          <button
            class="text-md m-2 ml-7 rounded-md p-2 text-lg font-bold text-black transition duration-300 ease-in-out hover:bg-light-gray"
          >
            {{ schoolpolicies.name }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  page: Array
})
</script>
