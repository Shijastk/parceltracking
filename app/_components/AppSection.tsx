import { Fragment } from "react";
import { History, Home, MapPin, Plus, RefreshCw, Search, Settings, Truck } from "lucide-react";
import { Reveal, RevealStagger } from "./Reveal";

const APP_FEATURES = [
  {
    title: "Auto-import from email",
    body: "Connect Gmail or Outlook and we pull tracking numbers from your order confirmations automatically.",
  },
  {
    title: "Push the moment it moves",
    body: "Out for delivery, customs cleared, delivered. Your phone buzzes — no refreshing required.",
  },
  {
    title: "Widgets and home-screen ETAs",
    body: "Glance at your dock and see what's arriving today, tomorrow, and this week.",
  },
];

export function AppSection() {
  return (
    <section
      id="app"
      className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28"
    >
      <div className="relative overflow-hidden rounded-3xl border border-border-subtle bg-gradient-to-br from-brand-soft/60 via-white to-white p-8 sm:p-12 lg:p-16">
        <div
          className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(closest-side, rgba(249,115,22,0.25), rgba(249,115,22,0) 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <Reveal variant="up-sm">
              <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-strong">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-strong animate-[pulse-dot_1.6s_ease-in-out_infinite]" />
                The mobile app
              </p>
              <h2 className="mt-3 text-[2.25rem] sm:text-[2.75rem] lg:text-[3.25rem] font-semibold tracking-[-0.035em] text-ink leading-[1.05]">
                The web is great.<br />
                <span className="text-brand-strong">The app is better.</span>
              </h2>
              <p className="mt-5 text-[15px] leading-[1.6] text-ink-muted max-w-md">
                The web tracker is free and always will be. The mobile app adds the features you&apos;ll actually miss once you have them.
              </p>
            </Reveal>

            <RevealStagger
              step={110}
              startDelay={140}
              className="mt-8 flex flex-col gap-5 max-w-md"
            >
              {APP_FEATURES.map((f) => (
                <div key={f.title} className="flex gap-3.5">
                  <span className="mt-1 w-5 h-5 shrink-0 rounded-full bg-brand-strong text-white flex items-center justify-center text-[11px] font-bold">
                    ✓
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold text-ink leading-tight">
                      {f.title}
                    </p>
                    <p className="mt-1 text-[14px] text-ink-muted leading-[1.55]">
                      {f.body}
                    </p>
                  </div>
                </div>
              ))}
            </RevealStagger>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#"
                aria-label="Download on the App Store"
                className="inline-flex items-center gap-2.5 rounded-xl bg-ink text-white px-5 py-3 hover:bg-brand-strong transition-colors"
              >
                <AppleIcon className="w-6 h-6" />
                <span className="flex flex-col leading-none text-left">
                  <span className="text-[10px] opacity-70">Download on the</span>
                  <span className="text-[15px] font-semibold mt-0.5">App Store</span>
                </span>
              </a>
              <a
                href="#"
                aria-label="Get it on Google Play"
                className="inline-flex items-center gap-2.5 rounded-xl bg-ink text-white px-5 py-3 hover:bg-brand-strong transition-colors"
              >
                <PlayIcon className="w-6 h-6" />
                <span className="flex flex-col leading-none text-left">
                  <span className="text-[10px] opacity-70">Get it on</span>
                  <span className="text-[15px] font-semibold mt-0.5">Google Play</span>
                </span>
              </a>
            </div>

            <p className="mt-4 text-[12px] text-ink-muted">
              ★ 4.8 · 243k ratings · Free
            </p>
          </div>

          <Reveal variant="scale" className="hidden lg:block">
            <PhoneMockup />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] h-[580px]">
      <div className="absolute inset-0 rounded-[44px] bg-ink shadow-[0_40px_80px_-20px_rgba(10,10,15,0.35)] p-2.5">
        <div className="relative w-full h-full rounded-[36px] bg-white overflow-hidden flex flex-col">
          {/* Status bar */}
          <div className="px-5 pt-3 pb-1 flex items-center justify-between text-[10px] font-semibold text-ink">
            <span>9:41</span>
            <div className="flex items-center gap-1 text-ink">
              <SignalIcon />
              <WifiIcon />
              <BatteryIcon />
            </div>
          </div>

          {/* Header */}
          <div className="px-5 mt-2 flex items-center justify-between">
            <h3 className="text-[20px] font-semibold tracking-tight text-ink">
              My Shipments
            </h3>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                aria-label="Refresh"
                className="w-7 h-7 rounded-full bg-surface flex items-center justify-center"
              >
                <RefreshCw className="w-3.5 h-3.5 text-ink-muted" strokeWidth={2} />
              </button>
              <button
                type="button"
                aria-label="Search"
                className="w-7 h-7 rounded-full bg-surface flex items-center justify-center"
              >
                <Search className="w-3.5 h-3.5 text-ink-muted" strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="mx-5 mt-3 rounded-full bg-surface p-0.5 flex text-[11px]">
            <span className="flex-1 rounded-full bg-white py-1.5 text-center font-semibold text-ink shadow-[0_1px_2px_rgba(10,10,15,0.06)]">
              Active(2)
            </span>
            <span className="flex-1 rounded-full py-1.5 text-center font-medium text-ink-faint">
              Archive(1)
            </span>
          </div>

          {/* Cards */}
          <div className="px-3.5 mt-3 flex flex-col gap-2.5">
            <ShipmentCard
              carrier="DHL"
              title="iPhone 17 Pro"
              trackingNo="JD0146283944"
              expectedDate="28 Feb, 6:00 PM"
              urgent={false}
              status="In Transit"
              statusTone="info"
              location="Coimbature, TN"
              timeAgo="10 min ago"
              steps={4}
              activeIdx={2}
              progressColor="orange"
            />
            <ShipmentCard
              carrier="FedEx"
              title="JBL Speaker"
              trackingNo="TRK849201834"
              expectedDate="Today, 6:00 PM"
              urgent
              status="Out of Delivery"
              statusTone="brand"
              location="Kochi, KL"
              timeAgo="2 hrs ago"
              steps={4}
              activeIdx={3}
              progressColor="green"
            />
          </div>

          {/* Floating + button */}
          <button
            type="button"
            aria-label="Add shipment"
            className="absolute bottom-16 right-4 w-11 h-11 rounded-full bg-brand-strong text-white shadow-[0_8px_20px_-4px_rgba(249,115,22,0.45)] flex items-center justify-center"
          >
            <Plus className="w-5 h-5" strokeWidth={2.5} />
          </button>

          {/* Bottom nav */}
          <div className="absolute bottom-0 inset-x-0 h-12 bg-white border-t border-border-subtle flex items-center justify-around px-6">
            <div className="flex flex-col items-center gap-0.5 text-brand-strong">
              <Home className="w-4 h-4" strokeWidth={2.25} />
              <span className="text-[9px] font-semibold">Home</span>
            </div>
            <div className="flex flex-col items-center gap-0.5 text-ink-faint">
              <Settings className="w-4 h-4" strokeWidth={2} />
              <span className="text-[9px] font-medium">Settings</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating push notification */}
      <div className="absolute -left-8 top-28 w-[240px] rounded-2xl bg-white border border-border-subtle shadow-[0_20px_50px_-15px_rgba(10,10,15,0.25)] p-3 hidden xl:block">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-brand-strong text-white text-[10px] font-bold flex items-center justify-center">
            P
          </span>
          <span className="text-[10px] font-semibold text-ink">ParcelTracking</span>
          <span className="ml-auto text-[9px] text-ink-faint">now</span>
        </div>
        <p className="mt-1.5 text-[12px] font-semibold text-ink leading-tight">
          📦 JBL Speaker · Out for delivery
        </p>
        <p className="text-[11px] text-ink-muted leading-tight">
          Arriving in Kochi by 6:00 PM today.
        </p>
      </div>
    </div>
  );
}

