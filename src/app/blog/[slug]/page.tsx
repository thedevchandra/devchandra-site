import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "../../../../lib/mdx";
import { generatePostMetadata, generateArticleJsonLd } from "../../../../lib/seo";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

interface Props {
  params: Promise<{ slug: string }>;
}

const CATEGORY_COLORS: Record<string, { bg: string; fg: string }> = {
  "Weekly Download": { bg: "bg-warm-light", fg: "text-warm-dark" },
  "Trending Thursday": { bg: "bg-purple-50", fg: "text-purple-800" },
  "Newsletter": { bg: "bg-blue-50", fg: "text-blue-800" },
  "Events": { bg: "bg-green-50", fg: "text-green-800" },
};

function getCategoryStyle(category: string) {
  return CATEGORY_COLORS[category] || { bg: "bg-gray-100", fg: "text-gray-700" };
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
  const catStyle = getCategoryStyle(post.meta.category);

  // Get adjacent posts for navigation
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <article className="max-w-3xl mx-auto">
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center gap-2 text-sm text-earth">
            <Link href="/" className="hover:text-warm transition-colors">Home</Link>
            <span className="text-cream-dark">/</span>
            <Link href="/blog" className="hover:text-warm transition-colors">Writing</Link>
            <span className="text-cream-dark">/</span>
            <span className="text-bark truncate max-w-xs">{post.meta.title}</span>
          </div>
        </nav>

        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className={`tag ${catStyle.bg} ${catStyle.fg}`}>
              {post.meta.category}
            </span>
            {post.meta.tags.length > 0 &&
              post.meta.tags.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="tag bg-cream-dark text-earth-dark text-xs"
                >
                  {t}
                </span>
              ))}
          </div>

          <h1 className="font-serif text-3xl md:text-4xl text-bark leading-tight mb-4">
            {post.meta.title}
          </h1>

          {post.meta.description && (
            <p className="text-lg text-earth leading-relaxed mb-6">
              {post.meta.description}
            </p>
          )}

          <div className="flex items-center gap-4">
            <Image
              src="/images/avatar.png"
              alt="Dev Chandra"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold text-bark text-sm">Dev Chandra</p>
              <div className="flex items-center gap-3 text-xs text-earth">
                <span>
                  {new Date(post.meta.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="text-cream-dark">·</span>
                <span>{post.meta.readingTime}</span>
                {post.meta.updated && (
                  <>
                    <span className="text-cream-dark">·</span>
                    <span className="tag bg-green-50 text-green-700 text-xs">
                      Updated {post.meta.updated}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="h-px bg-cream-dark mt-8" />
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none
          prose-headings:font-serif prose-headings:text-bark prose-headings:font-normal
          prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
          prose-p:text-earth prose-p:leading-relaxed prose-p:font-body
          prose-li:text-earth prose-li:font-body
          prose-a:text-warm prose-a:no-underline hover:prose-a:underline
          prose-strong:text-bark
          prose-img:rounded-xl prose-img:shadow-sm
          prose-blockquote:border-warm prose-blockquote:text-earth prose-blockquote:font-body prose-blockquote:italic
          prose-code:text-warm-dark prose-code:bg-warm-light prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
          prose-hr:border-cream-dark
        ">
          <MDXRemote source={post.content} />
        </div>

        {/* Author Card */}
        <footer className="mt-16">
          <div className="h-px bg-cream-dark mb-8" />
          <div className="warm-card p-6 md:p-8">
            <div className="flex items-start gap-4">
              <Image
                src="/images/headshot.jpeg"
                alt="Dev Chandra"
                width={64}
                height={64}
                className="rounded-full shrink-0"
              />
              <div>
                <p className="font-serif text-xl text-bark mb-1">Dev Chandra</p>
                <p className="text-sm text-earth leading-relaxed mb-3">
                  VC associate at Context Ventures, co-founder of Startup Intros, and Navy Reserve officer.
                  I write The Weekly Download for 22,000+ founders and investors in the SF startup ecosystem.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://linkedin.com/in/devchandra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-warm font-medium hover:underline"
                  >
                    LinkedIn →
                  </a>
                  <a
                    href="https://x.com/thedevchandra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-warm font-medium hover:underline"
                  >
                    X / Twitter →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </article>

      {/* Post Navigation */}
      {(prevPost || nextPost) && (
        <nav className="max-w-3xl mx-auto mt-12 grid md:grid-cols-2 gap-4">
          {prevPost ? (
            <Link href={`/blog/${prevPost.slug}`} className="warm-card p-5 group">
              <p className="text-xs text-earth mb-1">← Older</p>
              <p className="font-serif text-bark group-hover:text-warm transition-colors line-clamp-2">
                {prevPost.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {nextPost ? (
            <Link href={`/blog/${nextPost.slug}`} className="warm-card p-5 group text-right">
              <p className="text-xs text-earth mb-1">Newer →</p>
              <p className="font-serif text-bark group-hover:text-warm transition-colors line-clamp-2">
                {nextPost.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      )}
    </div>
  );
}
