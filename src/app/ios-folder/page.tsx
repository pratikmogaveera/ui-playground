"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";

export default function IosFolder() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-10 p-6">
      <Link
        href="/"
        className="text-muted-foreground hover:text-foreground absolute top-6 left-6 text-sm"
      >
        ← Back
      </Link>

      <h1 className="text-2xl font-bold">iOS Folder</h1>
      <p className="text-muted-foreground max-w-md text-center text-sm">
        Tap an app group to expand it into a folder overlay with scale and blur
        transitions — mimicking the iOS home screen folder animation.
      </p>

      <motion.div
        animate={{
          width: open ? 4 * 64 + 3 * 8 + 32 : 2 * 64 + 8 + 32,
          height: open ? 64 + 32 : 2 * 64 + 8 + 32,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative cursor-pointer rounded-2xl bg-white/20 p-4"
        onClick={() => setOpen((prev) => !prev)}
      >
        {["🍏", "🍎", "🍐", "🍉"].map((item, i) => {
          const cols = open ? 4 : 2;
          const row = Math.floor(i / cols);
          const col = i % cols;

          return (
            <motion.div
              key={i}
              animate={{
                top: 16 + row * 72,
                left: 16 + col * 72,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute flex h-16 w-16 items-center justify-center rounded-lg bg-white/40 text-3xl"
            >
              {item}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
