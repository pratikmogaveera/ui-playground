"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { PanelImperativeHandle } from "react-resizable-panels";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const emptySubscribe = () => () => {};
function useIsMounted() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}

export default function TopDrawer() {
  const panelRef = useRef<PanelImperativeHandle>(null);
  const mounted = useIsMounted();
  const [animating, setAnimating] = useState(false);
  const dragging = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    function handleRelease() {
      if (!dragging.current) return;
      dragging.current = false;

      timeoutRef.current = setTimeout(() => {
        setAnimating(true);
        panelRef.current?.resize("40%");
        setTimeout(() => setAnimating(false), 300);
      }, 500);
    }

    window.addEventListener("pointerup", handleRelease);
    window.addEventListener("touchend", handleRelease);
    return () => {
      window.removeEventListener("pointerup", handleRelease);
      window.removeEventListener("touchend", handleRelease);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function handleResize() {
    if (animating) return;
    dragging.current = true;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }

  if (!mounted) {
    return (
      <div className="flex h-screen w-full flex-col">
        <div className="relative flex h-[40%] items-center justify-center rounded-b-4xl bg-white p-6 text-black">
          <Link href="/" className="absolute left-6 top-6 text-base text-black/60 hover:text-black">← Back</Link>
          <span className="text-4xl font-semibold">Header</span>
        </div>
        <div className="flex h-[60%] items-center justify-center p-6">
          <span className="text-4xl font-semibold">Content</span>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-full">
      <ResizablePanelGroup
        orientation="vertical"
        className={cn(
          "h-full w-full rounded-lg border",
          animating && "*:transition-all *:duration-300 *:ease-in-out",
        )}
      >
        <ResizablePanel
          panelRef={panelRef}
          defaultSize="40%"
          onResize={handleResize}
        >
          <div className="relative flex h-full items-center justify-center rounded-b-4xl bg-white p-6 text-black">
            <Link href="/" className="absolute left-6 top-6 text-base text-black/60 hover:text-black">← Back</Link>
            <span className="text-4xl font-semibold">Header</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize="60%">
          <div className="flex h-full items-center justify-center p-6">
            <span className="text-4xl font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

function cn(...classes: (string | false | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
