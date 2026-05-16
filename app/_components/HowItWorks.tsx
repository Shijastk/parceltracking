import Image from "next/image";
import { Lock, Plug, RefreshCw, Sparkles, Package } from "lucide-react";
import { Reveal, RevealStagger } from "./Reveal";
import { brandLogo } from "./brandfetch";
import type { IconProps } from "./icons";

type Step = {
  step: string;
  kicker: string;
  icon: (props: IconProps) => React.ReactElement;
  title: string;
  body: string;
  visual: React.ReactNode;
};

function PlugIcon({ className }: IconProps) {
  return <Plug className={className} aria-hidden="true" />;
}
function SyncIcon({ className }: IconProps) {
  return <RefreshCw className={className} aria-hidden="true" />;
}
function SparkIcon({ className }: IconProps) {
  return <Sparkles className={className} aria-hidden="true" />;
}
function LockIcon({ className }: IconProps) {
  return <Lock className={className} aria-hidden="true" />;
}

const STEPS: Step[] = [
  {
    step: "01",
    kicker: "Paste",
    icon: PlugIcon,
    title: "Drop in any tracking number",
    body: "From any store, any carrier, any country. No login, no copy-pasting carrier sites.",
    visual: <CarriersVisual />,
  },
  {
    step: "02",
    kicker: "Detect",
    icon: SyncIcon,
    title: "We find your parcel in seconds",
    body: "1,247 couriers worldwide, auto-identified from the tracking number — even the obscure ones.",
    visual: <ShipmentsTableVisual />,
  },
  {
    step: "03",
    kicker: "Follow",
    icon: SparkIcon,
    title: "Live updates till the doorbell rings",
    body: "Smart ETAs that beat the carrier's own estimate. Push notifications on the app the moment it moves.",
    visual: <RetentionVisual />,
  },
];

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
      <Reveal variant="up-sm" className="max-w-3xl">
        <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-strong">
          <LockIcon className="w-3.5 h-3.5" />
          How it works
        </p>
        <h2 className="mt-3 text-[2.25rem] sm:text-5xl font-semibold tracking-[-0.03em] text-ink leading-[1.05]">
          From order to doorstep —<br />
          <span className="text-ink-muted">one number, every update.</span>
        </h2>
        <p className="mt-5 text-[15px] leading-[1.6] text-ink-muted max-w-xl">
          Paste your tracking number, we auto-identify the courier across 1,247 services
          worldwide, and you get live updates until your package arrives.
        </p>
      </Reveal>

      <RevealStagger
        step={120}
        startDelay={120}
        className="mt-14 grid md:grid-cols-3 gap-px bg-border-subtle border border-border-subtle rounded-2xl overflow-hidden"
      >
        {STEPS.map((step) => (
          <StepCard key={step.title} step={step} />
        ))}
      </RevealStagger>
    </section>
  );
}

function StepCard({ step }: { step: Step }) {
  const Icon = step.icon;
  return (
    <div className="bg-white p-8 lg:p-10 flex flex-col gap-6 hover:bg-surface/40 transition-colors">
      <div className="flex items-center gap-2.5 text-ink">
        <span className="w-8 h-8 rounded-lg bg-surface border border-border-subtle flex items-center justify-center text-brand-strong">
          <Icon className="w-4 h-4" />
        </span>
        <h3 className="text-[17px] font-semibold tracking-tight">{step.title}</h3>
      </div>

      <p className="text-[14.5px] leading-[1.55] text-ink-muted max-w-[26ch]">{step.body}</p>

      <div className="mt-2 rounded-xl border border-border-subtle bg-surface/60 p-4 h-[200px] flex items-center justify-center overflow-hidden relative">
        {step.visual}
      </div>
    </div>
  );
}

/* ---------- Visuals ---------- */

