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
            imgSrc="/images/charlas.png"
            imgAlt="Example simple card"
            title="Charlas Inspiradoras"
            description="Desde dar tus primeros pasos en el desarrollo de videojuegos hasta descubrir los juegos que se adaptan a tus gustos, nuestras charlas abarcarán todo lo relacionado con el apasionante mundo de los videojuegos. Nuestros speakers están aquí para resolver todas tus dudas y guiarte en tu camino gamer"
          />

          <SimpleCard
            className="row-start-2 row-end-3 max-lg:max-w-lg max-lg:self-start"
            titleClassName="mt-4 mb-2"
            imgSrc="/images/gamejam.png"
            imgAlt="Example simple card"
            title="Panel de Expertas"
            description="¡Diversidad en acción! Nuestro panel de expertas te brindará una mirada única sobre el mundo de los videojuegos, compartiendo sus experiencias, soluciones creativas y consejos que te inspirarán a seguir tus sueños gamer."
          />

          <SimpleCard
            className="row-span-2 max-lg:max-w-lg"
            titleClassName="mt-4 mb-2"
            imageClassName="rounded-xl"
            imgSrc="/images/networking.jpg"
            imgAlt="Example simple card"
            title="Networking"
            description="¡Es hora de hacer crecer tu red! Conecta con profesionales de la industria, expande tus contactos y descubre nuevas oportunidades de desarrollo profesional. Además, podrás conocer más sobre otras comunidades y sumar experiencias a tu vida gamer."
          />
        </div>
      </div>
    </section>
  );
};
