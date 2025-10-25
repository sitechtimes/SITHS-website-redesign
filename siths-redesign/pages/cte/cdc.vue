<template>
    <h1 class="text-2xl md:text-3xl lg:text-4xl text-center mb-4">Career and Technical Education</h1>
    <div class="flex flex-col md:flex-row justify-center items-start px-4">
        <SubpageMenu :pages="cteLinks" :active="'CDC in the News'" class="block mb-4 lg:absolute left-8 top-40"/>
        <div class="flex items-center justify-center flex-col w-full">
            <h2 class="text-xl md:text-2xl mb-4 md:mb-8">CDC in the News</h2>
            <NewsArticleGrid :articles="websiteData.cdcNews"/>
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