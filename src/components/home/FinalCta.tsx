import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { whatsappLink } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink-glow py-28 text-ink-foreground md:py-36">
      <div className="container-site relative text-center">
        <Reveal>
          <h2 className="display-xl mx-auto max-w-3xl text-balance">
            Seu projeto merece uma solução VELLAR<span className="text-primary">.</span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-ink-muted md:text-lg">
            Conte com experiência, compromisso e tecnologia para tirar seu projeto do papel.
          </p>
        </Reveal>
        <Reveal delay={180} className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild variant="brand" size="xl">
            <a href={whatsappLink()} target="_blank" rel="noreferrer">
              <MessageCircle /> Fale com nossa equipe
            </a>
          </Button>
          <Button asChild variant="inkOutline" size="xl">
            <Link to="/" hash="orcamento">
              Solicitar orçamento <ArrowRight />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
