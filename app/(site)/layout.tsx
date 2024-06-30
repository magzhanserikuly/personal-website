import '../globals.css';

import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';

import { IBM_Plex_Mono } from 'next/font/google';

import clsx from 'clsx';

const ibm_plex_mono = IBM_Plex_Mono({
  weight: ['400', '700'],
  subsets: ['latin', 'cyrillic'],
});

export const metadata = {
  title: 'Adlet Ibraimov',
  description: 'IVLUENCE Personal website',
  other: { name: "google-site-verification", content: "4zB724bVA2kxK4cJJaVLXDHQphmooTwqPxKlaDfZ-nU" }
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <meta name="google-site-verification" content="4zB724bVA2kxK4cJJaVLXDHQphmooTwqPxKlaDfZ-nU"/>
      </head>      
      <body
        className={clsx(
          ibm_plex_mono.className,
          'max-w-7xl m-auto text-white flex flex-col justify-between flex-grow h-screen'
        )}
      >
        <div>
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
      <GoogleAnalytics gaId='G-VG95DB2TKE' />
    </html>
  );
}
