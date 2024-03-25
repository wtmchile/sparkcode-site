import Image from 'next/image';
import { cn } from '@/common';
import { CardStyle, CardWrapper, GradientDirection } from '../CardWrapper/CardWrapper';

interface HorizontalCardProps {
  /**
   * Optional className to be applied to the card container element.
   */
  className?: string;

  /**
   * The descriptive text to display below the title in the card.
   */
  description?: string;

  /**
   * The source URL of the image to display in the card.
   */
  imgSrc: string;

  /**
   * The alternative text for the image, for accessibility.
   */
  imgAlt: string;

  /**
   * Optional className to be applied to the card title element.
   */
  titleClassName?: string;

  /**
   * The title text to display within the card.
   */
  title?: string;
}

export const HorizontalCard = ({
  className,
  titleClassName,
  imgSrc,
  imgAlt,
  title,
  description,
}: HorizontalCardProps) => {
  const classes = {
    container: cn('font-kufam lg:h-[399px]', className),
    title: cn('my-6 text-4xl font-semibold', titleClassName),
  };

  return (
    <CardWrapper
      isFullWidth
      className={classes.container}
      cardStyle={CardStyle.secondary}
      gradientDirection={GradientDirection.BottomLeftToTop}
    >
      <div className="relative flex h-full flex-col items-center justify-end gap-20 p-4 lg:flex-row">
        <Image
          width={800}
          height={800}
          src={imgSrc}
          alt={imgAlt}
          className="w-full max-w-[450px] xl:absolute xl:inset-0"
        />

        <div className="max-w-2xl self-center">
          <h3 className={classes.title}>{title}</h3>
          <p className="text-xl font-medium leading-loose">{description}</p>
        </div>
      </div>
    </CardWrapper>
  );
};
