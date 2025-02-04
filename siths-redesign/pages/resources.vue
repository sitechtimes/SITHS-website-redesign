<template>
    <div class="w-full px-10 flex flex-col justify-center">
        <h1 class="p-6 text-center text-5xl font-semibold">Resources</h1>
        <div class="flex flex-row justify-center space-x-4 md:mb-6">
            <div class="flex-col md:flex-row w-full flex justify-between">
                <div class="bg-black p-2 rounded-3xl">
                    <p class="text-md md:text-xl px-2 mr-64 opacity-90">Search</p>
                </div>
                <div class="flex justify-around bg-black p-2 rounded-3xl mx-20 my-2 md:m-0">
                    <label class="cursor-pointer relative text-md md:text-xl px-2 opacity-90"
                        :class="{ 'underline underline-offset-2 font-bold transition-all duration-300': selectedChoice === 'student,staff' }">
                        <input type="radio" v-model="selectedChoice" value="student,staff" class="hidden" />
                        <p>All</p>
                    </label>

                    <label class="cursor-pointer relative text-md px-2 opacity-90"
                        :class="{ 'underline underline-offset-2 font-bold transition-all duration-300': selectedChoice === 'student' }">
                        <input type="radio" v-model="selectedChoice" value="student" class="hidden" />
                        <p>Student</p>
                    </label>

                    <label class="cursor-pointer relative text-md px-2 opacity-90"
                        :class="{ 'underline underline-offset-2 font-bold transition-all duration-300': selectedChoice === 'staff' }">
                        <input type="radio" v-model="selectedChoice" value="staff" class="hidden" />
                        <p>Staff</p>
                    </label>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-x-8">
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
