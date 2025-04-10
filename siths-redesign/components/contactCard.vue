<!-- for athletics only -->
<template>
    <div class="flex flex-col justify-center w-full">
        <h3>{{ title }}</h3>
        <div v-for="contact in contacts" class="relative bg-white/20 rounded-lg p-6 my-4 ml-0">
            <p class="absolute top-1 right-1 bg-black/45 rounded-md px-2 p-1 text-md text-gold">
                {{ contact.season.toUpperCase() }}
            </p>
            <div class="grid lg:flex flex-row items-center">
                <div class="lg:w-1/3">
                    <h4 class="my-1">{{ contact.sport }}</h4>
                    <p v-for="item in contact.type"
                        class="inline bg-black/45 rounded-md px-2 py-1 my-2 text-gold text-sm">
                        {{ item.toUpperCase() }}</p>
                </div>
                <div class="lg:w-1/3 my-1">
                    <p>
                        {{ contact.coach }}
                    </p>
                </div>
                <div class="lg:w-1/3 my-1">
                    <p>
                        {{ contact.email }}
                    </p>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
defineProps({
    title: String,
    contacts: Array
})
</script>