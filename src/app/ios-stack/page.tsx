"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export default function IosStack() {
  const [toggled, setToggled] = useState(false);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-10 p-6">
      <Link
        href="/"
        className="text-muted-foreground hover:text-foreground absolute top-6 left-6 text-sm"
      >
        ← Back
      </Link>

      <h1 className="text-2xl font-bold">iOS Stack</h1>
      <p className="text-muted-foreground max-w-md text-center text-sm">
        Stacked cards that expand on tap with scale and opacity transitions
        — mimicking the iOS notification stack.
      </p>

      <div className="relative mx-auto h-44 w-72">
        {[0, 1, 2].map((item) => (
          <motion.div
            key={item}
            className="absolute left-0 flex h-14 w-72 cursor-pointer items-center justify-center rounded-lg bg-white shadow-md"
            animate={{
              top: toggled ? item * 64 + 16 : item * 6,
              scale: toggled ? 1 : 1 - item / 20,
              opacity: toggled ? 1 : 1 - item / 5,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            style={{ zIndex: 3 - item }}
            onClick={() => !toggled && setToggled(true)}
          >
            <p className="text-3xl font-semibold text-black opacity-75">
              {item + 1}
            </p>
          </motion.div>
        ))}
        <motion.div
          animate={{
            top: toggled ? -20 : 0,
            opacity: toggled ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="absolute flex w-full items-center justify-between"
          style={{ zIndex: 0 }}
        >
          <p className="font-semibold">Notifications</p>

          <Button
            size={"sm"}
            className="cursor-pointer rounded-full px-2 py-0 leading-0 font-semibold"
            onClick={() => setToggled(false)}
          >
            Collapse
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
