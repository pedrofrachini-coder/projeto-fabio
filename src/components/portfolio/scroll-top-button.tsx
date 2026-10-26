import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollProgress } from "@/hooks/use-scroll-state";

/** Botão flutuante que aparece após rolar a página e volta ao topo. */
export const ScrollTopButton = () => {
  const visible = useScrollProgress(520);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      className={cn(
        "fixed bottom-6 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-card text-foreground shadow-card transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-primary/40 hover:text-primary",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
};
