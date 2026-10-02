# Inventário de funcionalidades

## Implementadas

### Estrutura pública

- navegação responsiva com menu mobile;
- header sticky e footer com links institucionais e legais;
- páginas públicas para home, mentoria, planos, FAQ, contato, privacidade e regras;
- página 404 e error boundary no cliente;
- fallback HTML para erros catastróficos de SSR.

Fontes: `src/components/site/SiteLayout.tsx`, `src/routes` e `src/server.ts`.

### Home institucional

- hero com proposta de valor e CTAs equivalentes em tamanho;
- mapa de transformação em quatro etapas;
- trajetória profissional com mapa visual de evolução;
- credenciais técnicas, de carreira e institucionais;
- oito frentes de atuação;
- resumo dos formatos sem exibir preço, com CTA para planos e valores;
- resumo da metodologia e benefícios.

Fonte: `src/routes/index.tsx`, `CareerStrategyMapVisual.tsx` e `TransformationMapVisual.tsx`.

### Página da mentoria

- diagnóstico, plano de ação e acompanhamento;
- duração, formato online, atividades entre sessões e público indicado;
- CTA para início da mentoria.

Fonte: `src/routes/mentoria.tsx`.

### Planos e valores

- três planos com valores e benefícios;
- destaque para o acompanhamento mensal;
- botões alinhados ao final dos cards;
- CTA que abre o formulário de mentoria e pré-seleciona o plano correspondente.

Fonte: `src/routes/planos.tsx`.

### Contato geral

- formulário reduzido a nome e mensagem;
- validação de obrigatoriedade;
- avisos inline e toast;
- composição de e-mail no Gmail;
- aviso de não armazenamento.

Fonte: `GeneralContactPage` em `src/routes/contato.tsx`.

### Início da mentoria

- fluxo separado por `?assunto=mentoria`;
- nome e e-mail;
- profissão e LinkedIn com opção “não possuo”;
- múltiplos interesses;
- disponibilidade entre segunda e quinta, às 19h, 20h ou 21h;
- escolha obrigatória de plano;
- objetivo opcional;
- aceite obrigatório dos documentos legais;
- mensagens de validação específicas;
- mensagem de WhatsApp estruturada em blocos e emojis;
- redirecionamento diferente para WhatsApp App e WhatsApp Web;
- codificação compatível com acentos, emojis e quebras de linha.

Fonte: `MentorshipContactPage` em `src/routes/contato.tsx`.

### Conteúdo e conformidade

- FAQ em accordion acessível;
- Regras e Condições com navegação interna;
- Política de Privacidade e Proteção de Dados;
- referências para fontes legais oficiais;
- canal de contato para direitos de titulares.

Fontes: `src/routes/faq.tsx`, `src/routes/regras-e-condicoes.tsx`, `src/routes/privacidade.tsx` e `LegalDocument.tsx`.

### Design e acessibilidade

- design tokens centralizados;
- modos claro e escuro;
- preferência de tema persistida;
- script inicial para reduzir flash de tema;
- tipografia editorial da marca;
- glassmorphism discreto;
- layout responsivo e prevenção de scroll horizontal;
- labels, fieldsets, legends e estados de foco;
- contraste semântico distinto por tema.

Fonte: `src/styles.css`, `src/routes/__root.tsx` e componentes de UI.

### SEO e compartilhamento

- title e description por rota;
- Open Graph;
- X/Twitter large image card;
- imagem social de marca;
- favicon;
- robots.txt permissivo para crawlers principais.

Fontes: `src/routes/__root.tsx`, metadados das rotas e `public`.

### Entrega e qualidade

- configuração de SSR na Netlify;
- scripts de lint, typecheck, build, preview e deploy;
- TypeScript estrito;
- proteção CSRF preparada para server functions;
- captura e normalização de erros SSR.

Fontes: `package.json`, `vite.config.ts`, `netlify.toml`, `src/start.ts` e `src/server.ts`.

## Parcialmente implementadas ou limitadas por desenho

### Envio de contato

O site prepara Gmail e WhatsApp, mas não envia mensagens, não confirma entrega e não guarda protocolo. Isso é intencional no escopo atual, porém significa dependência de login, disponibilidade e comportamento das plataformas externas.

### Observabilidade

Há captura de erros e hooks opcionais para o preview Lovable, mas não existe monitoramento de produção dedicado.

### Infraestrutura de dados remotos

`QueryClient` está configurado, mas não existem queries ou mutations. É infraestrutura não utilizada, não uma funcionalidade de negócio.

### Operação descrita nos documentos legais

Agendamento, pagamento, contratos, histórico de sessões e armazenamento de documentos são descritos como parte da operação da mentoria, mas não estão implementados como software neste repositório.

### Metadados sociais

A configuração está implementada, mas a atualização do preview depende do cache de plataformas externas. O X já exigiu uma URL versionada da imagem para recarregar o card.

## Planejadas

Não há funcionalidade futura aprovada e registrada no código ou histórico atual deste repositório.

O sistema privado de gestão mencionado no contexto permanece intencionalmente fora do escopo e não deve ser tratado como funcionalidade planejada deste site público.

## Descontinuadas ou substituídas

- **Deploy Cloudflare:** substituído pela Netlify; a configuração atual desabilita o alvo Cloudflare padrão.
- **Contato geral por WhatsApp:** substituído pelo fluxo de Gmail; WhatsApp permanece apenas para interesse em mentoria.
- **CareerCompassVisual:** componente histórico substituído por `CareerStrategyMapVisual` e não existe mais no estado atual.
- **Bodoni Moda nos títulos:** testada e substituída por Prata.
- **Fonte social aproximada:** substituída pela MonteCarlo exata e hospedada localmente.

Essas substituições são sustentadas pelo histórico Git registrado em `docs/CHANGELOG.md`.

