import { createFileRoute } from "@tanstack/react-router";
import {
  LegalDocument,
  LegalExternalLink,
  LegalHighlight,
  LegalList,
  LegalParagraph,
  LegalSection,
  LegalSubheading,
  type LegalNavItem,
} from "@/components/site/LegalDocument";
import { SiteLayout } from "@/components/site/SiteLayout";

const TITLE = "Regras e Condições da Mentoria";
const DESCRIPTION =
  "Conheça as regras de agendamento, pagamento, reagendamento, cancelamento, privacidade e utilização da Mentoria da Fran.";
const LAST_UPDATED = "27 de setembro de 2026";

const NAVIGATION: readonly LegalNavItem[] = [
  { id: "agendamento", label: "1. Agendamento e reserva" },
  { id: "duracao", label: "2. Duração das sessões" },
  { id: "reagendamento", label: "3. Reagendamento" },
  { id: "cancelamento", label: "4. Cancelamento e reembolso" },
  { id: "ausencia", label: "5. Ausência na sessão" },
  { id: "planos", label: "6. Planos de acompanhamento" },
  { id: "pagamento", label: "7. Pagamento" },
  { id: "escopo", label: "8. Escopo da mentoria" },
  { id: "resultados", label: "9. Resultados da mentoria" },
  { id: "responsabilidades", label: "10. Responsabilidades" },
  { id: "materiais", label: "11. Materiais e propriedade intelectual" },
  { id: "documentos", label: "12. Documentos profissionais" },
  { id: "alteracoes", label: "Alterações destas condições" },
  { id: "referencias", label: "Referências legais" },
] as const;

const EXCEPTIONAL_REASONS = [
  "questões relacionadas à saúde do mentorado;",
  "eventos externos ou condições climáticas relevantes que impeçam ou dificultem a realização da sessão;",
  "falecimento de familiar.",
] as const;

const SCOPE_ITEMS = [
  "currículo;",
  "LinkedIn;",
  "entrevistas;",
  "processos seletivos;",
  "posicionamento profissional;",
  "planejamento de carreira;",
  "portfólio;",
  "estudos;",
  "transição de carreira;",
  "PDI;",
  "roadmap profissional;",
  "preparação para processos seletivos;",
  "organização de objetivos e próximos passos.",
] as const;

const RESPONSIBILITIES = [
  "forneça informações verdadeiras e atualizadas;",
  "participe das sessões agendadas;",
  "comunique impossibilidades ou alterações de agenda;",
  "informe mudanças relevantes nos seus objetivos profissionais;",
  "realize, quando possível, as atividades acordadas entre as sessões;",
  "mantenha comunicação respeitosa durante todo o acompanhamento;",
  "preserve os materiais disponibilizados para seu uso pessoal.",
] as const;

const DOCUMENT_USES = [
  "análise profissional;",
  "preparação das sessões;",
  "revisão de currículo;",
  "revisão de LinkedIn;",
  "elaboração de plano de desenvolvimento;",
  "preparação para entrevistas;",
  "acompanhamento da evolução profissional;",
  "produção dos materiais solicitados pelo mentorado.",
] as const;

