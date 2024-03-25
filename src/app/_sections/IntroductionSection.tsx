import { cn } from '@/common';
import { HorizontalCard } from '@/components';

interface IntroductionSectionProps {
  /**
   * Optional class name to add to the component.
   */
  className?: string;
}

export const IntroductionSection = ({ className }: IntroductionSectionProps) => {
  const classes = {
    container: cn('container mx-auto max-w-7xl px-4 ', className),
  };
  return (
    <section>
      <div className={classes.container}>
        <HorizontalCard
          className="mx-auto mt-20 max-lg:max-w-lg"
          imgSrc="/images/horizontal-card-example.png"
          imgAlt="Example simple card"
          title="¿Qué es la sparkcode?"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat, quod
          nostrum ea pariatur autem consequuntur dolores sequi distinctio voluptas reiciendis,
          adipisci consequatur facere iste dolorem nihil ut, ex porro?"
        />
      </div>
    </section>
  );
};
