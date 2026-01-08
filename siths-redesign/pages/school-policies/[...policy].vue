<template>
  <div v-if="policy" class="flex flex-col items-start justify-center px-4 md:flex-row">
    <SubpageMenu :pages="subpageLinks" :active="policy?.name" class="left-8 top-48 z-20" />
    <div class="z-20 flex w-full flex-col text-center md:mx-auto md:w-1/2">
      <h1>School Policies</h1>
      <h2>{{ policy?.name }}</h2>
      <div
        class="z-20 my-4 flex w-full flex-col items-center justify-center rounded-lg bg-black/40 p-8"
      >
        <PortableText :value="policy?.description" :components="myPortableTextComponents" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { PortableText } from '@portabletext/vue'
const websiteData = useWebsiteDataStore()

const router = useRouter()
const route = useRoute()
const policy = computed(() => {
  return websiteData.policies.find(
    (policy) => !policy.index && slugify(policy.name) === route.params.policy[0]
  )
})

watch([() => websiteData.fetchLoading, policy], ([loading, value]) => {
  if (!loading && !value) {
    router.replace('/error')
  }
})

const subpageLinks = computed(() => {
  if (!websiteData.policies) return []

  return [...websiteData.policies]
    .sort((a, b) => {
      return (b.index === true) - (a.index === true)
    })
    .map((policy) => ({
      name: policy.name,
      path: policy.index ? '/school-policies' : `/school-policies/${slugify(policy.name)}`
    }))
})
</script>
