<template>
    <div v-for="(resource, index) in resources" :key="index"
        class="flex flex-col justify-between w-full hover:border-gold rounded-md m-8 p-4 transition-all duration-300 group">
        <div>
            <a :href="resource.link" class="group" target="_blank">
                <h4
                    class="flex justify-between pb-3 font-bold border-b-[1.5px] border-gold">
                    {{ resource.name }}
                    <img src="../assets/icons/up-right-arrow.png" alt="" class="inline invert h-6">
                </h4>
            </a>
            <p class="text-pretty py-2 text-lg  transition-all duration-1000">{{ resource.description }}</p>
        </div>

    </div>
</template>

<script setup>
defineProps({
    resources: Array
})

</script>
