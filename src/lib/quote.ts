import { whatsappLink } from "./site";

export const QUOTE_SERVICES = [
  "Segurança eletrônica",
  "CFTV",
  "Energia solar",
  "Elétrica",
  "Automação",
  "Telecomunicação",
  "Outro",
] as const;
export const QUOTE_ENVIRONMENTS = ["Residencial", "Comercial", "Corporativo"] as const;
export const QUOTE_NEEDS = ["Instalação", "Manutenção", "Projeto novo", "Avaliação técnica"] as const;

export type QuoteData = {
  service: string;
  environment: string;
  need: string;
  city: string;
  name: string;
  phone: string;
};

export const EMPTY_QUOTE: QuoteData = {
  service: "",
  environment: "",
  need: "",
  city: "",
  name: "",
  phone: "",
};

export function onlyDigits(v: string) {
  return v.replace(/\D/g, "");
}

/** Brazilian phone: DDD + 8 or 9 digits (10 or 11 digits total). */
export function isValidPhone(phone: string) {
  const d = onlyDigits(phone);
  return d.length === 10 || d.length === 11;
}

export function formatPhone(value: string) {
  const d = onlyDigits(value).slice(0, 11);
  if (d.length <= 2) return d.length ? `(${d}` : "";
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export function validateCity(city: string): string | null {
  return city.trim().length >= 2 ? null : "Informe a cidade do projeto.";
}

export function validateContact(name: string, phone: string): { name?: string; phone?: string } {
  const errors: { name?: string; phone?: string } = {};
  if (name.trim().length < 2) errors.name = "Informe seu nome.";
  if (!isValidPhone(phone)) errors.phone = "Informe um telefone válido com DDD.";
  return errors;
}

export function buildQuoteMessage(q: QuoteData) {
  return [
    "Olá! Conheci a VELLAR Soluções pelo site e gostaria de solicitar um orçamento.",
    "",
    `*Serviço:* ${q.service}`,
    `*Ambiente:* ${q.environment}`,
    `*Necessidade:* ${q.need}`,
    `*Cidade:* ${q.city.trim()}`,
    `*Nome:* ${q.name.trim()}`,
    `*Telefone:* ${q.phone.trim()}`,
  ].join("\n");
}

export function buildQuoteWhatsappLink(q: QuoteData) {
  return whatsappLink(buildQuoteMessage(q));
}
