import { Check, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { projects } from "@/data/portfolio";

/** Seção de projetos: nome, função, tecnologias e destaques de cada trabalho. */
export const ProjectsSection = () => (
  <section id="projetos" className="section-pad">
    <div className="section-shell">
      <SectionHeading
        eyebrow="Projetos"
        title="Projetos desenvolvidos"
        description="Trabalhos em que atuei do planejamento à entrega, com foco em código organizado, usabilidade e aprendizado contínuo."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 80} className="h-full">
            <article className="surface-card surface-card-interactive flex h-full flex-col p-6 md:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {project.name}
                </h3>
                <Badge variant="secondary">{project.period}</Badge>
              </div>

              <p className="mt-3 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <User className="h-3.5 w-3.5 text-primary" />
                {project.role}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <ul className="mt-5 space-y-2.5">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/15">
                      <Check className="h-2.5 w-2.5 text-primary" />
                    </span>
                    <span className="text-[0.82rem] leading-relaxed text-foreground/80">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-border/70 pt-5">
                {project.technologies.map((technology) => (
                  <Badge key={technology} variant="tech">
                    {technology}
                  </Badge>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
