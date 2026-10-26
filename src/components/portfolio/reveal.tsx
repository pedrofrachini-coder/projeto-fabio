import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealVariant = "up" | "left" | "right" | "scale";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Direção da animação de entrada */
  variant?: RevealVariant;
  /** Atraso em ms (usado para efeito cascata entre cards) */
  delay?: number;
  id?: string;
};

/**
 * Envolve qualquer conteúdo e o revela suavemente quando entra na viewport.
 * As classes de animação vivem em `index.css` (@layer utilities).
 */
export const Reveal = ({
  children,
  className,
  variant = "up",
  delay = 0,
  id,
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      data-visible={visible}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
      className={cn("reveal", `reveal-${variant}`, className)}
    >
      {children}
    </div>
  );
};
