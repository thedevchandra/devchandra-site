# WordPress → Next.js Migration Spec

## Goal
Create an exact 1:1 clone of https://devchandra.com (WordPress) as a Next.js 16 site. Same words, same photos, same route structure. NO content changes.

## Current WordPress Site Structure

### Pages (static)
- `/` — Homepage (TPH agency landing page)
- `/about/` — About Dev Chandra
- `/blog/` — Blog index
- `/services/` — Services page
- `/tools/` — Tools/recommendations page
- `/newsletter/` — Newsletter signup
- `/systemize/` — Lead magnet / course page
- `/free-productivity-guide/` — Lead magnet
- `/start-now/` — CTA page
- `/thanks/` — Thank you page
- `/disclaimer/` — Legal
- `/terms-conditions/` — Legal
- `/privacy-policy/` — Legal

### Blog Posts (50+ posts at /blog/[slug]/)
All posts live under `/blog/` with slugs like:
- what-is-an-online-business-manager
- from-6-to-7-figures-austin-netzley-summary
- what-is-productivity
- business-metrics
- metrics-dashboard
- mental-health-productivity
- resilience-eric-greitens-summary
- 5-levels-of-leadership-john-maxwell
- build-good-habits
- gtd-flowchart
- work-from-home-setup
- dex-crm-review
- standmore-review
- toptal-vs-upwork
- toptal-review
- skool-vs-circle
- upwork-vs-fiverr
- 99designs-vs-fiverr
- fractional-cmo
- fractional-cio
- speechify-vs-natural-reader
- 99designs-vs-upwork
- upwork-review
- craft-review
- how-to-write-okrs
- mbo-vs-okr
- radical-focus-christina-wodtke-summary
- fractional-executive
- remnote-review
- tango-review
- scribe-vs-tango
- increase-organic-traffic
- personal-board-of-directors
- fractional-cfo
- how-to-measure-progress-towards-goals
- habit-stack
- business-start-up-consultant
- freelance-business-consultant
- business-development-consultant
- vision-board-ideas
(and more — scrape sitemap for complete list)

## Technical Requirements

### Stack
- Next.js 16 (App Router) — already set up
- TypeScript
- Tailwind CSS
- MDX for blog posts (use next-mdx-remote or @next/mdx)

### Route Structure
```
/app
  /page.tsx                          # Homepage
  /about/page.tsx                    # About
  /blog/page.tsx                     # Blog index
  /blog/[slug]/page.tsx              # Individual posts
  /services/page.tsx                 # Services
  /tools/page.tsx                    # Tools
  /newsletter/page.tsx               # Newsletter
  /systemize/page.tsx                # Lead magnet
  /free-productivity-guide/page.tsx  # Lead magnet
  /start-now/page.tsx                # CTA
  /thanks/page.tsx                   # Thank you
  /disclaimer/page.tsx               # Legal
  /terms-conditions/page.tsx         # Legal
  /privacy-policy/page.tsx           # Legal
  /layout.tsx                        # Root layout (nav + footer)
/content
  /posts/                            # MDX blog posts
/public
  /images/                           # All images from WordPress
```

### Migration Process
1. For each page: fetch the WordPress page content via web scraping (the site is live at devchandra.com)
2. Convert the HTML content to clean JSX/MDX
3. Download all images referenced in the content to /public/images/
4. Keep the exact same text, headings, layout structure
5. Implement responsive design with Tailwind (match the WordPress look)
6. Generate proper metadata (title, description) from existing Yoast SEO data

### Images
- All images are currently at: https://devchandra.com/wp-content/uploads/...
- Download them and place in /public/images/ with organized paths
- Use Next.js Image component for optimization
- Keep alt text from WordPress

### SEO
- generateMetadata() for each page
- Sitemap generation
- robots.txt
- Open Graph tags
- Canonical URLs matching old structure

### Important
- Do NOT modify any copy/text — use the EXACT same words
- Do NOT skip any pages or posts
- Images should be downloaded and served locally (not hotlinked to WordPress)
- The site should build and deploy successfully on Vercel

## Sitemaps for Reference
- Posts: https://devchandra.com/post-sitemap.xml
- Pages: https://devchandra.com/page-sitemap.xml
- Categories: https://devchandra.com/category-sitemap.xml
