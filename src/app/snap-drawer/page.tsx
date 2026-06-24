"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { useDrag } from "@use-gesture/react";
import { cn } from "@/lib/utils";

const DEFAULT_PCT = 50;
const LOCK_PCT = 80;
const MIN_PCT = 20;
const MAX_PCT = 90;

export default function SnapDrawer() {
  const [heightPct, setHeightPct] = useState(DEFAULT_PCT);
  const [locked, setLocked] = useState(false);
  const [animating, setAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const startPct = useRef(DEFAULT_PCT);

  function animateTo(pct: number) {
    setAnimating(true);
    setHeightPct(pct);
    setTimeout(() => setAnimating(false), 300);
  }

  const bind = useDrag(
    ({ first, movement: [, my], last, cancel }) => {
      if (first) {
        startPct.current = heightPct;
      }

      const containerH =
        containerRef.current?.clientHeight ?? window.innerHeight;
      const deltaPct = (my / containerH) * 100;
      let next = startPct.current + deltaPct;
      next = Math.min(MAX_PCT, Math.max(MIN_PCT, next));

      if (!locked) {
        if (next >= LOCK_PCT) {
          setHeightPct(LOCK_PCT);
          setLocked(true);
          cancel();
          return;
        }
        setHeightPct(next);
        if (last) animateTo(DEFAULT_PCT);
      } else {
        if (next < LOCK_PCT - 5) {
          setLocked(false);
          animateTo(DEFAULT_PCT);
          cancel();
          return;
        }
        setHeightPct(Math.max(LOCK_PCT, next));
        if (last) animateTo(LOCK_PCT);
      }
    },
    {
      axis: "y",
      filterTaps: true,
      pointer: { touch: true },
    },
  );

  return (
    <div ref={containerRef} className="flex h-dvh w-full flex-col">
      {/* Draggable header */}
      <div
        {...bind()}
        style={{ height: `${heightPct}%`, touchAction: "none" }}
        className={cn(
          "relative flex shrink-0 cursor-grab items-center justify-center rounded-b-4xl bg-white p-6 text-black select-none active:cursor-grabbing",
          animating && "transition-[height] duration-300 ease-out",
        )}
      >
        <Link
          href="/"
          className="absolute top-6 left-6 z-10 text-base text-black/60 hover:text-black"
          onPointerDown={(e) => e.stopPropagation()}
        >
          ← Back
        </Link>

        <span className="pointer-events-none text-4xl font-semibold">
          Header
        </span>

        {/* Drag indicator pill */}
        <div className="pointer-events-none absolute bottom-3 left-1/2 h-1 w-10 -translate-x-1/2 rounded-full bg-black/20" />
      </div>

      {/* Content area with snap indicator */}
      <div className="relative flex-1 overflow-hidden">
        {/* Snap point — edge notches + center bar */}
        <div
          className="pointer-events-none absolute right-0 left-0 flex items-center transition-all duration-200"
          style={{
            top: `${((LOCK_PCT - heightPct) / (100 - heightPct)) * 100}%`,
            opacity: heightPct > 55 ? Math.min(1, (heightPct - 55) / 15) : 0,
          }}
        >
          {/* Left notch */}
          <div
            className={cn(
              "h-3 w-1 rounded-r-full transition-colors duration-200",
              locked ? "bg-green-400" : "bg-white/25",
            )}
          />
          {/* Center bar */}
          <div className="flex flex-1 justify-center">
            <div
              className={cn(
                "h-0.5 rounded-full transition-all duration-200",
                locked ? "w-12 bg-green-400/80" : "w-8 bg-white/15",
              )}
            />
          </div>
          {/* Right notch */}
          <div
            className={cn(
              "h-3 w-1 rounded-l-full transition-colors duration-200",
              locked ? "bg-green-400" : "bg-white/25",
            )}
          />
        </div>

        {/* Content */}
        <div className="flex h-full items-center justify-center p-6">
          <span className="text-4xl font-semibold">Content</span>
        </div>
      </div>
    </div>
  );
}
