"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";

type Item = { q: string; a: string };

const ITEMS: Item[] = [
  {
    q: "Which carriers do you support?",
    a: "1,247 couriers across 220 countries — from FedEx, UPS, DHL, and USPS, to China Post, AliExpress Standard, Yanwen, J&T, 4PX, Cainiao, Aramex, Royal Mail, La Poste, DPD, GLS, and most local national posts. If it ships a parcel, we very likely track it.",
  },
  {
    q: "Is it really free? What's the catch?",
    a: "Tracking on the web is genuinely free and always will be — no signup, no paywall, no ads on the tracking page itself. We make money from optional affiliate offers (like reorder deals) and the mobile app's premium features. The free service stays free.",
  },
  {
    q: "Do I need an account?",
    a: "No. Paste a tracking number, see your parcel. That's it. If you install the mobile app, you can save parcels and get push notifications — but even there, sign-in is optional.",
  },
  {
    q: "How do I find my tracking number?",
    a: "It's in your order confirmation email from the store (often labeled \"Tracking #\" or \"Shipment ID\"). For Amazon, AliExpress, Temu, Shein, eBay, and Etsy, you'll find it in the order details. The mobile app can auto-import these from Gmail and Outlook.",
  },
  {
    q: "Why does it say \"no information available\" for my parcel?",
    a: "Usually one of three things: the carrier hasn't scanned the package yet (typical for 1–2 days after shipping), the tracking number is in a format we don't auto-detect (try picking the carrier manually), or the parcel handed off between carriers and the new carrier hasn't picked it up in their system yet. Try again in a few hours.",
  },
  {
    q: "How accurate are your ETAs?",
    a: "Our ETAs use carrier events plus historical delivery data per route — so they're typically more accurate than the carrier's own \"estimated delivery\" range, especially for international shipments going through customs. We benchmark at 97.4% on-time accuracy over 30 days.",
  },
  {
    q: "Can you track international parcels?",
    a: "Yes — this is actually where ParcelTracking shines. We follow handoffs between the origin carrier, customs, the destination carrier, and the last-mile courier. One tracking page, no jumping between carrier sites in three languages.",
  },
  {
    q: "How do I get notifications?",
    a: "Install the mobile app (iOS or Android) — it sends push notifications the moment a parcel's status changes. We also send email updates for parcels saved in your account.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 lg:px-10 py-20 lg:py-28">
      <Reveal variant="up-sm">
        <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-strong">
          FAQ
        </p>
        <h2 className="mt-3 text-[2rem] sm:text-[2.5rem] font-semibold tracking-[-0.03em] text-ink leading-[1.1]">
          Questions, answered.
        </h2>
      </Reveal>

      <div className="mt-10 border-t border-border-subtle">
        {ITEMS.map((item, i) => (
          <FaqRow key={item.q} item={item} defaultOpen={i === 0} />
        ))}
      </div>
    </section>
  );
}

function FaqRow({ item, defaultOpen }: { item: Item; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="border-b border-border-subtle">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="flex-1 text-[16px] font-semibold text-ink group-hover:text-brand-strong transition-colors">
          {item.q}
        </span>
        <span
          className={`w-7 h-7 shrink-0 rounded-full border border-border-subtle bg-white flex items-center justify-center text-ink transition-transform ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-6 pr-10 text-[15px] text-ink-muted leading-[1.65]">
          {item.a}
        </div>
      )}
    </div>
  );
}
