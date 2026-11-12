import { Reveal, SectionHeading } from "@/components/site/Reveal";

const STEPS = [
  { n: "01", t: "Entendimento", d: "Conhecemos a necessidade e identificamos o que o cliente precisa." },
  { n: "02", t: "Avaliação técnica", d: "Analisamos o ambiente e os requisitos para definir a solução adequada." },
  { n: "03", t: "Execução", d: "Realizamos os serviços de instalação, manutenção ou implementação." },
  { n: "04", t: "Entrega", d: "Finalizamos o serviço com atenção à qualidade e ao funcionamento da solução." },
];

export function Process() {
  return (
    <section id="como-funciona" className="section-y bg-subtle">
      <div className="container-site">
        <SectionHeading eyebrow="Como funciona" title="Da necessidade à solução." />
        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 110} className="group relative">
              <div className="relative mb-8 h-px bg-border">
                <span className="absolute left-0 top-0 h-px w-12 bg-primary transition-all duration-700 group-hover:w-full" />
                <span className="absolute -top-[5px] left-0 h-[11px] w-[11px] rounded-full border-2 border-primary bg-background" />
              </div>
              <p className="text-6xl font-bold leading-none tracking-[-0.05em] text-foreground/10 transition-colors duration-500 group-hover:text-primary md:text-7xl">
                {s.n}
              </p>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{s.t}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
