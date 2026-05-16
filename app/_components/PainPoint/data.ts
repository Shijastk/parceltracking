import type { IconComponent } from "./icons";
import { BellIcon, GlobeIcon, PlugIcon } from "./icons";

export type PainKey = "tabs" | "carriers" | "notifications";

export type PainData = {
  key: PainKey;
  icon: IconComponent;
  title: string;
  body: string;
};

export const PAIN_ITEMS: PainData[] = [
  {
    key: "tabs",
    icon: GlobeIcon,
    title: "Your parcel, scattered across five tabs",
    body: "AliExpress in one tab, FedEx in another, Royal Mail won't load on mobile. One number, one page, every update — from order to doorstep.",
  },
  {
    key: "carriers",
    icon: PlugIcon,
    title: "Carriers nobody's heard of",
    body: "Yanwen, J&T, 4PX, Cainiao, EMS, Aramex — we cover 1,247 couriers across 220 countries. If it ships, we track it.",
  },
  {
    key: "notifications",
    icon: BellIcon,
    title: "No more refreshing the tracking page",
    body: "Push notifications when your parcel actually moves. ETAs that update with real customs delays, weather, and carrier handoffs.",
  },
];
