<!-- for athletics only -->
<template>
    <div class="mb-20">
        <h3>{{ title }}</h3>
        <div class="flex items-start justify-center flex-col overflow-x-scroll">
            <div class="flex flex-nowrap">
                <div v-for="contact in contacts" class="relative bg-white/20 rounded-lg p-6 m-4 ml-0 w-96">
                    <div class="py-2">
                        <h4 class="my-1">{{ contact.sport }}</h4>
                        <p v-for="item in contact.type"
                            class="inline bg-black/45 rounded-md px-2 py-1 my-2 text-gold text-sm">{{
                                item.toUpperCase() }}</p>
                    </div>
                    <p class="absolute top-1 right-1 bg-black/45 rounded-md px-2 p-1 text-md text-gold"> {{
                        contact.season.toUpperCase() }}
                    </p>
                    <div class="">
                        <p>
                            {{ contact.coach }}
                            <br>
                            {{ contact.email }}
                        </p>
                    </div>
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