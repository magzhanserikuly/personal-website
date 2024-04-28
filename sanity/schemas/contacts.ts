import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'contacts',
  title: 'CONTACTS',
  type: 'document',
  fields: [
    defineField({
      name: 'contacts',
      title: 'Contacts',
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
