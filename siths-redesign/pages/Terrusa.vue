<template>
    <StaffProfile staff-name="Thomas Terrusa"/>
    <InfoDropdown :posts="TerrusaPosts"/>
</template>

<script setup>
const TerrusaPosts = ref([])

//fetch terrusa from Sanity CMS
const fetchPosts = async () => {
  const query = `*[_type == "terrusa"]{
  _id,
  PostTitle,
  author,
  date,
  description,
  "imageUrl": image.asset->url
  }`
  try {
    const { data, refresh } = await useSanityQuery(query)
    if (data.length > 0) {
      //make sure we have data to display
      TerrusaPosts.value = data
    } else {
      console.log('No posts found')
    }
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}
await fetchPosts()
</script>