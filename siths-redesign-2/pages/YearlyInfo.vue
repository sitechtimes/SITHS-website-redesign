<template>
    <h1 class="text-center">2024-2025 School Year Info</h1>
    <StaffProfile staff-name="Mark Erlenwein"/>
    <InfoDropdown :posts="posts"/>
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
  try {
    const { data, refresh } = useSanityQuery(query)
    if (data.length > 0) {
      //make sure we have data to display
      posts.value = data
      console.log('works')
    } else {
      console.log('No posts found')
    }
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}
onMounted(fetchPosts)

</script>
