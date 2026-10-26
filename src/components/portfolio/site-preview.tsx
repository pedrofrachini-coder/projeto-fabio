import { cn } from "@/lib/utils";

type SitePreviewProps = {
  monogram: string;
  title: string;
  /** Classes de gradiente definidas nos dados (tokens do design system) */
  gradient: string;
};

/**
 * Pré-visualização estilizada do site (placeholder).
 * Para usar um print real, substitua o conteúdo por:
 *   <img src="/print-do-site.png" alt={title} className="h-full w-full object-cover" />
 */
export const SitePreview = ({ monogram, title, gradient }: SitePreviewProps) => (
  <div className="relative aspect-[16/10] overflow-hidden border-b border-border/70">
    {/* Fundo gradiente do projeto */}
    <div
      className={cn(
        "absolute inset-0 bg-gradient-to-br transition-transform duration-500 ease-out-expo group-hover:scale-[1.06]",
        gradient,
      )}
      aria-hidden="true"
    />
    <div className="grid-backdrop absolute inset-0 opacity-25" aria-hidden="true" />

    {/* Barra de navegador fictícia */}
    <div className="absolute inset-x-0 top-0 flex items-center gap-2 bg-foreground/10 px-4 py-2.5 backdrop-blur-sm">
      <span className="h-2 w-2 rounded-full bg-background/70" />
      <span className="h-2 w-2 rounded-full bg-background/50" />
      <span className="h-2 w-2 rounded-full bg-background/30" />
      <span className="ml-2 hidden flex-1 truncate rounded-full bg-background/25 px-3 py-0.5 text-[0.62rem] font-medium text-foreground/80 sm:block">
        {title}
      </span>
    </div>

    {/* Mini interface representando o site */}
    <div className="absolute inset-x-6 bottom-5 top-10 flex items-end">
      <div className="w-full space-y-2 rounded-xl border border-border/50 bg-background/85 p-3 shadow-card backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-brand text-[0.6rem] font-semibold text-primary-foreground">
            {monogram}
          </span>
          <span className="h-1.5 w-16 rounded-full bg-muted-foreground/30" />
          <span className="ml-auto h-4 w-10 rounded-full bg-primary/25" />
        </div>
        <span className="block h-1.5 w-3/4 rounded-full bg-muted-foreground/20" />
        <span className="block h-1.5 w-1/2 rounded-full bg-muted-foreground/15" />
      </div>
    </div>
  </div>
);
