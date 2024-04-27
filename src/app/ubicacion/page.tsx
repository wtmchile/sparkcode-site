import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon, IconCatalog } from '@/components';

const UbicacionPage = () => {
  return (
    <section className="container mx-auto my-auto flex flex-col items-center justify-center px-4">
      <h1 className="mb-10 text-center text-fluid-6xl font-bold">Ubicación</h1>
      <Link
        href="https://www.google.com/maps/search/?api=1&query=-33.51759176839284,-70.59975150759264"
        target="_blank"
      >
        <Image src="/images/mapa.jpg" alt="" width={700} height={193} className="rounded-lg" />
      </Link>
      <div className="mt-4 flex items-center gap-2">
        <Image src="/images/location.svg" alt="location icon" width={30} height={30} />
        <Link
          href="https://www.google.com/maps/search/?api=1&query=-33.51759176839284,-70.59975150759264"
          className="transition-all hover:text-primary-300"
          target="_blank"
        >
          Vicuña Mackenna 7110 Local BA-249B Mall Plaza Vespucio, La Florida, Santiago
        </Link>
      </div>
    </section>
  );
};

export default UbicacionPage;
