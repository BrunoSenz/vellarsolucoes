import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Article } from "@/content/articles";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      to="/conteudos/$slug"
      params={{ slug: article.slug }}
      className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
    >
      <div className="overflow-hidden">
        <img
          src={article.image}
          alt={article.imageAlt}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow text-[10.5px]">{article.category}</p>
        <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight">{article.title}</h3>
        <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-muted-foreground">{article.excerpt}</p>
        <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
          <span>{article.readingTime}</span>
          <span className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 font-medium text-foreground transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-ink-foreground">
            Ler mais <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
