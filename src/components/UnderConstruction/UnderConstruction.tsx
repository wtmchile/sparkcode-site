import React from 'react';
import Image from 'next/image';

export const UnderConstruction = () => {
  return (
    <section className="container mx-auto my-auto flex flex-col items-center justify-center px-4">
      <h1 className="text-center text-fluid-6xl font-bold">En construcción</h1>
      <Image src="/images/controller.png" alt="" width={440} height={440} />
    </section>
  );
};
