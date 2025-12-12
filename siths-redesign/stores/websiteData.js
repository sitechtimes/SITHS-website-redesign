export const useWebsiteDataStore = defineStore('websiteData', () => {
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
  const athletics = ref([]);
  const cdcNews = ref([]);
  const videos = ref([])

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
        description,
      },
      "resources": *[_type == "resources"]{
        _id,
        name,
        resource,
        description,
        link,
        category,
      },
      "opportunities": *[_type == "opportunities"]{
        _id,
        name,
        opptype,
        note,
        description,
        link,
      },
      "summerHomework": *[_type == "summerHomework"]{
        _id,
        title,
        homePage,
        ninth,
        tenth,
        eleventh,
        twelfth,
      },
      "partnerships": *[_type == "partnerships"]{
        _id,
        name,
        description,
        image,
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
        contacts,
      },
      "cdcNews": *[_type == "cdcNews"]{
        _id,
        headline,
        description,
        link,
        "imageUrl": image.asset->url
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
    }`

    try {
      const { data } = await useSanityQuery(query)

      directLinks.value = data.value.directLinks
      posts.value = data.value.yearlyinfo
      erlenweinPosts.value = data.value.erlenwein
      terrusaPosts.value = data.value.terrusa
      schedules.value = data.value.schedules
      staff.value = data.value.staff
      events.value = data.value.events
      resources.value = data.value.resources
      opportunities.value = data.value.opportunities
      summerHomework.value = data.value.summerHomework
      partnerships.value = data.value.partnerships
      athletics.value = data.value.athletics
      cdcNews.value = data.value.cdcNews
      videos.value = data.value.video.map((video) => {
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
    await nextTick()
    await fetchAllData()
  })

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
    cdcNews,
    videos
  };
});
