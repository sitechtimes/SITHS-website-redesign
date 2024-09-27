<template>
    <div class="h-fit mx-4 lg:mx-10">
        <h1 class="font-bold w-full flex items-center justify-center text-center text-5xl my-10">Faculty and Staff</h1>
        <div v-for="category in categories" :key="category.value" class="lg:mx-8">
            <div class="flex flex-row justify-center items-center">
                <!-- category title and separators -->
                <div class="w-20 h-0.5 bg-white flex-grow"></div>
                <h2 class="text-3xl font-bold mx-2">{{ category.name }}</h2>
                <div class="w-20 h-0.5 bg-white flex-grow"></div>
            </div>
            <!-- staff component -->
            <div class="flex flex-row flex-wrap gap-4 lg:gap-12 my-16 lg:mx-10 justify-between w-full lg:w-auto">
                <div v-for="staffMember in sortByCategory(category)" :key="staffMember._id"
                    class="flex flex-row items-center p-2 gap-4 lg:gap-6">
                    <div class="w-28 lg:w-28 lg:h-28">
                        <img :src="staffMember.imageUrl" alt="staff image"
                            class="w-full rounded-full object-cover outline outline-white outline-2" />
                    </div>
                    <div class="flex flex-col justify-center gap-1 lg:gap-2">
                        <h2 class="lg:text-2xl text-xl font-semibold">{{ staffMember.name }}</h2>
                        <p>{{ staffMember.role }}</p>
                        <div class="flex items-center">
                            <img src="../assets/icons/email.png" alt="email icon" class="w-5 mr-2">
                            <span>
                                <a :href="'mailto:' + staffMember.email"
                                    class="block text-white transition ease-in-out duration-300 hover:underline break-words text-sm lg:text-lg">
                                    {{ staffMember.email }}
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
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
