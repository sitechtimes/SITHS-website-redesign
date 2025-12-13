<template>
  <h1 class="mb-4 text-center text-2xl md:text-3xl lg:text-4xl">Athletic Forms</h1>
  <div class="flex flex-col items-start justify-center px-4 md:flex-row">
    <SubpageMenu
      :pages="subpageLinks"
      :active="'Athletic Forms'"
      class="absolute left-8 top-48 mb-4 md:mb-0 md:mr-8"
    />
    <div
      class="z-20 my-4 flex w-1/2 flex-col items-center justify-center rounded-lg bg-black/40 p-8"
    >
      <PortableText
        v-for="item in websiteData.athletics"
        :value="item.forms"
        :components="myPortableTextComponents"
      />
    </div>

    <img
      class="absolute right-28 top-40 z-0 h-1/2 brightness-125"
      src="@/assets/imgs/baller.png"
      alt=""
    />
    <img
      class="absolute bottom-36 left-40 z-0 h-1/3 brightness-125"
      src="@/assets/imgs/ballerina.png"
      alt=""
    />
  </div>
</template>

<script setup>
import { PortableText } from '@portabletext/vue'
const websiteData = useWebsiteDataStore()
const subpageLinks = [
  {
    name: 'About',
    path: '/athletics'
  },
  {
    name: 'Contacts',
    path: '/athletics/contacts'
  },
  {
    name: 'Athletic Forms',
    path: '/athletics/forms'
  },
  {
    name: 'Teams',
    path: 'https://www.psal.org/psalsports/school/psal_schoolprofile.asp?cschool=31511'
  },
  {
    name: 'Schedule ',
    path: 'https://www.psal.org/profiles/school-profile.aspx#31511'
  }
]
const myPortableTextComponents = {
  types: {
    image: ({ value }) => h('img', { src: value.imageUrl }),
    callToAction: ({ value, isInline }, { slots }) =>
      isInline
        ? h('a', { href: value.url }, value.text)
        : h('div', { class: 'callToAction' }, value.text)
  },

  list: {
    // Ex. 1: customizing common list types
    bullet: (_, { slots }) => h('li', { class: 'list-disc list-inside' }, slots.default?.()),
    number: (_, { slots }) => h('ol', { class: 'list-decimal list-inside' }, slots.default?.()),

    // Ex. 2: rendering custom lists
    checkmarks: (_, { slots }) => h('ol', { class: 'm-auto text-lg' }, slots.default?.())
  },

  marks: {
    em: (_, { slots }) => h('em', { class: 'text-red-600 font-semibold' }, slots.default?.()),
    link: ({ value }, { slots }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return h(
        'a',
        { class: 'text-blue-500 underline font-semibold', href: value.href, rel },
        slots.default?.()
      )
    }
  }
}
</script>
