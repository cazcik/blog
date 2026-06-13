import { createFileRoute } from "@tanstack/react-router";

import { fooV1 } from "#/lib/api/foo";

export const Route = createFileRoute("/api/v1/foo")({
  server: {
    handlers: {
      GET: async () => Response.json({ version: "v1", ...fooV1() }),
    },
  },
});
