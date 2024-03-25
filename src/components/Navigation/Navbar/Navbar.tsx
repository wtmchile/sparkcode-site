'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/common';
import { Icon, IconCatalog, IconStyle } from '@/components';

interface NavbarProps {
  /**
   * Specify an optional className to be added to the component.
   */
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = {
    container: cn('z-20 md:mt-10 md:sticky md:top-10 md:px-4', className),
    innerContainer: cn(
      'h-16 px-6 py-3',
      'container max-w-5xl mx-auto',
      'border-b md:border border-secondary-900 bg-secondary-950/60',
      'md:rounded-full',
      'flex items-center justify-between gap-4',
      'md:justify-evenly',
      'backdrop-blur-md',
    ),
    nav: cn(
      'absolute top-16 bottom-0 inset-x-0',
      'md:static',
      'w-full h-svh md:h-auto',
      'bg-secondary-950/80 md:bg-primary-50/0',
      'max-md:backdrop-blur-md',
      'transition-all',

      // RESET CLASS
      'md:opacity-100 md:visible md:z-10 md:translate-y-0',
      {
        'invisible opacity-0 -translate-y-full ': !isOpen,
        'visible opacity-100 translate-y-0': isOpen,
      },
    ),
    list: cn(
      'pr-10 pt-10 md:p-0',
      'md:gap-2 lg:gap-8',
      'flex flex-col items-end justify-evenly gap-12',
      'md:flex-row md:items-center',
    ),
    links: cn(
      // TODO: Implement fluid font sizes for mobile
      'relative',
      'text-3xl font-bold text-right',
      'md:text-base md:font-normal md:text-center',
      'hover:text-primary-400',
      'transition-colors whitespace-nowrap',

      // Underline on hover
      'before:content-[""] before:inset-x-0 before:-bottom-1',
      'before:h-px before:w-0 before:hover:w-full',
      'before:absolute before:bg-primary-400',
      'before:transition-all',
    ),
  };

  // TODO: Implement scrollLock Hook when open

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleMenuIcon = () => {
    if (isOpen) return IconCatalog.xMark;
    else return IconCatalog.hamburger;
  };

  return (
    <header className={classes.container}>
      <div className={classes.innerContainer}>
        <Link href="/" passHref aria-label="Home" onClick={() => setIsOpen(false)}>
          <Image
            width={50}
            height={50}
            src="/images/spark-only.png"
            alt="Logo Spark Codes"
            className="min-h-10 min-w-10"
          />
        </Link>
        <nav className={classes.nav} aria-label="Main navigation">
          <ul className={classes.list}>
            <li>
              <Link href="/" className={classes.links} onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/agenda" className={classes.links} onClick={() => setIsOpen(false)}>
                Agenda
              </Link>
            </li>
            <li>
              <Link href="/sponsors" className={classes.links} onClick={() => setIsOpen(false)}>
                Sponsors
              </Link>
            </li>
            <li>
              <Link href="/por-que" className={classes.links} onClick={() => setIsOpen(false)}>
                ¿Por qué?
              </Link>
            </li>
            <li>
              <Link href="/ubicacion" className={classes.links} onClick={() => setIsOpen(false)}>
                Ubicación
              </Link>
            </li>
            <li>
              <Link
                href="/codigo-de-conducta"
                className={classes.links}
                onClick={() => setIsOpen(false)}
              >
                Código de conducta
              </Link>
            </li>
            <li>
              {/* TODO: Create a Button */}
              <Link
                href="/"
                role="button"
                // TODO: add colors to tailwind
                className="flex items-center gap-4 rounded-full border border-transparent bg-[#0E091C] px-4 py-2 transition-colors hover:border-primary-500 hover:bg-secondary-900 md:gap-2"
              >
                <span className="mb-1 text-3xl md:mb-0 md:hidden md:text-base lg:block">
                  Ingresar
                </span>

                <Icon
                  icon={IconCatalog.arrowLeftStartOnRectangle}
                  className="h-6 w-6 rotate-180 text-white"
                  iconStyle={IconStyle.bold}
                />
              </Link>
            </li>
          </ul>
        </nav>

        <button onClick={toggleMenu} aria-expanded={isOpen} aria-controls="navigation">
          <Icon
            icon={toggleMenuIcon()}
            className="h-8 w-8 text-white md:hidden"
            aria-hidden="true"
          />
          <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>
    </header>
  );
};
