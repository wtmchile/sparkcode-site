import type { Metadata } from "next";
import { Inter, Kufam } from "next/font/google";
import Link from 'next/link'
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const kufam = Kufam({
  subsets: ["latin"],
  variable: "--font-kufam",
});

export const metadata: Metadata = {
  title: "Spark Code: Dream Big, Start Small",
  description:
    "Buscamos encender una chispa de cambio y crecimiento en las mujeres por la tecnologia, específicamente en videojuegos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={kufam.variable}>
      <body
        className={`${inter.className} bg-dark-purple bg-star-pattern min-h-screen flex flex-col`}
      >
        {children}
        <footer>   
          <Link title="Conócenos" href="https://linktr.ee/wtmchile"><div className="w-full relative h-[200px] flex justify-center">
            <Image
              src={"/images/wave-soft.svg"}
              alt="Wave image"
              className="object-cover"
              fill
            />
            <Image
              src={"/images/wtm-logo.png"}
              width={300}
              height={64}
              alt="WTM logo"
              className="self-end z-10"
            />
           
          </div></Link>
        </footer>
      </body>
    </html>
  );
}
