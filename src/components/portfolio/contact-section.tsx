import { useState, type ChangeEvent, type FormEvent } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactInfoCard } from "@/components/portfolio/contact-info-card";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { contact, profile } from "@/data/portfolio";

const emptyForm = { name: "", email: "", message: "" };

/**
 * Seção de contato: formulário simples (abre o e-mail já preenchido)
 * e os canais diretos de contato.
 */
export const ContactSection = () => {
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Contato pelo portfólio — ${form.name}`);
    const body = encodeURIComponent(
      `Nome: ${form.name}\nE-mail: ${form.email}\n\n${form.message}`,
    );

    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contato" className="section-pad">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contato"
          title="Vamos conversar"
          description="Tem uma vaga de estágio, um projeto em mente ou quer trocar ideia sobre tecnologia? Envie uma mensagem — respondo o mais rápido possível."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Formulário */}
          <Reveal className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="surface-card p-6 md:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Nome
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="voce@exemplo.com"
                    required
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Escreva sua mensagem, proposta ou dúvida..."
                  required
                />
              </div>

              <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Button type="submit" variant="brand" size="xl">
                  <Send />
                  Enviar mensagem
                </Button>
                <p className="text-xs text-muted-foreground">
                  A mensagem abre pronta no seu aplicativo de e-mail.
                </p>
              </div>

              {submitted ? (
                <p className="mt-5 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 text-xs leading-relaxed text-primary">
                  Seu e-mail foi aberto com a mensagem preenchida. Se nada aconteceu,
                  escreva diretamente para {contact.email}.
                </p>
              ) : null}
            </form>
          </Reveal>

          {/* Canais diretos */}
          <Reveal delay={120} variant="right" className="lg:col-span-2">
            <div className="flex h-full flex-col gap-4">
              <ContactInfoCard
                icon={Mail}
                label="E-mail"
                value={contact.email}
                href={`mailto:${contact.email}`}
              />
              <ContactInfoCard
                icon={Github}
                label="GitHub"
                value={contact.githubLabel}
                href={contact.github}
              />
              <ContactInfoCard
                icon={Linkedin}
                label="LinkedIn"
                value={contact.linkedinLabel}
                href={contact.linkedin}
              />
              <ContactInfoCard
                icon={MapPin}
                label="Localização"
                value={profile.location}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
