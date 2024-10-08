<template>
  <div class="h-fit mx-10">
    <h1 class="font-bold w-full flex items-center justify-center text-5xl my-10">Faculty and Staff</h1>
    <div class="w-full flex flex-row justify-center">
    <SearchBar class="w-2/3 mb-8" type="text" v-model="searchValue" placeholder="Search Staff" />
</div>
    <div v-for="category in categories" :key="category.value" class="mx-8">
      <div v-if="searchValue === ''" class="flex flex-row justify-center items-center">
        <div class="w-20 h-0.5 bg-white flex-grow"></div>
        <h2 class="text-3xl font-bold mx-2">{{ category.name }}</h2>
        <div class="w-20 h-0.5 bg-white flex-grow"></div>
      </div>
      <div class="flex flex-row flex-wrap space-x-12 my-16 mx-10 justify-between">
        <div v-for="staffMember in filteredStaff(category)" :key="staffMember._id" class="flex flex-row items-center">
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
import SearchBar from '@/components/SearchBar.vue';

const staff = ref([]);
const categories = ref([
  { name: 'Administrators', value: 'administrators' },
  { name: 'Teachers', value: 'teachers' },
  { name: 'Other Employees', value: 'otherEmployees' },
]);

const searchValue = ref('');

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

function filteredStaff(category) {
    const search = searchValue.value.toLowerCase();
    return staff.value
      .filter((staffMember) => staffMember.category === category.value)
      .filter((staffMember) => {
        return (
          staffMember.name.toLowerCase().includes(search) ||
          staffMember.email.toLowerCase().includes(search) ||
          staffMember.role.toLowerCase().includes(search)
        );
      });
  }

onMounted(fetchStaff);
</script>
