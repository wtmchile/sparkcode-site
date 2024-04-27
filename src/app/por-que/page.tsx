import React from 'react';
import { UnderConstruction } from '@/components/UnderConstruction/UnderConstruction';

const PorQuePage = () => {
  return (
    <section className="container mx-auto mb-8 max-w-6xl px-6">
      <h1 className="mb-8 text-center text-fluid-6xl font-bold">
        ¿Por qué Spark Code: Dream Big, Start Small?
      </h1>
      <p className="mb-4 text-lg">
        Somos un grupo de{' '}
        <span className="font-bold text-primary-300">mujeres apasionadas por la tecnología </span> y
        comprometidas con el crecimiento y la inclusión de más mujeres en la industria de los
        videojuegos. Como gamers y profesionales en diferentes áreas relacionadas con los
        videojuegos, sabemos que el mundo gamer puede ser un lugar increíblemente divertido y
        enriquecedor, pero también{' '}
        <span className="font-bold text-primary-300">
          reconocemos que todavía existe una brecha de género que queremos ayudar a cerrar
        </span>
        .
      </p>
      <p className="mb-4 text-lg">
        <span className="font-bold text-primary-300">
          Con Spark Code: Dream Big, Start Small, queremos inspirar a más mujeres a participar en el
          mundo de los videojuegos
        </span>
        , ya sea de forma profesional o simplemente por diversión. Creemos en el poder de la
        representación y queremos mostrarles a las mujeres que ya están en la industria y a las que
        están interesadas en unirse, que hay un lugar para ellas aquí.{' '}
        <span className="font-bold text-primary-300">
          Queremos crear un espacio donde las mujeres puedan aprender, conectarse, compartir
        </span>{' '}
        y, sobre todo, sentirse empoderadas para perseguir sus pasiones y metas en el mundo gamer.
      </p>
      <p className="mb-4 text-lg">
        Nuestro evento no solo busca informar y educar, sino también{' '}
        <span className="font-bold text-primary-300">
          celebrar la diversidad y la creatividad que las mujeres aportan al mundo de los
          videojuegos.
        </span>{' '}
        Creemos que juntas podemos construir una comunidad más inclusiva y vibrante, donde todas las
        voces sean escuchadas y todos los talentos sean reconocidos y valorados.
      </p>
      <p className="mb-4 text-lg font-bold italic">
        ¡Únete a nosotras en Spark Code: Dream Big, Start Small, y juntas cambiemos el juego!
      </p>
    </section>
  );
};

export default PorQuePage;