function ShipmentCard({
  carrier,
  title,
  trackingNo,
  expectedDate,
  urgent,
  status,
  statusTone,
  location,
  timeAgo,
  steps,
  activeIdx,
  progressColor,
}: {
  carrier: "DHL" | "FedEx";
  title: string;
  trackingNo: string;
  expectedDate: string;
  urgent?: boolean;
  status: string;
  statusTone: "brand" | "info";
  location: string;
  timeAgo: string;
  steps: number;
  activeIdx: number;
  progressColor: "orange" | "green";
}) {
  return (
    <div className="rounded-2xl border border-border-subtle bg-white p-3">
      {/* Top section: logo + (title block + expected delivery) */}
      <div className="flex items-start gap-2.5">
        <CarrierLogo carrier={carrier} />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="text-[12px] font-semibold text-ink leading-tight truncate">
                {title}
              </p>
              <p className="text-[9px] text-ink-faint font-mono leading-tight mt-0.5">
                {trackingNo}
              </p>
            </div>
            <span className="text-ink-faint text-[14px] leading-none -mt-1">⋯</span>
          </div>
          <div className="mt-1.5 flex items-baseline justify-between gap-2">
            <span className="text-[10px] font-semibold text-ink">Expected delivery</span>
            <span
              className={`text-[10px] font-semibold ${
                urgent ? "text-brand-strong" : "text-ink-muted"
              }`}
            >
              {expectedDate}
            </span>
          </div>
        </div>
      </div>

      {/* Progress dots */}
      <ProgressDots steps={steps} activeIdx={activeIdx} color={progressColor} />

      {/* Status row */}
      <div className="mt-2.5 flex items-center gap-1.5 text-[9px]">
        <span
          className={`rounded-full px-1.5 py-0.5 font-semibold ${
            statusTone === "brand"
              ? "bg-brand-soft text-brand-strong"
              : "bg-teal-50 text-teal-700"
          }`}
        >
          {status}
        </span>
        <span className="text-ink flex items-center gap-0.5 min-w-0 font-medium">
          <MapPin className="w-2.5 h-2.5 shrink-0" fill="currentColor" strokeWidth={0} aria-hidden="true" />
          <span className="truncate">{location}</span>
        </span>
        <span className="ml-auto text-ink-faint shrink-0 flex items-center gap-0.5">
          <History className="w-2.5 h-2.5" strokeWidth={2} aria-hidden="true" />
          {timeAgo}
        </span>
      </div>
    </div>
  );
}

