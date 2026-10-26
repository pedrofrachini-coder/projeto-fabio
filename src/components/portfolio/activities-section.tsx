import { Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { activities } from "@/data/portfolio";

/** Seção de atividades acadêmicas: monitorias, cursos, projetos e trabalhos. */
export const ActivitiesSection = () => (
  <section id="atividades" className="section-pad bg-muted/40">
    <div className="section-shell">
      <SectionHeading
        eyebrow="Atividades"
        title="Atividades acadêmicas"
        description="Monitorias, cursos, projetos integradores e apoio técnico que fizeram parte da minha formação no campus."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {activities.map((activity, index) => (
          <Reveal key={activity.title} delay={index * 80} className="h-full">
            <article className="surface-card surface-card-interactive flex h-full flex-col p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Badge variant="tag">{activity.type}</Badge>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {activity.period}
                </span>
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-foreground">
                {activity.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {activity.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
