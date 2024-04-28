import { groq } from 'next-sanity';
import { About } from '@/types/about';
import { client } from './lib/client';
import { CV } from '@/types/cv';
import { Project } from '@/types/project';

export async function getAbout(): Promise<About> {
  return client.fetch(
    groq`*[_type == "about"][0]{
      name,
      image{
        asset->{
          url,
          metadata{
            lqip
          }
        }
      },
      subtitle,
      description
    } `
  );
}
export async function getCV(): Promise<CV[]> {
  return client.fetch(
    groq`*[_type=='cv']{
      ...
    } `
  );
}
export async function getProjects(): Promise<Project[]> {
  return client.fetch(
    groq`*[_type=='projects']{
      name,
      image{
        asset->{
          url,
          metadata{
            lqip
          }
        }
      },
      url
    } `
  );
}
