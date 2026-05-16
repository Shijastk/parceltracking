import { RevealStagger } from "./Reveal";
import { ArrowRight } from "./icons";

export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden min-h-[88svh] flex flex-col"
      style={{ backgroundColor: "#FAFAF7" }}
    >
      {/* one soft warm wash from the top */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 0%, rgba(249,115,22,0.12) 0%, transparent 70%)",
        }}
      />

      {/* fine grain that fades out toward the bottom */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(10,10,15,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "linear-gradient(180deg, black 0%, transparent 70%)",
          WebkitMaskImage:
            "linear-gradient(180deg, black 0%, transparent 70%)",
        }}
      />

      <div className="relative flex-1 flex items-center justify-center">
        <div className="w-full mx-auto max-w-[880px] px-6 py-24 lg:py-28 text-center">
          <RevealStagger step={110} startDelay={60}>
            {/* eyebrow */}
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-ink/8 bg-white/70 backdrop-blur px-3 py-1.5 text-[12px] font-medium text-ink-muted">
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inset-0 rounded-full bg-brand-strong animate-[pulse-dot_1.6s_ease-in-out_infinite]" />
                  <span className="relative rounded-full w-1.5 h-1.5 bg-brand-strong" />
                </span>
                <span className="tracking-wide">
                  Now tracking 1,247 carriers worldwide
                </span>
              </span>
            </div>

            {/* headline */}
            <h1
              className="mt-8 font-semibold text-ink mx-auto"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.75rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.035em",
                textWrap: "balance",
                maxWidth: "16ch",
              }}
            >
              Every parcel.{" "}
              <span className="text-ink-muted font-normal">Every carrier.</span>
              <br />
              One tracking page.
            </h1>

            {/* subhead */}
            <p
              className="mt-6 mx-auto text-[17px] lg:text-[18px] text-ink-muted leading-[1.55] max-w-[34rem]"
              style={{ textWrap: "balance" }}
            >
              Live updates from 1,247 carriers, one clean page per parcel.
              Push alerts the moment it moves. Free.
            </p>

            {/* CTA */}
            <div className="mt-10 flex justify-center">
              <a
                href="#app"
                className="inline-flex items-center gap-2 rounded-full bg-ink text-white px-5 py-3 text-[14px] font-semibold hover:bg-brand transition-colors"
              >
                Get the app <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* trust microcopy */}
            <p className="mt-6 text-[13px] text-ink-faint">
              <span className="text-ink-muted">12M+ shoppers</span> tracking in
              240 countries
            </p>
          </RevealStagger>
        </div>
      </div>

      {/* soft fade into the next section */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 inset-x-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.6) 100%)",
        }}
      />
    </section>
  );
}
