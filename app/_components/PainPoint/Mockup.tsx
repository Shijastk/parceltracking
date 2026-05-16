import { BrandedMockup } from "./BrandedMockup";
import { CarriersMockup } from "./CarriersMockup";
import { NotificationsMockup } from "./NotificationsMockup";
import type { PainKey } from "./data";

export function Mockup({ active }: { active: PainKey }) {
  return (
    <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 20% 20%, #FF6A2B 0%, #F97316 35%, #F59E0B 65%, #FBBF24 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 70% at 90% 90%, rgba(255,180,140,0.55) 0%, rgba(255,180,140,0) 60%)",
        }}
      />

      <div className="relative h-full w-full">
        <MockupSlide show={active === "tabs"}>
          <BrandedMockup />
        </MockupSlide>
        <MockupSlide show={active === "carriers"}>
          <CarriersMockup />
        </MockupSlide>
        <MockupSlide show={active === "notifications"}>
          <NotificationsMockup />
        </MockupSlide>
      </div>
    </div>
  );
}

function MockupSlide({ show, children }: { show: boolean; children: React.ReactNode }) {
  return (
    <div
      aria-hidden={!show}
      className={`absolute inset-0 p-4 sm:p-5 flex items-center justify-center transition-all duration-500 ease-out ${
        show ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2 pointer-events-none"
      }`}
    >
      {children}
    </div>
  );
}
