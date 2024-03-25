import { cn } from '@/common';
import { SimpleCard } from '@/components';

interface EventActivitiesSectionProps {
  /**
   * Optional class name to add to the component.
   */
  className?: string;
}

export const EventActivitiesSection = ({ className }: EventActivitiesSectionProps = {}) => {
  const classes = {
    container: cn('container mx-auto max-w-7xl px-4', className),
    title: cn('text-center text-4xl font-semibold'),
    content: cn('mt-10 grid w-full gap-6 max-lg:place-items-center lg:grid-cols-2 lg:grid-rows-2 '),
  };

  return (
    <section>
      <div className={classes.container}>
        <h2 className={classes.title}>¿Qué actividades se harán en el evento?</h2>
        <div className={classes.content}>
          <SimpleCard
            className="max-lg:max-w-lg max-lg:self-start"
            titleClassName="mt-4 mb-2"
            imgSrc="/images/gamejam.png"
            imgAlt="Example simple card"
            title="GameJam"
            description="Lorem ipsum dolor sit amet consectetur. Ipsum penatibus amet eu turpis lacus sem ac odio. Dignissim odio sit sit felis. "
          />

          <SimpleCard
            className="row-start-2 row-end-3 max-lg:max-w-lg max-lg:self-start"
            titleClassName="mt-4 mb-2"
            imgSrc="/images/charlas.png"
            imgAlt="Example simple card"
            title="Charlas"
            description="Lorem ipsum dolor sit amet consectetur. Ipsum penatibus amet eu turpis lacus sem ac odio. Dignissim odio sit sit felis. "
          />

          <SimpleCard
            className="row-span-2 max-lg:max-w-lg"
            titleClassName="mt-4 mb-2"
            imageClassName="max-w-[300px] mx-auto py-10"
            imgSrc="/images/torneos.png"
            imgAlt="Example simple card"
            title="Lorem Ipsum"
            description="Lorem ipsum dolor sit amet consectetur. Ipsum penatibus amet eu turpis lacus sem ac odio. Dignissim odio sit sit felis. Porttitor sit fringilla aliquet pulvinar enim condimentum facilisi quis sit. "
          />
        </div>
      </div>
    </section>
  );
};
