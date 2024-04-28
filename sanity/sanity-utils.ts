import { groq } from 'next-sanity';
import { About } from '@/types/about';
import { client } from './lib/client';

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

// export async function getProject(slug: string): Promise<Project> {
//   return client.fetch(
//     groq`*[_type == "project" && slug.current == $slug][0]{
//       _id,
//       _createdAt,
//       name,
//       "slug": slug.current,
//       "image": image.asset->url,
//       url,
//       content
//     }`,
//     { slug }
//   );
// }

// export async function getPages(): Promise<Page[]> {
//   return client.fetch(
//     groq`*[_type == "page"]{
//       _id,
//       _createdAt,
//       title,
//       "slug": slug.current
//     }`
//   );
// }

// export async function getPage(slug: string): Promise<Page> {
//   return client.fetch(
//     groq`*[_type == "page" && slug.current == $slug][0]{
//       _id,
//       _createdAt,
//       title,
//       "slug": slug.current,
//       content
//     }`,
//     { slug }
//   );
// }
