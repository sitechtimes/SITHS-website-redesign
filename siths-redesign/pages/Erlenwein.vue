<template>
  <StaffProfile staff-name="Mark Erlenwein" />
  <InfoDropdown :posts="erlenweinPosts" />
</template>

<script setup>
const erlenweinPosts = ref([])

//fetch yearlyinfo from Sanity CMS
const fetchPosts = async () => {
  const query = `*[_type == "erlenwein"]{
  _id,
  PostTitle,
  author,
  date,
  description,
  "imageUrl": image.asset->url
  }`
  const { data } = await useSanityQuery(query)
  //make sure we have data to display
  erlenweinPosts.value = data.value
}

await fetchPosts()
</script>