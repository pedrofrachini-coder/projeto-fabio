import { cn } from "@/lib/utils";
import { profile } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

type ProfileAvatarProps = {
  className?: string;
  /** Inicia a animação de flutuação do anel decorativo */
  animate?: boolean;
};

/**
 * Foto de perfil circular (placeholder com as iniciais).
 * Para usar uma foto real, troque o conteúdo interno por:
 *   <img src="/minha-foto.jpg" alt="Pedro Henrique" className="h-full w-full object-cover" />
 */
export const ProfileAvatar = ({ className, animate = true }: ProfileAvatarProps) => (
  <div className={cn("relative", className)}>
    {/* Halo luminoso atrás da foto */}
    <div
      className={cn(
        "glow-orb absolute -inset-10 rounded-full opacity-70",
        animate && "animate-glow-pulse",
      )}
      aria-hidden="true"
    />

    <div
      className={cn(
        "relative rounded-full bg-gradient-brand p-[3px] shadow-card",
        animate && "animate-float-slow",
      )}
    >
      <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-full bg-gradient-surface">
        <div className="grid-backdrop absolute inset-0 opacity-60" aria-hidden="true" />
        <span className="relative select-none font-display text-5xl font-semibold text-gradient sm:text-6xl">
          {profile.initials}
        </span>
      </div>
    </div>

    {/* Selo institucional */}
    <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border/70 bg-card px-4 py-2 shadow-card">
      <GraduationCap className="h-4 w-4 text-primary" />
      <span className="text-xs font-medium text-foreground">IFMS</span>
    </div>
  </div>
);
