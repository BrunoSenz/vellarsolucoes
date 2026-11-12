import { createFileRoute } from "@tanstack/react-router";
import { Hero, HERO_IMAGE } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { QuoteWizard } from "@/components/home/QuoteWizard";
import { About } from "@/components/home/About";
import { Process } from "@/components/home/Process";
import { Differentials } from "@/components/home/Differentials";
import { Showcase } from "@/components/home/Showcase";
import { Stats } from "@/components/home/Stats";
import { Faq } from "@/components/home/Faq";
import { Articles } from "@/components/home/Articles";
import { FinalCta } from "@/components/home/FinalCta";
import { Contact } from "@/components/home/Contact";

const TITLE = "VELLAR Soluções — Tecnologia, segurança e infraestrutura";
const DESC =
  "Há mais de 8 anos em segurança eletrônica, CFTV, energia solar, elétrica, automação e telecomunicação para residências, comércios e empresas. Guarujá - SP.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: HERO_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: HERO_IMAGE },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <Services />
      <QuoteWizard />
      <About />
      <Process />
      <Differentials />
      <Showcase />
      <Stats />
      <Faq />
      <Articles />
      <Contact />
      <FinalCta />
    </main>
  );
}
