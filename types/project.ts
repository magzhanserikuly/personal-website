import { Image } from './image';

export type Project = {
  _id: string;
  createdAt: Date;
  name: string;
  image: Image;
  url: string;
};
