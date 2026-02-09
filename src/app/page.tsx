import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "../../lib/mdx";

const STATS = [
  { value: "22K+", label: "Subscribers" },
  { value: "70+", label: "Editions" },
  { value: "50%+", label: "Open Rate" },
  { value: "20+", label: "Events Hosted" },
  { value: "887K+", label: "Impressions" },
];

const TOPIC_PILLS = [
  { emoji: "🚀", text: "Venture Capital", bg: "bg-warm-light", fg: "text-warm-dark" },
  { emoji: "🏗️", text: "Startup Building", bg: "bg-amber-50", fg: "text-amber-800" },
  { emoji: "✍️", text: "Newsletter", bg: "bg-orange-50", fg: "text-orange-800" },
  { emoji: "🎤", text: "Events", bg: "bg-yellow-50", fg: "text-yellow-800" },
  { emoji: "⚓", text: "Navy Reserve", bg: "bg-red-50", fg: "text-red-800" },
];

const CARD_GRADIENTS = [
  "from-amber-100 to-orange-100",
  "from-violet-100 to-blue-100",
  "from-green-100 to-teal-100",
  "from-rose-100 to-pink-100",
  "from-sky-100 to-indigo-100",
];

const CARD_EMOJIS = ["🚀", "🤖", "🤝", "💡", "📊"];

const CATEGORY_COLORS: Record<string, { bg: string; fg: string }> = {
  "Venture Capital": { bg: "bg-warm-light", fg: "text-warm-dark" },
  "AI & Startups": { bg: "bg-blue-50", fg: "text-blue-800" },
  "Ecosystem": { bg: "bg-green-50", fg: "text-green-800" },
  "Book Summary": { bg: "bg-purple-50", fg: "text-purple-800" },
  "Uncategorized": { bg: "bg-gray-100", fg: "text-gray-700" },
};

function getCategoryStyle(category: string) {
  return CATEGORY_COLORS[category] || CATEGORY_COLORS["Uncategorized"];
}

