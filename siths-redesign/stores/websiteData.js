import { client } from "~/client";

export const useWebsiteDataStore = defineStore("websiteData", () => {
  const fetchLoading = ref(false);
  const posts = ref([]);
  const erlenweinPosts = ref([]);
  const terrusaPosts = ref([]);
  const schedules = ref([]);
  const staff = ref([]);
  const events = ref([]);
  const resources = ref([]);
  const opportunities = ref([]);
  const summerHomework = ref([]);
  const partnerships = ref([]);
  const directLinks = ref([]);
  const athletics = ref([]);
  const alumniNews = ref([]);
  const alumOpportunities = ref([]);
  const transcript = ref([]);

  async function fetchAllData() {
    fetchLoading.value = true;
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
  "alumniNews": *[_type == "alumniNews"]{
    _id,
    thumbnail,
    PostTitle,
    subtitle,
    date,
    description,
    photos
  },
  "alumOpportunities": *[_type == "alumOpportunities"]{
    _id,
    thumbnail,
    title,
    subtitle,
    date,
    description,
    photos
  },
  "transcript": *[_type == "transcript"]{
    _id,
    title,
    instructions
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
  }
}`;


    try {

      const data = await client.fetch(query);

      directLinks.value = data.directLinks;
      posts.value = data.yearlyinfo;
      erlenweinPosts.value = data.erlenwein;
      terrusaPosts.value = data.terrusa;
      schedules.value = data.schedules;
      staff.value = data.staff;
      events.value = data.events;
      resources.value = data.resources;
      opportunities.value = data.opportunities;
      summerHomework.value = data.summerHomework;
      partnerships.value = data.partnerships;
      athletics.value = data.athletics;
      alumOpportunities.value = data.alumOpportunities;
      alumniNews.value = data.alumniNews;
      transcript.value = data.transcript;

      fetchLoading.value = false;
      console.log(fetchLoading);
      console.log(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  onMounted(async () => {
    await nextTick();
    await fetchAllData();
  });

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
    alumniNews,
    alumOpportunities,
    transcript,
  };
});


  
