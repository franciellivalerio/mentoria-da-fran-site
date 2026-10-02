# Mentoria da Fran — site público

Site institucional da Mentoria da Fran, separado do sistema privado de gestão de
mentorados. Este projeto contém apenas conteúdo público e não se conecta ao banco
de dados do painel administrativo.

## Documentação do projeto

Comece por [`docs/PROJECT_CONTEXT.md`](docs/PROJECT_CONTEXT.md). Arquitetura,
regras de negócio, integrações, persistência, funcionalidades, roadmap e histórico
estão documentados na pasta [`docs`](docs).

## Desenvolvimento local

Requer [Bun](https://bun.sh/).

```powershell
bun install
bun run dev
```

O estado atual não exige variáveis de ambiente. Os destinos públicos de Gmail e
WhatsApp estão definidos em `src/routes/contato.tsx`. Nunca adicione chaves do
Supabase, dados de mentorados ou credenciais a este repositório. Valores `VITE_*`
seriam públicos no bundle do navegador e não podem conter segredos.

## Verificação

```powershell
bun run lint
bun run typecheck
bun run build
```

Consulte `AGENTS.md` para as regras de manutenção e atualização obrigatória da
documentação.
