import type { LucideIcon } from "lucide-react";

type ContactInfoCardProps = {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
};

/** Card de dado de contato (e-mail, GitHub, LinkedIn, localização). */
export const ContactInfoCard = ({ icon: Icon, label, value, href }: ContactInfoCardProps) => {
  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 ease-out-expo group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-4 w-4" />
      </span>
      <span className="min-w-0">
        <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {label}
        </span>
        <span className="mt-0.5 block truncate text-sm font-medium text-foreground">
          {value}
        </span>
      </span>
    </>
  );

  const classes =
    "surface-card group flex items-center gap-4 p-4 transition-all duration-300 ease-out-expo";

  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
      className={`${classes} hover:-translate-y-0.5 hover:border-primary/40`}
    >
      {content}
    </a>
  ) : (
    <div className={classes}>{content}</div>
  );
};
