type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "mx-auto mb-9 max-w-2xl text-center",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className="text-xs font-black uppercase tracking-[.18em] text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-black text-brand sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-3 text-slate-500">{description}</p> : null}
    </div>
  );
}
