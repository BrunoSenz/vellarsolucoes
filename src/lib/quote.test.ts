import { describe, expect, it } from "vitest";
import { buildQuoteWhatsappLink, isValidPhone, validateContact } from "./quote";
import { whatsappLink } from "./site";

const sample = {
  service: "CFTV",
  environment: "Comercial",
  need: "Instalação",
  city: "Guarujá",
  name: "Ana",
  phone: "(13) 99999-0000",
};

describe("orçamento via WhatsApp", () => {
  it("abre o WhatsApp comercial oficial da VELLAR", () => {
    expect(whatsappLink()).toMatch(/^https:\/\/wa\.me\/5513974109766\?text=/);
    expect(buildQuoteWhatsappLink(sample)).toMatch(/^https:\/\/wa\.me\/5513974109766\?text=/);
  });

  it("inclui todas as respostas do formulário na mensagem", () => {
    const text = decodeURIComponent(buildQuoteWhatsappLink(sample).split("?text=")[1]);
    for (const v of ["CFTV", "Comercial", "Instalação", "Guarujá", "Ana", "(13) 99999-0000"]) {
      expect(text).toContain(v);
    }
  });

  it("exige telefone com DDD", () => {
    expect(isValidPhone("99999-0000")).toBe(false);
    expect(isValidPhone("(13) 97410-9766")).toBe(true);
    expect(validateContact("", "13974109766").name).toBeDefined();
  });
});
