import { BellIcon, CheckBadge } from "./icons";

export function NotificationsMockup() {
  return (
    <div className="w-full max-w-[320px] flex flex-col items-center">
      <div className="inline-flex items-center gap-1.5 rounded-full bg-white shadow-md px-2.5 py-1 text-[11px] font-medium text-ink">
        <BellIcon className="w-3 h-3 text-brand-strong" />
        Smart notifications
        <CheckBadge className="w-3 h-3 text-emerald-500" />
      </div>

      <div className="mt-3 w-full space-y-1.5">
        <NotifCard
          channel="SMS"
          time="now"
          title="Your order is out for delivery"
          body="Arriving by 6 PM today. Tap to track."
          accent="bg-brand"
        />
        <NotifCard
          channel="Email"
          time="2h"
          title="Shipped from our warehouse"
          body="Tracking #BL-29481 · DHL Express"
          accent="bg-sky-500"
        />
        <NotifCard
          channel="WhatsApp"
          time="1d"
          title="Order confirmed · Bloom & Co"
          body="We'll keep you posted at every step."
          accent="bg-emerald-500"
          muted
        />
      </div>
    </div>
  );
}

function NotifCard({
  channel,
  time,
  title,
  body,
  accent,
  muted = false,
}: {
  channel: string;
  time: string;
  title: string;
  body: string;
  accent: string;
  muted?: boolean;
}) {
  return (
    <div
      className={`rounded-xl bg-white shadow-lg px-3 py-1.5 flex items-start gap-2.5 ${
        muted ? "opacity-80" : ""
      }`}
    >
      <span
        className={`mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-lg text-white ${accent}`}
      >
        <BellIcon className="w-3 h-3" />
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[9px] font-semibold uppercase tracking-wider text-ink-muted">
            {channel}
          </span>
          <span className="text-[9px] text-ink-faint">{time}</span>
        </div>
        <div className="text-[12px] font-semibold text-ink leading-tight truncate">{title}</div>
        <div className="text-[10px] text-ink-muted leading-snug truncate">{body}</div>
      </div>
    </div>
  );
}
