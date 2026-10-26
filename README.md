# Portfólio — Pedro Henrique Nascimento Frachini

Site pessoal de página única para apresentar a trajetória acadêmica, as atividades e os
projetos de um estudante do curso **Técnico em Informática** do
**IFMS – Instituto Federal de Mato Grosso do Sul, Campus Nova Andradina**.

O projeto é um site estático (não possui banco de dados nem servidor): todo o conteúdo
vive em um único arquivo de dados e pode ser editado sem tocar na parte visual.

---

## 1. Stack utilizada

| Tecnologia | Para que serve |
| --- | --- |
| **Vite** | servidor de desenvolvimento e build de produção |
| **React + TypeScript** | componentização e tipagem do conteúdo |
| **Tailwind CSS** | estilos utilitários guiados pelo design system |
| **shadcn/ui** | base dos componentes `Button`, `Badge`, `Input` e `Textarea` |
| **lucide-react** | todos os ícones do site (nenhum emoji é usado) |

> Observação: a plataforma Enter executa React/Vite, então a versão entregue usa
> componentes React em vez de `index.html` + `style.css` + `script.js` puros.
> O resultado visual e o comportamento (menu fixo, tema claro/escuro, animações de
> scroll) são exatamente os mesmos pedidos no briefing.

---

## 2. Como rodar o projeto

```bash
pnpm install     # instala as dependências
pnpm dev         # inicia o servidor de desenvolvimento
pnpm build       # gera a versão de produção em /dist
pnpm check       # roda o ESLint + a checagem de tipos do TypeScript
```

---

## 3. Estrutura de arquivos

```
.
├── index.html                # documento base: fontes, meta tags e script anti-flash do tema
├── tailwind.config.ts        # tokens do Tailwind (fontes, cores, sombras, animações)
├── public/
│   └── curriculo-pedro-frachini.pdf   # PDF baixado pelo botão "Baixar Currículo"
└── src/
    ├── index.css             # DESIGN SYSTEM: variáveis CSS, tema claro/escuro, utilitários
    ├── main.tsx              # ponto de entrada do React
    ├── App.tsx               # providers globais + roteador
    ├── router.tsx            # rotas da aplicação (apenas "/")
    ├── pages/
    │   └── Index.tsx         # monta as seções na ordem final da página
    ├── data/
    │   └── portfolio.ts      # ⭐ TODO O CONTEÚDO DO SITE (textos, links, listas)
    ├── hooks/
    │   ├── use-theme.ts          # alternância claro/escuro + persistência
    │   ├── use-active-section.ts # qual seção está visível (destaque do menu)
    │   └── use-scroll-state.ts   # estado de scroll (blur do menu e botão "topo")
    └── components/
        ├── ui/               # componentes base do shadcn/ui (Button, Badge, Input, Textarea)
        └── portfolio/        # componentes exclusivos deste portfólio
            ├── site-navbar.tsx        # menu fixo com blur, menu mobile e link ativo
            ├── theme-toggle.tsx       # botão sol/lua
            ├── hero-section.tsx       # seção de abertura
            ├── profile-avatar.tsx     # foto circular (placeholder com iniciais)
            ├── about-section.tsx      # "Sobre" + ficha acadêmica
            ├── activities-section.tsx # cards de atividades
            ├── projects-section.tsx   # cards de projetos
            ├── events-section.tsx     # linha do tempo de feiras e eventos
            ├── sites-section.tsx      # grade de sites
            ├── site-preview.tsx       # mockup de navegador usado como imagem
            ├── skills-section.tsx     # habilidades em badges
            ├── contact-section.tsx    # formulário + canais de contato
            ├── contact-info-card.tsx  # card de contato reutilizável
            ├── site-footer.tsx        # rodapé
            ├── reveal.tsx             # animação de entrada ao rolar (scroll reveal)
            ├── section-heading.tsx    # cabeçalho padrão das seções
            └── scroll-top-button.tsx  # botão flutuante "voltar ao topo"
```

