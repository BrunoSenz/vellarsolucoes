import { unsplash } from "@/lib/site";

export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  readingTime: string;
  sections: { heading: string; paragraphs: string[] }[];
};

// Para publicar um novo conteúdo, adicione um item a esta lista.
export const ARTICLES: Article[] = [
  {
    slug: "seguranca-eletronica-como-proteger-seu-ambiente",
    category: "Segurança eletrônica",
    title: "Segurança eletrônica: como proteger melhor seu ambiente",
    excerpt:
      "Entenda os principais pontos a considerar antes de investir em um sistema de segurança eletrônica para sua casa ou empresa.",
    image: unsplash("photo-1549109926-58f039549485", 1400, 900),
    imageAlt: "Câmera de segurança instalada em parede externa",
    readingTime: "4 min de leitura",
    sections: [
      {
        heading: "Comece pelo diagnóstico do ambiente",
        paragraphs: [
          "Cada ambiente tem acessos, rotinas e pontos sensíveis diferentes. Antes de escolher equipamentos, vale mapear entradas, áreas externas, pontos de circulação e locais onde há maior necessidade de controle.",
          "Esse levantamento ajuda a definir quais tecnologias fazem sentido e evita a instalação de equipamentos que não atendem à necessidade real.",
        ],
      },
      {
        heading: "Integração entre sistemas",
        paragraphs: [
          "Câmeras, alarmes, sensores e controle de acesso funcionam melhor quando são planejados em conjunto. A integração facilita o acompanhamento e torna a operação mais simples no dia a dia.",
        ],
      },
      {
        heading: "Manutenção faz parte da segurança",
        paragraphs: [
          "Um sistema só protege quando está funcionando corretamente. Revisões periódicas garantem que equipamentos, conexões e gravações estejam operando como esperado.",
        ],
      },
    ],
  },
  {
    slug: "cftv-o-que-considerar-na-escolha-de-cameras",
    category: "CFTV",
    title: "CFTV: o que considerar na escolha de câmeras",
    excerpt:
      "Posicionamento, iluminação, armazenamento e acesso remoto: os fatores que fazem diferença em um projeto de monitoramento.",
    image: unsplash("photo-1589935447067-5531094415d1", 1400, 900),
    imageAlt: "Câmeras de monitoramento instaladas em poste ao ar livre",
    readingTime: "5 min de leitura",
    sections: [
      {
        heading: "O local define o equipamento",
        paragraphs: [
          "Áreas internas e externas exigem câmeras com características diferentes. Exposição ao tempo, distância a ser coberta e condições de iluminação influenciam diretamente a escolha.",
        ],
      },
      {
        heading: "Cobertura e posicionamento",
        paragraphs: [
          "Mais do que a quantidade de câmeras, importa onde elas estão. Um bom projeto de posicionamento reduz pontos cegos e registra com clareza as áreas de maior interesse.",
        ],
      },
      {
        heading: "Gravação e acesso",
        paragraphs: [
          "Defina por quanto tempo as imagens precisam ficar armazenadas e quem precisa acessá-las. Essas respostas orientam a escolha do gravador, do armazenamento e da configuração de acesso remoto.",
        ],
      },
    ],
  },
  {
    slug: "energia-solar-entendendo-a-instalacao",
    category: "Energia solar",
    title: "Energia solar: entendendo a instalação de um sistema",
    excerpt:
      "Do estudo do local à instalação dos painéis: conheça as etapas envolvidas na implementação de um sistema de energia solar.",
    image: unsplash("photo-1655300256335-beef51a914fe", 1400, 900),
    imageAlt: "Painéis solares instalados em telhado residencial",
    readingTime: "5 min de leitura",
    sections: [
      {
        heading: "Avaliação do local",
        paragraphs: [
          "A instalação começa pela análise da estrutura disponível, da orientação do telhado ou área de instalação e de possíveis sombreamentos ao longo do dia.",
        ],
      },
      {
        heading: "Infraestrutura elétrica",
        paragraphs: [
          "Um sistema solar precisa de uma infraestrutura elétrica adequada para operar com segurança. Por isso, a avaliação da instalação existente faz parte do processo.",
        ],
      },
      {
        heading: "Execução e acompanhamento",
        paragraphs: [
          "Com o projeto definido, a instalação é realizada com atenção à fixação, às conexões e aos testes de funcionamento antes da entrega.",
        ],
      },
    ],
  },
  {
    slug: "automacao-tecnologia-aplicada-ao-dia-a-dia",
    category: "Automação",
    title: "Automação: tecnologia aplicada ao dia a dia",
    excerpt:
      "Iluminação, acesso, climatização e equipamentos conectados: como a automação pode tornar ambientes mais práticos.",
    image: unsplash("photo-1519558260268-cde7e03a0152", 1400, 900),
    imageAlt: "Assistente inteligente e smartphone com aplicativo de casa conectada",
    readingTime: "4 min de leitura",
    sections: [
      {
        heading: "Automação começa pela rotina",
        paragraphs: [
          "Os melhores projetos de automação partem dos hábitos de quem usa o ambiente. Entender a rotina ajuda a priorizar o que realmente vale automatizar.",
        ],
      },
      {
        heading: "Ambientes residenciais e comerciais",
        paragraphs: [
          "Em casas, a automação costuma trazer conforto e praticidade. Em comércios e empresas, também contribui para organização e controle de equipamentos e acessos.",
        ],
      },
      {
        heading: "Infraestrutura preparada",
        paragraphs: [
          "Rede, elétrica e conectividade bem planejadas são a base para que os dispositivos funcionem de forma estável.",
        ],
      },
    ],
  },
  {
    slug: "eletrica-importancia-de-uma-infraestrutura-adequada",
    category: "Elétrica",
    title: "Elétrica: a importância de uma infraestrutura adequada",
    excerpt:
      "Por que instalações bem planejadas e adequações periódicas são essenciais para a segurança e o funcionamento dos ambientes.",
    image: unsplash("photo-1621905251918-48416bd8575a", 1400, 900),
    imageAlt: "Eletricista com capacete realizando manutenção em quadro elétrico",
    readingTime: "4 min de leitura",
    sections: [
      {
        heading: "A base de todos os sistemas",
        paragraphs: [
          "Segurança eletrônica, automação, telecomunicações e energia solar dependem de uma infraestrutura elétrica bem dimensionada para funcionar corretamente.",
        ],
      },
      {
        heading: "Adequações e manutenção",
        paragraphs: [
          "Com o tempo, novos equipamentos e mudanças de uso podem exigir adequações. Revisar a instalação ajuda a manter o ambiente seguro e preparado.",
        ],
      },
    ],
  },
  {
    slug: "telecomunicacao-conectividade-e-infraestrutura",
    category: "Telecomunicação",
    title: "Telecomunicação: conectividade e infraestrutura",
    excerpt:
      "Cabeamento, organização de racks e pontos de rede: o que sustenta uma conexão estável em casas e empresas.",
    image: unsplash("photo-1544197150-b99a580bb7a8", 1400, 900),
    imageAlt: "Patch panel com cabos de rede conectados",
    readingTime: "4 min de leitura",
    sections: [
      {
        heading: "Conectividade depende de estrutura",
        paragraphs: [
          "Uma boa conexão não depende apenas do serviço contratado. Cabeamento, distribuição de pontos e organização dos equipamentos influenciam diretamente a estabilidade.",
        ],
      },
      {
        heading: "Organização facilita a manutenção",
        paragraphs: [
          "Racks e cabos identificados e organizados tornam ajustes, ampliações e manutenções mais rápidos e seguros.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}
