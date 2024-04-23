import { defineType, defineField } from 'sanity';
import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';

export default defineType({
  name: 'cv',
  title: 'CV',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: 'cv' }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    }),
  ],
});
