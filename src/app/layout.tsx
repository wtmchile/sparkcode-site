import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Footer, Navbar } from '@/components';

import '@/styles/main.scss';

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
        className={`${inter.className} bg-dark-purple flex min-h-screen flex-col bg-star-pattern`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
