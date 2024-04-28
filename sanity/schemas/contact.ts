import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'contact',
  title: 'CONTACTS',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media',
      type: 'string',
      options: {
        list: [
          { title: 'Telegram', value: 'telegram' },
          { title: 'Instagram', value: 'instagram' },
          { title: 'Email', value: 'email' },
          { title: 'Linkedin', value: 'linkedin' },
          { title: 'GitHub', value: 'github' },
          { title: 'Phone', value: 'phone' },
          { title: 'Custom', value: 'custom' },
        ],
      },
    }),
  ],
});
