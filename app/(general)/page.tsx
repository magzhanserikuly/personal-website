import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';

const aboutQuery = `
*[_type == "about"]{
  name,
  image{
    ...,
    asset->{
      ...
    }
  },
  subtitle[]{
    ...
  },
  description[]{
      ...
  }
} `;

export default async function Home() {
  const data = await client.fetch(aboutQuery, {}, { cache: 'no-store' });
  console.log(data);
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
      <div className='flex mb-10 gap-2'>
        <div className='flex flex-col'>
          <h1 className='text-5xl font-bold mb-2'>{data[0]?.name}</h1>
          <h2 className='text-lg'>
            Frontend Developer
            <br />
            Content Creator
            <br />
            Music Producer
          </h2>
        </div>
        <div className='max-w-32 w-full h-full aspect-square relative '>
          <div
            className='absolute inset-0 z-30 '
            style={{ boxShadow: '0 0 7px 7px #121212 inset' }}
          ></div>
          <Image
            className='object-cover '
            src='/avatar_2.jpeg'
            alt='Picture of the author'
            fill={true}
            placeholder='blur'
            blurDataURL='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAcEAACAgIDAAAAAAAAAAAAAAAAAQIDBBIRFCH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwCpOuHayXpHl2tt6r0AAqv/2Q=='
          />
        </div>
      </div>
      <div className='text-justify'>
        {`Expert in digital solutions for retail and cultural domains. Skilled in
        visual identities, commercial campaigns, and dynamic website development
        using React, NextJS, Typescript, Sanity, and Shopify's Liquid. Collaborated
        with industry giants like Off-White, Prada, Karla Otto, Jlal,
        Leslie-David, MODES, Athens Kallithea FC, Prestatech, and etc.`}
      </div>
    </div>
  );
}
