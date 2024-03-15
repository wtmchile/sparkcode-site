import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps = {}) => {
  return (
    <footer className={className}>
      <Link title="Conócenos" href="https://linktr.ee/wtmchile">
        <div className="relative flex h-[200px] w-full justify-center">
          <Image src={'/images/wave-soft.svg'} alt="Wave image" className="object-cover" fill />
          <Image
            src={'/images/wtm-logo.png'}
            width={300}
            height={64}
            alt="WTM logo"
            className="z-10 self-end"
          />
        </div>
      </Link>
    </footer>
  );
};
