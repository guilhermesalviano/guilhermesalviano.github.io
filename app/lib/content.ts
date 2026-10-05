import { certifications, skills, type Locale } from './site'

/**
 * Visible copy for both locales, kept side by side so the English and
 * Portuguese pages cannot drift apart.
 */
export const content = {
  en: {
    nav: { projects: 'projects', about: 'about' },
    switchLocale: 'português',
    home: {
      title: 'AI Developer & Salesforce Marketing Cloud Specialist',
      description:
        'Guilherme Salviano — freelance AI Developer and Salesforce Marketing Cloud specialist for MarTech: LLM agents, AMPscript, SSJS, Journey Builder and custom activities. Based in Brazil.',
      bioLabel: 'Bio',
      bioDefault: 'Default',
      bioLong: 'Long',
      intro:
        "Hi! You can call me Guibs. I'm a freelance AI Developer and a certified Salesforce Marketing Cloud specialist, working in marketing technology since 2018.",
      whatIDo:
        'I build AI agents and LLM-powered features for CRM and marketing teams: agents that call tools, keep memory between conversations, and answer questions straight from campaign data — open rates, segment trends, day-over-day performance — instead of waiting on a report.',
      whatIDoSecond:
        'On the MarTech side I work in Salesforce Marketing Cloud: AMPscript and server-side JavaScript for dynamic content, customer journeys in Journey Builder, full-stack custom activities, data extensions and SQL, Automation Studio, and API integrations that connect Marketing Cloud to the rest of the stack.',
      currently:
        'Freelancing on AI and Salesforce Marketing Cloud projects, building Koris — an autonomous AI assistant framework — and agent-crm, an AI agent for CRM teams, and studying Internet Systems at Descomplica.',
      cta: 'Need an AI agent or a Marketing Cloud build? I’m available for freelance projects — let’s talk.',
      stackTitle: 'Stack',
      stackAiLabel: 'AI & LLMs',
      stackCrmLabel: 'MarTech: Salesforce Marketing Cloud',
      stackEngineeringLabel: 'Software engineering',
      certificationsTitle: 'Certifications',
      projectsTitle: 'Projects',
      allProjects: 'All projects',
    },
    about: {
      title: 'About',
      description:
        'Guilherme Salviano — freelance AI Developer and certified Salesforce Marketing Cloud specialist. Experience, certifications, skills and résumé.',
      h1: 'About',
      intro:
        "I'm Guilherme, but you can call me Guibs. I'm a freelance AI Developer and Salesforce Marketing Cloud specialist. I started in a CRM team in 2018 and have been building marketing technology ever since — now with LLMs in the loop.",
      experienceTitle: 'Experience',
      experience:
        'Most of my career sits where marketing and engineering meet: Journey Builder custom activities for a digital bank, APIs feeding Salesforce Marketing Cloud, Segment integrations, and high-volume email and push pipelines. Today I bring that MarTech background to AI — LLM agents that work with CRM and campaign data.',
      present: 'Present',
      educationTitle: 'Education',
      education:
        'I study Internet Systems (Sistemas para Internet) at Descomplica.',
      certificationsTitle: 'Certifications',
      credentialId: 'Credential ID',
      skillsTitle: 'Skills',
      projectsTitle: 'Projects',
      projectsBlurb: 'Outside of client work I build AI agents and personal tools — see the',
      projectsLink: 'projects page',
      projectsBlurbEnd: 'for the full list.',
      resumeTitle: 'Résumé',
      resumeLink: 'Download résumé (PDF)',
      faqTitle: 'Frequently asked questions',
    },
    projects: {
      title: 'Projects',
      description:
        'Projects by Guilherme Salviano — AI agent frameworks, an AI agent for CRM teams, marketing tools and a self-hosted dashboard, plus earlier work.',
      h1: 'My Projects',
      intro:
        'Things I have built, with AI and MarTech work first. Most are open source on GitHub.',
      earlierTitle: 'Earlier work',
      present: 'Present',
    },
    notFound: {
      h1: '404',
      body: 'Are u lost?',
      back: 'Back to home',
    },
    breadcrumbHome: 'Home',
  },
  pt: {
    nav: { projects: 'projetos', about: 'sobre' },
    switchLocale: 'english',
    home: {
      title: 'Desenvolvedor de IA & Especialista em Salesforce Marketing Cloud',
      description:
        'Guilherme Salviano — Desenvolvedor de IA freelancer e especialista em Salesforce Marketing Cloud para MarTech: agentes com LLM, AMPscript, SSJS, Journey Builder e custom activities. Brasil.',
      bioLabel: 'Bio',
      bioDefault: 'Padrão',
      bioLong: 'Completa',
      intro:
        'Olá! Pode me chamar de Guibs. Sou Desenvolvedor de IA freelancer e especialista certificado em Salesforce Marketing Cloud, trabalhando com tecnologia de marketing desde 2018.',
      whatIDo:
        'Construo agentes de IA e funcionalidades com LLM para times de CRM e marketing: agentes que usam ferramentas, guardam memória entre conversas e respondem direto a partir dos dados de campanha — taxas de abertura, tendências por segmento, desempenho dia a dia — sem esperar por um relatório.',
      whatIDoSecond:
        'Na parte de MarTech trabalho com Salesforce Marketing Cloud: AMPscript e JavaScript server-side para conteúdo dinâmico, jornadas de cliente no Journey Builder, custom activities full-stack, data extensions e SQL, Automation Studio e integrações via API que conectam o Marketing Cloud ao restante da stack.',
      currently:
        'Atuando como freelancer em projetos de IA e Salesforce Marketing Cloud, construindo o Koris — um framework de assistente de IA autônomo — e o agent-crm, um agente de IA para times de CRM, e estudando Sistemas para Internet na Descomplica.',
      cta: 'Precisa de um agente de IA ou de um projeto em Marketing Cloud? Estou disponível para freelas — vamos conversar.',
      stackTitle: 'Stack',
      stackAiLabel: 'IA & LLMs',
      stackCrmLabel: 'MarTech: Salesforce Marketing Cloud',
      stackEngineeringLabel: 'Engenharia de software',
      certificationsTitle: 'Certificações',
      projectsTitle: 'Projetos',
      allProjects: 'Todos os projetos',
    },
    about: {
      title: 'Sobre',
      description:
        'Guilherme Salviano — Desenvolvedor de IA freelancer e especialista certificado em Salesforce Marketing Cloud. Experiência, certificações, habilidades e currículo.',
      h1: 'Sobre',
      intro:
        'Sou o Guilherme, mas pode me chamar de Guibs. Sou Desenvolvedor de IA freelancer e especialista em Salesforce Marketing Cloud. Comecei em um time de CRM em 2018 e desde então construo tecnologia de marketing — agora com LLMs no processo.',
      experienceTitle: 'Experiência',
      experience:
        'A maior parte da minha carreira está onde marketing e engenharia se encontram: custom activities do Journey Builder para um banco digital, APIs alimentando o Salesforce Marketing Cloud, integrações com Segment e pipelines de e-mail e push em alto volume. Hoje levo essa bagagem de MarTech para a IA — agentes com LLM que trabalham com dados de CRM e de campanhas.',
      present: 'Atual',
      educationTitle: 'Formação',
      education: 'Estudo Sistemas para Internet na Descomplica.',
      certificationsTitle: 'Certificações',
      credentialId: 'ID da credencial',
      skillsTitle: 'Habilidades',
      projectsTitle: 'Projetos',
      projectsBlurb: 'Fora do trabalho com clientes, crio agentes de IA e ferramentas pessoais — veja a',
      projectsLink: 'página de projetos',
      projectsBlurbEnd: 'para a lista completa.',
      resumeTitle: 'Currículo',
      resumeLink: 'Baixar currículo (PDF)',
      faqTitle: 'Perguntas frequentes',
    },
    projects: {
      title: 'Projetos',
      description:
        'Projetos de Guilherme Salviano — frameworks de agentes de IA, um agente de IA para times de CRM, ferramentas de marketing e um painel self-hosted, além de trabalhos anteriores.',
      h1: 'Meus Projetos',
      intro:
        'O que eu construí, com os trabalhos de IA e MarTech primeiro. A maioria é open source no GitHub.',
      earlierTitle: 'Trabalhos anteriores',
      present: 'Atual',
    },
    notFound: {
      h1: '404',
      body: 'Are u lost?',
      back: 'Back to home',
    },
    breadcrumbHome: 'Início',
  },
} as const

