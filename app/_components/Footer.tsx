"use client";

import Image from "next/image";
import { brandLogo } from "./brandfetch";
import { LogoMark } from "./icons";

const FOOTER_COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Track",
    links: [
      { label: "Track a parcel", href: "/" },
      { label: "Popular carriers", href: "#carriers" },
      { label: "Track by country", href: "#" },
      { label: "AliExpress · Temu · Shein", href: "#" },
      { label: "Amazon · eBay", href: "#" },
    ],
  },
  {
    title: "App",
    links: [
      { label: "iOS app", href: "#app" },
      { label: "Android app", href: "#app" },
      { label: "Browser extension", href: "#app" },
      { label: "What's new", href: "#" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#" },
      { label: "Status", href: "#" },
      { label: "Report a bad carrier", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

const SOCIAL_LINKS: { label: string; href: string; domain: string }[] = [
  { label: "X", href: "#", domain: "x.com" },
  { label: "Instagram", href: "#", domain: "instagram.com" },
  { label: "TikTok", href: "#", domain: "tiktok.com" },
  { label: "YouTube", href: "#", domain: "youtube.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-10">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1.2fr_2fr]">
          <div className="max-w-sm">
            <a href="/" className="inline-flex items-center gap-2.5 text-ink">
              <LogoMark className="w-8 h-8" />
              <span className="text-[15px] font-semibold tracking-tight">ParcelTracking</span>
            </a>
            <p className="mt-5 text-sm text-ink-muted leading-relaxed">
              Track any parcel, from any carrier, in one place. Free, no signup, 1,247 couriers across 220 countries.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <a
                href="#app"
                aria-label="Download on the App Store"
                className="inline-flex items-center gap-2 rounded-lg bg-ink text-white pl-2.5 pr-3.5 py-2 text-[12px] font-semibold hover:bg-brand-strong transition-colors"
              >
                <Image
                  src={brandLogo("apple.com")}
                  alt=""
                  width={20}
                  height={20}
                  className="w-5 h-5 invert"
                  unoptimized
                />
                <span className="flex flex-col leading-none text-left">
                  <span className="text-[9px] opacity-70">Download on the</span>
                  <span className="text-[12px] font-semibold mt-0.5">App Store</span>
                </span>
              </a>
              <a
                href="#app"
                aria-label="Get it on Google Play"
                className="inline-flex items-center gap-2 rounded-lg bg-ink text-white pl-2.5 pr-3.5 py-2 text-[12px] font-semibold hover:bg-brand-strong transition-colors"
              >
                <Image
                  src={brandLogo("play.google.com")}
                  alt=""
                  width={20}
                  height={20}
                  className="w-5 h-5"
                  unoptimized
                />
                <span className="flex flex-col leading-none text-left">
                  <span className="text-[9px] opacity-70">Get it on</span>
                  <span className="text-[12px] font-semibold mt-0.5">Google Play</span>
                </span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[13px] text-ink-muted hover:text-ink transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border-subtle flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] text-ink-faint">
            <span>© {new Date().getFullYear()} ParcelTracking</span>
            <a href="#" className="hover:text-ink transition-colors">Privacy</a>
            <a href="#" className="hover:text-ink transition-colors">Terms</a>
            <a href="#" className="hover:text-ink transition-colors">Cookies</a>
          </div>
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map(({ label, href, domain }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full border border-border-subtle bg-white flex items-center justify-center hover:border-border-strong transition-colors"
              >
                <Image
                  src={brandLogo(domain)}
                  alt={label}
                  width={16}
                  height={16}
                  className="w-4 h-4 object-contain"
                  unoptimized
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
