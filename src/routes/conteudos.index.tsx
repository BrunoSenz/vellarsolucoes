import { createFileRoute } from "@tanstack/react-router";
import { ArticleCard } from "@/components/site/ArticleCard";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { ARTICLES } from "@/content/articles";

const TITLE = "Conteúdos — VELLAR Soluções";
const DESC =
  "Artigos sobre segurança eletrônica, CFTV, energia solar, elétrica, automação e telecomunicação produzidos pela VELLAR Soluções.";

export const Route = createFileRoute("/conteudos/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ConteudosPage,
});

function ConteudosPage() {
  return (
    <main className="pb-24 pt-36 md:pt-44">
      <div className="container-site">
        <SectionHeading
          eyebrow="Conteúdos"
          title="Conhecimento que conecta você à tecnologia."
          description="Orientações sobre as áreas em que atuamos, para ajudar você a planejar melhor seu projeto."
        />
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 90}>
              <ArticleCard article={a} />
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
