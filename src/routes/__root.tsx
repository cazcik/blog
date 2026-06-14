import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";

import { NotFound } from "../components/NotFound";
import appCss from "../styles.css?url";
import interRegular from "../assets/fonts/inter.woff2?url";
import interItalic from "../assets/fonts/inter-italic.woff2?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],
    links: [
      {
        rel: "preload",
        href: interRegular,
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        href: interItalic,
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="cursor-default bg-neutral-50 text-neutral-900 lowercase antialiased selection:bg-blue-500 selection:text-white dark:bg-neutral-900 dark:text-neutral-100 dark:selection:bg-amber-200 dark:selection:text-black"
    >
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
