import { Button } from "@/components/Button";
import { CountdownTimer } from "@/components/CountdownTimer";
import { getMetaData, getViewports } from "@/lib/metadata";
import Image from "next/image";

export const generateMetadata = () => getMetaData({});

export const generateViewport = () => getViewports();

export default function Home() {
  return (
    <main className="container  flex flex-col mx-auto my-auto">
      <div className="pt-8 flex flex-col items-center">
        <h1 className="hidden">Spark Code</h1>
        <h2 className="text-clamp-xl font-kufam font-bold mb-8 text-white">
          Próximamente
        </h2>
        <div className="max-w-[200px] sm:max-w-full">
          <Image
            src={"/images/spark-only.png"}
            width={200}
            height={100}
            alt="Logo Spark Codes"
          />
        </div>
        <CountdownTimer />
        <h2 className="text-lg font-kufam font-bold mb-8 mt-8 text-white mt-2">
          Regístrate para los eventos:
        </h2>
        <Button/>
      </div>
    </main>
  );
}
