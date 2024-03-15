import Image from 'next/image';
import { Button, CountdownTimer } from '@/components';
import { getMetaData, getViewports } from '@/lib';

export const generateMetadata = () => getMetaData({});
export const generateViewport = () => getViewports();

export default function Home() {
  return (
    <main className="container mx-auto my-auto flex flex-col">
      <div className="flex flex-col items-center pt-8">
        <h1 className="hidden">Spark Code</h1>
        <h2 className="font-kufam mb-8 text-clamp-xl font-bold text-white">Próximamente</h2>
        <div className="max-w-[200px] sm:max-w-full">
          <Image src={'/images/spark-only.png'} width={200} height={100} alt="Logo Spark Codes" />
        </div>
        <CountdownTimer />
        <h2 className="font-kufam my-8 text-lg font-bold text-white">
          Regístrate para los eventos:
        </h2>
        <Button />
      </div>
    </main>
  );
}
