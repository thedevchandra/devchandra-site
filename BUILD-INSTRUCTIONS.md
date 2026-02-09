# Build Instructions: Design 3 — Warm & Personal

Implement the homepage design from `DESIGN-REFERENCE.html` into this Next.js 16 site.

## CRITICAL: This is Tailwind CSS v4
- NO `tailwind.config.ts` — Tailwind v4 uses CSS-based config
- All custom theme values go in `src/app/globals.css` using `@theme { }` blocks
- Example: `@theme { --color-cream: #FAF7F2; --font-serif: "DM Serif Display", Georgia, serif; }`

## Design Spec
- **Fonts:** DM Serif Display (headings) + DM Sans (body) — use `next/font/google`
- **Colors:** cream (#FAF7F2), warm (#D97706), warm-light (#FEF3C7), warm-dark (#92400E), earth (#78716C), earth-dark (#44403C), bark (#292524), cream-dark (#F0EBE3)
- **Background:** cream (#FAF7F2)

## Pages to Build

### Homepage (`src/app/page.tsx`)
Sections in order:
1. **Hero:** Left = large circular avatar (`/images/avatar.png`), Right = "👋 Hey, I'm Dev" + big serif heading + description + colored topic pills
2. **Stats Band:** white bg with border, 5 stats in a row (22K+ Subscribers, 70+ Editions, 50%+ Open Rate, 20+ Events, 887K+ Impressions) — serif numbers in warm color
3. **Newsletter CTA:** centered card with "📬 Newsletter" pill, "The Weekly Download" heading, description, email input + subscribe button
4. **Recent Writing:** "Recent Writing" heading + "See all →" link, 3-column card grid. Each card: gradient top with emoji, category tag + date, serif title, description, "Read more →". Wire to real MDX posts from `lib/mdx.ts` `getAllPosts()`.
5. **Podcast & Events:** 2-column grid. Left = podcast card (coming soon). Right = events card (Startup Intros).
6. **Footer:** centered 3-column: brand/tagline, social links (LinkedIn, X, YouTube), copyright

### Layout (`src/app/layout.tsx`)
- **Nav:** Logo circle "D" + "Dev Chandra" serif, right side: About, Writing, Newsletter, Events links + Subscribe button (warm gradient)
- Body: cream background, font-sans by default
- No footer in layout (footer is in page.tsx)

### CSS (`src/app/globals.css`)
- Keep the existing `@import "tailwindcss"` and `@plugin "@tailwindcss/typography"`
- Add `@theme` block with all custom colors and fonts
- Add keyframe for wave animation (👋 hand)
- Card hover effects: translateY(-2px) + warm shadow

## Existing Code
- `lib/mdx.ts` — exports `getAllPosts()` returning `PostMeta[]` with: slug, title, description, date, category, tags, readingTime
- `content/posts/` — MDX blog posts (only 1 exists: atomic-habits-summary.mdx)
- `src/app/blog/` — blog list + [slug] pages (DON'T TOUCH)
- `public/images/avatar.png` — Ghibli-style avatar
- `public/images/headshot.jpeg` — real headshot

## Rules
- Use ONLY Tailwind utility classes (matching the reference HTML exactly)
- Use `next/image` for images, `next/link` for internal links
- TypeScript throughout
- DO NOT modify blog pages, lib/mdx.ts, or content/posts/
- Make it responsive (mobile-first, md: breakpoints)
- The subscribe button should use a warm gradient background, not the avatar image
