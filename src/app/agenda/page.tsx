"use client";
import { useState } from "react";
import { Button } from "@/components/Button/Button";
import { Title } from "@/components/agenda/Title";
import { Timeline } from "@/components/Agenda/Timeline";
import talksData from "@/talks/talks.json";
import { AnimatePresence, motion } from "framer-motion";

export default function Agenda() {
  return (
    <div className="flex flex-col w-full relative justify-center items-center">
      <section className="lg:px-64 py-10 my-10 ">
        <Title/>
      </section>
 
      <AnimatePresence>
        
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Timeline data={talksData} />
          </motion.div>
        
      </AnimatePresence>
    </div>
  );
}
