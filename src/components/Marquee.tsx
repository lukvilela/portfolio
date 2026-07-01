"use client";

export default function Marquee({
  items,
  duration = 32,
}: {
  items: string[];
  duration?: number;
}) {
  // duplicate the list so the -50% loop is seamless
  const row = [...items, ...items];
  return (
    <div className="marquee" style={{ ["--marquee-dur" as string]: `${duration}s` }}>
      <div className="marquee-track">
        {row.map((it, i) => (
          <span key={i} className="chip">
            <span className="text-[var(--accent)]">◆</span>
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}
