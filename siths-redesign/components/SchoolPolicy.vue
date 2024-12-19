<template>
  <div class="flex flex-col items-center">
    <h1 class="py-2 text-4xl font-extrabold">{{ currentPolicyTitle }}</h1>
    <div class="flex w-[80%] flex-row-reverse justify-between">
      <div class="static m-8 box-border h-[25rem] w-[15%] rounded-md bg-white">
        <div v-for="(schoolpolicies, index) in page" :key="index">
          <button
            @click="selectedPage = schoolpolicies.name"
            class="text-md m-2 ml-7 rounded-md p-2 text-lg font-bold text-black transition duration-300 ease-in-out hover:bg-light-gray"
          >
            {{ schoolpolicies.name }}
          </button>
        </div>
      </div>
      <div
        v-for="(policy, index) in filteredPolicies"
        :key="index"
        class="flex w-[75%] flex-col text-black"
      >
        <div
          v-for="(card, index) in policy.cards"
          :key="index"
          class="text-blac m-8 rounded-md p-7 text-white"
        >
          <h2 class="text-3xl font-bold">{{ card.policyTitle }}</h2>
          <h3 class="my-4 text-[1.2rem]">{{ card.description }}</h3>
          <img class="w-[75%]" :src="card.image" />
          <div v-for="(note, index) in card.notes" :key="index">
            <p class="text-4xl font-bold text-white">
              {{ note.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedPage = ref('Cutting Classes')
const props = defineProps({
  page: Array,
  policies: Array
})

const filteredPolicies = computed(() => {
  return props.policies.filter((policy) => policy.name === selectedPage.value)
})

const currentPolicyTitle = computed(() => {
  return selectedPage.value
})
</script>
