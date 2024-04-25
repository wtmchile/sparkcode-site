type Card = {
  title: string;
  description: string;
  imageSrc: string;
  imgAlt: string;
};

interface EligibilitySectionData {
  /**
   * Section title
   */
  title: string;

  /**
   * Cards Types
   * */
  cards: Array<Card>;
}

export const eligibilitySectionData: EligibilitySectionData = {
  title: '¿Quién puede asistir?',
  cards: [
    {
      title: '¡Interesados en el mundo de los videojuegos!',
      description:
      'Este evento esta dirigido a mujeres, ¡pero cualquier persona interesada en el mundo de los videojuegos es bienvenida! Si eres un jugador experimentado, un postulante a desarrollador o simplemente buscas explorar la industria de los videojuego, te damos la bienvenida.',
      imageSrc: '/images/example_simple-card.png',
      imgAlt: 'Example simple card',
    },
  ],
};
