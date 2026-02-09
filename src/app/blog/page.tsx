import Link from "next/link";
import { getAllPosts, getAllCategories } from "../../../lib/mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing — Dev Chandra",
  description:
    "Weekly newsletters, startup ecosystem analysis, and venture capital insights from San Francisco.",
};

const CATEGORY_COLORS: Record<string, { bg: string; fg: string; gradient: string }> = {
  "Weekly Download": { bg: "bg-warm-light", fg: "text-warm-dark", gradient: "from-amber-100 to-orange-100" },
  "Trending Thursday": { bg: "bg-purple-50", fg: "text-purple-800", gradient: "from-violet-100 to-purple-100" },
  "Newsletter": { bg: "bg-blue-50", fg: "text-blue-800", gradient: "from-blue-100 to-cyan-100" },
  "Events": { bg: "bg-green-50", fg: "text-green-800", gradient: "from-green-100 to-emerald-100" },
};

const CATEGORY_EMOJIS: Record<string, string> = {
  "Weekly Download": "📬",
  "Trending Thursday": "🔥",
  "Newsletter": "✍️",
  "Events": "🎤",
};

function getCategoryStyle(category: string) {
  return CATEGORY_COLORS[category] || { bg: "bg-gray-100", fg: "text-gray-700", gradient: "from-gray-100 to-gray-200" };
}

export default function BlogIndex() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  // Group posts by year
  const postsByYear: Record<string, typeof posts> = {};
  posts.forEach((post) => {
    const year = new Date(post.date).getFullYear().toString();
    if (!postsByYear[year]) postsByYear[year] = [];
    postsByYear[year].push(post);
  });
  const years = Object.keys(postsByYear).sort((a, b) => Number(b) - Number(a));

  // Featured post (latest)
  const featured = posts[0];
  const restPosts = posts.slice(1);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="font-serif text-4xl md:text-5xl text-bark">Writing</h1>
        <p className="mt-3 text-lg text-earth max-w-2xl">
          Weekly newsletters covering AI, startups, funding, and the San Francisco startup ecosystem.
          Trusted by 22,000+ founders and investors.
        </p>
      </div>

      {/* Category Filters */}
      {categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-10">
          <span className="tag bg-warm text-white cursor-pointer">
            All ({posts.length})
          </span>
          {categories.map((cat) => {
            const style = getCategoryStyle(cat);
            const count = posts.filter((p) => p.category === cat).length;
            return (
              <span
                key={cat}
                className={`tag ${style.bg} ${style.fg} cursor-pointer`}
              >
                {CATEGORY_EMOJIS[cat] || "📄"} {cat} ({count})
              </span>
            );
          })}
        </div>
      )}

      {/* Featured Post */}
      {featured && (
        <Link href={`/blog/${featured.slug}`}>
          <article className="warm-card overflow-hidden cursor-pointer group mb-12">
            <div className={`h-48 md:h-64 bg-gradient-to-br ${getCategoryStyle(featured.category).gradient} flex items-center justify-center relative`}>
              <div className="absolute top-4 left-4">
                <span className={`tag ${getCategoryStyle(featured.category).bg} ${getCategoryStyle(featured.category).fg}`}>
                  {CATEGORY_EMOJIS[featured.category]} {featured.category}
                </span>
              </div>
              <div className="text-center px-8">
                <h2 className="font-serif text-2xl md:text-4xl text-bark leading-tight max-w-3xl group-hover:text-warm transition-colors">
                  {featured.title}
                </h2>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <p className="text-earth text-lg leading-relaxed mb-4 line-clamp-2">
                {featured.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-earth">
                <span>
                  {new Date(featured.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="text-cream-dark">·</span>
                <span>{featured.readingTime}</span>
                <span className="ml-auto text-warm font-medium group-hover:underline">
                  Read →
                </span>
              </div>
            </div>
          </article>
        </Link>
      )}

      {/* Posts Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {restPosts.slice(0, 4).map((post, i) => {
          const style = getCategoryStyle(post.category);
          return (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="warm-card overflow-hidden cursor-pointer group h-full">
                <div className={`h-32 bg-gradient-to-br ${style.gradient} flex items-center justify-center`}>
                  <span className="text-3xl">{CATEGORY_EMOJIS[post.category] || "📄"}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`tag ${style.bg} ${style.fg} text-xs`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-earth">
                      {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg mb-2 group-hover:text-warm transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-earth leading-relaxed line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-earth">{post.readingTime}</span>
                    <span className="text-warm text-sm font-medium">Read →</span>
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
      </div>

      {/* Remaining Posts by Year */}
      {restPosts.length > 4 && (
        <div className="space-y-12">
          {years.map((year) => {
            // Skip posts already shown in grid
            const yearPosts = postsByYear[year].filter(
              (p) => p.slug !== featured?.slug && !restPosts.slice(0, 4).find((r) => r.slug === p.slug)
            );
            if (yearPosts.length === 0) return null;

            return (
              <div key={year}>
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="font-serif text-2xl text-bark">{year}</h2>
                  <div className="flex-1 h-px bg-cream-dark" />
                  <span className="text-sm text-earth">{yearPosts.length} posts</span>
                </div>

                <div className="space-y-4">
                  {yearPosts.map((post) => {
                    const style = getCategoryStyle(post.category);
                    return (
                      <Link key={post.slug} href={`/blog/${post.slug}`}>
                        <article className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-[0_4px_20px_rgba(217,119,6,0.06)] transition-all cursor-pointer">
                          <div className="shrink-0 w-16 text-center">
                            <p className="font-serif text-lg text-warm">
                              {new Date(post.date).toLocaleDateString("en-US", { month: "short" })}
                            </p>
                            <p className="text-2xl font-serif text-bark">
                              {new Date(post.date).getDate()}
                            </p>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className={`tag ${style.bg} ${style.fg} text-xs`}>
                                {post.category}
                              </span>
                              <span className="text-xs text-earth">{post.readingTime}</span>
                            </div>
                            <h3 className="font-serif text-lg text-bark group-hover:text-warm transition-colors leading-snug">
                              {post.title}
                            </h3>
                            <p className="text-sm text-earth mt-1 line-clamp-1">
                              {post.description}
                            </p>
                          </div>
                          <span className="shrink-0 text-warm text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity self-center">
                            Read →
                          </span>
                        </article>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {posts.length === 0 && (
        <div className="warm-card p-12 text-center">
          <span className="text-4xl mb-4 block">✍️</span>
          <p className="font-serif text-2xl text-bark mb-2">Writing coming soon</p>
          <p className="text-earth">Subscribe to The Weekly Download to get notified.</p>
        </div>
      )}
    </div>
  );
}
