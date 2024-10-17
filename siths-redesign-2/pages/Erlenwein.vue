<template>
    <StaffProfile staff-name="Mark Erlenwein"/>
    <InfoDropdown :posts="ErlenweinPosts"/>
</template>

<script setup>
const ErlenweinPosts = ref([])

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
  try {
    const { data, refresh } = useSanityQuery(query)
    if (data.length > 0) {
      //make sure we have data to display
      ErlenweinPosts.value = await data
    } else {
      console.log('No posts found')
    }
  } catch (error) {
    console.error('Error fetching posts:', error)
  }
}

onMounted(fetchPosts)
</script>