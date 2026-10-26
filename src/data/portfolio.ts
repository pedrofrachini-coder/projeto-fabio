/* ==========================================================================
   CONTEÚDO DO PORTFÓLIO
   --------------------------------------------------------------------------
   Todo o texto do site mora neste arquivo. Para personalizar o portfólio,
   basta editar as listas abaixo (não é necessário mexer nos componentes).
   ========================================================================== */

export const profile = {
  firstName: "Pedro Henrique",
  fullName: "Pedro Henrique Nascimento Frachini",
  initials: "PH",
  role: "Técnico em Informática",
  institution: "IFMS – Instituto Federal de Mato Grosso do Sul",
  campus: "Campus Nova Andradina",
  location: "Nova Andradina – MS, Brasil",
  /** Frase de apresentação exibida no topo do site */
  tagline:
    "Transformo curiosidade em código: desenvolvo soluções web simples, funcionais e pensadas para resolver problemas reais.",
  /** Arquivo colocado em /public — substitua pelo seu currículo em PDF */
  resumeUrl: "/curriculo-pedro-frachini.pdf",
};

export const contact = {
  email: "pedro.frachini@email.com",
  github: "https://github.com/pedrohfrachini",
  githubLabel: "github.com/pedrohfrachini",
  linkedin: "https://linkedin.com/in/pedro-henrique-frachini",
  linkedinLabel: "linkedin.com/in/pedro-henrique-frachini",
};

export const navLinks = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "atividades", label: "Atividades" },
  { id: "projetos", label: "Projetos" },
  { id: "eventos", label: "Feiras e Eventos" },
  { id: "sites", label: "Sites" },
  { id: "habilidades", label: "Habilidades" },
  { id: "contato", label: "Contato" },
];

export const aboutFacts = [
  { label: "Nome completo", value: "Pedro Henrique Nascimento Frachini" },
  { label: "Curso", value: "Técnico em Informática (integrado ao ensino médio)" },
  { label: "Instituição", value: "IFMS – Campus Nova Andradina" },
  { label: "Foco de estudo", value: "Desenvolvimento web, banco de dados e lógica" },
];

export const aboutParagraphs = [
  "Sou estudante do curso Técnico em Informática do IFMS – Campus Nova Andradina, onde venho construindo minha base em programação, banco de dados e desenvolvimento web. Gosto de aprender colocando a mão na massa: transformo cada conteúdo da sala de aula em um projeto prático, mesmo que pequeno.",
  "Tenho interesse especial por desenvolvimento front-end e pela experiência de quem usa a aplicação. Busco escrever código organizado, documentado e fácil de manter, sempre pensando em acessibilidade e desempenho.",
  "Ao longo do curso participei de monitorias, feiras de ciência e projetos integradores, experiências que reforçaram em mim a importância do trabalho em equipe, da comunicação e da organização. Meu objetivo agora é evoluir como desenvolvedor, contribuir em projetos reais e conquistar minha primeira oportunidade profissional na área de tecnologia.",
];

export type Activity = {
  title: string;
  period: string;
  type: string;
  description: string;
};

export const activities: Activity[] = [
  {
    title: "Monitoria de Lógica de Programação",
    period: "2024 · 1º e 2º semestre",
    type: "Monitoria",
    description:
      "Apoio a turmas do 1º ano em algoritmos, variáveis, estruturas condicionais e laços de repetição, com listas de exercícios resolvidas passo a passo e plantões de dúvidas semanais.",
  },
  {
    title: "Projeto Integrador: Sistema de Biblioteca Escolar",
    period: "2024 · Março a novembro",
    type: "Projeto Acadêmico",
    description:
      "Desenvolvimento de um sistema web para cadastro de livros, alunos e empréstimos. Responsável pela modelagem do banco de dados e pelas telas de consulta e relatórios.",
  },
  {
    title: "Curso de Desenvolvimento Web Front-end",
    period: "2023 · 60 horas",
    type: "Curso",
    description:
      "Formação complementar em HTML5, CSS3 e JavaScript, cobrindo layout responsivo, manipulação do DOM, boas práticas de semântica e introdução ao controle de versão com Git.",
  },
  {
    title: "Apoio Técnico em Laboratório de Informática",
    period: "2023 a 2024 · Contínuo",
    type: "Trabalho",
    description:
      "Manutenção preventiva dos computadores do laboratório, instalação de softwares solicitados pelos professores e orientação de colegas no uso das ferramentas da escola.",
  },
];

