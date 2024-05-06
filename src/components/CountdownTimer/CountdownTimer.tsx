'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Countdown from 'react-countdown';
import { NumberBox } from '../NumberBox/NumberBox';

import './CountdownTimer.css'

export const CountdownTimer = () => {
  // To fix error: Text content does not match server-rendered HTML
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const fechaString = '2024-05-05T10:30:00-03:00';
  const fecha = new Date(fechaString);

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
    formatted,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
    formatted: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
  }) => {
    let daysFlip = false;
    let hoursFlip = false;
    let minutesFlip = false;
    let secondsFlip = true;

    if (seconds <= 0 && minutes <= 0 && hours <= 0 && days <= 0) {
      // Reset all flips when the countdown reaches zero
      daysFlip = hoursFlip = minutesFlip = secondsFlip = false;
    }

    if (seconds === 0) {
      if (minutes > 0) {
        seconds = 59;
        minutesFlip = true;
      }
    }

    if (minutes === 0) {
      if (hours > 0) {
        minutes = 59;
        hoursFlip = true;
      }
    }

    if (hours === 0) {
      if (days > 0) {
        hours = 23;
        daysFlip = true;
      }
    }

    if (completed) {
      return (
        <div>
          <h2 className="mb-2 text-center text-fluid-3xl font-semibold">¡Gracias por asistir!</h2>
          <h2 className="mb-2 text-center text-fluid-5xl font-semibold neon-white">Queremos conocer</h2>
          <h2 className="mb-5 text-center text-fluid-6xl font-semibold neon-purple">TU OPINION</h2>
        </div>
      );
    } else {
      return (
        <div className="flex gap-6">
          <NumberBox number={formatted.days} text={'días'} flip={daysFlip} />
          <NumberBox number={formatted.hours} text={'horas'} flip={hoursFlip} />
          <NumberBox number={formatted.minutes} text={'minutos'} flip={minutesFlip} />
          <NumberBox number={formatted.seconds} text={'segundos'} flip={secondsFlip} />
        </div>
      );
    }
  };
  return (
    <div className="flex h-[148px] items-center justify-center sm:h-[180px] md:h-[224px]">
      <AnimatePresence mode="popLayout">
        {isClient && (
          <motion.div
            key="countdown"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0, y: 4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Countdown date={fecha} renderer={renderer} zeroPadTime={2} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
