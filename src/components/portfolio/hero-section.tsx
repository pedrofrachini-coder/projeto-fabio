import { ArrowRight, Download, GraduationCap, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/portfolio/reveal";
import { ProfileAvatar } from "@/components/portfolio/profile-avatar";
import { heroStats, profile } from "@/data/portfolio";

/** Seção de abertura: foto, apresentação e chamadas para ação. */
export const HeroSection = () => (
  <section id="inicio" className="relative overflow-hidden bg-gradient-surface">
    {/* Decoração de fundo */}
    <div className="grid-backdrop absolute inset-0 opacity-70" aria-hidden="true" />
    <div
      className="glow-orb absolute -right-24 -top-24 h-[26rem] w-[26rem] animate-glow-pulse"
      aria-hidden="true"
    />
    <div
      className="glow-orb absolute -bottom-32 -left-32 h-[22rem] w-[22rem] opacity-60"
      aria-hidden="true"
    />

    <div className="section-shell relative pb-20 pt-14 md:pb-28 md:pt-20">
      <div className="grid items-center gap-14 md:grid-cols-12 md:gap-10">
        {/* Foto de perfil (placeholder circular) */}
        <Reveal variant="scale" className="md:col-span-5">
          <div className="mx-auto w-44 sm:w-52 md:w-full md:max-w-[16.5rem]">
            <ProfileAvatar />
          </div>
        </Reveal>

        {/* Apresentação */}
        <div className="md:col-span-7">
          <Reveal delay={60} className="text-center md:text-left">
            <span className="eyebrow">Portfólio acadêmico</span>
            <h1 className="mt-4 font-display text-[1.9rem] font-semibold leading-[1.15] text-foreground sm:text-4xl lg:text-[2.85rem]">
              {profile.fullName}
            </h1>
            <p className="mt-3 font-display text-lg font-semibold text-gradient sm:text-xl">
              {profile.role}
            </p>
            <div className="mt-5 flex flex-col items-center gap-2 text-sm text-muted-foreground md:items-start">
              <span className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 shrink-0 text-primary" />
                {profile.institution} · {profile.campus}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                {profile.location}
              </span>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <p className="mx-auto mt-7 max-w-xl text-center text-base leading-relaxed text-muted-foreground md:mx-0 md:text-left">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center md:justify-start">
              <Button asChild variant="brand" size="xl">
                <a href="#projetos">
                  Ver Projetos
                  <ArrowRight className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild variant="outline" size="xl">
                <a href={profile.resumeUrl} download>
                  <Download />
                  Baixar Currículo
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-border/70 pt-8 sm:grid-cols-4">
              {heroStats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-semibold text-foreground">
                    {String(stat.value).padStart(2, "0")}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);
