import type { Metadata } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

import clsx from 'clsx';
import config from '../lib/config';

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
      <body>{children}</body>
    </html>
  );
}
