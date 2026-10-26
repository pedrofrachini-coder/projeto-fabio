import { cn } from "@/lib/utils";
import { Reveal } from "@/components/portfolio/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

/** Cabeçalho padrão das seções: rótulo, título, traço de acento e descrição. */
export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) => (
  <Reveal
    className={cn(
      "max-w-2xl",
      align === "center" && "mx-auto text-center",
      className,
    )}
  >
    <p className="eyebrow">{eyebrow}</p>
    <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
      {title}
    </h2>
    <span
      className={cn(
        "mt-4 block h-0.5 w-12 rounded-full bg-gradient-brand",
        align === "center" && "mx-auto",
      )}
      aria-hidden="true"
    />
    {description ? (
      <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
        {description}
      </p>
    ) : null}
  </Reveal>
);
