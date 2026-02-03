import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { generateSiteMetadata } from "../../lib/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = generateSiteMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight hover:text-blue-600 transition-colors"
            >
              Dev Chandra
            </Link>
            <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
              <Link href="/blog" className="hover:text-gray-900 transition-colors">
                Blog
              </Link>
              <Link href="/about" className="hover:text-gray-900 transition-colors">
                About
              </Link>
            </div>
          </div>
        </nav>

        <main className="mx-auto max-w-4xl px-6 py-12">{children}</main>

        <footer className="border-t border-gray-100 mt-24">
          <div className="mx-auto max-w-4xl px-6 py-8 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Dev Chandra. All rights reserved.</p>
            <div className="mt-2 flex justify-center gap-4">
              <a
                href="https://linkedin.com/in/devchandra"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/devchandra"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition-colors"
              >
                X
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
