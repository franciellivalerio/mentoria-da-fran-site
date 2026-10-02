# Banco de dados e persistência

## Estado atual

Este repositório **não possui banco de dados**.

Não existem:

- tabelas, collections ou entidades persistidas;
- schemas ou migrações;
- ORM;
- cliente Supabase;
- consultas a banco;
- autenticação;
- API de gravação de leads;
- upload ou armazenamento de documentos.

Essa ausência é intencional e está registrada em `AGENTS.md` e `README.md`.

## Dados transitórios dos formulários

Os formulários em `src/routes/contato.tsx` usam `FormData` somente no navegador.

### Contato geral

Dados transitórios:

- nome;
- mensagem.

Destino: compositor do Gmail. O site não persiste nem transmite esses dados para um backend próprio.

### Interesse em mentoria

Dados transitórios:

- nome;
- e-mail;
- profissão ou indicação de ausência;
- LinkedIn ou indicação de ausência;
- interesses;
- dias e horários disponíveis;
- plano de interesse;
- objetivo opcional;
- aceite legal.

Destino: mensagem pré-preenchida do WhatsApp. O site não persiste os dados. O aceite legal também não é registrado em banco; ele apenas bloqueia o avanço do formulário enquanto não estiver marcado.

## Persistência local

A única informação persistida pelo próprio site é:

| Chave | Local | Conteúdo | Finalidade |
| --- | --- | --- | --- |
| `mentoria-theme` | `localStorage` | `light` ou `dark` | Preservar preferência de tema. |

Implementação: `src/components/site/SiteLayout.tsx` e script inicial em `src/routes/__root.tsx`.

## Query cache

`src/router.tsx` instancia `QueryClient` e `src/routes/__root.tsx` fornece `QueryClientProvider`, mas não há query, mutation ou dado de servidor em uso. Não existe persistência do cache.

## Divergência entre política operacional e implementação

`src/routes/privacidade.tsx` descreve dados que **poderão** ser tratados durante a operação completa da mentoria, incluindo telefone, empresa, documentos, histórico de sessões, pagamentos e contratos. Esses tratamentos podem ocorrer fora deste site, mas não estão implementados neste repositório.

Da mesma forma, `src/routes/regras-e-condicoes.tsx` descreve agendamento, pagamento, acompanhamento e uso de documentos como regras da prestação do serviço, não como entidades de software existentes aqui.

## Limite para futuras mudanças

Um sistema privado de gestão, banco, autenticação ou dados de mentorados deve permanecer em projeto separado. Não adicionar schema, cliente de banco ou segredo a este repositório sem uma decisão arquitetural explícita que substitua a regra vigente — hoje essa mudança seria contrária ao escopo documentado.

Caso uma futura integração pública realmente exija persistência, antes de implementar é obrigatório:

1. definir base legal e finalidade;
2. separar dados públicos de dados privados;
3. documentar entidades e retenção;
4. definir autenticação e autorização;
5. atualizar este arquivo, `ARCHITECTURE.md`, `BUSINESS_RULES.md`, `INTEGRATIONS.md` e a política de privacidade;
6. garantir que nenhum segredo seja exposto ao navegador.

