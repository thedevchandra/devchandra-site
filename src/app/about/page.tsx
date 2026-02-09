import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About — Dev Chandra",
  description:
    "VC associate, startup builder, Navy Reserve officer, and newsletter writer based in San Francisco.",
};

const TIMELINE = [
  {
    year: "2026",
    title: "Building What's Next",
    description:
      "Writing The Weekly Download for 22,000+ readers. Hosting events across SF. Investing in the next generation of founders through Context Ventures.",
    tag: "Now",
  },
  {
    year: "2025",
    title: "Startup Intros Takes Off",
    description:
      "Grew the newsletter from zero to 22K subscribers. Hosted 20+ events — from intimate founder dinners to 200-person demo nights. Closed pre-seed funding.",
    tag: "SF",
  },
  {
    year: "2024",
    title: "The AI Pivot",
    description:
      "Transitioned from operations consulting to AI automation. Hit $15K MRR. Moved to San Francisco to go all-in on the startup ecosystem.",
    tag: "SF",
  },
  {
    year: "2021–2023",
    title: "The Process Hacker",
    description:
      "Built a productivity coaching practice, evolved it into an operations consultancy, and earned an MBA from Carnegie Mellon Tepper — all while traveling the world as a digital nomad.",
    tag: "Nomad",
  },
  {
    year: "2016–2020",
    title: "Nuclear Engineer → Navy Reserve",
    description:
      "Trained at Bettis Reactor Engineering School. Served on active duty as a Nuclear Engineering Duty Officer. Transitioned to the Navy Reserve while exploring entrepreneurship.",
    tag: "Navy",
  },
  {
    year: "2014",
    title: "Commissioned as a Naval Officer",
    description:
      "Graduated Johns Hopkins with a B.S. in Mechanical Engineering and an Economics minor. Commissioned into the U.S. Navy. The beginning of a decade-long journey.",
    tag: "JHU",
  },
];

