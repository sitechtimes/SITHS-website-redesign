<template>
  <h1 class="text-center">2024-2025 School Year Info</h1>
  <StaffProfile staff-name="Mark Erlenwein" />
  <InfoDropdown :posts="posts" />
</template>

<script setup>
const posts = ref([])

//fetch yearlyinfo from Sanity CMS
const fetchPosts = async () => {
  const query = `*[_type == "yearlyinfo"]{
  _id,
  PostTitle,
  author,
  date,
  description,
  "imageUrl": image.asset->url
  }`
  const { data } = await useSanityQuery(query)
  posts.value = data.value
}

await fetchPosts()
</script>
