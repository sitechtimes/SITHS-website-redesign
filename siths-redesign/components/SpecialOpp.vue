<template>
  <div>
    <h2 class="py-4">{{ type }}</h2>
    <div class="grid grid-cols-3 gap-4 py-2">
      <div v-for="item in resources"
        class="w-7/8 rounded-md border-[1px] border-white p-8 hover:border-gold transition-all duration-300" 
        @click="selected = true; selectedItem = item">
        <div>
          <h4 class="pb-2">{{ item.name }}</h4>
          <p class="text-sm">{{ item.note }}</p>
        </div>
      </div>
    </div>
    <PopUp v-if="selected" :item="selectedItem" @closeEvent="closePopup" class="absolute inset-0 flex items-center justify-center"/>
  </div>
</template>

<script setup>

defineProps({
  type: String,
  resources: Array
})

let selected = ref(false)
let selectedItem = ref({})

const closePopup = () => {
  selected.value = false
}

</script>