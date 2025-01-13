<template>
    <div class="min-h-screen w-full px-4 md:px-10 flex flex-col">
        <h1 class="p-6 text-center text-5xl font-semibold">Resources</h1>
        <div class="flex flex-row justify-center space-x-6 mb-6">
            <div class="flex-row w-full flex justify-center gap-4">
                <label class="cursor-pointer relative text-xl"
                    :class="{ 'underline underline-offset-2 font-bold transition-all duration-300': selectedChoice === 'student,staff' }">
                    <input type="radio" v-model="selectedChoice" value="student,staff" class="hidden" />
                    <p>All Resources</p>
                </label>

                <label class="cursor-pointer relative text-xl"
                    :class="{ 'underline underline-offset-2 font-bold transition-all duration-300': selectedChoice === 'student' }">
                    <input type="radio" v-model="selectedChoice" value="student" class="hidden" />
                    <p>Student Resources</p>
                </label>

                <label class="cursor-pointer relative text-xl"
                    :class="{ 'underline underline-offset-2 font-bold transition-all duration-300': selectedChoice === 'staff' }">
                    <input type="radio" v-model="selectedChoice" value="staff" class="hidden" />
                    <p>Staff Resources</p>
                </label>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6">
            <ResourcesCard :resources="filteredResources" />
        </div>
    </div>
</template>

<script setup>
const websiteData = useWebsiteDataStore();

const selectedChoice = ref('student,staff');

const filteredResources = computed(() => {
    const categories = selectedChoice.value.split(',');

    return websiteData.resources
        .filter((el) =>
            categories.some((category) => el.category.includes(category)) //'some' checks if at least one element in the array passes the test
        )
        .sort((a, b) => a.name.localeCompare(b.name));
});

</script>
