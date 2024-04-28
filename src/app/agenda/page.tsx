'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Timeline } from '@/components/Agenda/Timeline';
import { Title } from '@/components/Agenda/Title';
import talksData from '@/talks/talks.json';

export default function Agenda() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center">
      <section className="my-10 py-10 lg:px-64 ">
        <Title />
      </section>

      <AnimatePresence>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Timeline data={talksData} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
