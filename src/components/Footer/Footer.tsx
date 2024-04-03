import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/common';
import { Icon, IconCatalog, IconStyle } from '@/components';

interface FooterProps {
  /**
   * Specify an optional className to be added to the component.
   */
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  const classes = {
    container: cn(
      'mt-10 border-t-2',
      // TODO: Update colors
      'border-[#423767]',
      'bg-gradient-to-br from-[#362B59] to-[#1F1A2E]',
      className,
    ),
    innerContainer: cn(
      'container mx-auto',
      'flex flex-col items-center justify-between gap-10',
      'pt-10',
    ),
    nav: cn('flex w-full flex-col items-center sm:flex-row sm:justify-between'),
    copy: cn('text-balance text-center sm:whitespace-nowrap sm:text-wrap', 'mt-6 sm:mt-0 pb-4'),
  };
  return (
    <footer className={classes.container}>
      <div className={classes.innerContainer}>
        <nav className={classes.nav}>
          <Link
            href="https://www.linkedin.com/company/spark-code-cl/"
            className="flex items-center gap-4 text-white transition-colors hover:text-violet-500"
            aria-label="Follow us on LinkedIn"
            rel="noopener noreferrer"
          >
            <Image width={88} height={88} src={'/images/spark-only.png'} alt="Spark only logo" />
            <span>Siguenos</span>
            <Icon icon={IconCatalog.linkedin} iconStyle={IconStyle.solid} className="w-6" />
          </Link>

          {/* Right side section */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:mt-0 sm:flex-row">
            <Icon
              icon={IconCatalog.techMakers}
              iconStyle={IconStyle.solid}
              className="w-14"
              aria-label="Women Techmakers Chile Logo"
            />
            <p className="text-center text-xl font-bold sm:max-w-[18ch] sm:text-start">
              Women Techmakers Chile
            </p>
          </div>
        </nav>

        {/* Bottom section */}
        <div className={classes.copy}>© 2024 Proudly Powered by Women Techmakers</div>
      </div>
    </footer>
  );
};
