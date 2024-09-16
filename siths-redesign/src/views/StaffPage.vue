<template>
    <div class="h-screen">
        <div class="flex flex-row flex-wrap space-x-12">
            <div v-for="staffMember in staff" :key="staffMember._id" class="flex flex-row items-center">
                <img :src="staffMember.imageUrl" alt=""
                    class="w-28 h-28 rounded-full object-cover mr-4 outline outline-white outline-2" />
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
</template>

<script setup>
import { ref, onMounted } from 'vue';
import sanityClient from '../client.js';

const staff = ref([]);

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

onMounted(fetchStaff);
</script>

<style scoped></style>