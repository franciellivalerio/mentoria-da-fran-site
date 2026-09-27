import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageIntro, SiteLayout } from "@/components/site/SiteLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TITLE = "Perguntas frequentes — Mentoria da Fran";
const DESC =
  "Tire suas dúvidas sobre a mentoria de carreira: duração das sessões, formato, para quem é indicada e como começar.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: FaqPage,
});

const FAQ = [
  {
    q: "Quanto tempo dura cada sessão?",
    a: "Entre 30 e 60 minutos, dependendo da necessidade do encontro. Uma revisão rápida de LinkedIn pode levar 30 minutos; uma simulação de entrevista costuma usar a hora completa.",
  },
  {
    q: "A mentoria é online?",
    a: "Sim. As sessões acontecem por videochamada e os materiais são compartilhados digitalmente, o que permite atender pessoas de qualquer lugar do Brasil.",
  },
  {
    q: "Para quem a mentoria é indicada?",
    a: "Para profissionais que buscam recolocação, promoção, primeiro emprego na área ou transição de carreira — de qualquer segmento, com foco especial em posicionamento e processos seletivos.",
  },
  {
    q: "Preciso ter um objetivo definido antes de começar?",
    a: "Não. A primeira sessão é justamente de diagnóstico: juntas(os) vamos clarear o objetivo e transformá-lo em metas e ações.",
  },
  {
    q: "Como funciona o acompanhamento entre as sessões?",
    a: "Você recebe atividades práticas e registro dos próximos passos. Também acompanho a evolução dos seus processos seletivos para preparar cada etapa.",
  },
  {
    q: "Como faço para começar?",
    a: "Envie uma mensagem pela página de contato contando um pouco sobre o seu momento. Eu respondo com as opções de formato e horários disponíveis.",
  },
];

function FaqPage() {
  return (
    <SiteLayout>
      <PageIntro
        eyebrow="FAQ"
        title="Perguntas frequentes"
        description="Se a sua dúvida não estiver aqui, é só me chamar pela página de contato."
      />
      <section className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <Accordion type="single" collapsible className="space-y-3">
          {FAQ.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`item-${i}`}
              className="glass-card rounded-2xl px-6 last:border-b"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="reading-copy pb-5 text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <CtaBand />
    </SiteLayout>
  );
}
