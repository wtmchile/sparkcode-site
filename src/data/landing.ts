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
      title: 'Lorem Ipsum',
      description:
        'Lorem ipsum dolor sit amet consectetur. Ipsum penatibus amet eu turpis lacus sem ac odio. Dignissim odio sit sit felis. ',
      imageSrc: '/images/example_simple-card.png',
      imgAlt: 'Example simple card',
    },
    {
      title: 'Lorem Ipsum',
      description:
        'Lorem ipsum dolor sit amet consectetur. Ipsum penatibus amet eu turpis lacus sem ac odio. Dignissim odio sit sit felis. ',
      imageSrc: '/images/example_simple-card.png',
      imgAlt: 'Example simple card',
    },
    {
      title: 'Lorem Ipsum',
      description:
        'Lorem ipsum dolor sit amet consectetur. Ipsum penatibus amet eu turpis lacus sem ac odio. Dignissim odio sit sit felis. ',
      imageSrc: '/images/example_simple-card.png',
      imgAlt: 'Example simple card',
    },
  ],
};
