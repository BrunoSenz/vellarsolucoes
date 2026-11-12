export const SITE = {
  name: "VELLAR Soluções",
  address: "Av. Ademar de Barros, 2131 - Jardim Helena Maria, Guarujá - SP, 11430-003",
  addressLine1: "Av. Ademar de Barros, 2131",
  addressLine2: "Jardim Helena Maria — Guarujá / SP",
  cep: "11430-003",
  phoneDisplay: "(13) 97410-9766",
  whatsappNumber: "5513974109766",
  instagramHandle: "@vellarsolucoes_",
  instagramUrl: "https://www.instagram.com/vellarsolucoes_/",
  email: "atendimentovellar@gmail.com",
} as const;

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Conheci a VELLAR Soluções pelo site e gostaria de solicitar um orçamento.";

export function whatsappLink(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function serviceWhatsappLink(service: string): string {
  return whatsappLink(
    `Olá! Conheci a VELLAR Soluções pelo site e gostaria de solicitar um orçamento para ${service}.`,
  );
}

export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address)}`;
export const MAIL_URL = `mailto:${SITE.email}`;
export const PHONE_URL = `tel:+${SITE.whatsappNumber}`;

export const unsplash = (id: string, w = 1600, h?: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}${h ? `&h=${h}` : ""}`;
