import Link from "next/link";
import { ViewTransition } from "react";
import { items } from "../page";

export function generateStaticParams() {
  return items.map((item) => ({ id: item.id }));
}

export default async function DetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = items.find((i) => i.id === id)!;

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-8 p-6">
      <Link
        href="/view-transitions"
        className="text-muted-foreground hover:text-foreground absolute top-6 left-6 text-sm"
      >
        ← Back
      </Link>

      <ViewTransition name={`card-${item.id}`}>
        <div
          className={`flex h-64 w-64 flex-col items-center justify-center rounded-3xl text-white ${item.color}`}
        >
          <span className="text-7xl">{item.emoji}</span>
          <span className="mt-4 text-2xl font-bold">{item.title}</span>
        </div>
      </ViewTransition>

      <p className="text-muted-foreground text-sm">
        This element morphed from the grid on the previous page.
      </p>
    </div>
  );
}
