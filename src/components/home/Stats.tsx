import { Reveal } from "@/components/site/Reveal";

const STATS = [
  { v: "+8", l: "Anos de mercado" },
  { v: "6", l: "Áreas de especialização" },
  { v: "2", l: "Frentes: instalação e manutenção" },
  { v: "3", l: "Ambientes: residencial, comercial e corporativo" },
];

export function Stats() {
  return (
    <section className="bg-ink-glow section-y text-ink-foreground">
      <div className="container-site">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4 text-ink-muted">Nossa trajetória</p>
          <h2 className="display-lg text-balance">
            Uma empresa construída com experiência e compromisso.
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.l} delay={i * 90}>
              <div className="h-full rounded-[24px] border border-ink-border bg-ink-card/60 p-6 text-center md:p-8">
                <p className="text-6xl font-bold leading-none tracking-[-0.05em] md:text-7xl">
                  {s.v}
                  <span className="text-primary">.</span>
                </p>
                <p className="mx-auto mt-4 max-w-[180px] text-sm leading-snug text-ink-muted">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