export const Route = createFileRoute("/regras-e-condicoes")({
  head: () => ({
    meta: [
      { title: `${TITLE} — Mentoria da Fran` },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: RulesPage,
});

function RulesPage() {
  return (
    <SiteLayout>
      <LegalDocument
        eyebrow="Transparência e cuidado"
        title={TITLE}
        lastUpdated={LAST_UPDATED}
        navigation={NAVIGATION}
        introduction={
          <>
            <p>
              A Mentoria da Fran foi estruturada para oferecer um acompanhamento profissional
              organizado, transparente e respeitoso para todas as partes envolvidas.
            </p>
            <p>
              As condições abaixo estabelecem as regras aplicáveis ao agendamento, pagamento,
              realização das sessões, reagendamentos, cancelamentos, utilização de materiais e
              demais aspectos relacionados à prestação da mentoria.
            </p>
            <p>
              Ao contratar a mentoria, o mentorado declara que teve acesso prévio a estas condições
              e concorda com os termos aplicáveis ao serviço contratado, sem prejuízo dos direitos
              assegurados pela legislação brasileira.
            </p>
          </>
        }
      >
        <LegalSection id="agendamento" title="1. Agendamento e reserva das sessões">
          <LegalParagraph>
            As sessões da Mentoria da Fran são realizadas mediante agendamento prévio, conforme a
            disponibilidade apresentada ao mentorado.
          </LegalParagraph>
          <LegalParagraph>
            A escolha de uma data e horário, isoladamente, não representa a confirmação definitiva
            da sessão.
          </LegalParagraph>
          <LegalParagraph>
            A sessão somente será considerada efetivamente reservada após a confirmação do pagamento
            correspondente ao serviço ou plano contratado.
          </LegalParagraph>
          <LegalParagraph>
            Enquanto o pagamento não for identificado ou confirmado, o horário poderá permanecer
            disponível para outros agendamentos.
          </LegalParagraph>
          <LegalParagraph>
            Após a confirmação do pagamento, o mentorado receberá a confirmação da reserva pelos
            canais utilizados pela mentoria.
          </LegalParagraph>
          <LegalParagraph>
            O mentorado é responsável por comparecer na data e horário acordados.
          </LegalParagraph>
          <LegalHighlight>A reserva do horário ocorre mediante confirmação do pagamento.</LegalHighlight>
        </LegalSection>

        <LegalSection id="duracao" title="2. Duração das sessões">
          <LegalParagraph>
            As sessões possuem duração aproximada entre 30 e 60 minutos, conforme a modalidade
            contratada, o objetivo do encontro e as necessidades identificadas durante a mentoria.
          </LegalParagraph>
          <LegalParagraph>
            O horário reservado considera o período previamente acordado entre as partes.
          </LegalParagraph>
          <LegalParagraph>
            Eventuais atrasos do mentorado não implicam extensão automática da sessão para além do
            horário originalmente reservado.
          </LegalParagraph>
          <LegalParagraph>
            Sempre que possível, pequenos atrasos serão administrados dentro do período disponível.
            Entretanto, quando o atraso comprometer de forma significativa a realização da sessão ou
            ultrapassar o período reservado, o encontro poderá ser considerado realizado.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="reagendamento" title="3. Reagendamento">
          <LegalParagraph>
            Solicitações de reagendamento devem ser comunicadas com a maior antecedência possível.
          </LegalParagraph>
          <LegalParagraph>
            Como regra geral, recomenda-se que o pedido seja realizado com antecedência mínima de 48
            horas em relação ao horário originalmente agendado.
          </LegalParagraph>
          <LegalParagraph>
            Pedidos realizados dentro desse prazo serão atendidos de acordo com a disponibilidade da
            agenda.
          </LegalParagraph>
          <LegalSubheading>Situações excepcionais</LegalSubheading>
          <LegalParagraph>
            Independentemente do prazo de 48 horas, pedidos de reagendamento relacionados às seguintes
            situações poderão receber tratamento excepcional:
          </LegalParagraph>
          <LegalList items={EXCEPTIONAL_REASONS} />
          <LegalParagraph>
            Nessas situações, a Mentoria da Fran buscará priorizar o reagendamento da sessão,
            considerando a disponibilidade de agenda e as circunstâncias apresentadas.
          </LegalParagraph>
          <LegalParagraph>
            Outras situações não previstas acima poderão ser apresentadas pelo mentorado e serão
            analisadas individualmente, mediante diálogo entre as partes.
          </LegalParagraph>
          <LegalParagraph>
            A análise de uma situação excepcional não representa obrigação automática de
            reagendamento ou restituição, salvo quando houver direito assegurado pela legislação
            aplicável.
          </LegalParagraph>
          <LegalHighlight>
            Quando o pedido estiver relacionado à saúde, não serão solicitadas informações médicas
            detalhadas sem necessidade. Caso seja necessário algum tipo de comprovação excepcional,
            será solicitado apenas o mínimo indispensável para análise da situação, evitando o
            armazenamento desnecessário de documentos médicos ou informações sensíveis.
          </LegalHighlight>
        </LegalSection>

        <LegalSection id="cancelamento" title="4. Cancelamento e reembolso">
          <LegalParagraph>
            Pedidos de cancelamento e eventual reembolso serão analisados considerando:
          </LegalParagraph>
          <LegalList
            items={[
              "a modalidade contratada;",
              "o momento da solicitação;",
              "a realização ou não de sessões;",
              "os serviços já efetivamente prestados;",
              "as circunstâncias apresentadas;",
              "os direitos previstos na legislação brasileira.",
            ]}
          />
          <LegalSubheading>Direito de arrependimento</LegalSubheading>
          <LegalParagraph>
            Nas contratações realizadas pela internet, por WhatsApp ou por outro meio fora de
            estabelecimento comercial, será respeitado o direito de arrependimento previsto no artigo
            49 do Código de Defesa do Consumidor, quando aplicável.
          </LegalParagraph>
          <LegalParagraph>
            O artigo 49 da Lei nº 8.078/1990 estabelece prazo de 7 dias para o exercício do direito de
            arrependimento nas hipóteses previstas pela legislação.
          </LegalParagraph>
          <LegalExternalLink href="https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm">
            Código de Defesa do Consumidor - Lei nº 8.078/1990
          </LegalExternalLink>
          <LegalSubheading>Cancelamentos próximos à sessão</LegalSubheading>
          <LegalParagraph>
            Após o período legal aplicável, cancelamentos solicitados com menos de 48 horas de
            antecedência da sessão não gerarão, como regra geral, reembolso automático da sessão
            reservada.
          </LegalParagraph>
          <LegalParagraph>
            Essa regra existe em razão da reserva exclusiva do horário e da limitação de possibilidade
            de disponibilização desse período para outro mentorado.
          </LegalParagraph>
          <LegalSubheading>Exceções</LegalSubheading>
          <LegalParagraph>
            Pedidos relacionados às seguintes circunstâncias poderão ser avaliados para reagendamento
            ou reembolso, conforme o caso:
          </LegalParagraph>
          <LegalList
            items={[
              "questões relacionadas à saúde do mentorado;",
              "eventos externos ou condições climáticas relevantes;",
              "falecimento de familiar.",
            ]}
          />
          <LegalParagraph>
            Nas situações acima, será priorizado, sempre que viável, o reagendamento da sessão.
          </LegalParagraph>
          <LegalParagraph>
            Quando o reagendamento não for possível ou adequado diante das circunstâncias, a
            possibilidade de reembolso poderá ser analisada individualmente.
          </LegalParagraph>
          <LegalParagraph>
            Outros motivos deverão ser apresentados e conversados com a Mentoria da Fran, sendo
            avaliados de maneira individual, razoável e transparente.
          </LegalParagraph>
          <LegalHighlight>
            Nenhuma das condições previstas nesta política limita direitos obrigatórios assegurados ao
            consumidor pela legislação brasileira.
          </LegalHighlight>
        </LegalSection>

        <LegalSection id="ausencia" title="5. Ausência na sessão">
          <LegalParagraph>
            O não comparecimento à sessão sem comunicação prévia será considerado ausência ou no-show.
          </LegalParagraph>
          <LegalParagraph>
            Como regra geral, sessões não comparecidas sem aviso prévio serão consideradas utilizadas,
            uma vez que o horário permaneceu reservado exclusivamente para o mentorado.
          </LegalParagraph>
          <LegalParagraph>
            Situações excepcionais relacionadas à saúde, condições climáticas ou eventos externos
            relevantes, falecimento de familiar ou outras circunstâncias justificáveis poderão ser
            analisadas individualmente.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="planos" title="6. Planos de acompanhamento">
          <LegalParagraph>
            Os planos de acompanhamento possuem período próprio de utilização e condições apresentadas
            no momento da contratação.
          </LegalParagraph>
          <LegalParagraph>
            As sessões incluídas no plano devem ser utilizadas durante o período correspondente, salvo
            acordo diferente entre as partes.
          </LegalParagraph>
          <LegalParagraph>
            É responsabilidade do mentorado realizar os agendamentos dentro do período disponível.
          </LegalParagraph>
          <LegalParagraph>
            Caso seja solicitado o cancelamento de um plano após o início do acompanhamento, serão
            considerados os serviços já efetivamente prestados e os direitos previstos pela legislação
            aplicável para análise de eventual restituição.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="pagamento" title="7. Pagamento">
          <LegalParagraph>
            O pagamento deverá ser realizado nas condições apresentadas no momento da contratação.
          </LegalParagraph>
          <LegalParagraph>
            A confirmação do pagamento é condição para a reserva definitiva da sessão ou ativação do
            plano contratado.
          </LegalParagraph>
          <LegalParagraph>
            Enquanto o pagamento estiver pendente, o horário selecionado poderá permanecer disponível
            para outras pessoas.
          </LegalParagraph>
          <LegalParagraph>
            Eventuais descontos, condições especiais ou valores promocionais serão válidos
            exclusivamente conforme as condições apresentadas no momento da oferta.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="escopo" title="8. Escopo da mentoria">
          <LegalParagraph>
            A Mentoria da Fran possui caráter de orientação, desenvolvimento profissional e
            acompanhamento de carreira.
          </LegalParagraph>
          <LegalParagraph>Entre os temas que poderão ser trabalhados estão:</LegalParagraph>
          <LegalList items={SCOPE_ITEMS} />
          <LegalParagraph>
            O escopo de cada acompanhamento será definido conforme as necessidades e objetivos do
            mentorado.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="resultados" title="9. Resultados da mentoria">
          <LegalParagraph>
            A mentoria oferece orientação, estratégia, acompanhamento e apoio profissional, mas não
            representa promessa ou garantia de contratação, promoção, aprovação em processo seletivo,
            aumento salarial, recolocação profissional ou qualquer resultado específico.
          </LegalParagraph>
          <LegalParagraph>
            Resultados profissionais dependem de diversos fatores externos, incluindo características
            do mercado, critérios de empresas contratantes, disponibilidade de oportunidades,
            experiência profissional do mentorado e aplicação das estratégias discutidas durante o
            acompanhamento.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="responsabilidades" title="10. Responsabilidades do mentorado">
          <LegalParagraph>
            Para contribuir para o bom andamento do acompanhamento, espera-se que o mentorado:
          </LegalParagraph>
          <LegalList items={RESPONSIBILITIES} />
        </LegalSection>

        <LegalSection id="materiais" title="11. Materiais e propriedade intelectual">
          <LegalParagraph>
            Materiais, documentos, modelos, apresentações, roadmaps, exercícios, guias, templates e
            outros conteúdos desenvolvidos ou disponibilizados pela Mentoria da Fran destinam-se
            exclusivamente ao uso pessoal do mentorado, salvo indicação expressa em sentido contrário.
          </LegalParagraph>
          <LegalParagraph>
            Não é permitida a comercialização, reprodução integral, distribuição pública, revenda ou
            disponibilização dos materiais a terceiros sem autorização prévia.
          </LegalParagraph>
          <LegalParagraph>
            O mentorado poderá utilizar os conteúdos e orientações recebidos em benefício de sua
            própria carreira e desenvolvimento profissional.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="documentos" title="12. Currículos, LinkedIn e documentos profissionais">
          <LegalParagraph>
            Currículos, links de LinkedIn, portfólios, documentos profissionais e demais materiais
            fornecidos pelo mentorado poderão ser utilizados exclusivamente para as finalidades
            relacionadas à prestação da mentoria.
          </LegalParagraph>
          <LegalParagraph>Essas informações poderão ser utilizadas para:</LegalParagraph>
          <LegalList items={DOCUMENT_USES} />
          <LegalParagraph>
            Os documentos não deverão ser publicados ou compartilhados publicamente pela Mentoria da
            Fran sem autorização.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="alteracoes" title="Alterações destas condições">
          <LegalParagraph>
            Estas condições poderão ser atualizadas para refletir mudanças na prestação dos serviços,
            processos internos ou legislação aplicável.
          </LegalParagraph>
          <LegalParagraph>A versão vigente estará sempre disponível no site.</LegalParagraph>
          <LegalParagraph>
            Para contratações já realizadas, deverão ser respeitadas as condições apresentadas no
            momento da contratação, salvo alterações necessárias ao cumprimento da legislação ou
            alterações expressamente acordadas entre as partes.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="referencias" title="Referências legais">
          <div className="grid gap-5 sm:grid-cols-2">
            <Reference
              title="Código de Defesa do Consumidor"
              detail="Lei nº 8.078/1990"
              href="https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm"
            />
            <Reference
              title="Lei Geral de Proteção de Dados Pessoais"
              detail="Lei nº 13.709/2018"
              href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm"
            />
            <Reference
              title="Autoridade Nacional de Proteção de Dados"
              detail="Direitos dos titulares"
              href="https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados/direito-dos-titulares"
            />
            <Reference
              title="Decreto nº 7.962/2013"
              detail="Regulamentação da contratação no comércio eletrônico"
              href="https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/decreto/d7962.htm"
            />
          </div>
        </LegalSection>
      </LegalDocument>
    </SiteLayout>
  );
}

function Reference({ title, detail, href }: { title: string; detail: string; href: string }) {
  return (
    <div className="rounded-2xl bg-card/55 p-5 ring-1 ring-border">
      <p className="font-display text-lg font-semibold text-heading">{title}</p>
      <p className="mt-1 text-base text-muted-foreground">{detail}</p>
      <div className="mt-3">
        <LegalExternalLink href={href}>Acessar fonte oficial</LegalExternalLink>
      </div>
    </div>
  );
}
