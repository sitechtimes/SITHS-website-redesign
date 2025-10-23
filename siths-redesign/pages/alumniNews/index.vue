<template>
  <h1 class="p-6 text-center text-4xl font-semibold">ALUMNI NEWS</h1>
  <InfoDropdown :posts="alumniNewsmod" > 

  </InfoDropdown>
</template>

<script setup>
const websiteData = useWebsiteDataStore()

const alumniNewsmod = websiteData.alumniNews //computed function to map field names to those used in component

//postTitle, imageUrl, description, map to fields

</script>