export default function Home() {
  const posts = getAllPosts();
  const displayPosts = posts.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Avatar */}
          <div className="shrink-0">
            <div className="p-1 rounded-full bg-gradient-to-br from-warm to-amber-400">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden bg-cream-dark">
                <Image
                  src="/images/avatar.png"
                  alt="Dev Chandra"
                  width={224}
                  height={224}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Intro */}
          <div>
            <p className="text-lg text-warm font-medium mb-2">
              <span className="wave">👋</span> Hey, I&apos;m Dev
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-bark leading-tight mb-4">
              I build companies, invest in founders, and connect the startup ecosystem.
            </h1>
            <p className="text-lg text-earth leading-relaxed mb-6">
              VC associate at <strong className="text-bark">Context Ventures</strong> and co-founder
              of <strong className="text-bark">Startup Intros</strong> in San Francisco. Navy Reserve
              officer. I write <em>The Weekly Download</em> for 22,000+ readers, host events for
              founders, and am always looking for the next great company to back.
            </p>
            <div className="flex flex-wrap gap-2">
              {TOPIC_PILLS.map((pill) => (
                <span key={pill.text} className={`tag ${pill.bg} ${pill.fg}`}>
                  {pill.emoji} {pill.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-white border-y border-cream-dark">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {STATS.map((stat) => (
              <div key={stat.label} className={stat.label === "Impressions" ? "col-span-2 md:col-span-1" : ""}>
                <p className="font-serif text-3xl text-warm">{stat.value}</p>
                <p className="text-sm text-earth mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="max-w-5xl mx-auto px-6 py-16">
        <div className="warm-card p-8 md:p-12 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-warm-light text-warm-dark text-sm font-medium mb-4">
            📬 Newsletter
          </span>
          <h2 className="font-serif text-3xl md:text-4xl mb-3">The Weekly Download</h2>
          <p className="text-earth text-lg max-w-xl mx-auto mb-8">
            AI, startups, funding, and the SF ecosystem — your weekly briefing on everything
            happening in the Bay Area startup world. Trusted by 22,000+ founders and investors.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="you@email.com"
                className="flex-1 px-5 py-3.5 rounded-xl border border-cream-dark text-bark focus:outline-none focus:border-warm focus:ring-2 focus:ring-warm/20 text-sm"
              />
              <button
                type="submit"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-warm to-amber-500 text-white font-semibold text-sm whitespace-nowrap hover:shadow-[0_4px_20px_rgba(217,119,6,0.3)] hover:-translate-y-0.5 transition-all"
              >
                Join 22K+ Readers
              </button>
            </div>
          </form>
          <p className="text-xs text-earth mt-3">Every week. No spam. Unsubscribe anytime. 💛</p>
        </div>
      </section>

      {/* Recent Writing */}
      <section className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-3xl">Recent Writing</h2>
          <Link href="/blog" className="text-warm font-medium text-sm hover:underline">
            See all →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {displayPosts.map((post, i) => {
            const catStyle = getCategoryStyle(post.category);
            return (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="warm-card overflow-hidden cursor-pointer group h-full">
                  <div
                    className={`h-44 bg-gradient-to-br ${CARD_GRADIENTS[i % CARD_GRADIENTS.length]} flex items-center justify-center`}
                  >
                    <span className="text-4xl">{CARD_EMOJIS[i % CARD_EMOJIS.length]}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`tag ${catStyle.bg} ${catStyle.fg} text-xs`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-earth">
                        {post.date
                          ? new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })
                          : ""}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl mb-2 group-hover:text-warm transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-earth leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                    <p className="text-warm text-sm font-medium mt-4">Read more →</p>
                  </div>
                </article>
              </Link>
            );
          })}

          {/* Placeholder cards if fewer than 3 posts */}
          {displayPosts.length < 3 &&
            Array.from({ length: 3 - displayPosts.length }).map((_, i) => {
              const idx = displayPosts.length + i;
              return (
                <article key={`placeholder-${idx}`} className="warm-card overflow-hidden opacity-60">
                  <div
                    className={`h-44 bg-gradient-to-br ${CARD_GRADIENTS[idx % CARD_GRADIENTS.length]} flex items-center justify-center`}
                  >
                    <span className="text-4xl">{CARD_EMOJIS[idx % CARD_EMOJIS.length]}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="tag bg-gray-100 text-gray-500 text-xs">Coming Soon</span>
                    </div>
                    <h3 className="font-serif text-xl mb-2 text-earth">More articles on the way...</h3>
                    <p className="text-sm text-earth leading-relaxed">
                      New writing about startups, venture capital, and the SF ecosystem. Subscribe to get notified.
                    </p>
                  </div>
                </article>
              );
            })}
        </div>
      </section>

      {/* Podcast & Events */}
      <section id="events" className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Podcast */}
          <div className="warm-card p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-warm to-amber-400 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-warm-light text-warm-dark text-xs font-medium">
                Coming Soon
              </span>
            </div>
            <h3 className="font-serif text-2xl mb-2">The Podcast</h3>
            <p className="text-earth leading-relaxed">
              Founder stories, investor perspectives, and the Piranha Tank — a new show exploring the
              people and ideas shaping San Francisco&apos;s startup ecosystem.
            </p>
            <a href="#newsletter" className="inline-block text-warm font-medium text-sm mt-4 hover:underline">
              Get notified when we launch →
            </a>
          </div>

          {/* Events */}
          <div className="warm-card p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-400 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-orange-50 text-orange-800 text-xs font-medium">
                Startup Intros
              </span>
            </div>
            <h3 className="font-serif text-2xl mb-2">Events & Community</h3>
            <p className="text-earth leading-relaxed">
              20+ events hosted across San Francisco — from intimate founder dinners to demo nights
              and investor meetups. Building the connective tissue of the Bay Area.
            </p>
            <a href="https://lu.ma/startupintros" target="_blank" rel="noopener noreferrer" className="inline-block text-warm font-medium text-sm mt-4 hover:underline">
              See upcoming events →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
