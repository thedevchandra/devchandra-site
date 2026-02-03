import Link from "next/link";
import { getAllPosts, getAllCategories } from "../../../lib/mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Book summaries, productivity frameworks, leadership lessons, and startup insights by Dev Chandra.",
};

export default function BlogIndex() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
      <p className="mt-3 text-lg text-gray-600">
        Book summaries, productivity frameworks, and lessons from the field.
      </p>

      {/* Categories */}
      {categories.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span
              key={cat}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
            >
              {cat}
            </span>
          ))}
        </div>
      )}

      {/* Posts */}
      <div className="mt-10 space-y-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group border-b border-gray-100 pb-8"
          >
            <Link href={`/blog/${post.slug}`}>
              <span className="text-xs font-medium uppercase tracking-wider text-blue-600">
                {post.category}
              </span>
              <h2 className="mt-1 text-xl font-semibold group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 text-gray-600 line-clamp-2">
                {post.description}
              </p>
              <div className="mt-3 flex items-center gap-4 text-xs text-gray-400">
                <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                <span>·</span>
                <span>{post.readingTime}</span>
                {post.updated && (
                  <>
                    <span>·</span>
                    <span className="text-green-600 font-medium">
                      Updated {post.updated}
                    </span>
                  </>
                )}
              </div>
            </Link>
          </article>
        ))}

        {posts.length === 0 && (
          <p className="text-gray-500 py-12 text-center">
            Posts coming soon — migration in progress.
          </p>
        )}
      </div>
    </div>
  );
}
