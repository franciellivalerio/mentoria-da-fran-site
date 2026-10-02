# Contexto do projeto

> Revisão do estado atual: 2 de outubro de 2026.

## Fonte de verdade

Este repositório é a fonte de verdade do **site público da Mentoria da Fran**. Para uma nova sessão ou novo agente, a ordem recomendada de leitura é:

1. este arquivo;
2. `docs/ARCHITECTURE.md`;
3. o documento relacionado ao módulo que será alterado;
4. o código atual, que prevalece se houver divergência documental.

Mudanças relevantes de arquitetura, regras de negócio, integrações, persistência ou funcionalidades devem atualizar os documentos correspondentes antes de a tarefa ser considerada concluída.

## Objetivo

O projeto apresenta a mentoria profissional de Fran, explica metodologia, formatos e valores, responde dúvidas, demonstra credenciais e direciona visitantes para contato ou início da mentoria.

O público descrito no próprio site inclui profissionais em busca de:

- primeiro emprego ou primeira oportunidade na área;
- recolocação;
- promoção;
- transição de carreira;
- fortalecimento de currículo, LinkedIn, entrevistas e posicionamento profissional.

Fontes principais: `src/routes/index.tsx`, `src/routes/mentoria.tsx` e `src/routes/faq.tsx`.

## Limite de escopo

Este repositório contém **somente o site institucional público**. Ele não deve conter:

- painel privado de gestão da mentoria;
- cadastro ou histórico privado de mentorados;
- autenticação ou autorização;
- clientes Supabase ou outro banco de dados;
- migrações de banco;
- chaves, tokens ou credenciais de servidor;
- rotas administrativas públicas ou ocultas.

Essa separação é uma decisão explícita registrada em `AGENTS.md` e `README.md`.

## Stack atual

- React 19 e React DOM 19;
- TanStack Start e TanStack Router com rotas baseadas em arquivos;
- TypeScript estrito;
- Vite 8;
- Tailwind CSS 4;
- Radix UI em componentes acessíveis pontuais;
- Lucide React para ícones;
- Sonner para notificações;
- Bun como gerenciador e executor;
- Netlify como hospedagem e runtime SSR.

Versões e dependências exatas estão em `package.json` e `bun.lock`.

## Rotas públicas

| Rota | Responsabilidade |
| --- | --- |
| `/` | Home, proposta de valor, trajetória, credenciais, áreas de atuação, resumo de planos e benefícios. |
| `/mentoria` | Metodologia, fases e formato prático da mentoria. |
| `/planos` | Planos, valores, benefícios e acesso ao formulário com plano pré-selecionado. |
| `/faq` | Perguntas frequentes. |
| `/contato` | Contato geral por composição de e-mail no Gmail. |
| `/contato?assunto=mentoria` | Formulário completo de interesse em mentoria com saída para WhatsApp. |
| `/contato?assunto=mentoria&plano=...` | Mesmo formulário, com um dos três planos válidos pré-selecionado. |
| `/privacidade` | Política de Privacidade e Proteção de Dados. |
| `/regras-e-condicoes` | Regras e Condições da Mentoria. |

As rotas são declaradas em `src/routes`. `src/routeTree.gen.ts` é gerado e não deve ser editado manualmente.

## Identidade visual

O design system é chamado no código de **Earth Editorial Glass**. Os tokens ficam centralizados em `src/styles.css`.

- títulos: Prata;
- corpo: Cormorant Garamond;
- navegação, botões e labels: Lora;
- assinatura “Fran” e símbolo “F”: MonteCarlo;
- paleta base: café `#51443d`, areia `#d8cbba`, oliva `#7d8064`, creme `#f4efe6`, terracota `#b97863` e espresso `#302925`;
- modos claro e escuro;
- superfícies com glassmorphism discreto, bordas arredondadas e sombras contidas.

## Fluxos principais

### Contato geral

O visitante informa nome e mensagem. O navegador abre o compositor web do Gmail com destinatário, assunto e corpo preenchidos. O site não envia nem armazena a mensagem. Implementação: `GeneralContactPage` em `src/routes/contato.tsx`.

### Interesse em mentoria

O visitante preenche dados pessoais e profissionais, interesses, disponibilidade, plano e aceite legal. O navegador monta uma mensagem legível, codifica com `encodeURIComponent` e abre WhatsApp App no mobile ou WhatsApp Web no desktop. O envio final depende da ação do visitante. Implementação: `MentorshipContactPage` e `whatsappUrl` em `src/routes/contato.tsx`.

### Tema

O tema inicial respeita `prefers-color-scheme`, salvo quando existe a preferência `mentoria-theme` no `localStorage`. Um script inline em `src/routes/__root.tsx` aplica o tema antes da hidratação para evitar troca visual durante o carregamento. O controle de tema fica em `src/components/site/SiteLayout.tsx`.

## Execução e verificação

```powershell
bun install
bun run dev
bun run lint
bun run typecheck
bun run build
```

Antes de publicar, verificar as páginas principais em desktop e mobile e confirmar os destinos dos fluxos de Gmail e WhatsApp. A configuração de build da Netlify está em `netlify.toml`.

## Documentos relacionados

- `docs/ARCHITECTURE.md`: arquitetura e decisões técnicas;
- `docs/BUSINESS_RULES.md`: regras da mentoria e dos formulários;
- `docs/INTEGRATIONS.md`: serviços externos;
- `docs/DATABASE.md`: ausência de banco e limites de persistência;
- `docs/FEATURES.md`: inventário por estado;
- `docs/ROADMAP.md`: pendências e decisões ainda não tomadas;
- `docs/CHANGELOG.md`: histórico identificável.

