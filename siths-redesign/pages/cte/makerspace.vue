<template>
    <h1 class="mb-4 text-center text-2xl md:text-3xl lg:text-4xl">Career and Technical Education</h1>
    <div class="mb-6 flex flex-col items-start justify-center px-4 md:flex-row">
        <SubpageMenu
            :pages="cteLinks"
            :active="'Makerspace'"
            class="left-8 top-40 mb-4 block lg:absolute"
        />
        <div class="flex w-full flex-col items-center justify-center">
            <h2 class="mb-4 text-xl md:mb-8 md:text-2xl">Makerspace</h2>
            <MakerspaceGrid :articles="websiteData.makerspace" />
        </div>
    </div>
</template>

<script setup>
const websiteData = useWebsiteDataStore()

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