export const useWebsiteDataStore = defineStore('websiteData', () => {
  const fetchLoading = ref(false)

  const posts = ref([])
  const erlenweinPosts = ref([])
  const terrusaPosts = ref([])
  const schedules = ref([])
  const policies = ref([])
  const staff = ref([])
  const events = ref([])
  const policies = ref([])
  const subjects = ref([])
  const resources = ref([])
  const opportunities = ref([])

  async function fetchAllData() {
    fetchLoading.value = true
    const query = `{
      "yearlyinfo": *[_type == "yearlyinfo"]{
        _id,
        PostTitle,
        author,
        date,
        description,
        "imageUrl": image.asset->url
      },
      "erlenwein": *[_type == "erlenwein"]{
        _id,
        PostTitle,
        author,
        date,
        description,
        "imageUrl": image.asset->url
      },
      "subjects": *[_type == "subjects"],
      "policies": *[_type == "policies"],
      "terrusa": *[_type == "terrusa"]{
        _id,
        PostTitle,
        author,
        date,
        description,
        "imageUrl": image.asset->url
      },
      "schedules": *[_type == "schedules"],
      "policies": *[_type == "policies"],
      "staff": *[_type == "staff"]{
        _id,
        name,
        role,
        email,
        category,
        description,
        "imageUrl": image.asset->url
      },
      "events": *[_type == "calendar"]{
        _id,
        date,
        event,
        description,
      },
        "resources": *[_type == "resources"]{
        _id,
        name,
        resource,
        description,
        link,
      },
        "opportunities": *[_type == "opportunities"]{
        _id,
        name,
        opptype,
        note,
        description,
        link,
      },
    }`

    try {
      const { data } = await useSanityQuery(query)

      posts.value = data.value.yearlyinfo
      erlenweinPosts.value = data.value.erlenwein
      terrusaPosts.value = data.value.terrusa
      schedules.value = data.value.schedules
      staff.value = data.value.staff
      policies.value = data.value.policies
      events.value = data.value.events
      policies.value = data.value.policies
      subjects.value = data.value.subjects
      resources.value = data.value.resources
      opportunities.value = data.value.opportunities

      fetchLoading.value = false
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
  }

  onMounted(async () => {
    await nextTick()
    await fetchAllData()
  })

  return {
    posts,
    erlenweinPosts,
    terrusaPosts,
    policies,
    schedules,
    staff,
    events,
    policies,
    resources,
    subjects,
    opportunities,
    fetchLoading
  }
})
