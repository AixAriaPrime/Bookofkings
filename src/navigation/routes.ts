export const routes = ["ritual", "mirror", "sage", "learn", "archive", "settings"] as const;
export type Route = (typeof routes)[number];

