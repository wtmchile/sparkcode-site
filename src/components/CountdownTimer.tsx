"use client";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { NumberBox } from "./NumberBox";
import { AnimatePresence, motion } from "framer-motion";

export const CountdownTimer = () => {
  // To fix error: Text content does not match server-rendered HTML
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const fechaString = "2024-04-07T10:00:00-03:00";
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
        // TODO: Replace for proper content
        "Countdown done"
      );
    } else {
      return (
        <div className="flex gap-6">
          <NumberBox number={formatted.days} text={"días"} flip={daysFlip} />
          <NumberBox number={formatted.hours} text={"horas"} flip={hoursFlip} />
          <NumberBox
            number={formatted.minutes}
            text={"minutos"}
            flip={minutesFlip}
          />
          <NumberBox
            number={formatted.seconds}
            text={"segundos"}
            flip={secondsFlip}
          />
        </div>
      );
    }
  };
  return (
    <div className="h-[148px] sm:h-[180px] md:h-[224px] flex justify-center items-center">
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
