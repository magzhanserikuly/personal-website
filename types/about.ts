import { PortableTextBlock } from 'sanity';

export type About = {
  _id: string;
  _createdAt: Date;
  name: string;
  image: Image;
  subtitle: PortableTextBlock[];
  description: PortableTextBlock[];
};

export type Image = {
  alt: string;
  asset: {
    url: string;
    metadata: {
      lqip: string;
    };
  };
};
