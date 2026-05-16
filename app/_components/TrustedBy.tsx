import Image from "next/image";
import { brandLogo } from "./brandfetch";

type Carrier = { name: string; domain: string };

const DEFAULT_CARRIERS: Carrier[] = [
  { name: "FedEx", domain: "fedex.com" },
  { name: "UPS", domain: "ups.com" },
  { name: "DHL", domain: "dhl.com" },
  { name: "USPS", domain: "usps.com" },
  { name: "Royal Mail", domain: "royalmail.com" },
  { name: "China Post", domain: "chinapost.com.cn" },
  { name: "La Poste", domain: "laposte.fr" },
  { name: "Aramex", domain: "aramex.com" },
  { name: "J&T", domain: "jtexpress.com" },
  { name: "Yanwen", domain: "yanwen.com" },
  { name: "Cainiao", domain: "cainiao.com" },
  { name: "DPD", domain: "dpd.com" },
  { name: "GLS", domain: "gls-group.com" },
  { name: "EMS", domain: "ems.com.cn" },
];

type TrustedByProps = {
  brands?: Carrier[];
  caption?: string;
};

export function TrustedBy({
  brands = DEFAULT_CARRIERS,
  caption = "1,247 carriers across 220 countries · powered by 17Track",
}: TrustedByProps) {
  const half = Math.floor(brands.length / 2);
  const rowA = brands;
  const rowB = [...brands.slice(half), ...brands.slice(0, half)];

  return (
    <div id="carriers" className="border-y border-border-subtle bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-faint text-center">
          {caption}
        </p>

        <div className="mt-7 space-y-4">
          <Marquee items={rowA} direction="left" />
          <Marquee items={rowB} direction="right" />
        </div>
      </div>
    </div>
  );
}

function Marquee({
  items,
  direction,
}: {
  items: Carrier[];
  direction: "left" | "right";
}) {
  const animation =
    direction === "left" ? "animate-marquee" : "animate-marquee-reverse";

  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className={`flex w-max ${animation}`}>
        {[0, 1].map((dup) => (
          <div key={dup} className="flex shrink-0" aria-hidden={dup === 1}>
            {items.map((b) => (
              <BrandTile key={`${dup}-${b.domain}`} carrier={b} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function BrandTile({ carrier }: { carrier: Carrier }) {
  return (
    <div
      className="flex items-center gap-3 px-6 h-10 opacity-70 hover:opacity-100 transition-opacity shrink-0"
      title={carrier.name}
    >
      <Image
        src={brandLogo(carrier.domain)}
        alt={carrier.name}
        width={120}
        height={32}
        className="max-h-7 w-auto object-contain"
        unoptimized
      />
      <span className="text-sm font-medium text-ink-muted whitespace-nowrap">
        {carrier.name}
      </span>
    </div>
  );
}
