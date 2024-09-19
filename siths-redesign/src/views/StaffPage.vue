<template>
    <div class="h-fit mx-10">
        <h1 class="font-bold w-full flex items-center justify-center text-5xl my-10">Faculty and Staff</h1>
        <div v-for="category in categories" :key="category.value" class="mx-8">
            <div class="flex flex-row justify-center items-center">
                <!-- category title and seperators -->
                <div class="w-20 h-0.5 bg-white flex-grow"></div>
                <h2 class="text-3xl font-bold mx-2">{{ category.name }}</h2>
                <div class="w-20 h-0.5 bg-white flex-grow"></div>
            </div>
            <!-- staff component -->
            <div class="flex flex-row flex-wrap space-x-12 my-16 mx-10 justify-between">
                <div v-for="staffMember in sortByCategory(category)" :key="staffMember._id"
                    class="flex flex-row items-center">
                    <img :src="staffMember.imageUrl" alt=""
                        class="w-28 h-28 rounded-full object-cover mr-6 outline outline-white outline-2" />
                    <div class="flex flex-col justify-center">
                        <h2 class="text-2xl font-semibold mb-2">{{ staffMember.name }}</h2>
                        <p class="mb-2">{{ staffMember.role }}</p>
                        <div class="flex items-center">
                            <img src="../assets/icons/email.png" alt="" class="w-5 mr-2">
                            <span>
                                <a :href="'mailto:' + staffMember.email"
                                    class="text-white transition ease-in-out duration-300 hover:underline">
                                    {{ staffMember.email }}
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import sanityClient from '../client.js';

const staff = ref([]);
const categories = ref([
    { name: 'Administrators', value: 'administrators' },
    { name: 'Teachers', value: 'teachers' },
    { name: 'Other Employees', value: 'otherEmployees' },
]);

const fetchStaff = async () => {
    const query = `*[_type == "staff"]{
      _id,
      name,
      role,
      email,
      category,
      "imageUrl": image.asset->url
    }`;

    staff.value = await sanityClient.fetch(query);
};

function sortByCategory(category) {
    return staff.value.filter((staffMember) => staffMember.category === category.value);
}

onMounted(fetchStaff);
</script>

<style scoped></style>
