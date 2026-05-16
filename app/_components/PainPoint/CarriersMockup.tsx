import Image from "next/image";
import { brandLogo } from "../brandfetch";
import { RefreshIcon } from "./icons";

const MARKETPLACES: { name: string; domain: string }[] = [
  { name: "AliExpress", domain: "aliexpress.com" },
  { name: "eBay", domain: "ebay.com" },
  { name: "Amazon", domain: "amazon.com" },
  { name: "Temu", domain: "temu.com" },
];

export function CarriersMockup() {
  return (
    <div className="relative w-full max-w-[360px] aspect-[4/3]">
      {/* Main app window */}
      <div className="absolute left-0 right-10 top-3 bottom-9 rounded-xl bg-white shadow-xl overflow-hidden flex">
        {/* Dark sidebar with subtle nav icons */}
        <div className="w-9 bg-[#1A1A1D] flex flex-col items-center py-2.5 gap-2">
          <div className="w-5.5 h-5.5 w-[22px] h-[22px] rounded-md bg-brand flex items-center justify-center text-white text-[10px] font-bold">
            B
          </div>
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-[22px] h-[22px] rounded-md bg-white/[0.08] flex items-center justify-center"
            >
              <div className="w-2 h-2 rounded-sm bg-white/30" />
            </div>
          ))}
        </div>

        {/* Content placeholder */}
        <div className="flex-1 p-4 space-y-2">
          <div className="h-1.5 rounded-full bg-black/[0.08] w-[70%]" />
          <div className="h-1.5 rounded-full bg-black/[0.06] w-[55%]" />
          <div className="mt-3 flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-black/[0.06] flex items-center justify-center text-[9px] font-bold text-ink-muted">
              $
            </div>
            <div className="h-1.5 rounded-full bg-black/[0.08] w-[45%]" />
          </div>
          <div className="h-1.5 rounded-full bg-black/[0.06] w-[60%]" />
          <div className="h-1.5 rounded-full bg-black/[0.06] w-[40%]" />
        </div>
      </div>

      {/* Marketplace tiles - floating white card with 2x2 grid */}
      <div className="absolute right-1 top-1/2 -translate-y-1/2 grid grid-cols-2 gap-1.5 p-2 rounded-xl bg-white shadow-xl ring-1 ring-black/[0.04]">
        {MARKETPLACES.map((m) => (
          <CarrierTile key={m.domain}>
            <Image
              src={brandLogo(m.domain)}
              alt={m.name}
              width={32}
              height={32}
              className="object-contain w-7 h-7"
              unoptimized
            />
          </CarrierTile>
        ))}
      </div>

      {/* Refresh / sync button */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-1 w-9 h-9 rounded-full bg-emerald-400 shadow-lg flex items-center justify-center">
        <RefreshIcon className="w-3.5 h-3.5 text-white" />
      </div>
    </div>
  );
}

function CarrierTile({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-11 h-11 rounded-[9px] bg-white shadow-sm ring-1 ring-black/[0.05] flex items-center justify-center">
      {children}
    </div>
  );
}
