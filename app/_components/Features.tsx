import { Check, Link2, Shield, ShieldCheck, Truck } from "lucide-react";
import { ArrowRight } from "./icons";
import { Reveal, RevealStagger } from "./Reveal";

export function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
      <Reveal variant="up-sm" className="max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-strong">
          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse-dot" />
          Features
        </div>
        <h2 className="mt-4 text-[2.25rem] sm:text-5xl lg:text-[3.4rem] font-semibold tracking-[-0.035em] text-ink leading-[1.02]">
          Everything to follow<br />
          <span className="text-ink-faint">your parcel.</span>
        </h2>
        <p className="mt-5 text-[15px] leading-[1.6] text-ink-muted max-w-xl">
          From the moment your order ships to the moment it lands on your doorstep — one clean page, push alerts on the app, and ETAs you can actually trust.
        </p>
      </Reveal>

      <RevealStagger
        step={110}
        startDelay={120}
        className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5"
      >
        <HeroCard />
        <NotificationsCard />
        <AnalyticsCard />
        <ComplianceCard />
      </RevealStagger>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/* HERO — Live tracking page (DARK)                                          */
/* ────────────────────────────────────────────────────────────────────────── */

function HeroCard() {
  return (
    <div className="relative lg:col-span-7 lg:row-span-2 min-h-[560px] rounded-3xl bg-ink overflow-hidden p-7 lg:p-9 flex flex-col">
      {/* Brand glow */}
      <div
        className="absolute -top-32 -right-24 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(73, 33, 4, 0.45) 0%, rgba(249,115,22,0) 65%)",
        }}
        aria-hidden="true"
      />
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 40%, transparent 95%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 40%, transparent 95%)",
        }}
        aria-hidden="true"
      />

      {/* LIVE badge */}
      <div className="relative flex items-start justify-between">
        <div>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-brand">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse-dot" />
            Live tracking
          </span>
          <h3 className="mt-3 text-[1.75rem] lg:text-[2rem] font-semibold tracking-[-0.025em] text-white leading-[1.1]">
            One clean page<br />
            for every parcel.
          </h3>
          <p className="mt-3 text-[14.5px] leading-[1.55] text-white/65 max-w-md">
            Every scan, every handoff — on one page. Share the link with whoever&apos;s waiting at home.
          </p>
        </div>
      </div>

      <TrackingPageMockup />

      <a
        href="#app"
        className="relative mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-white text-ink px-4 py-2 text-[13px] font-semibold hover:bg-brand hover:text-white transition-colors"
      >
        Track a parcel <ArrowRight className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}

function TrackingPageMockup() {
  return (
    <div className="relative mt-7 flex-1 rounded-2xl bg-white overflow-hidden shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6),0_10px_24px_-10px_rgba(249,115,22,0.25)] ring-1 ring-white/10">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-border-subtle bg-surface">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <div className="ml-3 flex-1 rounded-md bg-white border border-border-subtle px-2.5 py-1 text-[10px] text-ink-faint font-mono flex items-center gap-1.5">
          <Shield className="w-2.5 h-2.5 text-emerald-500" strokeWidth={2} aria-hidden="true" />
          parceltracking.com/track/1Z999AA1
        </div>
      </div>

      <div className="grid grid-cols-[1.1fr_1fr]">
        {/* Left: order */}
        <div className="p-5 border-r border-border-subtle">
          {/* Brand bar */}
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-brand-strong text-white flex items-center justify-center text-[12px] font-bold">O</span>
            <span className="text-[13px] font-semibold tracking-tight text-ink">PARCELTRACKING</span>
            <span className="ml-auto text-[10px] text-ink-faint font-mono">1Z999AA1</span>
          </div>

          {/* Status hero */}
          <div className="mt-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-strong">
              Out for delivery
            </p>
            <p className="mt-1.5 text-[20px] font-semibold text-ink tracking-tight leading-tight">
              Arriving today
            </p>
            <p className="text-[12px] text-ink-muted font-medium">between 4:00 – 5:00 PM</p>
          </div>

          {/* Carrier card */}
          <div className="mt-4 rounded-xl bg-brand-soft p-3 flex items-center gap-3">
            <span className="w-9 h-9 rounded-lg bg-white border border-border-subtle text-ink flex items-center justify-center shrink-0">
              <Truck className="w-4 h-4 text-brand-strong" strokeWidth={1.8} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold text-ink leading-tight">FedEx Ground</p>
              <p className="text-[10px] text-ink-muted leading-tight">Last scan · Bristol Hub, 1:42 PM</p>
            </div>
          </div>
        </div>

        {/* Right: timeline */}
        <div className="p-5 bg-surface/50 flex flex-col">
          <div className="relative flex-1">
            <div className="absolute left-[5px] top-1 bottom-1 w-px bg-border-strong" />
            <TimelineItem label="Order placed" sub="Mon, 9:14 AM" done />
            <TimelineItem label="Packed" sub="Mon, 4:02 PM" done />
            <TimelineItem label="Out for delivery" sub="Today, 2:30 PM" active />
            <TimelineItem label="Delivered" sub="ETA 4:30 PM" />
          </div>
        </div>
      </div>

      {/* Share strip */}
      <div className="px-5 py-3 border-t border-border-subtle bg-white flex items-center gap-3">
        <div className="w-8 h-8 rounded-md bg-brand-soft flex items-center justify-center shrink-0">
          <Link2 className="w-4 h-4 text-brand-strong" strokeWidth={1.8} aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold text-ink leading-tight">Share this tracking page</p>
          <p className="text-[10px] text-ink-muted leading-tight">No signup — anyone with the link can follow along</p>
        </div>
        <button className="text-[10px] font-bold uppercase tracking-wider text-white bg-ink rounded-full px-3 py-1.5 shrink-0">
          Copy link
        </button>
      </div>
    </div>
  );
}

