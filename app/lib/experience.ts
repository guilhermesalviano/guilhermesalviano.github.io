export type Role = {
  company: string
  role: string
  /** Portuguese role title; falls back to `role` when absent. */
  rolePt?: string
  startDate: string
  endDate?: string
  summary: string
  summaryPt: string
}

/** Work history, newest first. Mirrors the résumé. */
export const experience: Role[] = [
  {
    company: 'Freelance',
    role: 'AI Developer & Salesforce Marketing Cloud Specialist',
    rolePt: 'Desenvolvedor de IA & Especialista em Salesforce Marketing Cloud',
    startDate: '2026-05-01',
    summary:
      'AI agents and LLM features for CRM and marketing teams, plus Salesforce Marketing Cloud development and integrations.',
    summaryPt:
      'Agentes de IA e funcionalidades com LLM para times de CRM e marketing, além de desenvolvimento e integrações em Salesforce Marketing Cloud.',
  },
  {
    company: 'Redarbor Brasil',
    role: 'Backend Developer',
    rolePt: 'Desenvolvedor Backend',
    startDate: '2025-06-01',
    endDate: '2026-04-01',
    summary:
      'Serverless Node.js on AWS (Lambda, SQS, EventBridge) powering high-volume email and push notification triggers integrated with HubSpot.',
    summaryPt:
      'Aplicações serverless em Node.js na AWS (Lambda, SQS, EventBridge) para disparos de e-mail e push em alto volume integrados ao HubSpot.',
  },
  {
    company: 'Catho',
    role: 'Backend Developer',
    rolePt: 'Desenvolvedor Backend',
    startDate: '2022-06-01',
    endDate: '2025-06-01',
    summary:
      'API endpoints connecting internal databases to Salesforce Marketing Cloud for multi-channel automation, Twilio Segment integration, a Go alert system on RabbitMQ, and a Node.js WhatsApp messaging middleware.',
    summaryPt:
      'Endpoints de API conectando bases internas ao Salesforce Marketing Cloud para automação multicanal, integração com Twilio Segment, sistema de alertas em Go com RabbitMQ e middleware de WhatsApp em Node.js.',
  },
  {
    company: 'Enext Consultoria',
    role: 'Fullstack Developer',
    rolePt: 'Desenvolvedor Fullstack',
    startDate: '2020-09-01',
    endDate: '2022-06-01',
    summary:
      'Dedicated to C6 Bank: full-stack Journey Builder Custom Activities for Salesforce Marketing Cloud in Node.js, and integrations between Marketing Cloud, Google Sheets and Google Analytics.',
    summaryPt:
      'Alocado no C6 Bank: Custom Activities full-stack para o Journey Builder do Salesforce Marketing Cloud em Node.js e integrações entre Marketing Cloud, Google Sheets e Google Analytics.',
  },
  {
    company: 'Catho',
    role: 'CRM Apprentice → Junior Backend Developer',
    rolePt: 'Aprendiz de CRM → Desenvolvedor Backend Júnior',
    startDate: '2018-07-01',
    endDate: '2020-05-01',
    summary:
      'Started in an agile squad between the CRM and backend teams, then built PHP/Laravel middleware and SQL pipelines integrating legacy databases with marketing platforms.',
    summaryPt:
      'Comecei em um squad ágil entre os times de CRM e backend e depois construí middlewares em PHP/Laravel e rotinas SQL integrando bases legadas a plataformas de marketing.',
  },
]
