import type { Metadata } from 'next';
import { Inter, Kufam } from 'next/font/google';
import { Footer, Navbar } from '@/components';

import '@/styles/globals.css';

import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

const kufam = Kufam({
  subsets: ['latin'],
  variable: '--font-kufam',
});

export const metadata: Metadata = {
  title: 'Spark Code: Dream Big, Start Small',
  description:
    'Buscamos encender una chispa de cambio y crecimiento en las mujeres por la tecnologia, específicamente en videojuegos.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es" className={kufam.variable}>
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-dark-purple bg-star-pattern`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
