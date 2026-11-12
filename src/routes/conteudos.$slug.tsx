import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "@/components/site/ArticleCard";
import { ARTICLES, getArticle } from "@/content/articles";
import { whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/conteudos/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Conteúdo não encontrado — VELLAR Soluções" }, { name: "robots", content: "noindex" }] };
    const a = loaderData.article;
    const title = `${a.title} — VELLAR Soluções`;
    return {
      meta: [
        { title },
        { name: "description", content: a.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: a.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:image", content: a.image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: a.image },
      ],
    };
  },
  notFoundComponent: () => (
    <main className="container-site pb-24 pt-44 text-center">
      <h1 className="display-md">Conteúdo não encontrado.</h1>
      <Button asChild variant="ink" size="xl" className="mt-8">
        <Link to="/conteudos">Ver todos os conteúdos</Link>
      </Button>
    </main>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);
  return (
    <main className="pb-24 pt-32 md:pt-40">
      <article className="container-site max-w-3xl">
        <Link to="/conteudos" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Conteúdos
        </Link>
        <p className="eyebrow mt-10">{article.category} · {article.readingTime}</p>
        <h1 className="display-lg mt-4 text-balance">{article.title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{article.excerpt}</p>
      </article>
      <div className="container-site mt-12 max-w-5xl">
        <img src={article.image} alt={article.imageAlt} className="aspect-[16/8] w-full rounded-[28px] object-cover shadow-lift" />
      </div>
      <div className="container-site mt-14 max-w-3xl space-y-10">
        {article.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="text-2xl font-semibold tracking-tight">{s.heading}</h2>
            {s.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mt-4 text-[17px] leading-relaxed text-foreground/75">
                {p}
              </p>
            ))}
          </section>
        ))}
        <div className="rounded-[24px] bg-ink-glow p-8 text-ink-foreground md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">Precisa de ajuda com seu projeto?</h2>
          <p className="mt-3 text-ink-muted">Nossa equipe pode avaliar sua necessidade e indicar a solução adequada.</p>
          <Button asChild variant="brand" size="xl" className="mt-6">
            <a href={whatsappLink()} target="_blank" rel="noreferrer">
              <MessageCircle /> Fale com nossa equipe
            </a>
          </Button>
        </div>
      </div>
      <div className="container-site mt-24">
        <h2 className="display-md">Leia também</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {related.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </div>
    </main>
  );
}
