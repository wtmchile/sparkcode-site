import { CountdownTimer } from "@/components/CountdownTimer";
import { getMetaData, getViewports } from "@/lib/metadata";
import Image from "next/image";

export const generateMetadata = () => getMetaData({});

export const generateViewport = () => getViewports();

export default function Home() {
  return (
    <main className="container  flex flex-col mx-auto my-auto">
      <div className="pt-14 flex flex-col items-center">
        <h1 className="hidden">Spark Code</h1>
        <h2 className="text-clamp-xl font-kufam font-bold mb-12">
          Proximamente
        </h2>
        <div className="max-w-[200px] sm:max-w-full">
          <Image
            src={"/images/spark-only.png"}
            width={300}
            height={280}
            alt="Logo Spark Codes"
          />
        </div>
        <CountdownTimer />
      </div>
    </main>
  );
}
