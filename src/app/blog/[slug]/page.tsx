import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "../../../../lib/mdx";
import { generatePostMetadata, generateArticleJsonLd } from "../../../../lib/seo";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return generatePostMetadata(post.meta);
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = generateArticleJsonLd(post.meta);

  return (
    <article className="mx-auto max-w-3xl">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="mb-10">
        <span className="text-sm font-medium uppercase tracking-wider text-blue-600">
          {post.meta.category}
        </span>
        <h1 className="mt-2 text-4xl font-bold tracking-tight leading-tight">
          {post.meta.title}
        </h1>
        <p className="mt-3 text-lg text-gray-600">{post.meta.description}</p>
        <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
          <span>
            {new Date(post.meta.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span>·</span>
          <span>{post.meta.readingTime}</span>
          {post.meta.updated && (
            <>
              <span>·</span>
              <span className="rounded bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
                Updated {post.meta.updated}
              </span>
            </>
          )}
        </div>
        {post.meta.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.meta.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Content */}
      <div className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-a:text-blue-600 prose-img:rounded-lg">
        <MDXRemote source={post.content} />
      </div>

      {/* Author */}
      <footer className="mt-16 border-t border-gray-100 pt-8">
        <div className="flex items-center gap-4">
          <div>
            <p className="font-semibold">Dev Chandra</p>
            <p className="text-sm text-gray-600">
              Entrepreneur, Navy Officer, Builder. Writing about books, productivity, and startups.
            </p>
          </div>
        </div>
      </footer>
    </article>
  );
}
