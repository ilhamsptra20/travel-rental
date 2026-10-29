import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export function ButtonLink({
  children,
  className = "inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 font-bold text-white transition hover:bg-brand",
  ...props
}: ButtonLinkProps) {
  return (
    <a className={className} {...props}>
      {children}
    </a>
  );
}