---

## 4. Explicação do código

### 4.1 `src/index.css` — o design system

Todo o visual nasce aqui. O arquivo está dividido em três camadas:

1. **`:root` / `.dark`** — variáveis CSS em HSL no formato `H S% L%` (sem `hsl()`).
   Isso permite usar os tokens no Tailwind com opacidade (`bg-primary/10`) e trocar o
   tema inteiro apenas sobrescrevendo as variáveis em `.dark`.
   Tokens principais: `--background`, `--foreground`, `--card`, `--primary`, `--accent`,
   `--muted`, `--border`, além de `--gradient-brand`, `--shadow-card` e `--radius`.
2. **`@layer base`** — tipografia global (Poppins para títulos, Inter para texto),
   rolagem suave (`scroll-behavior: smooth` + `scroll-padding-top` para o menu fixo),
   seleção de texto e barra de rolagem personalizada.
3. **`@layer components` / `@layer utilities`** — receitas reutilizáveis:
   - `.section-shell`: largura máxima e respiro lateral de todas as seções;
   - `.section-pad`: ritmo vertical (`py-20 md:py-28`);
   - `.surface-card`: cartão com borda, raio e sombra suave;
   - `.surface-card-interactive`: elevação no hover (`-translate-y-1` + sombra maior);
   - `.eyebrow`: rótulo pequeno em caixa alta acima dos títulos;
   - `.reveal` + `.reveal-up/left/right/scale`: animação de entrada usada pelo `<Reveal />`;
   - `.grid-backdrop`, `.glow-orb`, `.text-gradient`: decoração (grade sutil, halos e
     texto com gradiente da marca).

Nenhum componente escreve cor "crua" (`text-white`, `bg-black`). Tudo vem dos tokens,
o que garante que o tema claro e o escuro fiquem corretos automaticamente.

### 4.2 `tailwind.config.ts` — tokens do Tailwind

Conecta as variáveis CSS às classes utilitárias e adiciona:

- `fontFamily`: `sans` (Inter) e `display` (Poppins);
- `boxShadow`: `card`, `card-hover` e `glow`, apontando para `--shadow-*`;
- `backgroundImage`: `gradient-brand`, `gradient-surface`, `gradient-sheen`;
- `transitionTimingFunction.out-expo`: a curva de animação usada em todo o site;
- `keyframes/animation`: `float-slow`, `glow-pulse` e `sheen` (movimento suave do hero).

### 4.3 `src/data/portfolio.ts` — conteúdo separado da interface

Cada seção lê suas informações daqui (`profile`, `contact`, `navLinks`, `aboutFacts`,
`aboutParagraphs`, `activities`, `projects`, `events`, `sites`, `skillGroups`, `heroStats`).
Para publicar com seus dados reais, basta editar este arquivo — os componentes se
adaptam à quantidade de itens (os cards entram em cascata automaticamente).

### 4.4 Hooks

- **`useTheme`** — decide o tema inicial (`?theme=` na URL → `localStorage` → preferência
  do sistema), aplica/remove a classe `dark` no `<html>` e salva a escolha do usuário.
  O `index.html` tem um script minúsculo que aplica o tema **antes** da primeira pintura,
  evitando o "flash" branco ao recarregar no modo escuro.
- **`useActiveSection`** — `IntersectionObserver` sobre as seções do menu; a que estiver
  mais visível ganha destaque no navbar.
- **`useScrolled` / `useScrollProgress`** — estados de scroll com `requestAnimationFrame`;
  um controla o blur do menu, o outro a aparição do botão "voltar ao topo".

### 4.5 Componentes

- **`Reveal`** — encapsula a animação de scroll. Recebe `variant` (`up`, `left`, `right`,
  `scale`), `delay` (efeito cascata entre cards) e usa `IntersectionObserver` para
  adicionar `data-visible="true"`, que dispara a transição definida no CSS. Respeita
  `prefers-reduced-motion`.
