# Regras de negócio

Este documento registra comportamentos presentes no código e nas páginas legais. Em caso de conflito, o código atual define o comportamento técnico; textos legais devem ser revisados pela responsável pelo negócio e, quando necessário, por profissional jurídico.

## Proposta da mentoria

- A mentoria é individual, prática e adaptada ao momento e objetivo do mentorado.
- O método público é composto por diagnóstico, plano de ação e acompanhamento.
- As sessões duram aproximadamente de 30 a 60 minutos.
- O atendimento é online, por videochamada, com materiais compartilhados digitalmente.
- A mentoria pode abordar currículo, LinkedIn, entrevistas, processos seletivos, posicionamento, planejamento de carreira, portfólio, estudos, transição de carreira, PDI e roadmap profissional.
- Não há promessa ou garantia de contratação, promoção, aprovação, aumento salarial ou recolocação.

Fontes: `src/routes/mentoria.tsx`, `src/routes/faq.tsx` e seções 8 e 9 de `src/routes/regras-e-condicoes.tsx`.

## Planos e valores atuais

Fonte de verdade técnica: `PLANS` em `src/routes/planos.tsx`.

### Sessão avulsa — R$ 69,90 por sessão

- 1 sessão de 30 a 60 minutos;
- diagnóstico do momento profissional;
- tema definido pelo mentorado;
- resumo com próximos passos.

### Acompanhamento mensal — R$ 249,90 por mês

- sessões semanais;
- metas e atividades entre sessões;
- trilha de estudos e PDI;
- portfólio e posicionamento nas redes;
- preparação para entrevistas;
- acompanhamento de processos seletivos.

Este é o plano marcado como “Mais procurado”.

### Programa trimestral — R$ 690,90 pelo programa completo

- 3 meses de acompanhamento;
- sessões semanais;
- metas e atividades entre sessões;
- trilha de estudos e PDI;
- portfólio e posicionamento nas redes;
- preparação para entrevistas;
- acompanhamento de processos seletivos.

## Agendamento e pagamento

- A data e o horário escolhidos não confirmam sozinhos a sessão.
- A reserva definitiva depende da confirmação do pagamento.
- Enquanto o pagamento estiver pendente, o horário pode permanecer disponível.
- Planos têm período próprio de utilização; as sessões devem ser usadas dentro do período correspondente, salvo acordo diferente.
- O mentorado é responsável por realizar os agendamentos dentro do período disponível.

Fonte: seções 1, 6 e 7 de `src/routes/regras-e-condicoes.tsx`.

Não há agenda, cobrança ou confirmação de pagamento automatizada neste repositório.

## Reagendamento, atraso, cancelamento e ausência

- Recomenda-se solicitar reagendamento com pelo menos 48 horas de antecedência.
- Reagendamentos dependem da disponibilidade de agenda.
- Saúde, evento externo/climático relevante e falecimento de familiar podem receber análise excepcional.
- Outras situações podem ser analisadas individualmente.
- Atraso não estende automaticamente a sessão; se comprometer o encontro, a sessão pode ser considerada realizada.
- Após o prazo legal aplicável, cancelamentos com menos de 48 horas não geram reembolso automático como regra geral.
- Ausência sem aviso prévio é, como regra geral, considerada sessão utilizada.
- O direito de arrependimento de 7 dias deve ser respeitado quando o artigo 49 do Código de Defesa do Consumidor for aplicável.
- Direitos obrigatórios do consumidor prevalecem.

Fonte: seções 2 a 5 de `src/routes/regras-e-condicoes.tsx`.

## Materiais e documentos profissionais

- Materiais, modelos, apresentações, roadmaps, exercícios, guias e templates destinam-se ao uso pessoal do mentorado.
- Não podem ser comercializados, revendidos, distribuídos publicamente ou reproduzidos integralmente sem autorização.
- Currículo, LinkedIn, portfólio e documentos enviados pelo mentorado só devem ser usados para prestar a mentoria.
- Esses documentos não devem ser publicados ou compartilhados publicamente sem autorização.

