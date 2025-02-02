<template>
    <div v-for="(resource, index) in resources" :key="index"
        class="flex flex-col justify-between w-full hover:border-gold rounded-md m-8 p-4 transition-all duration-300 group">
        <div>
            <a :href="resource.link" class="group" target="_blank">
                <h4
                    class="flex justify-between pb-3 font-bold bg-left-bottom bg-gradient-to-r from-gold to-gold bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    {{ resource.name }}
                    <img src="../assets/icons/up-right-arrow.png" alt="" class="inline invert h-6">
                </h4>
            </a>
            <p class="text-pretty py-2 text-lg opacity-0 group-hover:opacity-100 transition-all duration-1000">{{ resource.description }}</p>
        </div>

    </div>
</template>

<script setup>
defineProps({
    resources: Array
})

</script>
