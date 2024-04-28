import { PortableTextBlock } from 'sanity';

export type Contact = {
  _key: string;
  link: string;
  name: string;
  socialMedia: string;
};

export type Contacts = {
  contacts: Contact[];
};
