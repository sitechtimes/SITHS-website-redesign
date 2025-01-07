<template>
    <h1 class="text-2xl md:text-3xl lg:text-4xl text-center mb-4">Career and Technical Education</h1>
    <div class="flex flex-col md:flex-row justify-center items-start px-4">
        <SubpageMenu :pages="cteLinks" :active="'Makerspace'" class="w-full md:w-auto mb-4 md:mb-0 md:mr-8"/>
        <div class="flex items-center justify-center flex-col w-full md:w-5/6">
            <h2 class="text-xl md:text-2xl mb-4 md:mb-8">Makerspace</h2>
            <div class="w-full md:w-3/4 lg:w-1/2">
            </div>

        </div>
    </div>
</template>

<script setup>
const cteLinks = [
    {
        name: 'About',
        path: '/cte'
    },
    {
        name: "CDC in the News",
        path: "/cte/cdc",
    },
    {
        name: "Makerspace",
        path: "/cte/makerspace",
    },
    {
        name: "Certifications",
        path: "/cte/certifications",
    },
    {
        name: "Partnerships",
        path: "/cte/partnerships",
    }
];
</script>