const certificationNames = certifications.map((c) => c.name).join(', ')

/** Question/answer pairs rendered on the about page and fed to FAQPage schema. */
export const faq: Record<Locale, { question: string; answer: string }[]> = {
  en: [
    {
      question: 'Who is Guilherme Salviano?',
      answer:
        'Guilherme Salviano, also known as Guibs, is a Brazilian freelance AI Developer and Salesforce Marketing Cloud specialist. He has worked in marketing technology since 2018, at companies including Catho, Enext Consultoria and Redarbor, and studies Internet Systems at Descomplica.',
    },
    {
      question: 'What does he build as an AI Developer?',
      answer:
        'AI agents and LLM-powered features for CRM and marketing teams: agents with tool calling, persistent memory and scheduled background tasks, and agents that read campaign analytics and answer questions about open rates, segments and trends. His open-source Koris framework runs the same agent across Telegram, WhatsApp, a terminal UI and a web dashboard.',
    },
    {
      question: 'What does he do in Salesforce Marketing Cloud?',
      answer:
        'MarTech development on Salesforce Marketing Cloud: AMPscript and server-side JavaScript, Journey Builder journeys and full-stack custom activities, Email Studio and Content Builder, data extensions and SQL, Automation Studio, and API integrations between Marketing Cloud and other systems.',
    },
    {
      question: 'Which certifications does he hold?',
      answer: `${certificationNames}.`,
    },
    {
      question: 'Which technologies does he work with?',
      answer: `AI: ${skills.ai.join(', ')}. MarTech: ${skills.marketingCloud.join(', ')}. Software engineering: ${skills.engineering.join(', ')}.`,
    },
    {
      question: 'Is he available for freelance or contract work?',
      answer:
        'Yes. Guilherme takes freelance and contract projects in AI development and Salesforce Marketing Cloud. Reach him through LinkedIn or GitHub, both linked in the footer of every page.',
    },
  ],
  pt: [
    {
      question: 'Quem é Guilherme Salviano?',
      answer:
        'Guilherme Salviano, também conhecido como Guibs, é um Desenvolvedor de IA freelancer e especialista em Salesforce Marketing Cloud brasileiro. Trabalha com tecnologia de marketing desde 2018, em empresas como Catho, Enext Consultoria e Redarbor, e estuda Sistemas para Internet na Descomplica.',
    },
    {
      question: 'O que ele constrói como Desenvolvedor de IA?',
      answer:
        'Agentes de IA e funcionalidades com LLM para times de CRM e marketing: agentes com chamada de ferramentas, memória persistente e tarefas agendadas em segundo plano, e agentes que leem analytics de campanhas e respondem perguntas sobre taxas de abertura, segmentos e tendências. O framework open source Koris roda o mesmo agente no Telegram, WhatsApp, em uma interface de terminal e em um painel web.',
    },
    {
      question: 'O que ele faz no Salesforce Marketing Cloud?',
      answer:
        'Desenvolvimento de MarTech no Salesforce Marketing Cloud: AMPscript e JavaScript server-side, jornadas e custom activities full-stack no Journey Builder, Email Studio e Content Builder, data extensions e SQL, Automation Studio e integrações via API entre o Marketing Cloud e outros sistemas.',
    },
    {
      question: 'Quais certificações ele possui?',
      answer: `${certificationNames}.`,
    },
    {
      question: 'Com quais tecnologias ele trabalha?',
      answer: `IA: ${skills.ai.join(', ')}. MarTech: ${skills.marketingCloud.join(', ')}. Engenharia de software: ${skills.engineering.join(', ')}.`,
    },
    {
      question: 'Ele está disponível para freelance ou contrato?',
      answer:
        'Sim. O Guilherme aceita projetos freelance e contratos em desenvolvimento de IA e Salesforce Marketing Cloud. Fale com ele pelo LinkedIn ou GitHub, ambos no rodapé de todas as páginas.',
    },
  ],
}
