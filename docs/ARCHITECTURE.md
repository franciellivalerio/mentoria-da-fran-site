# Arquitetura

## Visão geral

O projeto é uma aplicação web pública renderizada com TanStack Start. O navegador recebe HTML renderizado no servidor, hidrata a aplicação React e executa interações exclusivamente no cliente. Não existe API de negócio, banco, autenticação ou camada administrativa neste repositório.

Fluxo simplificado:

```text
Visitante
  -> Netlify CDN/runtime
  -> servidor TanStack Start (`src/server.ts`)
  -> árvore de rotas gerada (`src/routeTree.gen.ts`)
  -> página React (`src/routes/*`)
  -> interações locais
       -> Gmail Web (contato geral)
       -> WhatsApp App/Web (interesse em mentoria)
```

## Tecnologias e responsabilidades

| Tecnologia | Uso atual |
| --- | --- |
| React 19 | Composição e interação da interface. |
| TanStack Start | SSR, entrada de servidor e middleware. |
| TanStack Router | Rotas tipadas baseadas em arquivos, metadados e query parameters. |
| TanStack Query | `QueryClient` é fornecido no contexto, mas não há consultas remotas no estado atual. |
| TypeScript | Configuração estrita em `tsconfig.json`. |
| Vite | Desenvolvimento e build. |
| Tailwind CSS 4 | Layout e estilos utilitários. |
| Radix UI | Accordion e Label acessíveis. |
| Sonner | Feedback visual de validação e abertura de aplicativos externos. |
| Netlify | Hospedagem, CDN e bundle SSR. |

## Organização de diretórios

```text
public/
  favicon.ico                 favicon
  fonts/MonteCarlo-Regular.ttf fonte local da assinatura
  og-image.png|svg            card social
  robots.txt                  regras para crawlers

src/
  components/site/            layout e visuais reutilizáveis do site
  components/ui/              primitivas pequenas de interface
  lib/                        utilitários e tratamento de erros
  routes/                     rotas públicas baseadas em arquivos
  router.tsx                  criação do router e QueryClient
  routeTree.gen.ts            árvore gerada; não editar manualmente
  server.ts                   wrapper do servidor SSR
  start.ts                    middlewares do TanStack Start
  styles.css                  tokens e design system global
```

Arquivos de configuração relevantes: `vite.config.ts`, `netlify.toml`, `tsconfig.json`, `package.json`, `components.json` e `bunfig.toml`.

## Roteamento e composição

- Cada página fica em `src/routes` e declara seus metadados com `head`.
- `src/routes/__root.tsx` fornece HTML raiz, CSS, fontes, metadados sociais globais, página 404, error boundary, `QueryClientProvider` e `Toaster`.
- `src/components/site/SiteLayout.tsx` fornece header, navegação responsiva, alternância de tema, footer, `PageIntro` e `CtaBand`.
- `src/components/site/LegalDocument.tsx` padroniza documentos legais e sua navegação interna.
- `CareerStrategyMapVisual.tsx` e `TransformationMapVisual.tsx` são elementos editoriais da home.

## Frontend e fluxo de estado

O estado é local e efêmero:

- React `useState` controla menu, tema, mensagens de validação e checkboxes “não possuo”;
- formulários são lidos com `FormData` somente no submit;
- parâmetros `assunto` e `plano` definem o fluxo e a pré-seleção em `/contato`;
- `localStorage` guarda apenas `mentoria-theme`;
- não há store global de negócio nem cache de API em uso.

O `QueryClient` existe por preparação estrutural do template, mas não possui queries no código atual (`src/router.tsx` e `src/routes/__root.tsx`).

## Backend e runtime

Não há backend de negócio. A camada de servidor existe apenas para renderização e resiliência:

- `src/server.ts` delega para `@tanstack/react-start/server-entry`;
- respostas JSON genéricas de erro 500 engolidas pelo h3 são convertidas em uma página HTML;
- `src/lib/error-capture.ts` preserva temporariamente o erro original e a cadeia de causas para logging;
- `src/start.ts` instala middleware de erro e CSRF para eventuais `serverFn`;
- não há `serverFn`, endpoint próprio ou processamento de dados do usuário implementado hoje.

## Segurança

- TypeScript estrito e validação explícita dos query parameters de contato;
- `noopener,noreferrer` ao abrir Gmail e WhatsApp;
- `encodeURIComponent` para assunto, corpo de e-mail e mensagem de WhatsApp;
- middleware CSRF preparado para `serverFn`;
- ausência deliberada de credenciais e persistência de leads;
- `VITE_*` deve ser tratado como público;
- `.env` é ignorado pelo Git.

Não há autenticação porque não existe área privada neste projeto.

## Estilos e tema

`src/styles.css` centraliza:

- paleta da marca e tokens semânticos;
- modo claro e escuro;
- tipografia;
- sombras e raios;
- utilitários `surface`, `nav-glass`, `glass-card`, `primary-button`, `secondary-button`, `hero-glow`, `reading-copy` e `eyebrow`;
- prevenção global de overflow horizontal.

A navegação sticky evita `backdrop-filter` por decisão explícita: o comentário no arquivo registra que Chromium produzia uma linha/artefato de composição abaixo do header.

## Build e deploy

- `vite.config.ts` usa `@lovable.dev/vite-tanstack-config` e o adaptador oficial `@netlify/vite-plugin-tanstack-start`;
- o alvo Nitro/Cloudflare padrão do wrapper está desabilitado para evitar adaptadores duplicados;
- `netlify.toml` executa `bun run build` e publica `dist/client`;
- o bundle SSR é preparado pelo plugin da Netlify;
- o fluxo operacional registrado no histórico usa a branch `develop` e deploy contínuo da Netlify.

## SEO e compartilhamento

- cada rota declara título, description e Open Graph básicos;
- o root declara imagem social global 1200×630, metadados X/Twitter e URL pública;
- `public/robots.txt` permite Googlebot, Bingbot, Twitterbot, Facebook crawler e demais agentes;
- a imagem social usa o arquivo local MonteCarlo para coincidir com a assinatura da marca.

## Verificação disponível

Não há suíte automatizada de testes. As verificações codificadas são:

```powershell
bun run lint
bun run typecheck
bun run build
```

Testes responsivos e dos redirecionamentos externos são atualmente manuais, conforme `AGENTS.md`.

## Decisões arquiteturais que não devem ser alteradas acidentalmente

1. O painel de gestão permanece fora deste repositório.
2. Formulários públicos não persistem leads.
3. `src/routeTree.gen.ts` é sempre gerado.
4. Tokens visuais permanecem centralizados em `src/styles.css`.
5. Contato geral e interesse em mentoria são fluxos diferentes.
6. A Netlify é o alvo atual; a configuração Cloudflare anterior foi substituída.
7. Nenhum segredo deve ser exposto em variáveis `VITE_*`.

