import {defineType} from 'sanity'

export const video = defineType({
  name: 'video',
  title: 'Videos for Gears Components',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'Sthumbnail',
      title: 'Small Gear Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'SvideoFile',
      title: 'Small Gear MP4 File',
      type: 'file',
      options: {accept: 'video/mp4'},
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const url = context.parent?.SyoutubeUrl
          if ((!value && !url) || (value && url)) {
            return 'Please provide either an MP4 file or a YouTube URL, but not both, for Small Gear.'
          }
          return true
        }),
    },
    {
      name: 'SyoutubeUrl',
      title: 'Small Gear YouTube URL',
      type: 'url',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const file = context.parent?.SvideoFile
          if ((!value && !file) || (value && file)) {
            return 'Please provide either an MP4 file or a YouTube URL, but not both, for Small Gear.'
          }
          return true
        }),
    },

    {
      name: 'Mthumbnail',
      title: 'Medium Gear Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'MvideoFile',
      title: 'Medium Gear MP4 File',
      type: 'file',
      options: {accept: 'video/mp4'},
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const url = context.parent?.MyoutubeUrl
          if ((!value && !url) || (value && url)) {
            return 'Please provide either an MP4 file or a YouTube URL, but not both, for Medium Gear.'
          }
          return true
        }),
    },
    {
      name: 'MyoutubeUrl',
      title: 'Medium Gear YouTube URL',
      type: 'url',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const file = context.parent?.MvideoFile
          if ((!value && !file) || (value && file)) {
            return 'Please provide either an MP4 file or a YouTube URL, but not both, for Medium Gear.'
          }
          return true
        }),
    },
    {
      name: 'Lthumbnail',
      title: 'Large Gear Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'LvideoFile',
      title: 'Large Gear MP4 File',
      type: 'file',
      options: {accept: 'video/mp4'},
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const url = context.parent?.LyoutubeUrl
          if ((!value && !url) || (value && url)) {
            return 'Please provide either an MP4 file or a YouTube URL, but not both, for Large Gear.'
          }
          return true
        }),
    },
    {
      name: 'LyoutubeUrl',
      title: 'Large Gear YouTube URL',
      type: 'url',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const file = context.parent?.LvideoFile
          if ((!value && !file) || (value && file)) {
            return 'Please provide either an MP4 file or a YouTube URL, but not both, for Large Gear.'
          }
          return true
        }),
    },
  ],
})
