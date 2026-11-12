import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { unsplash } from "@/lib/site";

/**
 * Para exibir o vídeo institucional, informe a URL do arquivo em `videoSrc`.
 * Enquanto não houver vídeo, a composição de imagens é exibida.
 */
const INSTITUTIONAL_VIDEO: { videoSrc?: string; poster?: string } = {};

export function Showcase() {
  const { videoSrc, poster } = INSTITUTIONAL_VIDEO;
  const main = unsplash("photo-1564457461758-8ff96e439e83", 1400, 1000);
  return (
    <section className="section-y bg-subtle">
      <div className="container-site grid items-center gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="eyebrow mb-4">Nossa visão</p>
            <h2 className="display-lg text-balance">
              Tecnologia aplicada{" "}
              <span className="text-muted-foreground">às necessidades reais.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Mais do que instalar equipamentos, buscamos desenvolver soluções que proporcionem
              segurança, eficiência e conectividade.
            </p>
          </Reveal>
          <Reveal delay={180} className="mt-10">
            <Button asChild variant="ink" size="xl">
              <Link to="/" hash="orcamento">
                Solicitar orçamento <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>

        <Reveal delay={120}>
          {videoSrc ? (
            <div className="overflow-hidden rounded-[32px] shadow-lift">
              <video src={videoSrc} poster={poster ?? main} controls playsInline className="aspect-video w-full bg-ink object-cover" />
            </div>
          ) : (
            <div className="grid grid-cols-5 grid-rows-2 gap-4">
              <div className="col-span-3 row-span-2 overflow-hidden rounded-[28px] shadow-card">
                <img src={main} alt="Data center moderno e organizado" loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="col-span-2 overflow-hidden rounded-[28px] shadow-card">
                <img
                  src={unsplash("photo-1613665813446-82a78c468a1d", 700, 700)}
                  alt="Painéis solares em cobertura ao pôr do sol"
                  loading="lazy"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>
              <div className="col-span-2 overflow-hidden rounded-[28px] shadow-card">
                <img
                  src={unsplash("photo-1680992046626-418f7e910589", 700, 700)}
                  alt="Equipamentos de rede com cabeamento estruturado"
                  loading="lazy"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
