<template>
    <h1>Career and Technical Education</h1>
    <div class="flex flex-row">
        <SubpageMenu :pages="cteLinks" :active="'Makerspace'"/>
        <div class="w-5/6"></div>
    </div>
</template>

<script setup>
import SubpageMenu from '~/components/SubpageMenu.vue';
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