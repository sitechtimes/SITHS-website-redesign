<template>
    <h1>Career and Technical Education</h1>
    <div class="static flex flex-col justify-center items-center">
        <SubpageMenu :pages="cteLinks" :active="'Partnerships'" class="absolute left-8 top-40" />
        <div class="flex items-center justify-center flex-col w-5/6">
            <h2 class="mb-8">Partnerships</h2>
            <div class="w-1/2">
                <InfoDisplay type="Partnerships" :resources="websiteData.partnerships" :isBlock="true"/>
            </div>
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