import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Dev Chandra — Entrepreneur, Navy Reserve Officer, and builder based in San Francisco.",
};

export default function About() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight">About</h1>

      <div className="mt-8 prose prose-lg prose-gray max-w-none">
        <p>
          I&apos;m Dev Chandra — an entrepreneur, U.S. Navy Reserve Officer, and builder
          based in San Francisco.
        </p>

        <p>
          I&apos;ve spent the last decade building things: startups, teams, systems, and
          communities. I write about the books, frameworks, and lessons that have
          shaped how I think and work.
        </p>

        <h2>What I&apos;m Working On</h2>
        <ul>
          <li>Building at the intersection of AI and the startup ecosystem</li>
          <li>Serving as a Lieutenant Commander in the U.S. Navy Reserve</li>
          <li>Writing about books, productivity, and leadership</li>
        </ul>

        <h2>Background</h2>
        <ul>
          <li>B.S. Mechanical Engineering — Johns Hopkins University</li>
          <li>M.S. Nuclear Engineering — Penn State University</li>
          <li>MBA — Carnegie Mellon Tepper School of Business</li>
          <li>U.S. Navy — Engineering Duty Officer, Lieutenant Commander (O-4)</li>
        </ul>

        <h2>Get in Touch</h2>
        <p>
          Find me on{" "}
          <a href="https://linkedin.com/in/devchandra" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>{" "}
          or{" "}
          <a href="https://x.com/devchandra" target="_blank" rel="noopener noreferrer">
            X
          </a>
          .
        </p>
      </div>
    </div>
  );
}
