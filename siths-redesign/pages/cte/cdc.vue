<template>
    <h1>Career and Technical Education</h1>
    <div class="flex flex-row">
        <SubpageMenu :pages="cteLinks" :active="'CDC in the News'"/>
        <div class="m-2 mx-4 w-5/6">
            <DaisyUICollapse/>
        </div>
    </div>
</template>

<script setup>
import SubpageMenu from '~/components/SubpageMenu.vue';
import DaisyUICollapse from '~/components/DaisyUICollapse.vue';
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