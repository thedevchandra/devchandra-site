import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { generateSiteMetadata } from "../../lib/seo";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = generateSiteMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="font-sans text-bark antialiased bg-cream">
        {/* Nav */}
        <nav className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-warm flex items-center justify-center text-white font-serif text-lg">
              D
            </div>
            <span className="font-serif text-xl">Dev Chandra</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm text-earth">
            <Link href="/about" className="hover:text-warm transition-colors">About</Link>
            <Link href="/blog" className="hover:text-warm transition-colors">Writing</Link>
            <a href="#newsletter" className="hover:text-warm transition-colors">Newsletter</a>
            <a href="#events" className="hover:text-warm transition-colors">Events</a>
            <a
              href="#newsletter"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-warm to-amber-500 text-white font-semibold text-sm hover:shadow-[0_4px_20px_rgba(217,119,6,0.3)] hover:-translate-y-0.5 transition-all"
            >
              Subscribe
            </a>
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-cream-dark">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="font-serif text-xl">Dev Chandra</p>
              <p className="text-sm text-earth mt-1">Building from San Francisco 🌁</p>
            </div>
            <div className="flex gap-6">
              <a href="https://linkedin.com/in/devchandra" target="_blank" rel="noopener noreferrer" className="text-earth hover:text-warm transition-colors text-sm font-medium">LinkedIn</a>
              <a href="https://x.com/thedevchandra" target="_blank" rel="noopener noreferrer" className="text-earth hover:text-warm transition-colors text-sm font-medium">X / Twitter</a>
              <a href="#" className="text-earth hover:text-warm transition-colors text-sm font-medium">YouTube</a>
            </div>
            <p className="text-xs text-earth">© {new Date().getFullYear()} Dev Chandra. Made with ☕ in SF.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
