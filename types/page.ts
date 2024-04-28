import { PortableTextBlock } from 'sanity';

export type Contacts = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  content: PortableTextBlock[];
};
