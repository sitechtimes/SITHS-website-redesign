<!-- component for the cards with pop-up -->
<template>
  <div>
    <h2 class="py-4">{{ type }}</h2>
    <div class="grid grid-cols-3 gap-4 py-2">
      <div v-for="item in resources"
        class="w-7/8 rounded-md border-[1px] border-white p-8 hover:border-gold transition-all duration-300"
        @click="itemClicked(item)">
        <div>
          <h4 class="pb-2">{{ item.name }}</h4>
          <p class="text-sm">{{ item.note }}</p>
        </div>
      </div>
    </div>
    <PopUp v-if="itemClicked" :title="chosenItem.name" :description="chosenItem.description"/>

  </div>
</template>

<script setup>
defineProps({
  type: String,
  resources: Array
})

let chosenItem = ref({})

const itemClicked = ((item)=>{
   chosenItem.value = item 
})

</script>