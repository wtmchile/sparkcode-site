import React from 'react';
import Image from 'next/image';

export const UnderConstruction = () => {
  return (
    <section className="mx-0 my-auto flex flex-col items-center justify-center">
      <h1 className="text-center text-fluid-6xl font-bold">En construcción</h1>
      <Image src="/images/controller.png" alt="" width={440} height={440} />
    </section>
  );
};
