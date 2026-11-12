import { Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Cctv, Check, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { unsplash } from "@/lib/site";

export const HERO_IMAGE = unsplash("photo-1680992046615-065f58bcb4d8", 1400, 1600);

const INDICATORS = [
  "Mais de 8 anos de mercado",
  "6 especialidades",
  "Instalação e manutenção",
  "Atendimento profissional",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="bg-grid-faint pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="container-site relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_1fr] lg:gap-14">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground/80 shadow-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" />
                Tecnologia · Segurança · Infraestrutura
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display-xl mt-7 text-balance">
                Tecnologia, segurança e soluções{" "}
                <span className="text-muted-foreground">para transformar seu ambiente.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                Há mais de 8 anos desenvolvendo e implementando soluções em segurança eletrônica,
                energia, infraestrutura e conectividade, com compromisso, seriedade e qualidade em
                cada projeto.
              </p>
            </Reveal>
            <Reveal delay={240} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="brand" size="xl">
                <Link to="/" hash="orcamento">
                  Solicitar orçamento <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="soft" size="xl">
                <Link to="/" hash="solucoes">
                  Conhecer nossas soluções
                </Link>
              </Button>
            </Reveal>
          </div>

          <Reveal delay={120} className="relative">
            <div className="relative overflow-hidden rounded-[32px] shadow-lift">
              <img
                src={HERO_IMAGE}
                alt="Infraestrutura de rede e servidores com iluminação verde"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
              <div className="glass-light absolute bottom-5 left-5 right-5 flex items-center gap-4 rounded-2xl p-4 shadow-card sm:right-auto sm:max-w-[320px]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink text-primary">
                  <Cctv className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Soluções integradas</p>
                  <p className="text-xs text-muted-foreground">
                    Segurança, energia, elétrica, automação e conectividade.
                  </p>
                </div>
              </div>
            </div>
            <div className="glass-light absolute left-5 top-5 hidden items-center gap-3 rounded-2xl px-4 py-3 shadow-card md:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft text-primary-deep">
                <BadgeCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-lg font-bold leading-none tracking-tight">+8 anos</p>
                <p className="mt-1 text-[11px] text-muted-foreground">de mercado</p>
              </div>
            </div>
            <div className="glass-light absolute right-5 top-5 hidden items-center gap-2.5 rounded-full px-4 py-2.5 shadow-card md:flex">
              <Wrench className="h-4 w-4 text-primary-deep" />
              <span className="text-xs font-medium">Instalação e manutenção</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={320} className="mt-16 grid grid-cols-2 gap-3 md:mt-20 lg:grid-cols-4">
          {INDICATORS.map((t) => (
            <div
              key={t}
              className="flex items-center gap-3 rounded-2xl border border-border bg-background px-4 py-4 shadow-soft"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary-deep">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <span className="text-sm font-medium text-foreground/85">{t}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
