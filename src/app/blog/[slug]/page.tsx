import { allPosts } from "contentlayer/generated";

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return {
    title: post.title,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [
        {
          url: `https://cazcik.me/og?title=${post.title}`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      title: post.title,
      description: post.description,
      images: [`https://cazcik.me/og?title=${post.title}`],
    },
  };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  return (
    <div className="space-y-10">
      <section>
        <div>
          <h1 className="text-sm font-black uppercase text-black dark:text-white">
            {post.title}
          </h1>
        </div>
        <div className="mt-4 flex flex-col">
          <article className="prose prose-neutral dark:prose-invert">
            <div
              className="[&>*:last-child]:mb-0 [&>*]:mb-3"
              dangerouslySetInnerHTML={{ __html: post.body.html }}
            />
          </article>
        </div>
      </section>
    </div>
  );
};

export default PostLayout;
