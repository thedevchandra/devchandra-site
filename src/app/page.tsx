import Link from "next/link";
import { getAllPosts } from "../../lib/mdx";

export default function Home() {
  const posts = getAllPosts().slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="py-16">
        <h1 className="text-5xl font-bold tracking-tight leading-tight">
          Dev Chandra
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-2xl leading-relaxed">
          Entrepreneur, Navy Officer, Builder. I write about books, productivity,
          leadership, and lessons from building startups.
        </p>
        <div className="mt-6 flex gap-4">
          <Link
            href="/blog"
            className="rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700 transition-colors"
          >
            Read the Blog
          </Link>
          <Link
            href="/about"
            className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* Latest Posts */}
      {posts.length > 0 && (
        <section className="py-12">
          <h2 className="text-2xl font-bold mb-8">Latest Posts</h2>
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-medium uppercase tracking-wider text-blue-600">
                        {post.category}
                      </span>
                      <h3 className="mt-1 text-lg font-semibold group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                        {post.description}
                      </p>
                    </div>
                    <div className="shrink-0 text-right text-xs text-gray-400">
                      <p>{post.readingTime}</p>
                      {post.updated && (
                        <p className="text-green-600 font-medium">Updated {post.updated}</p>
                      )}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          <Link
            href="/blog"
            className="mt-8 inline-block text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            View all posts →
          </Link>
        </section>
      )}
    </div>
  );
}
