import { PortableTextBlock } from 'sanity';
import { Image } from './image';

export type About = {
  _id: string;
  _createdAt: Date;
  name: string;
  image: Image;
  subtitle: PortableTextBlock[];
  description: PortableTextBlock[];
};
