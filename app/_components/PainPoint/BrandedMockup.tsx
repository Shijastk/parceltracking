import { Check } from "lucide-react";
import { CheckBadge, PackageIcon } from "./icons";

export function BrandedMockup() {
  return (
    <div className="w-full max-w-[400px] flex flex-col items-center">
      <div className="inline-flex items-center gap-1.5 rounded-full bg-white shadow-md px-2.5 py-1 text-[11px] font-medium text-ink">
        <PackageIcon className="w-3 h-3 text-brand-strong" />
        Live tracking page
        <CheckBadge className="w-3 h-3 text-emerald-500" />
      </div>

      <div className="mt-2.5 w-full rounded-xl bg-white shadow-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-3.5 py-2 border-b border-black/[0.06]">
          <div className="flex items-center gap-1.5 text-[12px] font-semibold text-ink">
            <span className="w-4 h-4 rounded-[5px] bg-brand inline-flex items-center justify-center text-white text-[9px] font-bold">
              O
            </span>
            PARCELTRACKING
          </div>
          <span className="text-[10px] font-medium text-ink-faint">1Z999AA1</span>
        </div>

        {/* Two-column body */}
        <div className="grid grid-cols-[1fr_1px_1fr] px-3 py-2.5 gap-x-3">
          {/* Left: order summary + ETA highlight */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-md bg-brand-soft flex items-center justify-center shrink-0">
                <PackageIcon className="w-3.5 h-3.5 text-brand-strong" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-semibold text-ink leading-tight truncate">
                  Refill kit
                </div>
                <div className="text-[9px] text-ink-muted leading-tight">2 items · $14</div>
              </div>
            </div>

            <div className="rounded-md bg-brand-soft px-2 py-1.5">
              <div className="text-[8px] font-bold uppercase tracking-wider text-brand-strong">
                Arrives
              </div>
              <div className="text-[12px] font-semibold text-ink leading-tight">Tomorrow</div>
              <div className="text-[9px] font-medium text-ink-muted">by 6:00 PM</div>
            </div>
          </div>

          {/* Divider */}
          <div className="bg-black/[0.06]" />

          {/* Right: compact timeline */}
          <div className="relative">
            <div className="absolute left-[5px] top-1 bottom-1 w-px bg-black/[0.08]" />
            <TimelineDot label="Order placed" sub="Mon" done />
            <TimelineDot label="Shipped" sub="Tue" done />
            <TimelineDot label="Out for delivery" sub="Today" active />
            <TimelineDot label="Delivered" sub="Pending" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineDot({
  label,
  sub,
  done = false,
  active = false,
}: {
  label: string;
  sub: string;
  done?: boolean;
  active?: boolean;
}) {
  return (
    <div className="relative pl-4 pb-1.5 last:pb-0">
      <span
        className={`absolute left-0 top-0.5 w-[11px] h-[11px] rounded-full flex items-center justify-center ${
          done
            ? "bg-emerald-500 text-white"
            : active
            ? "bg-brand text-white ring-[3px] ring-brand/20"
            : "bg-white border border-black/[0.15]"
        }`}
      >
        {done && <Check className="w-2 h-2" strokeWidth={3.5} aria-hidden="true" />}
      </span>
      <div
        className={`text-[10px] leading-tight ${
          active ? "font-semibold text-ink" : "font-medium text-ink"
        }`}
      >
        {label}
      </div>
      <div className="text-[8px] text-ink-muted leading-tight">{sub}</div>
    </div>
  );
}