export type Project = {
  name: string;
  role: string;
  period: string;
  technologies: string[];
  description: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    name: "Sistema Escolar Web",
    role: "Desenvolvimento full stack (individual)",
    period: "2024",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    description:
      "Sistema para gerenciar alunos, turmas e notas com autenticação de usuários e diferentes níveis de acesso para professores e coordenação.",
    highlights: [
      "Modelagem de 6 tabelas relacionais no MySQL",
      "Painel com busca, filtro e exportação de notas",
    ],
  },
  {
    name: "Aplicativo de Controle de Estudos",
    role: "Desenvolvimento e design (individual)",
    period: "2024",
    technologies: ["JavaScript", "LocalStorage", "CSS Grid"],
    description:
      "Aplicação web progressiva para registrar horários de estudo, tarefas e metas semanais, com gráficos simples de progresso e funcionamento offline.",
    highlights: [
      "Progresso semanal calculado em tempo real",
      "Funciona offline salvando dados no navegador",
    ],
  },
  {
    name: "Landing Page para Projeto Social do IFMS",
    role: "Front-end e prototipação no Figma",
    period: "2023",
    technologies: ["HTML", "CSS", "Figma", "Acessibilidade"],
    description:
      "Página de divulgação de um projeto social do campus, com foco em leitura confortável, contraste adequado e carregamento rápido em conexões lentas.",
    highlights: [
      "Layout responsivo validado em três tamanhos de tela",
      "Nota alta de acessibilidade e contraste (WCAG AA)",
    ],
  },
  {
    name: "Rotina de Backup Automatizado do Laboratório",
    role: "Automação e documentação (em dupla)",
    period: "2023",
    technologies: ["Shell Script", "Linux", "Redes"],
    description:
      "Script para copiar automaticamente os arquivos dos projetos escolares para um servidor do campus, com registro de execução e aviso de falhas.",
    highlights: [
      "Redução do tempo de backup manual de 40 para 5 minutos",
      "Documentação passo a passo entregue à coordenação",
    ],
  },
];

export type EventItem = {
  name: string;
  year: string;
  participation: string;
  award?: string;
  description: string;
};

export const events: EventItem[] = [
  {
    name: "I Feira de Ciências e Tecnologia do IFMS – Campus Nova Andradina",
    year: "2023",
    participation: "Apresentação de projeto em equipe",
    award: "2º lugar – categoria Desenvolvimento de Software",
    description:
      "Apresentação do protótipo de sistema para biblioteca escolar, com demonstração funcional para a banca avaliadora e para os visitantes da feira.",
  },
  {
    name: "III Mostra de Cursos e Profissões do IFMS",
    year: "2024",
    participation: "Monitoria no estande do curso",
    description:
      "Recepcionei estudantes do ensino fundamental de escolas da região e apresentei o currículo do curso Técnico em Informática, além de demonstrações de código ao vivo.",
  },
  {
    name: "SEMITEC – Semana de Tecnologia e Ciência",
    year: "2024",
    participation: "Apresentação de trabalho acadêmico",
    description:
      "Apresentação oral sobre boas práticas de acessibilidade em páginas web escolares, com exemplos de melhorias implementadas no projeto de landing page do campus.",
  },
];

export type SiteItem = {
  title: string;
  description: string;
  technologies: string[];
  url: string;
  /** Classes de gradiente (tokens do design system) usadas na pré-visualização */
  preview: string;
  monogram: string;
};

export const sites: SiteItem[] = [
  {
    title: "Biblioteca Escolar Online",
    description:
      "Consulta de acervo, reserva de livros e histórico de empréstimos em uma interface simples usada por alunos e professores.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    url: "https://github.com/pedrohfrachini",
    preview: "from-primary via-primary/60 to-accent/70",
    monogram: "BE",
  },
  {
    title: "Controle de Estudos",
    description:
      "Aplicação para planejar a rotina de estudos com metas semanais, cronômetro de foco e acompanhamento visual do progresso.",
    technologies: ["JavaScript", "LocalStorage", "CSS Grid"],
    url: "https://github.com/pedrohfrachini",
    preview: "from-accent via-accent/60 to-primary/70",
    monogram: "CE",
  },
  {
    title: "Projeto Social IFMS",
    description:
      "Landing page de divulgação de um projeto social do campus, com formulário de inscrição e seção de resultados das ações.",
    technologies: ["HTML", "CSS", "Figma"],
    url: "https://github.com/pedrohfrachini",
    preview: "from-primary/80 via-accent/60 to-primary/40",
    monogram: "PS",
  },
];

export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Linguagens e marcação",
    description: "Base técnica construída ao longo do curso e em projetos próprios.",
    skills: ["HTML5", "CSS3", "JavaScript", "PHP", "SQL", "Python (básico)"],
  },
  {
    title: "Ferramentas e ambientes",
    description: "O que uso no dia a dia para desenvolver, testar e organizar o código.",
    skills: ["Git", "GitHub", "VS Code", "Figma", "MySQL Workbench", "Linux"],
  },
  {
    title: "Competências técnicas",
    description: "Conhecimentos que sustentam a forma como eu resolvo problemas.",
    skills: [
      "Lógica de Programação",
      "Banco de Dados Relacional",
      "Layout Responsivo",
      "Acessibilidade Web",
      "Redes de Computadores",
      "Trabalho em Equipe",
    ],
  },
];

/** Números exibidos rapidamente no hero */
export const heroStats = [
  { label: "Atividades", value: activities.length },
  { label: "Projetos", value: projects.length },
  { label: "Eventos", value: events.length },
  { label: "Sites", value: sites.length },
];