const VALUES = [
  {
    emoji: "🔨",
    title: "Build Over Talk",
    description: "I'd rather ship something imperfect than plan something perfect. The winners go from idea to action, immediately.",
  },
  {
    emoji: "🌊",
    title: "Depth Over Breadth",
    description: "I care about going deep — deep relationships, deep understanding, deep conviction. Surface-level doesn't interest me.",
  },
  {
    emoji: "🤝",
    title: "Community Over Competition",
    description: "The best ecosystems are built by people who genuinely want others to win. That's the energy I bring to everything.",
  },
  {
    emoji: "📐",
    title: "Clarity Creates Freedom",
    description: "Frameworks over fuzziness. Self-awareness is a competitive advantage. Life can be designed, not just endured.",
  },
];

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16">
        <div className="shrink-0">
          <div className="p-1 rounded-2xl bg-gradient-to-br from-warm to-amber-400">
            <Image
              src="/images/headshot.jpeg"
              alt="Dev Chandra"
              width={280}
              height={280}
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
        <div>
          <p className="text-warm font-medium mb-2">About me</p>
          <h1 className="font-serif text-4xl md:text-5xl text-bark leading-tight mb-4">
            I build companies, invest in founders, and write about all of it.
          </h1>
          <p className="text-lg text-earth leading-relaxed">
            I&apos;m Dev Chandra — a VC associate at{" "}
            <strong className="text-bark">Context Ventures</strong>, co-founder of{" "}
            <strong className="text-bark">Startup Intros</strong>, and a Lieutenant Commander in
            the U.S. Navy Reserve. I live in San Francisco, where I spend my days
            meeting founders, hosting events, and writing{" "}
            <em>The Weekly Download</em> for 22,000+ readers.
          </p>
        </div>
      </section>

      {/* The Story */}
      <section className="warm-card p-8 md:p-12 mb-16">
        <h2 className="font-serif text-3xl text-bark mb-6">The Short Version</h2>
        <div className="space-y-4 text-earth text-lg leading-relaxed">
          <p>
            I started my career as a nuclear engineer in the Navy — designing reactor systems
            and learning what it means to operate where failure isn&apos;t an option. That
            discipline never left me.
          </p>
          <p>
            After transitioning to the reserves, I spent three years as a digital nomad,
            building businesses from Lisbon to Bali. I ran a productivity consultancy, hit
            $15K MRR, attended Nomad Cruises, and built a global network of entrepreneurs
            and operators.
          </p>
          <p>
            In January 2025, sitting on a beach in Bali, I had a moment of clarity: I was
            done running. I wanted roots. A home base. A community. Something meaningful
            and lasting. I moved to San Francisco and went all-in on the startup ecosystem.
          </p>
          <p>
            Today, I sit at the intersection of three worlds:{" "}
            <strong className="text-bark">venture capital</strong> (evaluating deals and
            backing founders),{" "}
            <strong className="text-bark">startup building</strong> (growing Startup Intros
            from zero to 22K+ subscribers), and the{" "}
            <strong className="text-bark">military</strong> (still serving as a Navy Reserve
            officer). That cross-pollination is what makes my perspective different.
          </p>
        </div>
      </section>

      {/* What I Do */}
      <section className="mb-16">
        <h2 className="font-serif text-3xl text-bark mb-8">What I&apos;m Doing Now</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="warm-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">📬</span>
              <h3 className="font-serif text-xl text-bark">The Weekly Download</h3>
            </div>
            <p className="text-earth leading-relaxed">
              Every week, I break down the biggest stories in AI, startups, and venture
              capital for 22,000+ founders and investors. 70+ editions. 50%+ open rate.
              887K+ impressions.
            </p>
          </div>
          <div className="warm-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🚀</span>
              <h3 className="font-serif text-xl text-bark">Context Ventures</h3>
            </div>
            <p className="text-earth leading-relaxed">
              As a VC associate, I evaluate deals, meet founders, and help portfolio
              companies grow. I&apos;ve reviewed hundreds of pitches and have a front-row
              seat to what&apos;s working (and what&apos;s not) in early-stage tech.
            </p>
          </div>
          <div className="warm-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🎤</span>
              <h3 className="font-serif text-xl text-bark">Events & Community</h3>
            </div>
            <p className="text-earth leading-relaxed">
              I&apos;ve hosted 20+ events in San Francisco — from intimate founder dinners
              to AI demo nights and investor meetups. Building the connective tissue
              of the Bay Area startup world.
            </p>
          </div>
          <div className="warm-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">⚓</span>
              <h3 className="font-serif text-xl text-bark">Navy Reserve</h3>
            </div>
            <p className="text-earth leading-relaxed">
              Lieutenant Commander (O-4), Engineering Duty Officer. Still drilling monthly,
              still deploying. The military taught me leadership, systems thinking, and how
              to operate under pressure. I carry that into everything I build.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mb-16">
        <h2 className="font-serif text-3xl text-bark mb-8">What I Believe</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {VALUES.map((value) => (
            <div key={value.title} className="flex gap-4">
              <span className="text-3xl shrink-0">{value.emoji}</span>
              <div>
                <h3 className="font-semibold text-bark mb-1">{value.title}</h3>
                <p className="text-earth text-sm leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-16">
        <h2 className="font-serif text-3xl text-bark mb-8">The Journey</h2>
        <div className="space-y-6">
          {TIMELINE.map((item, i) => (
            <div key={i} className="flex gap-6 group">
              <div className="shrink-0 w-24 text-right">
                <p className="font-serif text-lg text-warm">{item.year}</p>
                <span className="tag bg-warm-light text-warm-dark text-xs mt-1">
                  {item.tag}
                </span>
              </div>
              <div className="relative pb-6">
                <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-warm" />
                {i < TIMELINE.length - 1 && (
                  <div className="absolute left-1.5 top-5 w-px h-full bg-cream-dark" />
                )}
                <div className="pl-8">
                  <h3 className="font-serif text-xl text-bark mb-1">{item.title}</h3>
                  <p className="text-earth leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="warm-card p-8 md:p-12 mb-16">
        <h2 className="font-serif text-3xl text-bark mb-6">Education</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="font-semibold text-bark">Carnegie Mellon University</p>
            <p className="text-earth text-sm">MBA — Tepper School of Business</p>
          </div>
          <div>
            <p className="font-semibold text-bark">Penn State University</p>
            <p className="text-earth text-sm">M.S. Nuclear Engineering</p>
          </div>
          <div>
            <p className="font-semibold text-bark">Johns Hopkins University</p>
            <p className="text-earth text-sm">B.S. Mechanical Engineering, Economics minor</p>
          </div>
          <div>
            <p className="font-semibold text-bark">Harvard Business School Online</p>
            <p className="text-earth text-sm">Credential of Readiness (CORe)</p>
          </div>
          <div>
            <p className="font-semibold text-bark">Bettis Reactor Engineering School</p>
            <p className="text-earth text-sm">Graduate Certificate — Naval Nuclear Propulsion</p>
          </div>
          <div>
            <p className="font-semibold text-bark">CSIS Nuclear Scholars Initiative</p>
            <p className="text-earth text-sm">Project on Nuclear Issues (2018–2020)</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12">
        <h2 className="font-serif text-3xl text-bark mb-4">Let&apos;s Connect</h2>
        <p className="text-earth text-lg mb-6 max-w-xl mx-auto">
          I&apos;m always down to meet interesting people. Whether you&apos;re a founder
          looking for feedback, an investor exploring the ecosystem, or just someone who
          likes good conversation — reach out.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://linkedin.com/in/devchandra"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-warm to-amber-500 text-white font-semibold hover:shadow-[0_4px_20px_rgba(217,119,6,0.3)] hover:-translate-y-0.5 transition-all"
          >
            Connect on LinkedIn
          </a>
          <a
            href="https://x.com/thedevchandra"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-cream-dark text-bark font-semibold hover:bg-white hover:shadow-[0_4px_20px_rgba(217,119,6,0.06)] transition-all"
          >
            Follow on X
          </a>
          <a
            href="#newsletter"
            className="px-6 py-3 rounded-xl border border-cream-dark text-bark font-semibold hover:bg-white hover:shadow-[0_4px_20px_rgba(217,119,6,0.06)] transition-all"
          >
            Subscribe to Newsletter
          </a>
        </div>
      </section>
    </div>
  );
}
