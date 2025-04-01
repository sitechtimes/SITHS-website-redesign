import {defineType} from 'sanity'

export const video = defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'videoFile',
      title: 'Video File (MP4)',
      type: 'file',
      options: {
        accept: 'video/mp4',
      },
    },
    {
      name: 'youtubeUrl',
      title: 'YouTube Video URL',
      type: 'url',
    },
  ],
})
