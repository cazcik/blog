import { createFileRoute } from "@tanstack/react-router";

import { barV1 } from "#/lib/api/bar";

export const Route = createFileRoute("/api/v1/bar")({
  server: {
    handlers: {
      GET: async () => Response.json({ version: "v1", ...barV1() }),
    },
  },
});
