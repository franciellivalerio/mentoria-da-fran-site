# Mentoria da Fran — site público

Site institucional da Mentoria da Fran, separado do sistema privado de gestão de
mentorados. Este projeto contém apenas conteúdo público e não se conecta ao banco
de dados do painel administrativo.

## Desenvolvimento local

Requer [Bun](https://bun.sh/).

```powershell
bun install
Copy-Item .env.example .env
bun run dev
```

No `.env`, configure `VITE_WHATSAPP_NUMBER` com código do país, DDD e número,
usando somente dígitos. Exemplo fictício:

```env
VITE_WHATSAPP_NUMBER=5511999999999
```

Esse número será incluído no link público do WhatsApp; portanto, não é um
segredo. Nunca adicione chaves do Supabase, dados de mentorados ou credenciais a
este repositório.

## Verificação

```powershell
bun run lint
bun run typecheck
bun run build
```