Fonte: seções 11 e 12 de `src/routes/regras-e-condicoes.tsx`.

## Contato geral

O fluxo padrão de `/contato` é destinado a dúvidas, parcerias, convites e assuntos que não necessariamente representam interesse em mentoria.

Regras técnicas:

- nome é obrigatório;
- mensagem é obrigatória;
- o site abre o compositor do Gmail com destinatário, assunto e corpo preenchidos;
- o site não envia o e-mail diretamente;
- o site não armazena os dados preenchidos;
- o usuário revisa e envia a mensagem no Gmail.

Fonte: `GeneralContactPage` em `src/routes/contato.tsx`.

## Formulário de início da mentoria

O fluxo é ativado somente quando `assunto=mentoria` é validado na URL.

### Campos obrigatórios

- nome;
- e-mail válido pelo mecanismo nativo do navegador;
- profissão atual, exceto quando “Não possuo profissão no momento” estiver marcado;
- LinkedIn com formato de URL, exceto quando “Não possuo LinkedIn” estiver marcado;
- pelo menos um interesse;
- pelo menos um dia disponível;
- pelo menos um horário disponível;
- exatamente um plano de maior interesse;
- concordância com as Regras e Condições e ciência da Política de Privacidade.

O campo “O que você deseja alcançar com a mentoria?” é opcional.

### Interesses permitidos

Currículo, LinkedIn, Entrevistas, Processos seletivos, Portfólio, PDI, Posicionamento nas redes, Planejamento de carreira, Trilha de estudos e Transição de carreira.

### Disponibilidade oferecida

- dias: segunda, terça, quarta ou quinta-feira;
- horários: 19h, 20h ou 21h.

### Planos permitidos

- Sessão avulsa;
- Acompanhamento mensal;
- Programa trimestral.

Um valor de `plano` recebido pela URL só é aceito se coincidir exatamente com uma dessas opções. Links da página `/planos` preenchem essa escolha automaticamente.

### Validação e mensagem

- Campos ausentes geram aviso visual no formulário e toast.
- A mensagem do WhatsApp é organizada em blocos com emojis para nome, e-mail, profissão, LinkedIn, interesses, disponibilidade, plano e objetivo.
- A mensagem inteira é codificada uma única vez com `encodeURIComponent`.
- Mobile usa `wa.me`; desktop usa WhatsApp Web.
- O usuário precisa revisar e enviar a mensagem; o site não faz envio automático.

Fonte: `MentorshipContactPage`, `validateSearch` e `whatsappUrl` em `src/routes/contato.tsx`.

## Privacidade

- Os formulários não persistem informações no site.
- Os dados só saem da página quando o usuário abre e utiliza Gmail ou WhatsApp.
- Depois disso, o tratamento também depende das políticas dessas plataformas.
- Informações de saúde não devem ser solicitadas detalhadamente como regra geral.
- Se uma análise excepcional por saúde exigir informação, deve ser coletado apenas o mínimo necessário, evitando laudos e exames detalhados sempre que possível.
- O canal para direitos de titulares é o e-mail público declarado em `src/routes/privacidade.tsx`.

## Responsabilidades do mentorado

O texto vigente espera que o mentorado:

- forneça informações verdadeiras e atualizadas;
- participe das sessões agendadas;
- comunique alterações de agenda;
- informe mudanças relevantes nos objetivos;
- realize, quando possível, atividades combinadas;
- mantenha comunicação respeitosa;
- preserve materiais recebidos para uso pessoal.

Fonte: seção 10 de `src/routes/regras-e-condicoes.tsx`.

## Regras de conteúdo e marca

- A marca deve permanecer profissional, editorial, terrosa e acolhedora.
- A assinatura caligráfica é restrita a “Fran” e ao símbolo “F”.
- Conteúdo público não deve sugerir garantia de resultado.
- “Contato” e “Iniciar mentoria” devem continuar sendo intenções distintas.
- Valores exibidos em mais de um ponto precisam permanecer coerentes com `src/routes/planos.tsx`.

