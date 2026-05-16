"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  format?: "compact" | "comma" | "plain";
  label: string;
  sub?: string;
};

const STATS: Stat[] = [
  { to: 12, suffix: "M+", format: "plain", label: "parcels tracked", sub: "and counting" },
  { to: 1247, format: "comma", label: "carriers supported", sub: "across 220 countries" },
  { to: 4.8, decimals: 1, suffix: "★", format: "plain", label: "App Store rating", sub: "243k reviews" },
];

export function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
      <div className="max-w-2xl mx-auto text-center">
        <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-strong">
          By the numbers
        </p>
        <h2 className="mt-3 text-[2rem] sm:text-[2.5rem] font-semibold tracking-[-0.03em] text-ink leading-[1.1]">
          Built to find every parcel.
        </h2>
      </div>

      <div className="mt-12 lg:mt-16 grid grid-cols-3 gap-4 sm:gap-8 lg:gap-12 text-center">
        {STATS.map((s) => (
          <StatItem key={s.label} stat={s} />
        ))}
      </div>
    </section>
  );
}

function StatItem({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      const reduce =
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

      if (reduce) {
        setValue(stat.to);
        return;
      }

      const duration = 1400;
      const startTime = performance.now();
      const step = (now: number) => {
        const t = Math.min(1, (now - startTime) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(stat.to * eased);
        if (t < 1) requestAnimationFrame(step);
        else setValue(stat.to);
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            start();
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.4 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [stat.to]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <p className="text-[2rem] sm:text-[3rem] lg:text-[3.75rem] font-semibold tracking-[-0.035em] leading-none text-ink tabular-nums">
        {stat.prefix}
        {formatValue(value, stat)}
        {stat.suffix}
      </p>
      <p className="mt-2 sm:mt-3 text-[12px] sm:text-[14px] font-medium text-ink leading-tight">
        {stat.label}
      </p>
      {stat.sub && (
        <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-[13px] text-ink-muted leading-tight">
          {stat.sub}
        </p>
      )}
    </div>
  );
}

function formatValue(v: number, stat: Stat) {
  const decimals = stat.decimals ?? 0;
  const fixed = decimals > 0 ? v.toFixed(decimals) : Math.round(v).toString();
  if (stat.format === "comma") {
    const n = decimals > 0 ? Number(fixed) : Math.round(v);
    return n.toLocaleString("en-US");
  }
  return fixed;
}
