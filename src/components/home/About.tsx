import { Reveal } from "@/components/site/Reveal";
import { unsplash } from "@/lib/site";

const PILLARS = ["Compromisso", "Seriedade", "Qualidade técnica", "Experiência", "Tecnologia", "Confiança"];

export function About() {
  return (
    <section id="sobre" className="section-y">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-[32px] shadow-lift [clip-path:polygon(0_0,100%_0,100%_100%,12%_100%,0_88%)]">
            <img
              src={unsplash("photo-1573164713988-8665fc963095", 1200, 1400)}
              alt="Profissionais de tecnologia em ambiente de infraestrutura"
              loading="lazy"
              className="aspect-[6/7] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden w-[44%] overflow-hidden rounded-3xl border-[6px] border-background shadow-card sm:block lg:-right-10">
            <img
              src={unsplash("photo-1585206031650-9e9a7c87dcfe", 600, 600)}
              alt="Câmera de monitoramento instalada em fachada"
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="absolute left-6 top-6 rounded-2xl bg-ink px-5 py-4 text-ink-foreground shadow-card">
            <p className="text-3xl font-bold leading-none tracking-tight">
              +8<span className="text-primary">.</span>
            </p>
            <p className="mt-1 text-xs text-ink-muted">anos de mercado</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow mb-4">Sobre a VELLAR</p>
            <h2 className="display-lg text-balance">
              Experiência, tecnologia e compromisso{" "}
              <span className="text-muted-foreground">em cada projeto.</span>
            </h2>
          </Reveal>
          <Reveal delay={100} className="mt-8 space-y-5 text-pretty text-base leading-relaxed text-muted-foreground md:text-[17px]">
            <p>
              A VELLAR Soluções atua há mais de 8 anos oferecendo serviços de instalação, manutenção
              e implementação de soluções tecnológicas, elétricas e de infraestrutura.
            </p>
            <p>
              Nossa atuação reúne diferentes especialidades para atender necessidades residenciais,
              comerciais e corporativas, sempre com atenção à qualidade técnica, ao planejamento e à
              satisfação do cliente.
            </p>
            <p className="border-l-2 border-primary pl-5 text-foreground">
              Trabalhamos com o compromisso de oferecer soluções adequadas, atendimento profissional e
              seriedade em todas as etapas.
            </p>
          </Reveal>
          <Reveal delay={180} className="mt-10 flex flex-wrap gap-2">
            {PILLARS.map((p) => (
              <span
                key={p}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-sm text-foreground/80"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {p}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
