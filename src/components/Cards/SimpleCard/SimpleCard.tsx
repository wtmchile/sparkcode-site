import Image from 'next/image';
import { cn } from '@/common';
import { CardWrapper } from '../CardWrapper/CardWrapper';

interface SimpleCardProps {
  /**
   * Optional className to be applied to the image element within the card.
   */
  imageClassName?: string;

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

export const SimpleCard = ({
  className,
  titleClassName,
  imageClassName,
  imgSrc,
  imgAlt,
  title,
  description,
}: SimpleCardProps) => {
  const classes = {
    container: cn('font-kufam', className),
    title: cn('text-2xl font-bold', titleClassName),
    image: cn('w-full', imageClassName),
  };

  return (
    <CardWrapper hasBorder className={classes.container}>
      <div className="mx-auto items-center p-4">
        <Image width={800} height={600} src={imgSrc} alt={imgAlt} className={classes.image} />
        <h3 className={classes.title}>{title}</h3>
        <p className="leading-loose text-secondary-300 ">{description}</p>
      </div>
    </CardWrapper>
  );
};
