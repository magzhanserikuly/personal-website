import Header from '../../components/shared/Header';
import Footer from '../../components/shared/Footer';

import { IBM_Plex_Mono } from 'next/font/google';

import clsx from 'clsx';

const ibm_plex_mono = IBM_Plex_Mono({
  weight: ['400', '700'],
  subsets: ['latin', 'cyrillic'],
});
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={clsx(
        ibm_plex_mono.className,
        'max-w-2xl m-auto text-white flex flex-col justify-between flex-grow h-screen'
      )}
    >
      <div>
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
