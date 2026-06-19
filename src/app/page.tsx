import Link from "next/link";
import { experiments } from "@/lib/experiments";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">ui-playground</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          A space to try UI packages, libraries, ideas, and layouts.
        </p>
      </header>

      <section>
        <h2 className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
          Experiments
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {experiments.map((exp) => (
            <Link
              key={exp.href}
              href={exp.href}
              className="group border-border hover:bg-accent rounded-xl border p-5 transition-colors"
            >
              <h3 className="group-hover:text-accent-foreground font-semibold">
                {exp.title}
              </h3>
              <p className="text-muted-foreground mt-1 line-clamp-2 text-sm">
                {exp.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-secondary text-secondary-foreground rounded-md px-2 py-0.5 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
