import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { PageIntro, SiteLayout } from "@/components/site/SiteLayout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const TITLE = "Contato — Mentoria da Fran";
const DESC =
  "Fale com a Fran pelo WhatsApp para começar sua mentoria de carreira e conhecer os formatos de acompanhamento.";

const WHATSAPP_NUMBER = (import.meta.env["VITE_WHATSAPP_NUMBER"] ?? "").replace(/\D/g, "");
const WHATSAPP_AVAILABLE = /^\d{10,15}$/.test(WHATSAPP_NUMBER);

const INTERESTS = [
  "Currículo",
  "LinkedIn",
  "Entrevistas",
  "Processos seletivos",
  "Portfólio",
  "Planejamento de carreira",
  "Estudos",
  "Transição de carreira",
] as const;

export const Route = createFileRoute("/contato")({
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
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function ContatoPage() {
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!WHATSAPP_AVAILABLE) {
      toast.error("O WhatsApp de contato ainda não foi configurado.");
      return;
    }

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const interest = String(data.get("interest") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const text = [
      "Olá, Fran! Conheci seu site e gostaria de saber mais sobre a mentoria.",
      "",
      `Nome: ${name}`,
      `Principal interesse: ${interest}`,
      `Meu momento: ${message}`,
    ].join("\n");

    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
    toast.success("WhatsApp aberto com a sua mensagem pronta.");
  }

  const directMessage = "Olá, Fran! Conheci seu site e gostaria de saber mais sobre a mentoria.";

  return (
    <SiteLayout>
      <PageIntro
        eyebrow="Contato"
        title="Vamos conversar sobre o seu próximo passo?"
        description="Conte um pouco sobre o seu momento profissional. Ao continuar, abriremos o WhatsApp com a mensagem pronta para você revisar e enviar."
      />

      <section className="mx-auto max-w-6xl px-4 py-8 pb-20 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="surface rounded-3xl p-7 lg:col-span-7 md:p-9">
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" name="name" required placeholder="Seu nome" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="interest">Principal interesse</Label>
                <select
                  id="interest"
                  name="interest"
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                >
                  {INTERESTS.map((interest) => (
                    <option key={interest}>{interest}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Conte seu momento</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Onde você está hoje e onde quer chegar?"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground ring-1 ring-clay/40 transition-colors hover:bg-primary/90"
              >
                <MessageCircle className="size-4" />
                Continuar no WhatsApp
              </button>
              <p className="text-xs leading-relaxed text-mist">
                Nenhuma informação deste formulário é armazenada pelo site.
              </p>
            </form>
          </div>

          <aside className="space-y-4 lg:col-span-5">
            <div className="rounded-3xl bg-cream/70 p-7 ring-1 ring-line">
              <span className="eyebrow text-clay">Contato direto</span>
              <h2 className="mt-3 font-display text-xl font-semibold">Prefere começar sem formulário?</h2>
              <p className="mt-2 text-sm leading-relaxed text-mist">
                Abra uma conversa e me conte brevemente qual é o seu objetivo profissional.
              </p>
              {WHATSAPP_AVAILABLE ? (
                <a
                  href={whatsappUrl(directMessage)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-sage/15 px-5 py-2.5 text-sm font-semibold text-ink ring-1 ring-sage/30 transition-colors hover:bg-sage/25"
                >
                  <MessageCircle className="size-4 text-sage" />
                  Chamar no WhatsApp
                </a>
              ) : (
                <p className="mt-5 rounded-2xl bg-sand px-4 py-3 text-sm text-mist ring-1 ring-line">
                  Canal de WhatsApp em configuração.
                </p>
              )}
            </div>
            <div className="rounded-3xl bg-cream/70 p-7 ring-1 ring-line">
              <span className="eyebrow text-clay">O que acontece depois</span>
              <ol className="mt-4 space-y-3 text-sm text-mist">
                <li className="flex gap-3">
                  <span className="font-display font-semibold text-terracotta">01</span>
                  Você envia sua mensagem pelo WhatsApp.
                </li>
                <li className="flex gap-3">
                  <span className="font-display font-semibold text-terracotta">02</span>
                  Eu respondo e alinhamos formato, frequência e horários.
                </li>
                <li className="flex gap-3">
                  <span className="font-display font-semibold text-terracotta">03</span>
                  Marcamos a primeira sessão de diagnóstico.
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}
