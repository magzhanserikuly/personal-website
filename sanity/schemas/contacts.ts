import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'contacts',
  title: 'CONTACTS',
  type: 'document',
  fields: [
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'array',
      of: [
        {
          title: 'Contact',
          type: 'contact',
        },
      ],
    }),
  ],
});
