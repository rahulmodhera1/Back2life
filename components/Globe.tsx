type GlobeProps = {
  className?: string;
  strokeWidth?: number;
};

/**
 * Wireframe globe — the Back2Life Studios motif, rebuilt as a lightweight SVG
 * so it stays crisp at any size and can sit behind sections at low opacity.
 */
export function Globe({ className, strokeWidth = 1 }: GlobeProps) {
  const meridians = [12, 24, 36].map((rx) => (
    <ellipse key={`m-${rx}`} cx="50" cy="50" rx={rx} ry="48" />
  ));
  const parallels = [-30, -15, 0, 15, 30].map((offset) => {
    const cy = 50 + offset;
    // circle cross-section radius at this latitude
    const rx = Math.sqrt(Math.max(0, 48 * 48 - offset * offset));
    return <ellipse key={`p-${offset}`} cx="50" cy={cy} rx={rx} ry={Math.abs(offset) * 0.18 + 2} />;
  });

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    >
      <circle cx="50" cy="50" r="48" />
      <line x1="50" y1="2" x2="50" y2="98" />
      {meridians}
      {parallels}
    </svg>
  );
}
