<template>
  <h1 class="text-2xl md:text-3xl lg:text-4xl text-center mb-4">National Honor Society</h1>
  <div class="flex flex-col md:flex-row justify-center items-start px-4">
    <SubpageMenu :pages="subpageLinks" :active="'About'" class="absolute top-48 left-8 mb-4 md:mb-0 md:mr-8" />
    <div class="flex items-start justify-center flex-col items-center md:w-5/6">
      <div class="bg-black/40 rounded-lg p-8 my-4 w-2/3 z-20">
        <p>
          The mission of the SITHS chapter of the National Honor Society (NHS) is to acknowledge, celebrate, and promote
          the ongoing academic and personal accomplishments of the student body throughout their entire high school
          experience.
        </p> <br />
        <p>
          The pillar criteria that the NHS upholds underscores what the highly competitive colleges and universities are
          looking for in a gifted and talented student, and reflects relevant 21st century learning skills which enable
          students to be college and career ready. Recognition by the NHS is reserved for candidates who have
          exemplified the ideals of the society. While we know that not every student will be recognized, we sincerely
          hope that all students work towards these goals.
        </p> <br />
        <p>
          Membership into the SITHS chapter of the NHS is based upon a student’s academic and personal achievement in
          each of the cornerstones upon which the organization is founded — Scholarship, Leadership, Service, and
          Character. The documents below outline the eligibility indicators, as set by national standards from the NHS
          and the Staten Island Tech Faculty Council.
        </p> <br />
        <p>
          The corresponding criteria outlines how candidates will be evaluated for eligibility. A student must exemplify
          all four pillars in order to be inducted into NHS. Students are evaluated for induction during their Junior
          (11th) year, but can also be evaluated in their Senior (12th) year should they need more time to meet
          eligibility requirements. Students can also be removed from the NHS, after Induction, if they do not maintain
          the eligibility requirements.
        </p> <br />
        <p>
          Each class (freshmen, sophomores, juniors, and seniors) has an NHS Google Classroom. This is where you will
          access everything regarding your NHS requirements and profile. You should check your NHS Google Classroom on a
          regular basis in order to remain up-to-date on opportunities and expectations.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { PortableText } from '@portabletext/vue';
const websiteData = useWebsiteDataStore()
const subpageLinks = [
  {
    name: 'About',
    path: '/nhs'
  },
  {
    name: "Contacts",
    path: "/nhs/nhs-faculty",
  }
];

const myPortableTextComponents = {
  types: {
    image: ({ value }) => h('img', { src: value.imageUrl }),
    callToAction: ({ value, isInline }, { slots }) =>
      isInline
        ? h('a', { href: value.url }, value.text)
        : h('div', { class: 'callToAction' }, value.text),
  },

  list: {
    // Ex. 1: customizing common list types
    bullet: (_, { slots }) => h('li', { class: 'list-disc list-inside' }, slots.default?.()),
    number: (_, { slots }) => h('ol', { class: 'list-decimal list-inside' }, slots.default?.()),

    // Ex. 2: rendering custom lists
    checkmarks: (_, { slots }) => h('ol', { class: 'm-auto text-lg' }, slots.default?.()),
  },

  marks: {
    em: (_, { slots }) => h('em', { class: 'text-red-600 font-semibold' }, slots.default?.()),
    link: ({ value }, { slots }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return h('a', { class: 'text-blue-500 underline font-semibold', href: value.href, rel }, slots.default?.());
    },
  },
};

</script>