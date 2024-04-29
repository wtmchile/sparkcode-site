"use client";
import { useRef } from "react";
import { useCssTransitionOnView } from "@/components/Hooks/useCssTransitionOnView";
import { cn } from "@/common/utils/cn";

export function Title() {
  const ref = useRef(null);
  const transitions = useCssTransitionOnView(ref, "delay-500");

  return (
    <section
      className={cn("flex flex-col items-center ", transitions)}
      ref={ref}
    >
      <h2 className="text-center font-kufam text-white text-5xl">
        Agenda Del Evento
      </h2>
    </section>
  );
}
