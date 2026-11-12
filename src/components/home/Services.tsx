import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SERVICES } from "@/content/services";
import { serviceWhatsappLink } from "@/lib/site";

export function Services() {
  return (
    <section id="solucoes" className="section-y bg-subtle">
      <div className="container-site">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <Reveal>
            <p className="eyebrow mb-4">Nossas soluções</p>
            <h2 className="display-lg text-balance">
              Soluções completas{" "}
              <span className="text-muted-foreground">para diferentes necessidades.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg lg:ml-auto">
              Unimos tecnologia, experiência e qualidade técnica para oferecer soluções que fazem a
              diferença em diferentes ambientes.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.number} delay={(i % 3) * 90}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                  <div className="relative overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.imageAlt}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                    <span className="island-glass absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold tracking-wider text-ink-foreground">
                      {s.number}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary-deep transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
                    </div>
                    <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                    <a
                      href={serviceWhatsappLink(s.title.toLowerCase())}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-1.5 self-start rounded-full border border-border px-4 py-2 text-sm font-medium transition-all hover:border-ink hover:bg-ink hover:text-ink-foreground"
                    >
                      Solicitar orçamento
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
