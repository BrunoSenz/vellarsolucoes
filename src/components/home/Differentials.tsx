import { Award, Handshake, Home, Layers, ShieldCheck, Users } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/Reveal";

const ITEMS = [
  { icon: Award, t: "Mais de 8 anos de experiência", d: "Trajetória construída com projetos de instalação, manutenção e implementação." },
  { icon: Handshake, t: "Compromisso e seriedade", d: "Responsabilidade em cada etapa, do primeiro contato à entrega do serviço." },
  { icon: ShieldCheck, t: "Qualidade técnica", d: "Execução cuidadosa, com atenção ao planejamento e ao funcionamento da solução." },
  { icon: Users, t: "Atendimento profissional", d: "Comunicação clara e direcionamento adequado para cada necessidade." },
  { icon: Layers, t: "Diversidade de especialidades", d: "Seis áreas de atuação reunidas em uma única empresa." },
  { icon: Home, t: "Residencial e comercial", d: "Soluções pensadas para residências, comércios e empresas." },
];

export function Differentials() {
  return (
    <section className="section-y">
      <div className="container-site">
        <SectionHeading eyebrow="Diferenciais" title="Por que escolher a VELLAR Soluções?" />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it, i) => (
            <Reveal key={it.t} delay={(i % 3) * 90}>
              <div className="group h-full rounded-[24px] border border-border bg-card p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card md:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-subtle text-foreground transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  <it.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-7 text-lg font-semibold tracking-tight">{it.t}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
