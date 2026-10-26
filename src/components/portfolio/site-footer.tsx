import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { contact, navLinks, profile } from "@/data/portfolio";

/** Rodapé com links rápidos, redes e direitos autorais. */
export const SiteFooter = () => {
  const year = new Date().getFullYear();

  const socials = [
    { icon: Mail, href: `mailto:${contact.email}`, label: "E-mail" },
    { icon: Github, href: contact.github, label: "GitHub" },
    { icon: Linkedin, href: contact.linkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="border-t border-border/70 bg-gradient-surface">
      <div className="section-shell py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand font-display text-sm font-semibold text-primary-foreground">
                {profile.initials}
              </span>
              <div className="leading-tight">
                <p className="font-display text-sm font-semibold text-foreground">
                  {profile.fullName}
                </p>
                <p className="text-xs text-muted-foreground">
                  {profile.role} · {profile.campus}
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Portfólio acadêmico desenvolvido para complementar meu currículo e
              registrar minha trajetória no IFMS – Campus Nova Andradina.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-card text-muted-foreground transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-7">
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-foreground">
              Navegação rápida
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 md:col-start-11">
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-foreground">
              Voltar
            </h3>
            <a
              href="#inicio"
              className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
            >
              <ArrowUp className="h-4 w-4" />
              Topo da página
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border/70 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {year} {profile.fullName}. Todos os direitos reservados.
          </p>
          <p>
            {profile.institution} · {profile.campus}
          </p>
        </div>
      </div>
    </footer>
  );
};