function ProgressDots({
  steps,
  activeIdx,
  color,
}: {
  steps: number;
  activeIdx: number;
  color: "orange" | "green";
}) {
  const filledBg = color === "orange" ? "bg-brand-strong" : "bg-emerald-500";
  return (
    <div className="mt-3 flex items-center px-0.5">
      {Array.from({ length: steps }).map((_, i) => {
        const isActive = i === activeIdx;
        const isCompleted = i < activeIdx;
        const isFilled = isActive || isCompleted;
        const lineCompleted = i < activeIdx;
        return (
          <Fragment key={i}>
            {isActive ? (
              <div
                className={`w-5 h-5 rounded-full ${filledBg} flex items-center justify-center shrink-0`}
              >
                <Truck className="w-2.5 h-2.5 text-white" strokeWidth={2.25} aria-hidden="true" />
              </div>
            ) : (
              <div
                className={`w-2 h-2 rounded-full shrink-0 ${
                  isFilled ? filledBg : "bg-border-strong"
                }`}
              />
            )}
            {i < steps - 1 && (
              <div
                className={`flex-1 h-[2px] ${
                  lineCompleted ? filledBg : "bg-border-strong"
                }`}
              />
            )}
          </Fragment>
        );
      })}
    </div>
  );
}

function CarrierLogo({ carrier }: { carrier: "DHL" | "FedEx" }) {
  if (carrier === "DHL") {
    return (
      <div className="w-9 h-9 rounded-md border-[1.5px] border-[#0070C0] p-0.5 shrink-0">
        <div className="w-full h-full rounded-full bg-[#FFCC00] flex items-center justify-center">
          <span className="text-[7px] font-black text-[#D40511] tracking-tight italic">
            DHL
          </span>
        </div>
      </div>
    );
  }
  return (
    <div className="w-9 h-9 rounded-full bg-[#4D148C] flex items-center justify-center shrink-0">
      <span className="text-[8px] font-black leading-none tracking-tight">
        <span className="text-white">Fed</span>
        <span className="text-[#FF6600]">Ex</span>
      </span>
    </div>
  );
}

function SignalIcon() {
  return (
    <svg width="12" height="8" viewBox="0 0 12 8" fill="currentColor" aria-hidden="true">
      <rect x="0" y="6" width="2" height="2" rx="0.5" />
      <rect x="3" y="4" width="2" height="4" rx="0.5" />
      <rect x="6" y="2" width="2" height="6" rx="0.5" />
      <rect x="9" y="0" width="2" height="8" rx="0.5" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" aria-hidden="true">
      <path d="M5.5 7.5l-1-1a1.4 1.4 0 0 1 2 0l-1 1z" fill="currentColor" />
      <path d="M2.5 4.5a4 4 0 0 1 6 0" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M0.5 2.5a7 7 0 0 1 10 0" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg width="18" height="8" viewBox="0 0 18 8" fill="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="14" height="7" rx="1.5" stroke="currentColor" />
      <rect x="2" y="2" width="11" height="4" rx="0.5" fill="currentColor" />
      <rect x="15.5" y="2.5" width="1.5" height="3" rx="0.5" fill="currentColor" />
    </svg>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.05 12.04c-.03-2.83 2.31-4.19 2.42-4.26-1.32-1.94-3.38-2.2-4.11-2.23-1.75-.18-3.41 1.03-4.3 1.03-.9 0-2.27-1.01-3.73-.98-1.92.03-3.69 1.12-4.68 2.83-2 3.47-.51 8.6 1.43 11.43.95 1.39 2.08 2.94 3.55 2.88 1.43-.06 1.97-.92 3.7-.92 1.72 0 2.21.92 3.72.89 1.54-.03 2.51-1.4 3.45-2.79 1.09-1.6 1.53-3.16 1.55-3.24-.03-.01-2.98-1.14-3.01-4.54zM14.3 3.86c.78-.95 1.31-2.26 1.17-3.57-1.13.05-2.5.76-3.31 1.69-.72.83-1.36 2.17-1.19 3.45 1.27.1 2.55-.64 3.33-1.57z" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M3.6 2.4c-.4.4-.6.9-.6 1.6v16c0 .7.2 1.2.6 1.6L13 12 3.6 2.4z" fill="#34A853" />
      <path d="M16 9 5.4 3 14 12l-8.6 9 10.6-6L20 12l-4-3z" fill="#FBBC05" />
      <path d="m20 12-4-3-3 3 3 3 4-3z" fill="#EA4335" />
      <path d="M3.6 2.4 13 12l3-3L5.4 3c-.7-.4-1.3-.4-1.8-.1zM3.6 21.6c.5.4 1.1.4 1.8 0L16 15l-3-3-9.4 9.6z" fill="#4285F4" />
    </svg>
  );
}
