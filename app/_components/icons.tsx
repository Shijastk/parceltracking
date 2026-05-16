import {
  ArrowRight as LRArrowRight,
  Menu as LRMenu,
  Bell as LRBell,
  BarChart3 as LRChart,
  ShieldCheck as LRShield,
  Globe as LRGlobe,
  Search as LRSearch,
  X as LRClose,
  Truck,
  type LucideProps,
} from "lucide-react";

export type IconProps = { className?: string };

export function LogoMark({ className }: IconProps) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-xl bg-brand text-white ${className ?? ""}`}
      aria-hidden="true"
    >
      <Truck strokeWidth={2} className="w-[60%] h-[60%]" />
    </span>
  );
}

function iconShim(Comp: React.ComponentType<LucideProps>) {
  return function Icon({ className }: IconProps) {
    return <Comp className={className} aria-hidden="true" />;
  };
}

export const ArrowRight = iconShim(LRArrowRight);
export const MenuIcon = iconShim(LRMenu);
export const BellIcon = iconShim(LRBell);
export const ChartIcon = iconShim(LRChart);
export const ShieldIcon = iconShim(LRShield);
export const GlobeIcon = iconShim(LRGlobe);
export const SearchIcon = iconShim(LRSearch);
export const CloseIcon = iconShim(LRClose);
