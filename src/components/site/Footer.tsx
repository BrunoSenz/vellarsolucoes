import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_ITEMS } from "./Navbar";
import { MAIL_URL, MAPS_URL, SITE, whatsappLink } from "@/lib/site";
import { SERVICES } from "@/content/services";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-site border-t border-ink-border py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo subtle />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">
              Tecnologia, segurança e infraestrutura em soluções completas para residências,
              comércios e empresas. Há mais de 8 anos no mercado.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-5 text-ink-muted">Contato</p>
            <ul className="space-y-3.5 text-sm text-ink-foreground/85">
              <li>
                <a href={MAPS_URL} target="_blank" rel="noreferrer" className="flex gap-2.5 hover:text-primary">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ink-muted" />
                  <span>
                    {SITE.addressLine1}
                    <br />
                    {SITE.addressLine2}
                    <br />
                    CEP {SITE.cep}
                  </span>
                </a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noreferrer" className="flex gap-2.5 hover:text-primary">
                  <MessageCircle className="h-4 w-4 shrink-0 text-ink-muted" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={MAIL_URL} className="flex gap-2.5 break-all hover:text-primary">
                  <Mail className="h-4 w-4 shrink-0 text-ink-muted" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={SITE.instagramUrl} target="_blank" rel="noreferrer" className="flex gap-2.5 hover:text-primary">
                  <Instagram className="h-4 w-4 shrink-0 text-ink-muted" />
                  {SITE.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5 text-ink-muted">Navegação</p>
            <ul className="space-y-3 text-sm text-ink-foreground/85">
              {NAV_ITEMS.map((i) => (
                <li key={i.id}>
                  <Link to="/" hash={i.id} className="hover:text-primary">
                    {i.label === "Perguntas" ? "Perguntas frequentes" : i.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/conteudos" className="hover:text-primary">
                  Conteúdos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5 text-ink-muted">Soluções</p>
            <ul className="space-y-3 text-sm text-ink-foreground/85">
              {SERVICES.map((s) => (
                <li key={s.number}>
                  <Link to="/" hash="solucoes" className="hover:text-primary">
                    {s.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-ink-border pt-6 text-xs text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} VELLAR Soluções. Todos os direitos reservados.</p>
          <p>Uma marca da família VELLAR.</p>
        </div>
      </div>
    </footer>
  );
}
