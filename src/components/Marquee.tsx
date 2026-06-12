const words = ["DEVELOPER", "DESIGNER", "CREATOR"];

export default function Marquee() {
  // duplicated for seamless infinite loop
  const sequence = [...words, ...words, ...words, ...words];

  return (
    <section
      aria-hidden
      className="overflow-hidden border-y border-app bg-elevated py-10"
    >
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {sequence.map((word, i) => (
          <span
            key={i}
            className="font-display text-5xl font-black tracking-tight sm:text-7xl"
            style={{ color: i % 2 === 0 ? "var(--text)" : "transparent" }}
          >
            <span
              style={
                i % 2 === 0
                  ? undefined
                  : { WebkitTextStroke: "1.5px var(--color-secondary)" }
              }
            >
              {word}
            </span>
            <span className="mx-6 text-secondary">/</span>
          </span>
        ))}
      </div>
    </section>
  );
}
