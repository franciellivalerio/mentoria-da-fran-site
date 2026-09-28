import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  LegalDocument,
  LegalExternalLink,
  LegalHighlight,
  LegalList,
  LegalParagraph,
  LegalSection,
  type LegalNavItem,
} from "@/components/site/LegalDocument";
import { SiteLayout } from "@/components/site/SiteLayout";

const TITLE = "Política de Privacidade e Proteção de Dados";
const DESCRIPTION =
  "Saiba como a Mentoria da Fran trata dados pessoais, quais são as finalidades e como exercer seus direitos previstos na LGPD.";
const LAST_UPDATED = "27 de setembro de 2026";

const NAVIGATION: readonly LegalNavItem[] = [
  { id: "dados", label: "Dados que poderão ser tratados" },
  { id: "finalidades", label: "Finalidades do tratamento" },
  { id: "saude", label: "Dados relacionados à saúde" },
  { id: "ferramentas", label: "Ferramentas utilizadas" },
  { id: "direitos", label: "Direitos dos titulares" },
  { id: "contato", label: "Canal de contato" },
  { id: "seguranca", label: "Segurança das informações" },
  { id: "retencao", label: "Armazenamento e retenção" },
] as const;

const DATA_ITEMS = [
  "nome;",
  "e-mail;",
  "telefone;",
  "profissão;",
  "cargo;",
  "empresa;",
  "LinkedIn;",
  "objetivos profissionais;",
  "interesses relacionados à mentoria;",
  "disponibilidade de dias e horários;",
  "informações inseridas voluntariamente nos formulários;",
  "documentos profissionais enviados pelo mentorado;",
  "histórico de sessões e atividades;",
  "informações necessárias para comunicação, agendamento e acompanhamento.",
] as const;

const PURPOSES = [
  "responder solicitações de contato;",
  "organizar agendamentos;",
  "prestar os serviços contratados;",
  "preparar sessões de mentoria;",
  "acompanhar a evolução do mentorado;",
  "organizar materiais e documentos;",
  "realizar comunicação relacionada à mentoria;",
  "administrar pagamentos e contratos;",
  "cumprir obrigações legais ou regulatórias;",
  "exercer direitos relacionados à prestação do serviço;",
  "melhorar a organização e experiência da mentoria.",
] as const;

const TOOL_TYPES = [
  "agendamento;",
  "armazenamento de documentos;",
  "videoconferência;",
  "e-mail;",
  "comunicação;",
  "formulários;",
  "processamento de pagamentos.",
] as const;

