import type { ComponentType } from "react";

interface Frontmatter {
  title: string;
  date: string;
  author?: string;
  summary?: string;
  slug?: string;
}

interface PostModule {
  default: ComponentType;
  frontmatter: Frontmatter;
}

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  author: string;
  summary: string;
}

export interface Post extends PostMeta {
  Component: ComponentType;
}

// Each .mdx compiles to a React component at build time (highlighting included).
const modules = import.meta.glob<PostModule>("../content/posts/*.mdx", {
  eager: true,
});

const all: Post[] = Object.entries(modules).map(([path, mod]) => {
  const fm = mod.frontmatter;
  const slug = fm.slug ?? path.split("/").pop()!.replace(/\.mdx$/, "");
  return {
    slug,
    title: fm.title,
    date: fm.date,
    author: fm.author ?? "",
    summary: fm.summary ?? "",
    Component: mod.default,
  };
});

const bySlug = new Map(all.map((p) => [p.slug, p]));

export const posts: PostMeta[] = [...all]
  .sort((a, b) => b.date.localeCompare(a.date))
  .map(({ Component: _c, ...meta }) => meta);

export function getPost(slug: string): Post | undefined {
  return bySlug.get(slug);
}
