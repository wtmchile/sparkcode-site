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
          className="mx-auto mt-20 max-lg:max-w-lg px-4"
          imgSrc="/images/horizontal-card-example.png"
          imgAlt="Example simple card"
          title="¿Qué es la Spark Code?"
          description="Spark Code es una experiencia pensada especialmente para los amantes del mundo de los videojuegos y su desarrollo. 
          ¿Te apasiona el proceso de creación de videojuegos? ¿O quizás estás buscando oportunidades para expandir tu red de contactos en la industria? 
          No importa cuál sea tu objetivo, Spark Code te ofrece un espacio perfecto para conectar con otras personas entusiastas, expertas y profesionales del área."
        />
      </div>
    </section>
  );
};
