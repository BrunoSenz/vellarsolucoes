import { Cctv, HouseWifi, RadioTower, ShieldCheck, Sun, Zap, type LucideIcon } from "lucide-react";
import { unsplash } from "@/lib/site";

export type Service = {
  number: string;
  title: string;
  short: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Segurança eletrônica",
    short: "Segurança eletrônica",
    description:
      "Instalação e manutenção de sistemas de segurança eletrônica para residências e empresas, com equipamentos adequados a cada ambiente.",
    image: unsplash("photo-1715869428589-366729e7fdcd", 900, 680),
    imageAlt: "Câmera de segurança inteligente e sensores sobre superfície clara",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "CFTV e monitoramento",
    short: "CFTV e monitoramento",
    description:
      "Sistemas de câmeras de segurança, monitoramento e infraestrutura de vigilância para proteger o que é importante para você.",
    image: unsplash("photo-1528312635006-8ea0bc49ec63", 900, 680),
    imageAlt: "Câmera dome de monitoramento instalada em poste",
    icon: Cctv,
  },
  {
    number: "03",
    title: "Energia solar",
    short: "Energia solar",
    description:
      "Soluções de instalação e infraestrutura relacionadas à energia solar, do planejamento à implementação do sistema.",
    image: unsplash("photo-1624397640148-949b1732bb0a", 900, 680),
    imageAlt: "Técnico instalando painéis solares em telhado",
    icon: Sun,
  },
  {
    number: "04",
    title: "Elétrica",
    short: "Elétrica",
    description:
      "Instalações, manutenção, adequações e infraestrutura elétrica executadas com organização e qualidade técnica.",
    image: unsplash("photo-1635335874521-7987db781153", 900, 680),
    imageAlt: "Quadro elétrico organizado com disjuntores e cabeamento",
    icon: Zap,
  },
  {
    number: "05",
    title: "Automação residencial e comercial",
    short: "Automação",
    description:
      "Soluções inteligentes para automatizar ambientes, equipamentos e sistemas, trazendo praticidade e controle ao dia a dia.",
    image: unsplash("photo-1608377205619-03a0b4c4e270", 900, 680),
    imageAlt: "Mão segurando smartphone com controle de iluminação inteligente",
    icon: HouseWifi,
  },
  {
    number: "06",
    title: "Telecomunicação",
    short: "Telecomunicação",
    description:
      "Infraestrutura de telecomunicações, conectividade e soluções de comunicação para ambientes que precisam estar sempre conectados.",
    image: unsplash("photo-1594915440248-1e419eba6611", 900, 680),
    imageAlt: "Rack de telecomunicações com cabos de fibra óptica organizados",
    icon: RadioTower,
  },
];
