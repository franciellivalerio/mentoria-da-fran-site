# Integrações

Nenhuma integração usa token ou credencial de servidor no estado atual. Destinos públicos devem ser referenciados pelo caminho do código, não copiados para novos arquivos de configuração sem necessidade.

## Netlify

**Estado:** implementada.

- Hospeda os arquivos públicos e o runtime SSR.
- Adaptador: `@netlify/vite-plugin-tanstack-start` em `vite.config.ts`.
- Build: `bun run build`.
- Diretório publicado: `dist/client`.
- Configuração: `netlify.toml`.
- Scripts manuais disponíveis: `deploy` e `deploy:preview` em `package.json`.
- O histórico do projeto registra deploy contínuo a partir do Git; a branch operacional atual é `develop`.

O alvo Cloudflare anterior foi substituído. `vite.config.ts` desabilita explicitamente o alvo Nitro/Cloudflare padrão fornecido pelo wrapper para evitar adaptadores duplicados.

## WhatsApp

**Estado:** implementada como deep link; não é uma integração por API.

- Número público definido na constante `WHATSAPP_NUMBER` de `src/routes/contato.tsx`.
- Mobile abre `https://wa.me/...`.
- Desktop abre `https://web.whatsapp.com/send`.
- A mensagem é montada no navegador e codificada com `encodeURIComponent`.
- Não há WhatsApp Business API, webhook, automação de envio, confirmação de entrega ou armazenamento.
- O usuário ainda precisa estar conectado e confirmar o envio.

## Gmail

**Estado:** implementada como URL de composição; não usa Gmail API.

- Destinatário público definido em `CONTACT_EMAIL` em `src/routes/contato.tsx`.
- O site abre `https://mail.google.com/mail/?view=cm...` com assunto e corpo codificados.
- Não há OAuth, token, envio pelo servidor ou confirmação de entrega.
- O usuário pode precisar autenticar-se no Google e precisa enviar a mensagem manualmente.

## Google Fonts

**Estado:** implementada.

- Cormorant Garamond, Lora e Prata são carregadas de `fonts.googleapis.com` em `src/routes/__root.tsx`.
- A assinatura MonteCarlo é hospedada localmente em `public/fonts/MonteCarlo-Regular.ttf` e declarada em `src/styles.css`.
- Há `preconnect` para Google Fonts e `fonts.gstatic.com`.

## Open Graph e X/Twitter Cards

**Estado:** implementada.

- Metadados globais em `src/routes/__root.tsx`.
- Títulos e descrições por rota em `src/routes/*.tsx`.
- Imagem social em `public/og-image.png` e fonte vetorial em `public/og-image.svg`.
- O query parameter `?v=2` na URL da imagem existe para invalidar cache anterior do X.
- `public/robots.txt` permite `Twitterbot` e `facebookexternalhit`.
- Não há uso de API do X, Facebook ou serviço de publicação social.

## Lovable/editor preview

**Estado:** integração condicional de diagnóstico.

- `src/lib/lovable-error-reporting.ts` envia erros para hooks globais somente quando o ambiente de preview os injeta.
- Não há SDK de monitoramento de produção configurado.
- A ausência desses hooks não interfere no funcionamento do site.

## Referências legais externas

**Estado:** links informativos.

As páginas legais apontam para fontes oficiais:

- Código de Defesa do Consumidor;
- Lei Geral de Proteção de Dados;
- Autoridade Nacional de Proteção de Dados;
- Decreto nº 7.962/2013.

Esses links não trocam dados com o site além da navegação iniciada pelo usuário.

## Persistência do navegador

**Estado:** implementada somente para preferência visual.

- Chave: `mentoria-theme` no `localStorage`.
- Valores usados: `light` ou `dark`.
- Não contém dado de lead ou mentorado.

## Integrações não existentes

Não foram encontrados no código atual:

- Google Calendar ou agenda externa;
- Supabase ou outro banco de dados;
- sistema de autenticação;
- gateway/processador de pagamento;
- plataforma de contratos ou assinatura eletrônica;
- serviço de e-mail transacional;
- WhatsApp Business API;
- analytics ou tag manager;
- CRM;
- armazenamento de arquivos;
- API do LinkedIn ou Gupy.

As páginas legais mencionam categorias genéricas de ferramentas usadas na operação da mentoria, mas isso não comprova integração técnica neste repositório.

