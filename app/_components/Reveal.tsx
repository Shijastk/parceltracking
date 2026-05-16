"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type Variant = "up" | "up-sm" | "fade" | "scale";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
  as?: "div" | "section";
  threshold?: number;
};

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

const variantClass: Record<Variant, string> = {
  up: "",
  "up-sm": "reveal--up-sm",
  fade: "reveal--fade",
  scale: "reveal--scale",
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
  as = "div",
  threshold = 0.12,
}: RevealProps) {
  const { ref, visible } = useInView(threshold);
  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${variantClass[variant]} ${visible ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: visible && delay ? `${delay}ms` : undefined }}
    >
      {children}
    </Tag>
  );
}

type RevealStaggerProps = {
  children: ReactNode;
  className?: string;
  step?: number;
  startDelay?: number;
  threshold?: number;
};

/** Wraps a list and staggers its direct children on enter.
 *  Each child gets --stagger-i set automatically. */
export function RevealStagger({
  children,
  className = "",
  step = 90,
  startDelay = 0,
  threshold = 0.12,
}: RevealStaggerProps) {
  const { ref, visible } = useInView(threshold);

  const items = Children.toArray(children).map((child, i) => {
    if (!isValidElement<{ style?: CSSProperties }>(child)) return child;
    const prev = child.props.style ?? {};
    return cloneElement(child, {
      style: {
        ...prev,
        ["--stagger-i" as never]: i,
      } as CSSProperties,
    });
  });

  return (
    <div
      ref={ref}
      data-stagger=""
      className={`${visible ? "reveal-in" : ""} ${className}`}
      style={{
        ["--stagger-step" as never]: `${step}ms`,
        transitionDelay: visible && startDelay ? `${startDelay}ms` : undefined,
      } as CSSProperties}
    >
      {items}
    </div>
  );
}
