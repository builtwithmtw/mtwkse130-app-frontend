// MtwKSE130 brand mark: a teal badge with ascending bars and an upward trend
// arrow — evoking stock performance / an index climbing.
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      role="img"
      aria-label="MtwKSE130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="mtw-logo-grad"
          x1="0"
          y1="0"
          x2="32"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#16c0ad" />
          <stop offset="1" stopColor="#0b7d74" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#mtw-logo-grad)" />
      {/* Ascending bars */}
      <rect x="6" y="18" width="4" height="6" rx="1.4" fill="#fff" fillOpacity="0.38" />
      <rect x="14" y="14" width="4" height="10" rx="1.4" fill="#fff" fillOpacity="0.38" />
      <rect x="22" y="9" width="4" height="15" rx="1.4" fill="#fff" fillOpacity="0.38" />
      {/* Trend line + up-right arrow head */}
      <path
        d="M7 18.5 L16 13 L25 7.5"
        stroke="#fff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 7.5 L25 7.5 L25 12"
        stroke="#fff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
