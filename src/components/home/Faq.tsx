import { MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { whatsappLink } from "@/lib/site";

export const FAQ_ITEMS = [
  {
    q: "Quais serviços a VELLAR Soluções oferece?",
    a: "Atuamos em seis especialidades: segurança eletrônica, CFTV e monitoramento, energia solar, elétrica, automação residencial e comercial e telecomunicação.",
  },
  {
    q: "A empresa atende residências e empresas?",
    a: "Sim. Atendemos necessidades residenciais, comerciais e corporativas, adequando cada solução ao ambiente e ao uso.",
  },
  {
    q: "A VELLAR realiza instalação e manutenção?",
    a: "Sim. Realizamos instalação, manutenção e implementação de soluções tecnológicas, elétricas e de infraestrutura.",
  },
  {
    q: "Como posso solicitar um orçamento?",
    a: "Você pode preencher a solicitação de orçamento aqui no site, que abre o WhatsApp com suas informações organizadas, ou falar diretamente com nossa equipe pelo WhatsApp (13) 97410-9766.",
  },
  {
    q: "É possível contratar mais de um serviço?",
    a: "Sim. Como reunimos diferentes especialidades, é possível combinar serviços em um mesmo projeto. Basta informar suas necessidades no contato.",
  },
  {
    q: "Como funciona a avaliação técnica?",
    a: "Analisamos o ambiente e os requisitos do projeto para definir a solução adequada antes da execução dos serviços.",
  },
  {
    q: "A empresa trabalha com projetos personalizados?",
    a: "Sim. Cada projeto parte do entendimento da necessidade do cliente, e a solução é definida de acordo com o ambiente e os objetivos.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="section-y">
      <div className="container-site grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow mb-4">Dúvidas</p>
          <h2 className="display-lg">Perguntas frequentes.</h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
            Não encontrou o que procurava? Fale com nossa equipe.
          </p>
          <Button asChild variant="soft" size="xl" className="mt-8">
            <a href={whatsappLink()} target="_blank" rel="noreferrer">
              <MessageCircle /> Falar no WhatsApp
            </a>
          </Button>
        </Reveal>
        <Reveal delay={100}>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ_ITEMS.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`f${i}`}
                className="rounded-2xl border border-border bg-card px-6 shadow-soft transition-colors data-[state=open]:border-foreground/15"
              >
                <AccordionTrigger className="py-5 text-[16px] font-semibold tracking-tight hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-[15px] leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
