"use client";

import { useState } from "react";
import { Reveal, RevealStagger } from "../Reveal";
import { PAIN_ITEMS, type PainKey } from "./data";
import { Divider, PainItem } from "./PainItem";
import { Mockup } from "./Mockup";
import { BoltIcon } from "./icons";

export function PainPoint() {
  const [active, setActive] = useState<PainKey>("tabs");

  return (
    <section className="mx-auto max-w-9xl px-6 lg:px-10 py-1 bg-white">
      <Reveal variant="up-sm">
        <div className="relative overflow-hidden rounded-[24px] bg-[#0E0E10] px-5 sm:px-8 lg:px-12 py-12 lg:py-16">
          <RevealStagger
            step={110}
            startDelay={80}
            className="flex flex-col items-center text-center"
          >
            <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
              <BoltIcon className="w-3 h-3" />
              Why ParcelTracking
            </p>
            <h2 className="mt-3.5 text-[1.875rem] sm:text-[2.25rem] lg:text-[2.75rem] font-semibold tracking-[-0.03em] leading-[1.1] text-white max-w-2xl">
              Lost in delivery limbo?<br />
              We&apos;ve got you.
            </h2>
          </RevealStagger>

          <div className="mt-10 lg:mt-14 grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <Reveal variant="scale" className="hidden lg:block">
              <Mockup active={active} />
            </Reveal>

            <RevealStagger step={110} startDelay={140} className="flex flex-col">
              {PAIN_ITEMS.map((item, i) => (
                <div key={item.key}>
                  {i > 0 && <Divider />}
                  <PainItem
                    icon={item.icon}
                    title={item.title}
                    body={item.body}
                    active={active === item.key}
                    onActivate={() => setActive(item.key)}
                    mockup={<Mockup active={item.key} />}
                  />
                </div>
              ))}
            </RevealStagger>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
