import { cn } from '@/common';
import { SimpleCard } from '@/components';
import { eligibilitySectionData } from '@/data/landing';

interface EligibilitySectionProps {
  /**
   * Optional class name to add to the component.
   */
  className?: string;
}

export const EligibilitySection = ({ className }: EligibilitySectionProps = {}) => {
  const classes = {
    container: cn('container mx-auto max-w-7xl px-4', className),
    title: cn('text-center text-4xl font-semibold'),
    content: cn('mt-10 flex flex-wrap items-center justify-evenly gap-x-4 gap-y-8'),
  };

  const renderCards = () =>
    eligibilitySectionData.cards.map((card) => (
      <SimpleCard
        key={card.title}
        className="max-w-[800px]"
        titleClassName="my-6"
        imgSrc={card.imageSrc}
        imgAlt={card.imgAlt}
        title={card.title}
        description={card.description}
      />
    ));

  return (
    <section>
      <div className={classes.container}>
        <h2 className={classes.title}>¿Quiénes pueden asistir?</h2>
        <div className={classes.content}>{renderCards()}</div>
      </div>
    </section>
  );
};
