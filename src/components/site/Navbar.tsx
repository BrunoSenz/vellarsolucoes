import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

export const NAV_ITEMS = [
  { id: "solucoes", label: "Soluções" },
  { id: "sobre", label: "Sobre" },
  { id: "como-funciona", label: "Como funciona" },
  { id: "faq", label: "Perguntas" },
  { id: "contato", label: "Contato" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!onHome) {
      setActive(pathname.startsWith("/conteudos") ? "conteudos" : null);
      return;
    }
    const ids = NAV_ITEMS.map((i) => i.id);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting);
        if (vis.length) setActive(vis[0].target.id);
        else if (window.scrollY < 300) setActive(null);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [onHome, pathname]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3">
      <div
        className={cn(
          "pointer-events-auto w-[min(94vw,880px)] text-ink-foreground transition-all duration-500 ease-out",
          scrolled ? "mt-3 scale-[0.985] island-glass-strong" : "mt-5 island-glass",
          open ? "rounded-[28px]" : "rounded-[28px] md:rounded-full",
        )}
      >
        <nav className="flex items-center justify-between gap-1 px-2 py-2" aria-label="Principal">
          <Link
            to="/"
            hash="top"
            className="flex items-center rounded-full px-3 py-1.5"
            aria-label="VELLAR Soluções — início"
          >
            <Logo subtle />
          </Link>

          <div className="mx-1 hidden h-5 w-px bg-ink-border md:block" />

          <ul className="hidden items-center md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <Link
                  to="/"
                  hash={item.id}
                  className={cn(
                    "relative rounded-full px-3.5 py-1.5 text-[13px] transition-colors duration-300",
                    active === item.id
                      ? "bg-ink-foreground/10 text-ink-foreground"
                      : "text-ink-foreground/70 hover:text-ink-foreground",
                  )}
                >
                  {active === item.id && (
                    <span className="absolute left-1/2 top-0.5 h-1 w-1 -translate-x-1/2 rounded-full bg-primary" />
                  )}
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/conteudos"
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-[13px] transition-colors duration-300",
                  active === "conteudos"
                    ? "bg-ink-foreground/10 text-ink-foreground"
                    : "text-ink-foreground/70 hover:text-ink-foreground",
                )}
              >
                Conteúdos
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-1">
            <Link
              to="/"
              hash="orcamento"
              className="inline-flex h-9 items-center gap-1.5 rounded-full bg-background px-4 text-[13px] font-semibold text-foreground transition-transform hover:scale-[1.03]"
            >
              <span className="hidden sm:inline">Solicitar orçamento</span>
              <span className="sm:hidden">Orçamento</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-foreground/80 transition-colors hover:bg-ink-foreground/10 md:hidden"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="animate-island-open px-3 pb-4 md:hidden">
            <div className="mb-2 h-px bg-ink-border" />
            <ul className="grid gap-0.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link
                    to="/"
                    hash={item.id}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] transition-colors",
                      active === item.id
                        ? "bg-ink-foreground/10 text-ink-foreground"
                        : "text-ink-foreground/75",
                    )}
                  >
                    {item.label}
                    <ArrowRight className="h-4 w-4 opacity-40" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/conteudos"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3 text-[15px] text-ink-foreground/75"
                >
                  Conteúdos
                  <ArrowRight className="h-4 w-4 opacity-40" />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
