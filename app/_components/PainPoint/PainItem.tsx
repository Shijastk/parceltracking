import type { IconComponent } from "./icons";

type PainItemProps = {
  icon: IconComponent;
  title: string;
  body: string;
  active: boolean;
  onActivate: () => void;
  mockup?: React.ReactNode;
};

export function PainItem({
  icon: Icon,
  title,
  body,
  active,
  onActivate,
  mockup,
}: PainItemProps) {
  return (
    <div
      className={`rounded-lg transition-colors ${
        active ? "bg-[#1A1A1D]" : "hover:bg-white/[0.03]"
      }`}
    >
      <button
        type="button"
        onClick={onActivate}
        aria-pressed={active}
        className="group relative w-full text-left px-4 py-4 lg:px-5 lg:py-5 outline-none focus-visible:ring-2 focus-visible:ring-brand/60 rounded-lg"
      >
        {active && (
          <span
            aria-hidden="true"
            className="absolute left-0 top-3 bottom-3 w-[2px] rounded-full bg-brand"
          />
        )}
        <div className="flex items-start gap-2.5">
          <span
            className={`mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-md transition-colors ${
              active ? "bg-brand/15 text-brand" : "text-white/70 group-hover:text-white/90"
            }`}
          >
            <Icon className="w-4 h-4" />
          </span>
          <div className="flex-1 min-w-0">
            <h3
              className={`text-[14px] lg:text-[15px] font-medium leading-snug transition-colors ${
                active ? "text-white" : "text-white/80"
              }`}
            >
              {title}
            </h3>
            <div
              className={`grid transition-all duration-500 ease-out ${
                active
                  ? "grid-rows-[1fr] opacity-100 mt-1.5"
                  : "grid-rows-[0fr] opacity-0 mt-0"
              }`}
            >
              <p className="overflow-hidden text-[13px] lg:text-[14px] text-white/60 leading-[1.55]">
                {body}
              </p>
            </div>
          </div>
        </div>
      </button>

      {mockup && (
        <div
          aria-hidden={!active}
          className={`lg:hidden grid transition-all duration-500 ease-out ${
            active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-4 pb-4 pt-1">{mockup}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export function Divider() {
  return <div className="h-px bg-white/[0.08]" />;
}
