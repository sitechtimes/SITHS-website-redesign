<template>
    <div v-for="(resource, index) in resources" :key="index"
    class="flex flex-col justify-between w-full m-2 bg-gray border-[1px] border-white hover:border-gold rounded-md p-4 md:p-6 lg:p-8 transition-all duration-300 group">
        <div>
            <h3 class="pb-3 font-bold">{{ resource.name }}</h3>
            <p class="text-pretty pb-3 text-sm md:text-lg">{{ resource.description }}</p>
        </div>
        <a :href="resource.link"
            class="text-lg text-white mt-4 bg-left-bottom bg-gradient-to-r from-gold to-gold bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Link
            to
            resource</a>
    </div>
</template>

<script setup>
defineProps({
    resources: Array
})

</script>
