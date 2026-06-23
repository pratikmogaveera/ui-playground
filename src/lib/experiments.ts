export type Experiment = {
  href: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
};

export const experiments: Experiment[] = [
  {
    href: "/view-transitions",
    title: "View Transitions",
    description: "Crossfade animations using React's ViewTransition component and the browser View Transitions API.",
    tags: ["animation", "view-transitions", "react-19"],
    date: "2026-06-23",
  },
  {
    href: "/snap-drawer",
    title: "Snap Drawer",
    description: "Resizable panel that snaps back after release with animated transition.",
    tags: ["resizable", "animation", "layout"],
    date: "2026-06-19",
  },
];
