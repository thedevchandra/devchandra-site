import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  category: string;
  tags: string[];
  image?: string;
  readingTime: string;
  draft?: boolean;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const filePath = path.join(POSTS_DIR, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);
      const stats = readingTime(content);

      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        date: data.date || "",
        updated: data.updated,
        category: data.category || "Uncategorized",
        tags: data.tags || [],
        image: data.image,
        readingTime: stats.text,
        draft: data.draft || false,
      } as PostMeta;
    })
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const stats = readingTime(content);

  return {
    meta: {
      slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date || "",
      updated: data.updated,
      category: data.category || "Uncategorized",
      tags: data.tags || [],
      image: data.image,
      readingTime: stats.text,
    } as PostMeta,
    content,
  };
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = [...new Set(posts.map((p) => p.category))];
  return categories.sort();
}
