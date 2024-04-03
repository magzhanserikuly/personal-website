import type { Metadata } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

import Header from '@/components/shared/header';
import Footer from '@/components/shared/footer';
import config from '@/lib/config';
import clsx from 'clsx';

const ibm_plex_mono = IBM_Plex_Mono({
  weight: ['400', '700'],
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: config.siteName,
  description: config.siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head />
      <body
        className={clsx(
          ibm_plex_mono.className,
          'max-w-2xl m-auto text-white flex flex-col justify-between flex-grow h-screen'
        )}
      >
        <div className='flex-1'>
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
