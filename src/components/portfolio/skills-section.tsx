import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { skillGroups } from "@/data/portfolio";

/** Seção de habilidades técnicas em cards com badges. */
export const SkillsSection = () => (
  <section id="habilidades" className="section-pad bg-muted/40">
    <div className="section-shell">
      <SectionHeading
        eyebrow="Habilidades"
        title="Habilidades técnicas"
        description="Ferramentas e conhecimentos que venho praticando na formação técnica e em projetos pessoais."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 90} className="h-full">
            <article className="surface-card surface-card-interactive flex h-full flex-col p-6">
              <h3 className="font-display text-base font-semibold text-foreground">
                {group.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {group.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-border bg-background px-3 py-1.5 font-normal text-foreground transition-colors duration-200 hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                  >
                    {skill}
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
