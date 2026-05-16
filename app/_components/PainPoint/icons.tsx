import {
  Zap,
  Globe,
  Plug,
  Bell,
  Package,
  BadgeCheck,
  RefreshCw,
  type LucideProps,
} from "lucide-react";

export type IconProps = { className?: string };
export type IconComponent = (props: IconProps) => React.ReactElement;

function iconShim(Comp: React.ComponentType<LucideProps>) {
  return function Icon({ className }: IconProps) {
    return <Comp className={className} aria-hidden="true" />;
  };
}

export const BoltIcon = iconShim(Zap);
export const GlobeIcon = iconShim(Globe);
export const PlugIcon = iconShim(Plug);
export const BellIcon = iconShim(Bell);
export const PackageIcon = iconShim(Package);
export const CheckBadge = iconShim(BadgeCheck);
export const RefreshIcon = iconShim(RefreshCw);
