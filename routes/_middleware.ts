import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 615,
  site: "open-graph",
  domains: ["open-graph.deco.site"],
});