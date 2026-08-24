export default function GoogleIcon({ className = "h-7 w-7" }) {
  return (
    <span
      aria-label="Google"
      role="img"
      className={`inline-flex shrink-0 items-center justify-center font-sans text-[1.75rem] font-black leading-none ${className}`}
      style={{
        backgroundImage: "conic-gradient(from -35deg, #4285f4 0 28%, #34a853 28% 46%, #fbbc05 46% 64%, #ea4335 64% 82%, #4285f4 82% 100%)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }}
    >
      G
    </span>
  );
}
