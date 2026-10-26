import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/portfolio/theme-toggle";
import { navLinks, profile } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/use-active-section";
import { useScrolled } from "@/hooks/use-scroll-state";

/**
 * Menu de navegação fixo no topo, com efeito de vidro (blur) que se intensifica
 * ao rolar a página, indicador de seção ativa e versão mobile em painel.
 */
export const SiteNavbar = () => {
  const sectionIds = useMemo(() => navLinks.map((link) => link.id), []);
  const activeId = useActiveSection(sectionIds);
  const scrolled = useScrolled(10);
  const [menuOpen, setMenuOpen] = useState(false);

  // Trava o scroll do corpo enquanto o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Fecha o menu mobile com a tecla Esc
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-out-expo",
        scrolled
          ? "border-b border-border/70 bg-background/75 shadow-[0_8px_30px_-20px_hsl(var(--foreground)/0.4)] backdrop-blur-xl"
          : "border-b border-transparent bg-background/40 backdrop-blur-md",
      )}
    >
      <div className="section-shell">
        <div className="flex h-[var(--nav-height)] items-center justify-between gap-4">
          {/* Logo / monograma */}
          <a
            href="#inicio"
            className="group flex items-center gap-3"
            aria-label={`Ir para o início do portfólio de ${profile.fullName}`}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand font-display text-sm font-semibold text-primary-foreground shadow-card transition-transform duration-300 ease-out-expo group-hover:scale-105">
              {profile.initials}
            </span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="font-display text-sm font-semibold text-foreground">
                Pedro Henrique
              </span>
              <span className="text-[0.7rem] text-muted-foreground">
                {profile.role}
              </span>
            </span>
          </a>

          {/* Navegação desktop */}
          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={activeId === link.id ? "true" : undefined}
                className={cn(
                  "rounded-full px-3 py-2 text-[0.82rem] font-medium transition-colors duration-200",
                  activeId === link.id
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Painel de navegação mobile */}
      <div
        id="mobile-navigation"
        className={cn(
          "overflow-hidden border-border/70 bg-background/95 backdrop-blur-xl transition-all duration-300 ease-out-expo lg:hidden",
          menuOpen ? "max-h-[32rem] border-t opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="section-shell flex flex-col py-3" aria-label="Navegação mobile">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "rounded-xl px-3 py-3 text-sm font-medium transition-colors duration-200",
                activeId === link.id
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
