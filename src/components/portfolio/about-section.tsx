import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { aboutFacts, aboutParagraphs, profile } from "@/data/portfolio";

/** Seção "Sobre você": apresentação pessoal e dados acadêmicos. */
export const AboutSection = () => (
  <section id="sobre" className="section-pad">
    <div className="section-shell">
      <SectionHeading
        eyebrow="Sobre"
        title="Um pouco da minha trajetória"
        description="Estudante de Técnico em Informática no IFMS, apaixonado por desenvolvimento web e por transformar ideias em soluções que funcionam de verdade."
      />

      <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-12">
        <Reveal delay={80} className="md:col-span-7">
          <div className="space-y-5">
            {aboutParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="text-[0.95rem] leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160} variant="right" className="md:col-span-5">
          <div className="surface-card h-full p-6 md:p-7">
            <h3 className="font-display text-base font-semibold text-foreground">
              Informações acadêmicas
            </h3>

            <dl className="mt-6 space-y-5">
              {aboutFacts.map((fact) => (
                <div key={fact.label} className="border-l-2 border-primary/25 pl-4">
                  <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium leading-snug text-foreground">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-7 flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-xs font-medium text-primary">
                Disponível para estágios e projetos
              </span>
            </div>

            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
              {profile.campus} · {profile.role}
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
