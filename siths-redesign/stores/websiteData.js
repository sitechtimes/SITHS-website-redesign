import sanityClient from '@sanity/client'
export const useWebsiteDataStore = defineStore('websiteData', () => {
  const client = sanityClient({
    projectId: 'cb6mdrtg', // your project ID
    dataset: 'website-data', // your dataset
    useCdn: false, // false if you want fresh data
    apiVersion: '2024-09-16' // use a date string
  })

  const fetchLoading = ref(false)

  const posts = ref([])
  const erlenweinPosts = ref([])
  const terrusaPosts = ref([])
  const schedules = ref([])
  const staff = ref([])
  const events = ref([])
  const resources = ref([])
  const opportunities = ref([])
  const summerHomework = ref([])
  const partnerships = ref([])
  const directLinks = ref([])
  const athletics = ref([])
  const videos = ref([])

  async function fetchAllData() {
    fetchLoading.value = true

    try {
      const data = await client.fetch(`{
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
      "terrusa": *[_type == "terrusa"]{
        _id,
        PostTitle,
        author,
        date,
        description,
        "imageUrl": image.asset->url
      },
      "schedules": *[_type == "schedules"],
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
        description
      },
      "resources": *[_type == "resources"]{
        _id,
        name,
        resource,
        description,
        link,
        category
      },
      "opportunities": *[_type == "opportunities"]{
        _id,
        name,
        opptype,
        note,
        description,
        link
      },
      "summerHomework": *[_type == "summerHomework"]{
        _id,
        title,
        homePage,
        ninth,
        tenth,
        eleventh,
        twelfth
      },
      "partnerships": *[_type == "partnerships"]{
        _id,
        name,
        description,
        image
      },
      "directLinks": *[_type == "directLinks"]{
        _id,
        title,
        main[]{
          title,
          link
        },
        schoolInformation[]{
          title,
          link
        },
        student[]{
          title,
          link
        },
        clubsActivities[]{
          title,
          link
        },
        alumni[]{
          title,
          link
        },
        contactUs[]{
          title,
          link
        }
      },
      "athletics": *[_type == "athletics"]{
        _id,
        name,
        description,
        contacts
      },
      "video": *[_type == "video"]{
         _id,
        title,
        "SvideoFileUrl": SvideoFile.asset->url,
        "SvideoUrl": SyoutubeUrl,
        "SthumbnailUrl": Sthumbnail.asset->url,
        "MvideoFileUrl": MvideoFile.asset->url,
        "MvideoUrl": MyoutubeUrl,
        "MthumbnailUrl": Mthumbnail.asset->url,
        "LvideoFileUrl": LvideoFile.asset->url,
        "LvideoUrl": LyoutubeUrl,
        "LthumbnailUrl": Lthumbnail.asset->url
      }
    }`)

      if (!data) {
        console.error('Sanity query returned no data:', error)
        fetchLoading.value = false
        return
      }
      directLinks.value = data.directLinks
      posts.value = data.yearlyinfo
      erlenweinPosts.value = data.erlenwein
      terrusaPosts.value = data.terrusa
      schedules.value = data.schedules
      staff.value = data.staff
      events.value = data.events
      resources.value = data.resources
      opportunities.value = data.opportunities
      summerHomework.value = data.summerHomework
      partnerships.value = data.partnerships
      athletics.value = data.athletics
      videos.value = data.video.map((video) => {
        const links = ['S', 'M', 'L'].reduce((acc, size) => {
          acc[`${size}link`] = video[`${size}videoFileUrl`] || video[`${size}videoUrl`] || ''
          acc[`${size}thumbnail`] = video[`${size}thumbnailUrl`] || ''
          return acc
        }, {})
        return links
      })
      fetchLoading.value = false
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
  }

  onMounted(async () => {
    await fetchAllData()
  })
  console.log(events.value)
  return {
    directLinks,
    erlenweinPosts,
    events,
    fetchAllData,
    fetchLoading,
    opportunities,
    partnerships,
    posts,
    resources,
    schedules,
    staff,
    summerHomework,
    terrusaPosts,
    athletics,
    videos
  }
})
