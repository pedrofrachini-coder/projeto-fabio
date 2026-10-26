import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/portfolio/reveal";
import { SectionHeading } from "@/components/portfolio/section-heading";
import { SitePreview } from "@/components/portfolio/site-preview";
import { sites } from "@/data/portfolio";

/** Seção de sites desenvolvidos em formato de grade com pré-visualização. */
export const SitesSection = () => (
  <section id="sites" className="section-pad">
    <div className="section-shell">
      <SectionHeading
        eyebrow="Sites"
        title="Sites desenvolvidos"
        description="Projetos publicados ou prototipados durante o curso. Clique em “Ver projeto” para acessar o código ou a versão online."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sites.map((site, index) => (
          <Reveal key={site.title} delay={index * 90} className="h-full">
            <article className="surface-card surface-card-interactive group flex h-full flex-col overflow-hidden">
              <SitePreview
                monogram={site.monogram}
                title={site.title}
                gradient={site.preview}
              />

              <div className="flex flex-1 flex-col p-5 md:p-6">
                <h3 className="font-display text-base font-semibold text-foreground">
                  {site.title}
                </h3>

                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {site.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {site.technologies.map((technology) => (
                    <Badge key={technology} variant="tech" className="text-[0.68rem]">
                      {technology}
                    </Badge>
                  ))}
                </div>

                <a
                  href={site.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-underline mt-5 inline-flex items-center gap-1.5 text-sm font-medium"
                >
                  Ver projeto
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
