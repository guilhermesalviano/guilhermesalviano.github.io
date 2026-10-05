export type Project = {
  href?: string
  label: string
  startDate: string
  endDate?: string
  description?: string
  /** Portuguese description; falls back to `description` when absent. */
  descriptionPt?: string
  tags?: string[]
  /** Featured projects are listed first; the rest go under "Earlier work". */
  featured?: boolean
}

export const projects: Project[] = [
  {
    href: "https://imkoris.com",
    label: "Koris - An AI Assistant",
    startDate: "2026-05-15",
    description:
      "Autonomous AI agent framework with tool execution (shell, HTTP, web search), persistent SQLite memory, cron-driven sub-agents and swappable LLM providers (Ollama, NVIDIA) — one agent core across Telegram, WhatsApp, a terminal UI and a web dashboard.",
    descriptionPt:
      "Framework de agente de IA autônomo com execução de ferramentas (shell, HTTP, busca na web), memória persistente em SQLite, sub-agentes agendados via cron e provedores de LLM intercambiáveis (Ollama, NVIDIA) — um único núcleo de agente no Telegram, WhatsApp, interface de terminal e painel web.",
    tags: ["TypeScript", "Node.js", "LLM agents", "Ollama", "SQLite", "React"],
    featured: true,
  },
  {
    href: "https://github.com/guilhermesalviano/casaos-coredash",
    label: "Personal Projects - Coredash",
    featured: true,
    startDate: "2026-03-05",
    description:
      "Self-hosted personal dashboard for automation, system monitoring, and habit tracking, built for low-cost home-lab hardware.",
    descriptionPt:
      "Painel pessoal self-hosted para automação, monitoramento de sistema e acompanhamento de hábitos, feito para hardware de home lab de baixo custo.",
    tags: ["Node.js", "Docker", "Docker Compose"],
  },
  {
    href: "https://koaris.com/",
    label: "Koaris Tools",
    featured: true,
    startDate: "2025-02-24",
    endDate: "2025-03-03",
    description:
      "Suite of ten free browser-based marketing/dev utilities — UTM builder, QR code generator, Base64/URL/HTML converters, favicon generator, image compressor, Pomodoro timer.",
    descriptionPt:
      "Conjunto de dez utilitários gratuitos de marketing e desenvolvimento no navegador — construtor de UTM, gerador de QR code, conversores Base64/URL/HTML, gerador de favicon, compressor de imagens e timer Pomodoro.",
    tags: ["MarTech", "Web tools"],
  },
  {
    href: "https://github.com/guilhermesalviano/koaris-auth",
    label: "Koaris Auth",
    startDate: "2024-11-05",
    endDate: "2025-06-11",
    description:
      "Authentication service built with clean architecture — role-based access control and token management, deployable via Docker, Serverless, or ECS.",
    descriptionPt:
      "Serviço de autenticação construído com clean architecture — controle de acesso baseado em papéis e gestão de tokens, publicável via Docker, Serverless ou ECS.",
    tags: ["TypeScript", "Node.js", "Prisma", "Vite", "Vitest", "Docker", "Terraform"],
  },
  {
    href: "https://koaris.github.io/bloom-ui/",
    label: "Koaris - Design System - Bloom-ui",
    startDate: "2023-12-04",
    description:
      "Public design system unifying interfaces and simplifying new React project setup across the Koaris ecosystem.",
    descriptionPt:
      "Design system público que unifica interfaces e simplifica a criação de novos projetos React no ecossistema Koaris.",
    tags: ["TypeScript", "React"],
  },
  {
    label: "Graphyk",
    startDate: "2020-06-18",
    endDate: "2021-10-20",
    description: "Developed a file submission and management platform for a printing company, serving 100+ daily users and processing hundreds of files per day, including large print-ready files. The platform streamlined file delivery and improved the overall printing workflow.",
    descriptionPt: "Desenvolvimento de uma plataforma de envio e gerenciamento de arquivos para uma gráfica, utilizada por mais de 100 usuários diariamente e responsável pelo processamento de centenas de arquivos por dia, incluindo arquivos de grande porte para impressão. A solução simplificou o envio de materiais e otimizou o fluxo de produção gráfica.",
  },
  {
    href: "https://github.com/guilhermesalviano/messenger-clone",
    label: "Message App",
    startDate: "2020-08-14",
    endDate: "2020-08-20",
    description:
      "React Native + Socket.IO proof-of-concept for real-time chat, built while learning chat-library integration.",
    descriptionPt:
      "Prova de conceito em React Native + Socket.IO para chat em tempo real, feita enquanto aprendia a integrar bibliotecas de chat.",
    tags: ["React Native", "Socket.IO"],
  },
  {
    href: "https://github.com/guilhermesalviano/nlw2-Proffy",
    label: "Rocketseat - Proffy",
    startDate: "2020-08-11",
    endDate: "2020-08-18",
    description:
      "Online platform connecting students with teachers, built during Rocketseat's Next Level Week bootcamp.",
    descriptionPt:
      "Plataforma online que conecta alunos e professores, criada durante o bootcamp Next Level Week da Rocketseat.",
    tags: ["Node.js", "React", "React Native", "Expo"],
  },
  {
    href: "https://github.com/guilhermesalviano/ecoleta",
    label: "Rocketseat - Ecoleta",
    startDate: "2020-06-02",
    endDate: "2020-06-09",
    description:
      "Full-stack recycling collection-point finder with maps, file uploads, and validation.",
    descriptionPt:
      "Aplicação full-stack para encontrar pontos de coleta de recicláveis, com mapas, upload de arquivos e validação.",
    tags: ["Node.js", "Express", "React", "React Native", "TypeScript", "Knex"],
  },
  {
    href: "https://github.com/guilhermesalviano/to-be-hero",
    label: "Rocketseat - To be hero",
    startDate: "2020-03-27",
    endDate: "2020-05-03",
    description:
      "Full-stack app (API + web + mobile) built during Rocketseat's Semana OmniStack.",
    descriptionPt:
      "Aplicação full-stack (API + web + mobile) criada durante a Semana OmniStack da Rocketseat.",
    tags: ["Node.js", "React", "React Native"],
  },
]