const DATA_RIGHTS = [
  "confirmação da existência de tratamento;",
  "acesso aos dados;",
  "correção de dados incompletos, inexatos ou desatualizados;",
  "anonimização, bloqueio ou eliminação nas hipóteses previstas em lei;",
  "informações sobre compartilhamento;",
  "revogação do consentimento, quando essa for a base legal utilizada;",
  "demais direitos previstos na legislação aplicável.",
] as const;

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: `${TITLE} — Mentoria da Fran` },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <LegalDocument
        eyebrow="Privacidade com transparência"
        title={TITLE}
        lastUpdated={LAST_UPDATED}
        navigation={NAVIGATION}
        introduction={
          <>
            <p>
              A Mentoria da Fran respeita a privacidade dos mentorados e trata dados pessoais somente
              para finalidades relacionadas à prestação, organização e melhoria dos serviços de
              mentoria.
            </p>
            <p>
              O tratamento de dados pessoais será realizado em conformidade com a Lei nº 13.709/2018,
              Lei Geral de Proteção de Dados Pessoais - LGPD.
            </p>
            <LegalExternalLink href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709compilado.htm">
              Lei Geral de Proteção de Dados Pessoais - Lei nº 13.709/2018
            </LegalExternalLink>
          </>
        }
      >
        <LegalSection id="dados" title="Dados que poderão ser tratados">
          <LegalParagraph>
            Dependendo da interação do usuário com o site e da contratação da mentoria, poderão ser
            tratados dados como:
          </LegalParagraph>
          <LegalList items={DATA_ITEMS} />
        </LegalSection>

        <LegalSection id="finalidades" title="Finalidades do tratamento">
          <LegalParagraph>Os dados poderão ser utilizados para:</LegalParagraph>
          <LegalList items={PURPOSES} />
        </LegalSection>

        <LegalSection id="saude" title="Dados relacionados à saúde">
          <LegalParagraph>
            Informações relacionadas à saúde são classificadas pela LGPD como dados pessoais
            sensíveis.
          </LegalParagraph>
          <LegalParagraph>
            A Mentoria da Fran não solicita, como regra geral, informações médicas detalhadas para
            prestação do serviço.
          </LegalParagraph>
          <LegalParagraph>
            Caso o mentorado solicite reagendamento ou análise excepcional por motivo relacionado à
            saúde, deverão ser coletadas apenas as informações estritamente necessárias para avaliação
            da solicitação.
          </LegalParagraph>
          <LegalHighlight>
            Sempre que possível, será evitado o armazenamento de diagnósticos, laudos, exames ou outros
            documentos médicos detalhados.
          </LegalHighlight>
        </LegalSection>

        <LegalSection id="ferramentas" title="Ferramentas utilizadas">
          <LegalParagraph>
            Para viabilizar a prestação da mentoria, determinados dados poderão ser tratados por
            serviços tecnológicos utilizados na operação, como ferramentas de:
          </LegalParagraph>
          <LegalList items={TOOL_TYPES} />
          <LegalParagraph>
            O uso dessas ferramentas deverá ocorrer exclusivamente conforme necessário para a
            prestação do serviço e de acordo com as respectivas políticas de privacidade.
          </LegalParagraph>
          <LegalSubsection title="WhatsApp">
            <LegalParagraph>
              O formulário de contato disponível neste site organiza as informações preenchidas e abre
              uma conversa no WhatsApp com uma mensagem pronta para revisão. Nenhuma informação desse
              formulário é armazenada pelo site. Os dados somente seguem para o WhatsApp quando o
              usuário decide continuar e enviar a mensagem, ficando também sujeitos à política de
              privacidade da plataforma.
            </LegalParagraph>
          </LegalSubsection>
        </LegalSection>

        <LegalSection id="direitos" title="Direitos dos titulares">
          <LegalParagraph>
            Nos termos da LGPD, o titular poderá exercer os direitos previstos na legislação,
            incluindo, conforme aplicável:
          </LegalParagraph>
          <LegalList items={DATA_RIGHTS} />
          <LegalExternalLink href="https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados/direito-dos-titulares">
            Conheça os direitos dos titulares na ANPD
          </LegalExternalLink>
        </LegalSection>

        <LegalSection id="contato" title="Canal de contato">
          <LegalHighlight>
            E-mail para questões relacionadas aos dados pessoais:{" "}
            <a
              href="mailto:franciellivaleriodeoliveira@gmail.com"
              className="underline decoration-terracotta/40 underline-offset-4 hover:text-primary"
            >
              franciellivaleriodeoliveira@gmail.com
            </a>
          </LegalHighlight>
          <LegalParagraph>
            O titular poderá utilizar esse canal para solicitar informações ou exercer seus direitos
            relacionados à proteção de dados.
          </LegalParagraph>
          <Link
            to="/contato"
            search={{ assunto: undefined }}
            className="font-label inline-flex rounded-xl border border-input bg-card/65 px-5 py-3 text-base font-semibold text-foreground transition-colors hover:bg-accent"
          >
            Acessar página de contato
          </Link>
        </LegalSection>

        <LegalSection id="seguranca" title="Segurança das informações">
          <LegalParagraph>
            A Mentoria da Fran adotará medidas razoáveis de organização e segurança compatíveis com a
            natureza das informações tratadas, buscando reduzir riscos de acesso indevido, perda,
            alteração ou divulgação não autorizada.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="retencao" title="Armazenamento e retenção">
          <LegalParagraph>
            Os dados serão mantidos somente durante o período necessário para cumprimento das
            finalidades relacionadas à mentoria, atendimento de obrigações legais, exercício de
            direitos ou outras hipóteses previstas pela legislação.
          </LegalParagraph>
          <LegalParagraph>
            Quando as informações deixarem de ser necessárias, poderão ser eliminadas ou anonimizadas,
            conforme aplicável.
          </LegalParagraph>
        </LegalSection>
      </LegalDocument>
    </SiteLayout>
  );
}

function LegalSubsection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl bg-card/50 p-5 ring-1 ring-border">
      <h3 className="font-display text-xl font-semibold text-heading">{title}</h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}
