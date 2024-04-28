import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getAbout } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';

export default async function Home() {
  const data = await getAbout();
  if (!data) return <div>Sorry service is not available!</div>;

  return (
    <div className='px-3'>
      {/* <video
        className='absolute -z-10 inset-0 object-cover opacity-30  h-full w-full'
        autoPlay
        muted
        loop
        controls={false}
      >
        <source src='steam15.mp4' type='video/mp4' />
      </video> */}
      <div className='flex mb-10 gap-2 justify-between'>
        <div className='flex flex-col'>
          <h1 className='text-5xl font-bold mb-2'>{data.name}</h1>
          <PortableText value={data.subtitle} />
        </div>
        <div className='max-w-32 w-full h-full aspect-square relative '>
          <div
            className='absolute inset-0 z-30 '
            style={{ boxShadow: '0 0 7px 7px #121212 inset' }}
          ></div>
          <Image
            className='object-cover '
            src={data.image?.asset?.url}
            alt={data.image?.alt}
            fill={true}
            placeholder='blur'
            blurDataURL={data.image?.asset?.metadata?.lqip}
          />
        </div>
      </div>
      <div className='text-justify'>
        <PortableText value={data.description} />
      </div>
    </div>
  );
}
