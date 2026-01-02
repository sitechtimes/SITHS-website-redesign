export const myPortableTextComponents = {
  types: {
    image: ({ value }) =>
      h('img', {
        src: urlFor(value).width(800).auto('format').url(),
        alt: value.alt || '',
        loading: 'lazy',
        class: 'my-6 rounded-lg'
      }),

    callToAction: ({ value, isInline }, { slots }) =>
      isInline
        ? h('a', { href: value.url }, value.text)
        : h('div', { class: 'callToAction' }, value.text)
  },

  list: {
    // Ex. 1: customizing common list types
    bullet: (_, { slots }) => h('ul', { class: 'list-disc list-inside' }, slots.default?.()),
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
  },

  block: {
    normal: (_, { slots }) => h('p', { class: 'text-white text-lg mt-2' }, slots.default?.()),
    h1: (_, { slots }) =>
      h('h1', { class: 'text-2xl text-left font-bold text-white p-0 mt-6' }, slots.default?.()),
    h2: (_, { slots }) =>
      h('h2', { class: 'text-lg font-semibold text-white mt-4' }, slots.default?.())
  }
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}
