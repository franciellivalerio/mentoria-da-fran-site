# Roadmap, pendências e limitações

## Situação do roadmap

Não existe um roadmap funcional aprovado além do que já está implementado. Os itens abaixo são pendências técnicas ou decisões que precisam de confirmação; não devem ser interpretados como autorização automática para desenvolver novas funcionalidades.

## Pendências confirmadas

### 1. Evitar divergência entre planos duplicados

Os nomes e descrições dos planos aparecem em:

- `src/routes/planos.tsx`;
- `src/routes/contato.tsx`;
- resumo da home em `src/routes/index.tsx`.

Hoje os dados estão coerentes, mas alterações futuras podem divergir. Antes de mudar nomes, valores ou escopo, revisar os três locais e `docs/BUSINESS_RULES.md`. Uma futura centralização pode ser considerada, mas não foi autorizada nesta tarefa.

### 2. Definir estratégia para destinos de contato

`WHATSAPP_NUMBER` e `CONTACT_EMAIL` estão definidos diretamente em `src/routes/contato.tsx`. O antigo `VITE_WHATSAPP_NUMBER` documentado no repositório não era consumido pelo código e foi removido das instruções ativas.

Decisão necessária: manter constantes públicas no código ou centralizá-las em configuração pública. Nunca tratar `VITE_*` como segredo.

### 3. Revisão jurídica e operacional

As páginas legais foram implementadas, mas o repositório não contém evidência de revisão jurídica formal. Confirmar manualmente:

- validade e atualização das regras de cancelamento e reembolso;
- data “Última atualização”;
- ferramentas realmente usadas na operação fora do site;
- períodos reais de retenção;
- canal oficial para direitos de titulares;
- coerência entre preços/ofertas e condições contratadas.

### 4. Página de erro SSR

`src/lib/error-page.ts` está em inglês e usa estilo genérico, diferente da interface pública em português. Não é um erro do fluxo normal, mas é uma inconsistência visível em falha catastrófica.

### 5. Testes automatizados

Não há testes unitários, de integração ou end-to-end. A validação atual depende de lint, typecheck, build e testes manuais. Caso o projeto cresça, priorizar testes dos dois formulários, query parameters, mensagem de WhatsApp, alternância de tema e navegação responsiva.

### 6. Monitoramento de produção

Os hooks Lovable funcionam apenas quando injetados pelo preview. Não existe serviço de observabilidade de produção. Qualquer adoção futura precisa de avaliação de privacidade e documentação em `INTEGRATIONS.md`.

## Limitações conhecidas

- Gmail abre somente o compositor web; usuários sem sessão podem precisar autenticar-se.
- WhatsApp exige aplicativo ou sessão web e confirmação manual de envio.
- A detecção mobile do WhatsApp é heurística baseada em user agent e touch points.
- O site não registra aceite legal, contato, envio, pagamento ou agendamento.
- Não há fallback de envio se Gmail ou WhatsApp estiverem indisponíveis.
- Google Fonts depende de rede externa; apenas MonteCarlo é local.
- Cache de previews sociais é controlado pelas plataformas externas.
- `QueryClient` existe sem uso atual.

## Itens explicitamente fora do escopo

- painel de gestão;
- banco de dados;
- autenticação;
- dados privados de mentorados;
- Supabase;
- calendário/agendamento automático;
- pagamentos online;
- CRM;
- automação de WhatsApp ou e-mail.

Esses itens só podem entrar neste repositório mediante decisão explícita que reveja a separação arquitetural atual. A preferência é mantê-los em um projeto privado separado.

## Processo para novas funcionalidades

Antes de iniciar uma mudança relevante:

1. ler `docs/PROJECT_CONTEXT.md`;
2. ler os documentos do módulo;
3. verificar se a mudança respeita o escopo público;
4. confirmar requisito incerto em vez de inferi-lo;
5. atualizar a documentação afetada;
6. executar lint, typecheck e build;
7. testar desktop, mobile e destinos externos quando aplicável;
8. registrar mudança relevante em `docs/CHANGELOG.md`.
