import { ArrowUpRight, Instagram, Mail, MapPin, MessageCircle, type LucideIcon } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { MAIL_URL, MAPS_URL, SITE, whatsappLink } from "@/lib/site";

const CARDS: { icon: LucideIcon; label: string; value: string; href: string; action: string; external?: boolean }[] = [
  { icon: MessageCircle, label: "WhatsApp e telefone", value: SITE.phoneDisplay, href: whatsappLink(), action: "Iniciar conversa", external: true },
  { icon: Mail, label: "E-mail", value: SITE.email, href: MAIL_URL, action: "Enviar e-mail" },
  { icon: Instagram, label: "Instagram", value: SITE.instagramHandle, href: SITE.instagramUrl, action: "Seguir perfil", external: true },
];

export function Contact() {
  return (
    <section id="contato" className="section-y">
      <div className="container-site">
        <SectionHeading
          eyebrow="Contato"
          title="Fale com a VELLAR Soluções."
          description="Escolha o canal de sua preferência. Nossa equipe está pronta para entender seu projeto."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_1.2fr]">
          <div className="grid gap-4">
            {CARDS.map((c, i) => (
              <Reveal key={c.label} delay={i * 80}>
                <a
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noreferrer" : undefined}
                  className="group flex items-center gap-5 rounded-[22px] border border-border bg-card p-5 shadow-soft transition-all duration-500 hover:-translate-y-0.5 hover:shadow-card"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary-deep transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">{c.label}</span>
                    <span className="mt-1 block truncate text-[16px] font-semibold">{c.value}</span>
                  </span>
                  <span className="hidden items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-foreground sm:inline-flex">
                    {c.action} <ArrowUpRight className="h-4 w-4" />
                  </span>
                </a>
              </Reveal>
            ))}
            <Reveal delay={240}>
              <div className="rounded-[22px] border border-border bg-subtle p-6">
                <div className="flex items-start gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ink text-primary">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <span className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">Endereço</span>
                    <p className="mt-1 font-semibold">{SITE.addressLine1}</p>
                    <p className="text-sm text-muted-foreground">
                      {SITE.addressLine2} · CEP {SITE.cep}
                    </p>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:border-ink hover:bg-ink hover:text-ink-foreground"
                    >
                      Ver no Google Maps <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="h-full min-h-[380px] overflow-hidden rounded-[28px] border border-border shadow-card">
              <iframe
                title="Localização da VELLAR Soluções no mapa"
                src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`}
                className="h-full min-h-[380px] w-full grayscale-[0.4]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