function CarriersVisual() {
  return (
    <div className="relative w-full h-full">
      {/* Background grid */}
      <svg
        className="absolute inset-0 w-full h-full text-border-subtle"
        aria-hidden="true"
      >
        <defs>
          <pattern id="how-grid" width="22" height="22" patternUnits="userSpaceOnUse">
            <path d="M22 0H0V22" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#how-grid)" />
      </svg>

      {/* Connecting lines — static dashed */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        <g stroke="rgba(10,10,15,0.12)" strokeWidth="1" strokeDasharray="4 4" fill="none">
          <line x1="50%" y1="50%" x2="14%" y2="20%" />
          <line x1="50%" y1="50%" x2="86%" y2="26%" />
          <line x1="50%" y1="50%" x2="16%" y2="82%" />
          <line x1="50%" y1="50%" x2="86%" y2="78%" />
        </g>
      </svg>

      {/* Center brand logo with single ring pulse on reveal */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <span className="reveal-once-ring absolute left-1/2 top-1/2 w-14 h-14 rounded-2xl bg-brand/30" />
        <div className="relative w-14 h-14 rounded-2xl bg-brand shadow-[0_10px_30px_-8px_rgba(249,115,22,0.55)] flex items-center justify-center">
          <Package className="w-7 h-7 text-white" strokeWidth={1.75} aria-hidden="true" />
        </div>
      </div>

      {/* Carrier badges */}
      <CarrierBadge className="left-3 top-3" domain="fedex.com" title="FedEx" />
      <CarrierBadge className="right-3 top-5" domain="ups.com" title="UPS" />
      <CarrierBadge className="left-4 bottom-3" domain="dhl.com" title="DHL" />
      <CarrierBadge className="right-3 bottom-4" domain="usps.com" title="USPS" />
    </div>
  );
}

function CarrierBadge({
  className,
  domain,
  title,
}: {
  className: string;
  domain: string;
  title: string;
}) {
  return (
    <div
      title={title}
      className={`absolute w-9 h-9 rounded-full bg-white shadow-sm ring-1 ring-black/[0.06] flex items-center justify-center overflow-hidden ${className}`}
    >
      <Image
        src={brandLogo(domain)}
        alt={title}
        width={28}
        height={28}
        className="w-6 h-6 object-contain"
        unoptimized
      />
    </div>
  );
}

function ShipmentsTableVisual() {
  const rows = [
    { id: "#OT-2104", carrier: "FedEx", eta: "Today",  status: "in",   statusText: "In transit" },
    { id: "#OT-2103", carrier: "DHL",   eta: "May 16", status: "in",   statusText: "Out for delivery" },
    { id: "#OT-2102", carrier: "UPS",   eta: "May 17", status: "warn", statusText: "Delayed" },
    { id: "#OT-2101", carrier: "USPS",  eta: "May 14", status: "ok",   statusText: "Delivered" },
  ];
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 rounded-lg bg-white border border-border-subtle shadow-[0_1px_0_rgba(10,10,15,0.04)] overflow-hidden">
        <div className="grid grid-cols-[1fr_1fr_1fr_auto] gap-3 px-3 py-2 border-b border-border-subtle bg-surface/70 text-[9px] font-semibold uppercase tracking-[0.12em] text-ink-faint">
          <span>Order</span>
          <span>Carrier</span>
          <span>ETA</span>
          <span>Status</span>
        </div>
        {rows.map((r, i) => (
          <div
            key={r.id}
            className="reveal-once-row grid grid-cols-[1fr_1fr_1fr_auto] gap-3 items-center px-3 py-[7px] text-[11px] border-b border-border-subtle last:border-b-0"
            style={{ animationDelay: `${0.2 + i * 0.18}s` }}
          >
            <span className="font-medium text-ink">{r.id}</span>
            <span className="text-ink-muted">{r.carrier}</span>
            <span className="text-ink-muted">{r.eta}</span>
            <StatusPill kind={r.status as "in" | "warn" | "ok"}>{r.statusText}</StatusPill>
          </div>
        ))}
      </div>

      {/* Sync chip */}
      <div className="absolute -bottom-1 right-1 flex items-center gap-1.5 bg-ink text-white text-[10px] font-medium rounded-full px-2.5 py-1 shadow-lg">
        <RefreshCw className="w-3 h-3" strokeWidth={2.5} aria-hidden="true" />
        Synced
      </div>
    </div>
  );
}

function StatusPill({ kind, children }: { kind: "in" | "warn" | "ok"; children: React.ReactNode }) {
  const styles: Record<typeof kind, string> = {
    in: "bg-[#FFF1E6] text-brand-strong",
    warn: "bg-[#FEF2C7] text-[#A16207]",
    ok: "bg-[#DCFCE7] text-[#15803D]",
  };
  return (
    <span className={`text-[9.5px] font-semibold px-1.5 py-[2px] rounded-md whitespace-nowrap ${styles[kind]}`}>
      {children}
    </span>
  );
}

function RetentionVisual() {
  const steps = [
    { label: "Ordered", on: true },
    { label: "Packed", on: true },
    { label: "Shipped", on: true },
    { label: "Out", on: true, active: true },
    { label: "Delivered", on: false },
  ];
  const activeIndex = steps.findIndex((s) => s.active);

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 rounded-lg bg-white border border-border-subtle shadow-[0_1px_0_rgba(10,10,15,0.04)] p-3.5 flex flex-col">
        {/* Status row */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft text-brand-strong text-[9.5px] font-bold uppercase tracking-wider px-2 py-[3px]">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-strong animate-[pulse-dot_1.6s_ease-in-out_infinite]" />
            Out for delivery
          </span>
          <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-[#DCFCE7] text-[#15803D] text-[9px] font-semibold px-1.5 py-[2px]">
            ✓ On time
          </span>
        </div>

        {/* ETA headline */}
        <div className="mt-2">
          <p className="text-[20px] font-semibold tracking-[-0.02em] text-ink leading-none">
            Arrives today
          </p>
          <p className="mt-1 text-[10px] font-medium text-ink-muted">
            6:30 PM · Jamie M. · 4 stops away
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-auto pt-2 relative">
          {/* Track */}
          <div className="absolute left-1.5 right-1.5 top-[9px] h-[2px] bg-border-subtle rounded-full" />
          <div
            className="absolute left-1.5 top-[9px] h-[2px] bg-brand-strong rounded-full"
            style={{ width: `calc(${(activeIndex / (steps.length - 1)) * 100}% - 6px)` }}
          />

          <div className="relative flex items-end justify-between">
            {steps.map((s, i) => (
              <div
                key={s.label}
                className="flex flex-col items-center gap-1"
                style={{ width: `${100 / steps.length}%` }}
              >
                {s.active ? (
                  <span className="relative flex items-center justify-center">
                    <span className="absolute w-6 h-6 rounded-full bg-brand-strong/20 animate-[pulse-dot_1.6s_ease-in-out_infinite]" />
                    <span className="relative w-5 h-5 rounded-full bg-brand-strong border-2 border-white shadow-[0_2px_6px_-1px_rgba(249,115,22,0.5)] flex items-center justify-center">
                      <TruckGlyph className="w-2.5 h-2.5 text-white" />
                    </span>
                  </span>
                ) : (
                  <span
                    className={`w-2.5 h-2.5 rounded-full border-2 mt-[3.5px] ${
                      s.on
                        ? "bg-brand-strong border-brand-strong"
                        : "bg-white border-border-strong"
                    }`}
                  />
                )}
                <span
                  className={`text-[8.5px] leading-tight whitespace-nowrap ${
                    s.active
                      ? "font-semibold text-ink"
                      : s.on
                      ? "font-medium text-ink-muted"
                      : "font-medium text-ink-faint"
                  }`}
                >
                  {i === activeIndex ? "Out for delivery" : s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating push notification chip — anchored top, doesn't fight the status pill */}
      <div className="absolute -top-2 right-3 bg-ink text-white rounded-full px-2.5 py-1 shadow-[0_8px_20px_-6px_rgba(10,10,15,0.4)] flex items-center gap-1.5 text-[9.5px] font-semibold">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand animate-[pulse-dot_1.6s_ease-in-out_infinite]" />
        Push sent · just now
      </div>
    </div>
  );
}

function TruckGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 7h11v9H3zM14 10h4l3 3v3h-7zM7 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM19 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

