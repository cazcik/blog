import { createFileRoute } from "@tanstack/react-router";

import { barV2 } from "#/lib/api/bar";

export const Route = createFileRoute("/api/v2/bar")({
  server: {
    handlers: {
      GET: async () => Response.json({ version: "v2", ...barV2() }),
    },
  },
});
