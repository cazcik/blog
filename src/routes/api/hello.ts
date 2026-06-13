import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/hello")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        return Response.json({ ruok: "imok" });
      },
    },
  },
});
