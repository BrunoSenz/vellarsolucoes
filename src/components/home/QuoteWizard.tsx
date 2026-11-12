import { useRef, useState, type FormEvent } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Building2,
  Cctv,
  ClipboardCheck,
  Hammer,
  House,
  HouseWifi,
  Layers,
  Pencil,
  RadioTower,
  SearchCheck,
  Send,
  ShieldCheck,
  Sparkles,
  Sun,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import {
  EMPTY_QUOTE,
  QUOTE_ENVIRONMENTS,
  QUOTE_NEEDS,
  QUOTE_SERVICES,
  buildQuoteWhatsappLink,
  formatPhone,
  validateCity,
  validateContact,
  type QuoteData,
} from "@/lib/quote";
import { cn } from "@/lib/utils";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "Segurança eletrônica": ShieldCheck,
  CFTV: Cctv,
  "Energia solar": Sun,
  Elétrica: Zap,
  Automação: HouseWifi,
  Telecomunicação: RadioTower,
  Outro: Sparkles,
};
const ENV_ICONS: Record<string, LucideIcon> = {
  Residencial: House,
  Comercial: Building2,
  Corporativo: Briefcase,
};
const NEED_ICONS: Record<string, LucideIcon> = {
  Instalação: Hammer,
  Manutenção: Wrench,
  "Projeto novo": Layers,
  "Avaliação técnica": SearchCheck,
};

const TOTAL = 6;

