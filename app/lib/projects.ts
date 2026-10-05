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
    label: "agent-crm - AI Agent for CRM Teams",
    startDate: "2026-09-03",
    description:
      "AI agent for CRM and marketing teams: a terminal UI over OpenRouter LLMs with tool calling for Gmail and campaign analytics — open rates, segment trends and read-only SQL over newsletter data — and hot-reloaded markdown skills.",
    descriptionPt:
      "Agente de IA para times de CRM e marketing: interface de terminal sobre LLMs via OpenRouter com chamada de ferramentas para Gmail e analytics de campanhas — taxas de abertura, tendências por segmento e SQL somente leitura sobre dados de newsletter — e skills em markdown recarregadas em tempo real.",
    tags: ["TypeScript", "Bun", "OpenRouter", "LLM agents", "Tool calling"],
    featured: true,
  },
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
    href: "https://github.com/guilhermesalviano/koaris-url-shortener",
    label: "URL Shortener",
    startDate: "2025-05-03",
    endDate: "2025-09-20",
    description:
      "Multi-service URL shortener with auth, click analytics, and blog integration; deployed on Vercel with AWS DynamoDB provisioned via Terraform.",
    descriptionPt:
      "Encurtador de URL multi-serviço com autenticação, analytics de cliques e integração com blog; publicado na Vercel com AWS DynamoDB provisionado via Terraform.",
    tags: ["Next.js", "TypeScript", "DynamoDB", "Terraform", "AWS"],
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
    description:
      "Authentication service built with clean architecture — role-based access control and token management, deployable via Docker, Serverless, or ECS.",
    descriptionPt:
      "Serviço de autenticação construído com clean architecture — controle de acesso baseado em papéis e gestão de tokens, publicável via Docker, Serverless ou ECS.",
    tags: ["TypeScript", "Node.js", "Prisma", "Vite", "Vitest", "Docker", "Terraform"],
  },
  {
    href: "https://github.com/koaris",
    label: "Koaris",
    startDate: "2023-08-05",
    description: "Umbrella organization for the Koaris ecosystem (Auth, Tools, Bloom-ui).",
    descriptionPt:
      "Organização guarda-chuva do ecossistema Koaris (Auth, Tools, Bloom-ui).",
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
    href: "https://github.com/guilhermesalviano/smaug-preco-do-poder",
    label: "Visual Novel - Preço do poder",
    startDate: "2023-08-24",
    endDate: "2023-11-27",
    description:
      "Branching-narrative visual novel with multiple story paths, built with a small team (writing, art, sound).",
    descriptionPt:
      "Visual novel de narrativa ramificada com múltiplos caminhos de história, feita com uma equipe pequena (roteiro, arte e som).",
    tags: ["Python", "Ren'Py"],
  },
  {
    href: "https://github.com/guilhermesalviano/ekko-project",
    label: "Platform game - Ekko",
    startDate: "2022-04-01",
    endDate: "2022-07-26",
    description:
      "2D pixel-art horror/suspense game demo inspired by Dead Space, built solo.",
    descriptionPt:
      "Demo de jogo 2D em pixel art de terror/suspense inspirado em Dead Space, feito sozinho.",
    tags: ["Construct 2", "Aseprite"],
  },
  {
    label: "Graphyk",
    startDate: "2020-06-18",
    endDate: "2021-10-20",
  },
  {
    href: "https://github.com/guilhermesalviano/messenger-clone",
    label: "POC in React Native - Messenger Clone",
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
