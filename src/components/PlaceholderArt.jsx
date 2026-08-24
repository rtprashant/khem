"use client";

// Renders a textured gradient block standing in for real photography.
// Swap for a real <Image> once assets are supplied — the `tone` prop
// picks one of the .ph-* gradients defined in globals.css.
export default function PlaceholderArt({ tone = 1, label, className = "" }) {
  return (
    <div className={`relative overflow-hidden ph-${((tone - 1) % 8) + 1} ${className}`}>
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.14]"
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M20 160 C 40 60, 90 40, 100 100 S 170 150, 180 40"
          fill="none"
          stroke="#F6F1E6"
          strokeWidth="1"
        />
      </svg>
      {label && (
        <span className="absolute bottom-2 right-2 z-10 font-mono text-[9px] uppercase tracking-wide text-bone/40">
          {label}
        </span>
      )}
    </div>
  );
}