export function QuoteWizard() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<QuoteData>(EMPTY_QUOTE);
  const [errors, setErrors] = useState<{ city?: string; name?: string; phone?: string }>({});
  const [sent, setSent] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  const go = (n: number) => {
    setErrors({});
    setStep(n);
  };

  const pick = (key: "service" | "environment" | "need", value: string) => {
    setData((d) => ({ ...d, [key]: value }));
    window.setTimeout(() => go(step + 1), 180);
  };

  const submitCity = (e: FormEvent) => {
    e.preventDefault();
    const err = validateCity(data.city);
    if (err) return setErrors({ city: err });
    go(4);
  };

  const submitContact = (e: FormEvent) => {
    e.preventDefault();
    const errs = validateContact(data.name, data.phone);
    if (Object.keys(errs).length) return setErrors(errs);
    go(5);
  };

  const send = () => {
    window.open(buildQuoteWhatsappLink(data), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const restart = () => {
    setData(EMPTY_QUOTE);
    setSent(false);
    go(0);
  };

  const progress = ((step + 1) / TOTAL) * 100;

  return (
    <section id="orcamento" className="section-y">
      <div className="container-site">
        <SectionHeading
          eyebrow="Solicitação de orçamento"
          title="Vamos encontrar a solução ideal para seu projeto?"
          description="Conte um pouco sobre o que você precisa e nossa equipe poderá direcionar seu atendimento."
        />

        <Reveal delay={120} className="mx-auto mt-14 max-w-3xl">
          <div
            ref={topRef}
            className="relative overflow-hidden rounded-[32px] bg-ink p-6 text-ink-foreground shadow-lift ring-1 ring-ink-border md:p-12"
          >
            <div className="pointer-events-none absolute inset-0 bg-ink-glow opacity-70" aria-hidden />
            <div className="relative">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => go(Math.max(0, step - 1))}
                  disabled={step === 0}
                  className="inline-flex items-center gap-1.5 rounded-full border border-ink-border px-3 py-1.5 text-xs text-ink-foreground/80 transition-colors hover:bg-ink-foreground/10 disabled:opacity-30"
                >
                  <ArrowLeft className="h-3.5 w-3.5" /> Voltar
                </button>
                <span className="text-[11px] font-semibold tracking-[0.2em] text-ink-muted">
                  ETAPA {step + 1} DE {TOTAL}
                </span>
              </div>

              <div className="mt-6 h-1 overflow-hidden rounded-full bg-ink-foreground/10" role="progressbar" aria-valuenow={step + 1} aria-valuemin={1} aria-valuemax={TOTAL}>
                <div
                  className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div key={step} className="animate-step-in mt-10 min-h-[300px]">
                {step === 0 && (
                  <Options
                    title="Qual serviço você procura?"
                    options={QUOTE_SERVICES}
                    icons={SERVICE_ICONS}
                    selected={data.service}
                    onPick={(v) => pick("service", v)}
                  />
                )}
                {step === 1 && (
                  <Options
                    title="Qual é o tipo de ambiente?"
                    options={QUOTE_ENVIRONMENTS}
                    icons={ENV_ICONS}
                    selected={data.environment}
                    onPick={(v) => pick("environment", v)}
                  />
                )}
                {step === 2 && (
                  <Options
                    title="Qual é a necessidade?"
                    options={QUOTE_NEEDS}
                    icons={NEED_ICONS}
                    selected={data.need}
                    onPick={(v) => pick("need", v)}
                  />
                )}
                {step === 3 && (
                  <form onSubmit={submitCity} noValidate>
                    <StepTitle>Em qual cidade está localizado o projeto?</StepTitle>
                    <Field
                      label="Cidade"
                      placeholder="Ex.: Guarujá"
                      value={data.city}
                      error={errors.city}
                      autoComplete="address-level2"
                      onChange={(v) => setData((d) => ({ ...d, city: v }))}
                    />
                    <NextButton />
                  </form>
                )}
                {step === 4 && (
                  <form onSubmit={submitContact} noValidate>
                    <StepTitle>Nome e telefone para contato</StepTitle>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field
                        label="Nome"
                        placeholder="Seu nome"
                        value={data.name}
                        error={errors.name}
                        autoComplete="name"
                        onChange={(v) => setData((d) => ({ ...d, name: v }))}
                      />
                      <Field
                        label="Telefone / WhatsApp"
                        placeholder="(13) 99999-9999"
                        value={data.phone}
                        error={errors.phone}
                        inputMode="tel"
                        autoComplete="tel"
                        onChange={(v) => setData((d) => ({ ...d, phone: formatPhone(v) }))}
                      />
                    </div>
                    <NextButton label="Revisar informações" />
                  </form>
                )}
                {step === 5 && (
                  <div>
                    <StepTitle>Confira o resumo da sua solicitação</StepTitle>
                    <dl className="divide-y divide-ink-border overflow-hidden rounded-2xl border border-ink-border bg-ink-card">
                      {(
                        [
                          ["Serviço", data.service, 0],
                          ["Ambiente", data.environment, 1],
                          ["Necessidade", data.need, 2],
                          ["Cidade", data.city, 3],
                          ["Contato", `${data.name} · ${data.phone}`, 4],
                        ] as const
                      ).map(([k, v, s]) => (
                        <div key={k} className="flex items-center justify-between gap-4 px-5 py-3.5">
                          <dt className="text-xs uppercase tracking-[0.16em] text-ink-muted">{k}</dt>
                          <dd className="flex items-center gap-3 text-right text-sm font-medium">
                            {v}
                            <button
                              type="button"
                              onClick={() => go(s)}
                              className="rounded-full p-1.5 text-ink-muted transition-colors hover:bg-ink-foreground/10 hover:text-ink-foreground"
                              aria-label={`Editar ${k}`}
                            >
                              <Pencil className="h-3.5 w-3.5" />
                            </button>
                          </dd>
                        </div>
                      ))}
                    </dl>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <Button variant="brand" size="xl" onClick={send}>
                        Enviar pelo WhatsApp <Send />
                      </Button>
                      {sent && (
                        <button
                          type="button"
                          onClick={restart}
                          className="text-sm text-ink-muted underline-offset-4 hover:text-ink-foreground hover:underline"
                        >
                          Fazer nova solicitação
                        </button>
                      )}
                    </div>
                    <p className="mt-4 flex items-center gap-2 text-xs text-ink-muted">
                      <ClipboardCheck className="h-3.5 w-3.5" />
                      {sent
                        ? "Abrimos o WhatsApp com sua mensagem pronta. É só enviar."
                        : "Sua mensagem será aberta no WhatsApp comercial da VELLAR, pronta para envio."}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StepTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="display-md mb-8 text-ink-foreground">{children}</h3>;
}

function Options({
  title,
  options,
  icons,
  selected,
  onPick,
}: {
  title: string;
  options: readonly string[];
  icons: Record<string, LucideIcon>;
  selected: string;
  onPick: (v: string) => void;
}) {
  return (
    <div>
      <StepTitle>{title}</StepTitle>
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((o) => {
          const Icon = icons[o] ?? Sparkles;
          const isSel = selected === o;
          return (
            <button
              key={o}
              type="button"
              onClick={() => onPick(o)}
              className={cn(
                "group flex items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-300",
                isSel
                  ? "border-primary bg-primary/10"
                  : "border-ink-border bg-ink-card hover:-translate-y-0.5 hover:border-ink-foreground/25",
              )}
            >
              <span
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors",
                  isSel ? "bg-primary text-primary-foreground" : "bg-ink-foreground/5 text-primary",
                )}
              >
                <Icon className="h-[18px] w-[18px]" />
              </span>
              <span className="flex-1 text-[15px] font-medium">{o}</span>
              <ArrowRight className="h-4 w-4 text-ink-muted transition-transform group-hover:translate-x-0.5" />
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  ...rest
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "tel" | "text";
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.16em] text-ink-muted">{label}</span>
      <input
        {...rest}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        className={cn(
          "h-14 w-full rounded-2xl border bg-ink-card px-5 text-base text-ink-foreground outline-none transition-colors placeholder:text-ink-muted/60 focus:border-primary",
          error ? "border-destructive" : "border-ink-border",
        )}
      />
      {error && <span className="mt-2 block text-sm text-destructive">{error}</span>}
    </label>
  );
}

function NextButton({ label = "Continuar" }: { label?: string }) {
  return (
    <Button type="submit" variant="brand" size="xl" className="mt-8">
      {label} <ArrowRight />
    </Button>
  );
}
