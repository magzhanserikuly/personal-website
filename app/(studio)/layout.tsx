import '../globals.css';

export const metadata = {
  title: 'Adlet Ibraimov',
  description: 'IVLUENCE Personal website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
