export type Experiment = {
  href: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
};

export const experiments: Experiment[] = [
  {
    href: "/ios-folder",
    title: "iOS Folder",
    description:
      "Tap an app group to expand into a folder overlay with scale and blur — mimicking iOS home screen folders.",
    tags: ["animation", "motion", "layout"],
    date: "2026-06-25",
  },
  {
    href: "/ios-stack",
    title: "iOS Stack",
    description:
      "Stacked cards that expand on tap with scale and opacity transitions — mimicking the iOS notification stack.",
    tags: ["animation", "motion", "spring"],
    date: "2026-06-24",
  },
  {
    href: "/view-transitions",
    title: "View Transitions",
    description:
      "Crossfade animations using React's ViewTransition component and the browser View Transitions API.",
    tags: ["animation", "view-transitions", "react-19"],
    date: "2026-06-23",
  },
  {
    href: "/snap-drawer",
    title: "Snap Drawer",
    description:
      "Resizable panel that snaps back after release with animated transition.",
    tags: ["resizable", "animation", "layout"],
    date: "2026-06-19",
  },
];
