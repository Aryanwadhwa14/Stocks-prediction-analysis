"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Clock, BookOpenText } from "lucide-react";

// --- Helper: Estimated reading time (approx 900-1200 words ~5-7 min) ---
const READING_MIN = 7;

export default function MarketVolatilityPost() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white">
      {/* Top bar with back link and reading progress */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/70 bg-black/60 border-b border-white/10">
        <div className="mx-auto max-w-4xl px-4 py-3 flex items-center gap-3">
          <Link href="/learn" className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition">
            <ArrowLeft className="h-4 w-4" /> Back to Learn
          </Link>
          <div className="ml-auto flex items-center gap-3 text-white/60 text-xs">
            <Clock className="h-4 w-4" /> {READING_MIN} min read
            <BookOpenText className="h-4 w-4" /> Beginners
          </div>
        </div>
        {/* Reading progress */}
        {mounted && (
          <motion.div style={{ width: progressWidth }} className="h-1 bg-white" />
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl px-4 pt-14 pb-10"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-2xl border border-white/10 px-3 py-1 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-white/80" /> Investing 101
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            Understanding Market Volatility: <span className="text-white/70">A Beginner's Guide</span>
          </h1>
          <p className="mt-5 max-w-3xl text-white/70">
            Markets move—sometimes a little, sometimes a lot. Volatility is the rhythm of those moves. In this guide, we unpack what it is, why it happens, how to measure it, and how to navigate it without losing your cool.
          </p>
        </motion.div>

        {/* Subtle grid + vignette */}
        <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
      </section>

      {/* Content wrapper */}
      <main className="mx-auto max-w-4xl px-4 pb-24">
        {/* Table of Contents */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 grid gap-3 rounded-2xl border border-white/10 p-4 md:p-6"
        >
          <p className="text-sm font-medium text-white/80">On this page</p>
          <div className="grid gap-2 text-sm text-white/70 md:grid-cols-2">
            {[
              { id: "what-is", label: "What is Market Volatility?" },
              { id: "why", label: "Why Does Volatility Happen?" },
              { id: "good-bad", label: "Good vs. Bad Volatility" },
              { id: "measure", label: "How to Measure Volatility" },
              { id: "deal", label: "Dealing with Volatility (Beginner Tips)" },
              { id: "perspective", label: "Volatility in Perspective" },
              { id: "takeaways", label: "Key Takeaways" },
              { id: "faq", label: "FAQ" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 hover:bg-white/5 transition"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white/70" /> {item.label}
              </a>
            ))}
          </div>
        </motion.nav>

        {/* Sections */}
        <ArticleSection id="what-is" title="What is Market Volatility?">
          <p>
            In finance, <strong>volatility</strong> describes how much and how quickly prices move over time. Imagine weather: calm, sunny days are low volatility; storms are high volatility. Volatility can be intraday (within the same day) or extend across weeks and months.
          </p>
          <p className="mt-4">
            Professionals often quantify it using statistical tools like <em>standard deviation</em> for historical volatility, or via market-based gauges like the VIX, which reflects expected volatility over the next 30 days.
          </p>
        </ArticleSection>

        <ArticleSection id="why" title="Why Does Volatility Happen?">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Economic data:</strong> Inflation prints, jobs reports, and GDP updates shift expectations in seconds.</li>
            <li><strong>Earnings surprises:</strong> Beating or missing forecasts can spark sharp single‑stock moves.</li>
            <li><strong>Global events:</strong> Geopolitics, natural disasters, and policy changes alter risk perception.</li>
            <li><strong>Interest rates:</strong> Central bank decisions ripple through borrowing costs and asset prices.</li>
            <li><strong>Investor psychology:</strong> Herd behavior, fear, and FOMO often amplify swings.</li>
          </ul>
        </ArticleSection>

        <ArticleSection id="good-bad" title="Good vs. Bad Volatility">
          <p>
            Not all volatility is harmful. <strong>Constructive (good) volatility</strong> emerges when prices adjust to positive information—like strong product launches or upbeat macro data. <strong>Stress (bad) volatility</strong> tends to follow uncertainty, shocks, or negative news cycles.
          </p>
          <p className="mt-4">
            Traders may seek volatility for opportunity; long‑term investors focus on staying the course and avoiding costly, emotional decisions.
          </p>
        </ArticleSection>

        <ArticleSection id="measure" title="How to Measure Volatility">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 p-4">
              <h4 className="font-medium text-white/90">Historical Volatility (HV)</h4>
              <p className="text-white/70 mt-2">Calculated from past price changes—often via standard deviation of returns over a chosen window.</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-4">
              <h4 className="font-medium text-white/90">Implied Volatility (IV)</h4>
              <p className="text-white/70 mt-2">Backed out from options prices—reflects the market’s expectation of future movement.</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-4">
              <h4 className="font-medium text-white/90">VIX ("Fear Index")</h4>
              <p className="text-white/70 mt-2">A popular index capturing expected S&P 500 volatility over the next 30 days.</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-4">
              <h4 className="font-medium text-white/90">ATR & Bollinger Bands</h4>
              <p className="text-white/70 mt-2">Average True Range and band width expansions are practical, chart‑based views of changing volatility.</p>
            </div>
          </div>
        </ArticleSection>

        <ArticleSection id="deal" title="Dealing with Volatility: Beginner Tips">
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Define your horizon:</strong> Volatility shrinks with time—six years care less than six weeks.</li>
            <li><strong>Diversify intelligently:</strong> Mix assets, sectors, and geographies to soften single‑name shocks.</li>
            <li><strong>Automate habits:</strong> Dollar‑cost averaging reduces timing stress and smooths entries.</li>
            <li><strong>Hold some cash:</strong> Dry powder turns sell‑offs into opportunities rather than emergencies.</li>
            <li><strong>Guard your psyche:</strong> Pre‑commit rules; avoid doom‑scrolling and panic selling.</li>
          </ol>
        </ArticleSection>

        <ArticleSection id="perspective" title="Volatility in Perspective">
          <p>
            Zoom out on long‑term market charts and you’ll find a recurring pattern: frequent drawdowns, persistent recoveries. Volatility is a feature, not a bug—an expression of continuous price discovery as information arrives.
          </p>
          <blockquote className="mt-4 rounded-2xl border border-white/10 p-4 text-white/80">
            “Be fearful when others are greedy, and greedy when others are fearful.” — Warren Buffett
          </blockquote>
        </ArticleSection>

        <ArticleSection id="takeaways" title="Key Takeaways">
          <ul className="list-disc pl-6 space-y-2">
            <li>Volatility is movement—not inherently good or bad.</li>
            <li>It’s driven by data, expectations, and behavior.</li>
            <li>Long horizons, diversification, and disciplined process tame its bite.</li>
          </ul>
        </ArticleSection>

        <ArticleSection id="faq" title="FAQ">
          <div className="space-y-6">
            <FAQ q="Is high volatility always risky?">
              Not always. Volatility raises uncertainty, but it also creates opportunity when paired with sound risk controls.
            </FAQ>
            <FAQ q="Should beginners avoid the market during volatile periods?">
              Not necessarily. With a long‑term plan and position sizing, you can continue investing through turbulence.
            </FAQ>
            <FAQ q="What’s a quick way to see volatility on charts?">
              Look at Bollinger Band width, ATR rising, or simply larger candle bodies versus recent history.
            </FAQ>
          </div>
        </ArticleSection>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-white/10 p-6 text-center"
        >
          <h3 className="text-xl md:text-2xl font-semibold">Keep learning: from volatility to strategy</h3>
          <p className="text-white/70 max-w-2xl">
            Ready to connect these concepts to real‑world decisions? Explore our lessons on risk management, technical indicators, and building a resilient investment plan.
          </p>
          <div className="flex gap-3">
            <Link href="/learn" className="rounded-2xl border border-white/20 px-4 py-2 hover:bg-white/10 transition">Go to Learn</Link>
            <Link href="/analysis" className="rounded-2xl border border-white/20 px-4 py-2 hover:bg-white/10 transition">Open Analysis</Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

function ArticleSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="prose prose-invert prose-p:leading-relaxed prose-headings:scroll-mt-24 max-w-none mb-10"
    >
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-4 text-white/80 space-y-4">{children}</div>
    </motion.section>
  );
}

function FAQ({ q, children }: { q: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-white/10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left px-4 py-3 flex items-center justify-between"
      >
        <span className="font-medium text-white/90">{q}</span>
        <span className="text-white/60">{open ? "–" : "+"}</span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden border-t border-white/10"
      >
        <div className="px-4 py-3 text-white/70">{children}</div>
      </motion.div>
    </div>
  );
}
