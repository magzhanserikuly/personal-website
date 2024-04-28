import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getProjects } from '@/sanity/sanity-utils';

export default async function Projects() {
  const data = await getProjects();

  if (!data)
    return <div>Sorry, for unknown reason projects could not be loaded.</div>;

  return (
    <div className='px-3'>
      {/* <video
        className='absolute -z-10 inset-0 object-cover opacity-30 w-full h-full'
        autoPlay
        muted
        loop
        controls={false}
      >
        <source src='steam.mov' type='video/mp4' />
      </video> */}
      <div className='flex flex-col'>
        <h1 className='text-5xl font-bold mb-2'>PROJECTS</h1>
      </div>
      <div className='flex flex-col  gap-6 py-4'>
        {data.map((item, key) => {
          return (
            <Link
              key={key}
              target='_blank'
              href={item?.url}
              className='flex flex-col items-center gap-4 hover:opacity-50 transition-opacity duration-100'
            >
              <div className='max-w-80 w-full h-full aspect-video relative'>
                <Image
                  className='object-cover'
                  src={item?.image?.asset?.url}
                  placeholder='blur'
                  blurDataURL={item?.image?.asset?.metadata?.lqip}
                  alt={item?.image?.alt}
                  fill={true}
                />
              </div>
              <p className='uppercase'>{item?.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
