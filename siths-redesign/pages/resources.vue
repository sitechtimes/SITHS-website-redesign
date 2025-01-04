<template>
    <div class="min-h-screen w-full px-10 flex flex-col">
        <h1 class="p-6 text-center text-5xl font-semibold">Resources</h1>
        <div class="flex flex-row items-start">
            <SubpageMenu :page="resourcePages" v-model="selectedChoice" />
            <div class="grid grid-cols-3 gap-x-6">
                <ResourcesCard :resources="filteredResources" />
            </div>
        </div>
    </div>
</template>

<script setup>
const websiteData = useWebsiteDataStore();

const resourcePages = [
    { name: 'Student and Staff Resources', value: ['student', 'staff'] },
    { name: 'Student Resources', value: ['student'] },
    { name: 'Staff Resources', value: ['staff'] },
];

const selectedChoice = ref(['student', 'staff']); 

const filteredResources = computed(() => {
    const categories = selectedChoice.value;

    const filtered = websiteData.resources.filter((el) =>
        categories.some(category => el.category.includes(category))
    );

    return filtered;
});
</script>
