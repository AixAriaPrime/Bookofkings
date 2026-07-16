export const routes = ["ritual", "mirror", "sage", "learn", "archive"] as const;
export type Route = (typeof routes)[number];

