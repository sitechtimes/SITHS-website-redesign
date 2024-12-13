<template>
    <h1>Career and Technical Education</h1>
    <div class="flex flex-row">
        <SubpageMenu :pages="cteLinks" :active="'Partnerships'" />
        <div class="w-5/6">
            <h2 class="mb-8">Partnerships</h2>
            <PartnerDetails type="Partnerships" :resources="websiteData.partnerships"/>
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