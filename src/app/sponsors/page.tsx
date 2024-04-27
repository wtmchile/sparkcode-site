import React from 'react';
import Image from 'next/image';

const SponsorsPage = () => {
  return (
    <section className="mx-0 my-auto flex flex-col items-center justify-center">
      <h1 className="mb-10 text-center text-fluid-6xl font-bold">Sponsors</h1>
      <Image src="/images/mgc.png" alt="" width={700} height={193} />
    </section>
  );
};

export default SponsorsPage;
