import { createFileRoute, Link } from "@tanstack/react-router";
import { CircleAlert, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { PageIntro, SiteLayout } from "@/components/site/SiteLayout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const TITLE = "Contato — Mentoria da Fran";
const DESC =
  "Entre em contato com a Fran para dúvidas, parcerias, convites ou informações sobre a mentoria de carreira.";

const WHATSAPP_NUMBER = "5521990585036";
const CONTACT_EMAIL = "franciellivaleriodeoliveira@gmail.com";

const INTERESTS = [
  "Currículo",
  "LinkedIn",
  "Entrevistas",
  "Processos seletivos",
  "Portfólio",
  "PDI",
  "Posicionamento nas redes",
  "Planejamento de carreira",
  "Trilha de estudos",
  "Transição de carreira",
] as const;

const AVAILABLE_DAYS = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira"] as const;
const AVAILABLE_TIMES = ["19h", "20h", "21h"] as const;
const MENTORSHIP_PLANS = [
  {
    name: "Sessão avulsa",
    description: "Para uma necessidade pontual.",
  },
  {
    name: "Acompanhamento mensal",
    description: "Para evoluir com constância.",
  },
  {
    name: "Programa trimestral",
    description: "Para avançar com estratégia e continuidade.",
  },
] as const;
type MentorshipPlanName = (typeof MENTORSHIP_PLANS)[number]["name"];

const MESSAGE_MARKER = {
  availableDays: "📅",
  availableTimes: "🕒",
  email: "✉️",
  farewell: "🤎",
  goal: "✨",
  greeting: "🤎",
  interest: "🎯",
  linkedin: "🔗",
  name: "👤",
  plan: "📋",
  profession: "💼",
} as const;

const INTEREST_EMOJI: Record<(typeof INTERESTS)[number], string> = {
  Currículo: "📄",
  LinkedIn: "🔗",
  Entrevistas: "🎤",
  "Processos seletivos": "🔎",
  Portfólio: "🗂️",
  PDI: "🎯",
  "Posicionamento nas redes": "📱",
  "Planejamento de carreira": "🧭",
  "Trilha de estudos": "📚",
  "Transição de carreira": "🔄",
};

const inputClassName = "h-11 rounded-xl border-input bg-card/70 px-4 text-foreground";
const optionClassName =
  "flex cursor-pointer items-center gap-3 rounded-xl border border-input bg-card/60 px-4 py-3 text-sm transition-colors hover:border-primary/40 hover:bg-accent has-[:checked]:border-primary/55 has-[:checked]:bg-primary/10";
const absenceOptionClassName =
  "mt-2 inline-flex cursor-pointer items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground";

export const Route = createFileRoute("/contato")({
  validateSearch: (
    search: Record<string, unknown>,
  ): { assunto?: "mentoria"; plano?: MentorshipPlanName } => {
    const requestedPlan = search["plano"];
    const plan = MENTORSHIP_PLANS.find(({ name }) => name === requestedPlan)?.name;
    const validatedSearch: { assunto?: "mentoria"; plano?: MentorshipPlanName } = {};

    if (search["assunto"] === "mentoria") validatedSearch.assunto = "mentoria";
    if (plan) validatedSearch.plano = plan;

    return validatedSearch;
  },
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: ContatoPage,
});

function whatsappUrl(message: string) {
  const encodedMessage = encodeURIComponent(message);
  const { maxTouchPoints, userAgent } = window.navigator;
  const isMobileDevice =
    /Android|iPhone|iPad|iPod/i.test(userAgent) ||
    (maxTouchPoints > 1 && /Macintosh/i.test(userAgent));

  return isMobileDevice
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    : `https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
}

function ContatoPage() {
  const { assunto, plano } = Route.useSearch();

  return assunto === "mentoria" ? (
    <MentorshipContactPage initialPlan={plano} />
  ) : (
    <GeneralContactPage />
  );
}

function GeneralContactPage() {
  const [formError, setFormError] = useState<string | null>(null);

  function onInvalid(event: React.InvalidEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = "Preencha seu nome e a mensagem antes de continuar.";
    setFormError(message);
    toast.error(message, { id: "contact-required-fields" });
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !message) {
      const warning = "Preencha seu nome e a mensagem antes de continuar.";
      setFormError(warning);
      toast.error(warning, { id: "contact-required-fields" });
      event.currentTarget.reportValidity();
      return;
    }

    const subject = encodeURIComponent(`Contato pelo site — ${name}`);
    const body = encodeURIComponent(`Olá, Fran!\n\nMeu nome é ${name}.\n\n${message}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}&su=${subject}&body=${body}`;

    setFormError(null);
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
    toast.success("Gmail aberto com a sua mensagem pronta.");
  }

  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Contato"
        title="Como posso ajudar?"
        description="Envie sua mensagem para dúvidas, parcerias, convites ou outros assuntos. Ao continuar, abriremos o Gmail para você revisar e enviar."
      />

      <section className="mx-auto max-w-3xl px-4 py-8 pb-20 sm:px-6">
        <div className="surface rounded-[1.75rem] p-6 sm:p-8 md:p-10">
          <form
            onSubmit={onSubmit}
            onInvalid={onInvalid}
            onChange={() => formError && setFormError(null)}
            className="space-y-7"
          >
            <div className="space-y-2">
              <Label htmlFor="contact-name">
                Nome <span className="text-primary">*</span>
              </Label>
              <Input
                id="contact-name"
                name="name"
                required
                autoComplete="name"
                placeholder="Seu nome"
                className={inputClassName}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-message">
                Mensagem <span className="text-primary">*</span>
              </Label>
              <Textarea
                id="contact-message"
                name="message"
                required
                rows={8}
                placeholder="Escreva livremente sobre o assunto que gostaria de conversar."
                className="rounded-xl border-input bg-card/70 px-4 py-3 text-foreground"
              />
            </div>

            {formError && (
              <div
                role="alert"
                className="flex items-start gap-3 rounded-xl border border-primary/35 bg-primary/10 px-4 py-3 text-sm text-foreground"
              >
                <CircleAlert className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{formError}</span>
              </div>
            )}

            <div className="flex flex-col items-start gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="primary-button inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 sm:w-auto"
              >
                <Mail className="size-4" />
                Continuar pelo Gmail
              </button>
              <p className="max-w-sm text-left text-xs leading-relaxed text-muted-foreground">
                Nenhuma informação deste formulário é armazenada pelo site. Você poderá revisar a
                mensagem antes de enviar.
              </p>
            </div>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function MentorshipContactPage({
  initialPlan,
}: {
  initialPlan?: MentorshipPlanName | undefined;
}) {
  const [noProfession, setNoProfession] = useState(false);
  const [noLinkedin, setNoLinkedin] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  function showRequiredWarning(
    message = "Preencha todos os campos obrigatórios antes de continuar.",
  ) {
    setFormError(message);
    toast.error(message, { id: "required-fields" });
  }

  function onInvalid(event: React.InvalidEvent<HTMLFormElement>) {
    event.preventDefault();

    const invalidField = event.target;
    if (invalidField instanceof HTMLInputElement && invalidField.name === "legalAcceptance") {
      const hasAnotherInvalidField = Array.from(event.currentTarget.elements).some((element) => {
        const isFormField =
          element instanceof HTMLInputElement ||
          element instanceof HTMLTextAreaElement ||
          element instanceof HTMLSelectElement;

        return (
          isFormField && element !== invalidField && element.willValidate && !element.validity.valid
        );
      });

      if (!hasAnotherInvalidField) {
        showRequiredWarning(
          "Você precisa concordar com as Regras e Condições e estar ciente da Política de Privacidade para continuar.",
        );
      }
      return;
    }

    showRequiredWarning();
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const profession = String(data.get("profession") ?? "").trim();
    const linkedin = String(data.get("linkedin") ?? "").trim();
    const goal = String(data.get("goal") ?? "").trim();
    const interests = data.getAll("interests").map(String);
    const availableDays = data.getAll("availableDays").map(String);
    const availableTimes = data.getAll("availableTimes").map(String);
    const selectedPlan = String(data.get("mentorshipPlan") ?? "").trim();
    const acceptedTerms = data.get("legalAcceptance") === "on";

    if (!name || !email || (!noProfession && !profession) || (!noLinkedin && !linkedin)) {
      showRequiredWarning();
      event.currentTarget.reportValidity();
      return;
    }

    if (interests.length === 0) {
      showRequiredWarning("Selecione pelo menos um interesse antes de continuar.");
      return;
    }

    if (availableDays.length === 0 || availableTimes.length === 0) {
      showRequiredWarning("Selecione pelo menos um dia e um horário disponível.");
      return;
    }

    if (!selectedPlan) {
      showRequiredWarning("Selecione o plano de maior interesse antes de continuar.");
      return;
    }

    if (!acceptedTerms) {
      showRequiredWarning(
        "Leia e aceite as Regras e Condições e a Política de Privacidade para continuar.",
      );
      return;
    }

    const text = [
      `Olá, Fran! ${MESSAGE_MARKER.greeting}`,
      "Gostaria de conversar sobre a mentoria. Organizei minhas informações abaixo:",
      `${MESSAGE_MARKER.name} *Nome*\n${name}`,
      `${MESSAGE_MARKER.email} *E-mail*\n${email}`,
      `${MESSAGE_MARKER.profession} *Profissão atual*\n${noProfession ? "Não possuo no momento" : profession}`,
      `${MESSAGE_MARKER.linkedin} *LinkedIn*\n${noLinkedin ? "Não possuo" : linkedin}`,
      `${MESSAGE_MARKER.interest} *Principais interesses*\n${interests.map((interest) => `${INTEREST_EMOJI[interest as (typeof INTERESTS)[number]]} ${interest}`).join("\n")}`,
      `*Disponibilidade*\n${MESSAGE_MARKER.availableDays} Dias: ${availableDays.join(", ")}\n${MESSAGE_MARKER.availableTimes} Horários: ${availableTimes.join(", ")}`,
      `${MESSAGE_MARKER.plan} *Plano de interesse*\n${selectedPlan}`,
      `${MESSAGE_MARKER.goal} *O que desejo alcançar com a mentoria*\n${goal || "Não informado"}`,
      `Fico no aguardo para combinarmos os próximos passos. ${MESSAGE_MARKER.farewell}`,
    ].join("\n\n");

    setFormError(null);
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
    toast.success("WhatsApp aberto com a sua mensagem pronta.");
  }

  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Iniciar mentoria"
        title="Vamos conversar sobre o seu próximo passo?"
        description="Conte um pouco sobre o seu momento profissional. Ao continuar, abriremos o WhatsApp com a mensagem pronta para você revisar e enviar."
      />

      <section className="mx-auto max-w-4xl px-4 py-8 pb-20 sm:px-6">
        <div className="surface rounded-[1.75rem] p-6 sm:p-8 md:p-10">
          <form
            onSubmit={onSubmit}
            onInvalid={onInvalid}
            onChange={() => formError && setFormError(null)}
            className="space-y-8"
          >
            <div className="space-y-1.5 text-sm text-muted-foreground">
              <p>
                Os campos marcados com <span className="font-semibold text-primary">*</span> são
                obrigatórios.
              </p>
              <p className="font-medium text-foreground">
                Para continuar, também é necessário aceitar as Regras e Condições da Mentoria e
                declarar ciência da Política de Privacidade.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Nome <span className="text-primary">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Seu nome"
                  className={inputClassName}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">
                  E-mail <span className="text-primary">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="voce@exemplo.com"
                  className={inputClassName}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="profession">
                  Profissão atual <span className="text-primary">*</span>
                </Label>
                <Input
                  id="profession"
                  name="profession"
                  required={!noProfession}
                  disabled={noProfession}
                  placeholder="Conte qual é a sua profissão hoje"
                  className={`${inputClassName} disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-60`}
                />
                <label className={absenceOptionClassName}>
                  <input
                    type="checkbox"
                    checked={noProfession}
                    onChange={(event) => setNoProfession(event.target.checked)}
                    className="size-4 accent-primary"
                  />
                  Não possuo profissão no momento
                </label>
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin">
                  LinkedIn <span className="text-primary">*</span>
                </Label>
                <Input
                  id="linkedin"
                  name="linkedin"
                  type="url"
                  inputMode="url"
                  required={!noLinkedin}
                  disabled={noLinkedin}
                  placeholder="https://linkedin.com/in/seu-perfil"
                  className={`${inputClassName} disabled:cursor-not-allowed disabled:bg-muted disabled:opacity-60`}
                />
                <label className={absenceOptionClassName}>
                  <input
                    type="checkbox"
                    checked={noLinkedin}
                    onChange={(event) => setNoLinkedin(event.target.checked)}
                    className="size-4 accent-primary"
                  />
                  Não possuo LinkedIn
                </label>
              </div>
            </div>

            <fieldset aria-required="true">
              <legend className="text-sm font-medium text-foreground">
                Principais interesses <span className="text-primary">*</span>
              </legend>
              <p className="mt-1 text-sm text-muted-foreground">Você pode marcar mais de um.</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {INTERESTS.map((interest) => (
                  <label key={interest} className={optionClassName}>
                    <input
                      type="checkbox"
                      name="interests"
                      value={interest}
                      className="size-4 shrink-0 accent-primary"
                    />
                    {interest}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="grid gap-6 md:grid-cols-2">
              <fieldset aria-required="true">
                <legend className="text-sm font-medium text-foreground">
                  Dias disponíveis <span className="text-primary">*</span>
                </legend>
                <p className="mt-1 text-sm text-muted-foreground">De segunda a quinta-feira.</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                  {AVAILABLE_DAYS.map((day) => (
                    <label key={day} className={optionClassName}>
                      <input
                        type="checkbox"
                        name="availableDays"
                        value={day}
                        className="size-4 shrink-0 accent-primary"
                      />
                      {day}
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset aria-required="true">
                <legend className="text-sm font-medium text-foreground">
                  Horários disponíveis <span className="text-primary">*</span>
                </legend>
                <p className="mt-1 text-sm text-muted-foreground">Horários a partir das 19h.</p>
                <div className="mt-3 grid grid-cols-3 gap-3 md:grid-cols-1 lg:grid-cols-3">
                  {AVAILABLE_TIMES.map((time) => (
                    <label key={time} className={optionClassName}>
                      <input
                        type="checkbox"
                        name="availableTimes"
                        value={time}
                        className="size-4 shrink-0 accent-primary"
                      />
                      {time}
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            <fieldset aria-required="true">
              <legend className="text-sm font-medium text-foreground">
                Plano de maior interesse <span className="text-primary">*</span>
              </legend>
              <p className="mt-1 text-sm text-muted-foreground">
                Escolha o formato que mais combina com o seu momento. Você também pode consultar os{" "}
                <Link
                  to="/planos"
                  className="font-semibold text-primary underline decoration-primary/35 underline-offset-4 hover:text-foreground"
                >
                  planos e valores
                </Link>
                .
              </p>
              <div className="mt-3 grid gap-3 md:grid-cols-3">
                {MENTORSHIP_PLANS.map((plan) => (
                  <label key={plan.name} className={`${optionClassName} items-start`}>
                    <input
                      type="radio"
                      name="mentorshipPlan"
                      value={plan.name}
                      required
                      defaultChecked={initialPlan === plan.name}
                      className="mt-1 size-4 shrink-0 accent-primary"
                    />
                    <span>
                      <span className="block font-semibold text-foreground">{plan.name}</span>
                      <span className="mt-1 block leading-relaxed text-muted-foreground">
                        {plan.description}
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="space-y-2">
              <Label htmlFor="goal">
                O que você deseja alcançar com a mentoria?{" "}
                <span className="font-normal text-muted-foreground">(opcional)</span>
              </Label>
              <Textarea
                id="goal"
                name="goal"
                rows={5}
                placeholder="Conte quais mudanças, resultados ou próximos passos você busca."
                className="rounded-xl border-input bg-card/70 px-4 py-3 text-foreground"
              />
            </div>

            <div className="rounded-2xl border border-input bg-card/50 p-5">
              <div className="flex items-start gap-3">
                <input
                  id="legalAcceptance"
                  name="legalAcceptance"
                  type="checkbox"
                  required
                  className="mt-1 size-4 shrink-0 accent-primary"
                />
                <label
                  htmlFor="legalAcceptance"
                  className="text-base leading-relaxed text-foreground"
                >
                  Li e concordo com as{" "}
                  <Link
                    to="/regras-e-condicoes"
                    className="font-semibold text-primary underline decoration-primary/35 underline-offset-4 hover:text-foreground"
                  >
                    Regras e Condições da Mentoria
                  </Link>{" "}
                  e declaro estar ciente da{" "}
                  <Link
                    to="/privacidade"
                    className="font-semibold text-primary underline decoration-primary/35 underline-offset-4 hover:text-foreground"
                  >
                    Política de Privacidade
                  </Link>
                  . <span className="text-primary">*</span>
                </label>
              </div>
              <p className="mt-3 pl-7 text-sm text-muted-foreground">
                Você poderá consultar estes documentos a qualquer momento no rodapé do site.
              </p>
            </div>

            {formError && (
              <div
                role="alert"
                className="flex items-start gap-3 rounded-xl border border-primary/35 bg-primary/10 px-4 py-3 text-sm text-foreground"
              >
                <CircleAlert className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{formError}</span>
              </div>
            )}

            <div className="flex flex-col items-start gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="primary-button inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 sm:w-auto"
              >
                <MessageCircle className="size-4" />
                Continuar no WhatsApp
              </button>
              <p className="max-w-sm text-left text-xs leading-relaxed text-muted-foreground">
                Nenhuma informação deste formulário é armazenada pelo site. Você poderá revisar a
                mensagem antes de enviar.
              </p>
            </div>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
