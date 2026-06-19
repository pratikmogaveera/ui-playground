export type Experiment = {
  href: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
};

export const experiments: Experiment[] = [
  {
    href: "/snap-drawer",
    title: "Snap Drawer",
    description: "Resizable panel that snaps back after release with animated transition.",
    tags: ["resizable", "animation", "layout"],
    date: "2026-06-19",
  },
];