- **`SectionHeading`** — cabeçalho padronizado: eyebrow, título, traço de gradiente e
  descrição opcional.
- **`SiteNavbar`** — sticky com `backdrop-blur`, borda e sombra que aparecem após o
  primeiro scroll; menu mobile em painel (trava o scroll do body e fecha com `Esc`);
  `aria-current` marca a seção ativa.
- **`HeroSection`** — foto circular, nome, curso, instituição, frase de apresentação,
  dois botões e a faixa de números calculada a partir dos dados.
- **`ProfileAvatar` / `SitePreview`** — placeholders prontos para receber imagens reais.
- **`ProjectsSection` / `ActivitiesSection`** — grades responsivas de cards com tags,
  período, descrição e tecnologias.
- **`EventsSection`** — linha do tempo vertical com marcadores, tipos de participação e
  badge de premiação (usando o token de acento).
- **`ContactSection`** — formulário controlado que monta uma URL `mailto:` com assunto e
  corpo já preenchidos (não precisa de backend) + cards de e-mail, GitHub, LinkedIn e
  localização.
- **`SiteFooter`** — links rápidos, redes sociais e direitos autorais com o ano atual.

### 4.6 Componentes de UI customizados

`src/components/ui/button.tsx`, `badge.tsx`, `input.tsx` e `textarea.tsx` foram
customizados para o design system do portfólio:

- `Button`: formato pílula, variantes `brand` (gradiente de sombra e elevação), `outline`,
  `ghost` e tamanho extra `xl`;
- `Badge`: variantes `tag` (tipo de atividade), `tech` (tecnologia) e `prize` (premiação);
- `Input` / `Textarea`: raio maior, borda que reage ao hover e anel de foco acessível.

---

## 5. Como personalizar (tabela rápida)

| O que mudar | Onde |
| --- | --- |
| Nome, curso, instituição, frase do hero | `src/data/portfolio.ts` → `profile` |
| E-mail, GitHub, LinkedIn | `src/data/portfolio.ts` → `contact` |
| Textos do "Sobre" | `src/data/portfolio.ts` → `aboutParagraphs` / `aboutFacts` |
| Atividades, projetos, eventos, sites, habilidades | listas com o mesmo nome em `src/data/portfolio.ts` |
| Rótulos do menu | `navLinks` (o `id` deve ser igual ao `id` da seção) |
| Foto de perfil | `src/components/portfolio/profile-avatar.tsx` → troque o monograma por `<img src="/sua-foto.jpg" alt="..." className="h-full w-full object-cover" />` |
| Print de cada site | `src/components/portfolio/site-preview.tsx` → troque o mockup por `<img />` |
| Currículo em PDF | substitua `public/curriculo-pedro-frachini.pdf` (ou ajuste `profile.resumeUrl`) |
| Cores do site | `src/index.css` → bloco `:root` (claro) e `.dark` (escuro) |
| Fontes | `index.html` (Google Fonts) + `fontFamily` em `tailwind.config.ts` |
| Textos das seções (títulos e descrições) | dentro de cada componente em `src/components/portfolio/` |
| Texto do rodapé / copyright | `src/components/portfolio/site-footer.tsx` |

---

## 6. Detalhes de acessibilidade e desempenho

- Contraste mínimo AA nos dois temas (texto principal e texto secundário).
- Navegação por teclado com anéis de foco visíveis e `aria-label` nos botões de ícone.
- `prefers-reduced-motion` desliga animações e a rolagem suave.
- Imagens/decorações puramente visuais usam `aria-hidden="true"`.
- Sem bibliotecas de animação: o scroll reveal usa apenas `IntersectionObserver` + CSS.

---

## 7. Publicação

O site é 100% estático. Depois de `pnpm build`, a pasta `dist/` pode ser publicada em
qualquer hospedagem (Netlify, Vercel, GitHub Pages, cPanel). Na plataforma Enter, basta
clicar em **Publish**.
