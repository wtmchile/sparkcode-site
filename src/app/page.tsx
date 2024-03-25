import Image from 'next/image';
import { Button, CountdownTimer } from '@/components';
import { getMetaData, getViewports } from '@/lib';
import { EligibilitySection, EventActivitiesSection, IntroductionSection } from './_sections';

export const generateMetadata = () => getMetaData({});
export const generateViewport = () => getViewports();

export default function Home() {
  return (
    <main>
      <section id="hero">
        <div className="container mx-auto">
          <h1 className="hidden">Spark Code</h1>
          <h2 className="mb-8 text-center text-fluid-6xl font-bold">Próximamente</h2>

          <Image
            src={'/images/spark-only.png'}
            width={200}
            height={100}
            alt="Logo Spark Codes"
            className="mx-auto"
          />

          <CountdownTimer />
          <h2 className="my-8 text-center font-kufam text-lg font-bold text-white">
            Regístrate para los eventos:
          </h2>
          <Button />
        </div>
      </section>

      <IntroductionSection className="my-40" />
      <EligibilitySection className="my-40" />
      <EventActivitiesSection className="my-40" />
    </main>
  );
}
