import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default async function Projects() {
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
        <Link
          target='_blank'
          href='https://www.off---white.com/'
          className='flex flex-col items-center gap-4 hover:opacity-50 transition-opacity duration-100'
        >
          <div className='max-w-80 w-full h-full aspect-video relative'>
            <Image
              className='object-cover'
              loading='eager'
              src='/offwhite.png'
              alt='Picture of the author'
              fill={true}
            />
          </div>
          <p>Off-White</p>
        </Link>
        <Link
          target='_blank'
          href='https://modes.com/'
          className='flex flex-col items-center gap-4 hover:opacity-50 transition-opacity duration-100'
        >
          <div className='max-w-80 w-full h-full aspect-video relative'>
            <Image
              className='object-cover'
              loading='eager'
              src='/modes.png'
              alt='Picture of the author'
              fill={true}
            />
          </div>
          <p>MODES</p>
        </Link>
        <Link
          target='_blank'
          href='https://karlaotto.com/'
          className='flex flex-col items-center gap-4 hover:opacity-50 transition-opacity duration-100'
        >
          <div className='max-w-80 w-full h-full aspect-video relative'>
            <Image
              className='object-cover'
              loading='eager'
              src='/karlaotto.png'
              alt='Picture of the author'
              fill={true}
            />
          </div>
          <p>KarlaOtto</p>
        </Link>
        <Link
          target='_blank'
          href='https://j-la-l.com/'
          className='flex flex-col items-center gap-4 hover:opacity-50 transition-opacity duration-100'
        >
          <div className='max-w-80 w-full h-full aspect-video relative'>
            <Image
              className='object-cover'
              loading='eager'
              src='/jlal.png'
              alt='Picture of the author'
              fill={true}
            />
          </div>
          <p>_JLAL_</p>
        </Link>
        <Link
          target='_blank'
          href='https://lerub.com/'
          className='flex flex-col items-center gap-4 hover:opacity-50 transition-opacity duration-100'
        >
          <div className='max-w-80 w-full h-full aspect-video relative'>
            <Image
              className='object-cover'
              loading='eager'
              src='/lerub.png'
              alt='Picture of the author'
              fill={true}
            />
          </div>
          <p>Lerub</p>
        </Link>
        <Link
          target='_blank'
          href='https://prestatech.com/'
          className='flex flex-col items-center gap-4 hover:opacity-50 transition-opacity duration-100'
        >
          <div className='max-w-80 w-full h-full aspect-video relative'>
            <Image
              className='object-cover'
              loading='eager'
              src='/prestatech.png'
              alt='Picture of the author'
              fill={true}
            />
          </div>
          <p>Prestatech</p>
        </Link>
        <Link
          target='_blank'
          href='https://www.cameranesi-pompili.com'
          className='flex flex-col items-center gap-4 hover:opacity-50 transition-opacity duration-100'
        >
          <div className='max-w-80 w-full h-full aspect-video relative'>
            <Image
              className='object-cover'
              loading='eager'
              src='/came.png'
              alt='Picture of the author'
              fill={true}
            />
          </div>
          <p>Cameranesi Pompili</p>
        </Link>
        <Link
          target='_blank'
          href='https://www.gamera.studio'
          className='flex flex-col items-center gap-4 hover:opacity-50 transition-opacity duration-100'
        >
          <div className='max-w-80 w-full h-full aspect-video relative'>
            <Image
              className='object-cover'
              loading='eager'
              src='/gamera.png'
              alt='Picture of the author'
              fill={true}
            />
          </div>
          <p>Gamera</p>
        </Link>
        <Link
          target='_blank'
          href='https://www.spotti.com'
          className='flex flex-col items-center gap-4 hover:opacity-50 transition-opacity duration-100'
        >
          <div className='max-w-80 w-full h-full aspect-video relative'>
            <Image
              className='object-cover'
              loading='eager'
              src='/spotti.png'
              alt='Picture of the author'
              fill={true}
            />
          </div>
          <p>Spotti</p>
        </Link>
      </div>
    </div>
  );
}
