import React from 'react';
import Image from 'next/image';
export default async function Home() {
  return (
    <div className='px-3'>
      <video
        className='absolute -z-10 inset-0 object-cover opacity-30  h-full w-full'
        autoPlay
        muted
        loop
      >
        <source src='steam.mp4' type='video/mp4' />
      </video>
      <div className='flex mb-10 gap-2'>
        <div className='flex flex-col'>
          <h1 className='text-5xl font-bold mb-2'>ADLET IBRAIMOV</h1>
          <h2 className='text-lg'>
            Frontend Developer
            <br />
            Content Creator
            <br />
            Music Producer
          </h2>
        </div>
        <div className='max-w-32 w-full h-full aspect-square relative '>
          <Image
            className='object-cover shadow-inset'
            loading='eager'
            src='/avatar_2.jpeg'
            alt='Picture of the author'
            fill={true}
          />
        </div>
      </div>
      <div className=''>
        {`Expert in digital solutions for retail and cultural domains. Skilled in
        visual identities, commercial campaigns, and dynamic website development
        using React, NextJS, Typescript, Sanity, and Shopify's Liquid. Collaborated
        with industry giants like Off-White, Prada, Karla Otto, Jlal,
        Leslie-David, MODES, Athens Kallithea FC, Prestatech, and etc.`}
      </div>
    </div>
  );
}
