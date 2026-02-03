import { Metadata } from "next";
import { PostMeta } from "./mdx";

const SITE_URL = "https://devchandra.com";
const SITE_NAME = "Dev Chandra";
const DEFAULT_DESCRIPTION =
  "Dev Chandra — Entrepreneur, Navy Officer, Builder. Book summaries, productivity frameworks, and lessons from building startups.";

export function generateSiteMetadata(): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${SITE_NAME} — Entrepreneur, Navy Officer, Builder`,
      template: `%s | ${SITE_NAME}`,
    },
    description: DEFAULT_DESCRIPTION,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: SITE_URL,
      siteName: SITE_NAME,
      title: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@devchandra",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: SITE_URL,
    },
  };
}

export function generatePostMetadata(post: PostMeta): Metadata {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const title = post.updated
    ? `${post.title} (Updated ${post.updated})`
    : post.title;

  return {
    title,
    description: post.description,
    openGraph: {
      type: "article",
      url,
      title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      authors: [SITE_NAME],
      tags: post.tags,
      images: post.image ? [{ url: post.image, alt: post.title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generateArticleJsonLd(post: PostMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: {
      "@type": "Person",
      name: "Dev Chandra",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "Dev Chandra",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    image: post.image,
    keywords: post.tags.join(", "),
  };
}
