import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { ArticleCard } from "@/components/site/ArticleCard";
import { ARTICLES } from "@/content/articles";

export function Articles() {
  return (
    <section id="conteudos" className="section-y bg-subtle">
      <div className="container-site">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <p className="eyebrow mb-4">Conteúdos</p>
            <h2 className="display-lg text-balance">
              Conhecimento que conecta você{" "}
              <span className="text-muted-foreground">à tecnologia.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Link
              to="/conteudos"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Ver todos <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.slice(0, 3).map((a, i) => (
            <Reveal key={a.slug} delay={i * 90}>
              <ArticleCard article={a} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
