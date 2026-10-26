import { Award, CalendarDays, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { events } from "@/data/portfolio";

/** Seção de feiras e eventos em formato de linha do tempo. */
export const EventsSection = () => (
  <section id="eventos" className="section-pad bg-muted/40">
    <div className="section-shell">
      <SectionHeading
        eyebrow="Feiras e Eventos"
        title="Participações e premiações"
        description="Apresentações de projetos, monitorias em eventos do campus e experiências que fortaleceram minha comunicação e trabalho em equipe."
      />

      <div className="relative mt-12 max-w-3xl space-y-8 border-l border-border pl-8">
        {events.map((event, index) => (
          <Reveal key={event.name} variant="left" delay={index * 90} className="relative">
            {/* Marcador da linha do tempo */}
            <span
              className="absolute -left-[2.4rem] top-6 flex h-3 w-3 items-center justify-center rounded-full bg-primary ring-4 ring-primary/15"
              aria-hidden="true"
            />

            <article className="surface-card p-6 md:p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="tag">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {event.year}
                  </Badge>
                  <Badge variant="secondary">{event.participation}</Badge>
                  {event.award ? (
                    <Badge variant="prize">
                      <Award className="h-3.5 w-3.5" />
                      {event.award}
                    </Badge>
                  ) : null}
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-foreground">
                  {event.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {event.description}
                </p>

                <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <Users className="h-3.5 w-3.5 text-primary" />
                  {event.award ? "Participação premiada" : "Participação sem premiação"}
                </p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
