import { createFileRoute } from "@tanstack/react-router";

import { fooV2 } from "#/lib/api/foo";

export const Route = createFileRoute("/api/v2/foo")({
  server: {
    handlers: {
      GET: async () => Response.json({ version: "v2", ...fooV2() }),
    },
  },
});
