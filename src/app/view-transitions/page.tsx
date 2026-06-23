import Link from "next/link";
import { ViewTransition } from "react";

const items = [
  { id: "mountain", title: "Mountain", color: "bg-emerald-500", emoji: "🏔️" },
  { id: "ocean", title: "Ocean", color: "bg-blue-500", emoji: "🌊" },
  { id: "desert", title: "Desert", color: "bg-amber-500", emoji: "🏜️" },
  { id: "forest", title: "Forest", color: "bg-green-700", emoji: "🌲" },
];

export { items };

export default function ViewTransitionsPage() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-10 p-6">
      <Link
        href="/"
        className="text-muted-foreground hover:text-foreground absolute top-6 left-6 text-sm"
      >
        ← Back
      </Link>

      <h1 className="text-2xl font-bold">View Transitions</h1>
      <p className="text-muted-foreground max-w-md text-center text-sm">
        Click a card — the element morphs across the page navigation using the
        browser&apos;s View Transitions API.
      </p>

      <div className="grid grid-cols-2 gap-4">
        {items.map((item) => (
          <Link key={item.id} href={`/view-transitions/${item.id}`}>
            <ViewTransition name={`card-${item.id}`}>
              <div
                className={`flex h-36 w-36 flex-col items-center justify-center rounded-2xl text-white ${item.color}`}
              >
                <span className="text-4xl">{item.emoji}</span>
                <span className="mt-2 text-sm font-semibold">{item.title}</span>
              </div>
            </ViewTransition>
          </Link>
        ))}
      </div>
    </div>
  );
}
