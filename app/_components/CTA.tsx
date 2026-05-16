import Image from "next/image";
import { brandLogo } from "./brandfetch";
import { ArrowRight } from "./icons";

export function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-20 lg:pb-28">
      <div className="relative overflow-hidden rounded-3xl border border-border-subtle bg-ink p-10 lg:p-16">
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(closest-side, rgba(249,115,22,0.35), rgba(249,115,22,0) 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
              Get the app
            </p>
            <h2 className="mt-3 text-[2.25rem] sm:text-5xl font-semibold tracking-[-0.03em] text-white leading-[1.05]">
              Never wonder where<br />
              your parcel is again.
            </h2>
            <p className="mt-5 text-white/65 text-base max-w-md">
              Auto-imports parcels from your email, push notifications the moment they move, works offline. Free.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href="#app"
                aria-label="Download on the App Store"
                className="inline-flex items-center gap-2.5 rounded-xl bg-white text-ink px-5 py-3 hover:bg-brand hover:text-white transition-colors"
              >
                <AppleIcon className="w-6 h-6" />
                <span className="flex flex-col leading-none text-left">
                  <span className="text-[10px] opacity-70">Download on the</span>
                  <span className="text-[15px] font-semibold mt-0.5">App Store</span>
                </span>
              </a>
              <a
                href="#app"
                aria-label="Get it on Google Play"
                className="inline-flex items-center gap-2.5 rounded-xl bg-white text-ink px-5 py-3 hover:bg-brand hover:text-white transition-colors"
              >
                <PlayIcon className="w-6 h-6" />
                <span className="flex flex-col leading-none text-left">
                  <span className="text-[10px] opacity-70">Get it on</span>
                  <span className="text-[15px] font-semibold mt-0.5">Google Play</span>
                </span>
              </a>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-[13px] text-white/70 hover:text-white transition-colors"
            >
              Or track on web
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <Image
      src={brandLogo("apple.com")}
      alt="App Store"
      width={28}
      height={28}
      className={className}
      unoptimized
    />
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <Image
      src={brandLogo("play.google.com")}
      alt="Google Play"
      width={28}
      height={28}
      className={className}
      unoptimized
    />
  );
}