function TimelineItem({
  label,
  sub,
  done,
  active,
}: {
  label: string;
  sub: string;
  done?: boolean;
  active?: boolean;
}) {
  return (
    <div className="relative pl-4 pb-4 last:pb-0">
      <span
        className={`absolute left-0 top-0.5 w-[11px] h-[11px] rounded-full flex items-center justify-center ${
          done
            ? "bg-emerald-500 text-white"
            : active
            ? "bg-brand text-white ring-[3px] ring-brand/25"
            : "bg-white border border-border-strong"
        }`}
      >
        {done && <Check className="w-2 h-2" strokeWidth={3.5} aria-hidden="true" />}
      </span>
      <div className={`text-[10.5px] leading-tight ${active ? "font-semibold text-ink" : "font-medium text-ink"}`}>
        {label}
      </div>
      <div className="text-[9px] text-ink-faint leading-tight mt-0.5">{sub}</div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/* NOTIFICATIONS                                                              */
/* ────────────────────────────────────────────────────────────────────────── */

function NotificationsCard() {
  return (
    <div className="relative lg:col-span-5 min-h-[272px] rounded-3xl bg-white border border-border-subtle overflow-hidden p-7 lg:p-8 flex flex-col">
      {/* Decorative gradient */}
      <div
        className="absolute -bottom-24 -right-24 w-[280px] h-[280px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(249,115,22,0.18) 0%, rgba(249,115,22,0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative flex items-start justify-between">
        <div>
          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-strong">
            <span className="rounded-full bg-brand-soft px-1.5 py-[1px]">App only</span>
          </span>
          <h3 className="mt-2.5 text-[1.4rem] font-semibold tracking-tight text-ink leading-tight">
            Push the moment<br />it moves.
          </h3>
        </div>
        <div className="text-right">
          <p className="text-[1.5rem] font-semibold tracking-tight text-ink leading-none">
            12M<span className="text-brand-strong">↑</span>
          </p>
          <p className="text-[9px] uppercase tracking-wider text-ink-faint font-bold mt-1">
            sent this month
          </p>
        </div>
      </div>

      <div className="relative mt-5 flex-1">
        <NotifToast
          channel="SMS"
          time="just now"
          title="📦 Out for delivery"
          body="Arriving today between 4–5 PM."
          offset="top-0"
          depth={0}
        />
        <NotifToast
          channel="WhatsApp"
          time="2h ago"
          title="✈️ Cleared customs"
          body="Departed Frankfurt · in transit to your country."
          offset="top-[58px]"
          depth={1}
        />
        <NotifToast
          channel="Email"
          time="yesterday"
          title="✓ Picked up by carrier"
          body="DHL has your parcel · ETA Friday."
          offset="top-[110px]"
          depth={2}
        />
      </div>
    </div>
  );
}

const CHANNEL_STYLES: Record<string, { bg: string; text: string; dot: string }> = {
  SMS: { bg: "bg-emerald-500", text: "text-emerald-700", dot: "bg-emerald-500" },
  WhatsApp: { bg: "bg-[#25D366]", text: "text-[#128C7E]", dot: "bg-[#25D366]" },
  Email: { bg: "bg-brand", text: "text-brand-strong", dot: "bg-brand" },
};

function NotifToast({
  channel,
  time,
  title,
  body,
  offset,
  depth,
}: {
  channel: keyof typeof CHANNEL_STYLES | string;
  time: string;
  title: string;
  body: string;
  offset: string;
  depth: number;
}) {
  const s = CHANNEL_STYLES[channel] ?? CHANNEL_STYLES.Email;
  const opacity = depth === 0 ? "opacity-100" : depth === 1 ? "opacity-85" : "opacity-55";
  const scale = depth === 0 ? "scale-100" : depth === 1 ? "scale-[0.97]" : "scale-[0.93]";
  return (
    <div
      className={`absolute ${offset} left-0 right-0 ${opacity} ${scale} origin-top rounded-xl border border-border-subtle bg-white p-3 shadow-[0_1px_0_rgba(10,10,15,0.03),0_12px_28px_-18px_rgba(10,10,15,0.25)]`}
      style={{ zIndex: 10 - depth }}
    >
      <div className="flex items-center gap-2.5">
        <span className={`w-7 h-7 rounded-lg ${s.bg} text-white flex items-center justify-center text-[10px] font-bold shrink-0`}>
          {channel === "SMS" ? "SMS" : channel === "WhatsApp" ? "WA" : "@"}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className={`text-[10px] font-bold uppercase tracking-wider ${s.text}`}>
              {channel}
            </span>
            <span className="text-[9px] text-ink-faint">· {time}</span>
            {depth === 0 && (
              <span className={`ml-auto w-1.5 h-1.5 rounded-full ${s.dot} animate-pulse-dot`} />
            )}
          </div>
          <p className="text-[12px] font-semibold text-ink leading-tight mt-0.5 truncate">
            {title}
          </p>
          <p className="text-[11px] text-ink-muted leading-tight truncate">{body}</p>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/* ANALYTICS                                                                  */
/* ────────────────────────────────────────────────────────────────────────── */

function AnalyticsCard() {
  return (
    <div className="relative lg:col-span-3 min-h-[272px] rounded-3xl bg-white border border-border-subtle overflow-hidden p-7 flex flex-col">
      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink-faint">
        Smart ETAs
      </span>
      <h3 className="mt-2.5 text-[1.25rem] font-semibold tracking-tight text-ink leading-tight">
        ETAs that are<br />actually right.
      </h3>

      {/* Big number */}
      <div className="mt-5 flex items-baseline gap-2">
        <p className="text-[2.5rem] font-semibold tracking-[-0.04em] text-ink leading-none">
          97.4<span className="text-ink-faint">%</span>
        </p>
        <span className="rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5">
          beats carrier
        </span>
      </div>
      <p className="text-[10px] uppercase tracking-wider text-ink-faint font-bold mt-1.5">
        on-time accuracy · 30d
      </p>

      {/* Bar chart */}
      <div className="mt-auto pt-5">
        <div className="flex items-end justify-between gap-1.5 h-[64px]">
          {[38, 56, 44, 72, 60, 88, 76].map((h, i) => {
            const isPeak = i === 5;
            return (
              <div key={i} className="flex-1 flex flex-col justify-end h-full">
                <div
                  className={`rounded-t ${isPeak ? "bg-brand" : "bg-ink/85"}`}
                  style={{ height: `${h}%` }}
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>
        <div className="mt-2 flex justify-between text-[8.5px] font-medium text-ink-faint">
          <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/* COMPLIANCE                                                                 */
/* ────────────────────────────────────────────────────────────────────────── */

function ComplianceCard() {
  return (
    <div className="relative lg:col-span-2 min-h-[272px] rounded-3xl bg-gradient-to-br from-brand-soft to-white border border-brand/15 overflow-hidden p-7 flex flex-col">
      {/* Decorative shield outline */}
      <ShieldCheck
        className="absolute -bottom-6 -right-6 w-40 h-40 text-brand/10"
        strokeWidth={1.5}
        aria-hidden="true"
      />

      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-strong">
        Anywhere
      </span>
      <h3 className="mt-2.5 text-[1.25rem] font-semibold tracking-tight text-ink leading-tight">
        Any phone.<br />Any browser.
      </h3>

      <div className="relative mt-5">
        <p className="text-[2.5rem] font-semibold tracking-[-0.04em] text-ink leading-none">
          Free<span className="text-ink-faint">.</span>
        </p>
        <p className="text-[10px] uppercase tracking-wider text-ink-faint font-bold mt-1.5">
          no signup needed
        </p>
      </div>

      <div className="relative mt-auto pt-5 flex flex-wrap gap-1.5">
        <Pill>iOS</Pill>
        <Pill>Android</Pill>
        <Pill>Web</Pill>
        <Pill>No ads</Pill>
      </div>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-white border border-border-subtle px-2 py-1 text-[10px] font-semibold text-ink">
      <Check className="w-2.5 h-2.5 text-brand-strong" strokeWidth={3} aria-hidden="true" />
      {children}
    </span>
  );
}
