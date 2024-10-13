import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Navbar from '@/components/Navbar';

import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Next CSV to JSON Convertor Application',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        <main className='min-h-screen flex flex-col pt-20 pb-4 px-4 items-center justify-center'>
          {children}
        </main>
      </body>
    </html>
  );
}
