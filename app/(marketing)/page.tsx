import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import canvasShot from "@/public/canvas.png"

import { Eyebrow, Headline, fraunces } from "./ui"

// The landing page follows DESIGN.md ("Aira" editorial-monochrome): bone-white
// canvas, ink-black pills, hairline borders, serif display headlines over Inter
// body — and exactly one dark inverted band. All values are the spec's tokens,
// kept as literal hex here since no other page uses them. Nav and footer live
// in the (marketing) layout; `reveal` is the scroll-driven fade-up from
// marketing.css.

export const metadata: Metadata = {
  title: "Velora — collaborative browser automation",
  description:
    "Design browser automations on a real-time canvas, run them in cloud browsers, and replay every run. Completely free.",
}

const features = [
  {
    title: "A multiplayer canvas",
    body: "Workflows are flowcharts on a shared canvas. Teammates' cursors move live beside yours — design together, not in turns.",
  },
  {
    title: "Real cloud browsers",
    body: "Every run executes in an actual browser in the cloud. AI-powered nodes act on pages, extract data, and navigate like a person would.",
  },
  {
    title: "Replay every run",
    body: "Each run is recorded. Watch exactly what the browser saw and did, step by step, whenever something needs explaining.",
  },
]

const steps = [
  {
    title: "Draw the workflow",
    body: "Drag a trigger and actions onto the canvas and connect them. No code — the graph is the program.",
  },
  {
    title: "Run it in the cloud",
    body: "One click hands the graph to a cloud browser. Watch each node light up as the run walks through it.",
  },
  {
    title: "Watch the replay",
    body: "When it's done, replay the session like a video and inspect every step's output in the console.",
  },
]

const nodes = ["Start", "Open URL", "Act", "Extract", "Observe", "Agent", "Send Email"]

export default function LandingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-6 pt-20 pb-16 text-center">
        <Eyebrow>Browser automation, together · completely free</Eyebrow>
        <Headline
          as="h1"
          className="max-w-3xl text-[44px] leading-[1.05] sm:text-[56px] lg:text-[66px]"
        >
          Draw a workflow. A browser does the rest.
        </Headline>
        <p className="max-w-xl text-base leading-relaxed text-[#70706f] sm:text-lg">
          Velora is a collaborative canvas for browser automation. Design flows in
          real time with your team, run them in cloud browsers, and replay every
          run — no code, no cost.
        </p>
        <div className="flex items-center gap-2">
          <Link
            href="/sign-up"
            className="rounded-full bg-[#1f1f1f] px-6 py-3 text-sm font-medium text-[#fafafb]"
          >
            Start building — it&apos;s free
          </Link>
          <Link
            href="/sign-in"
            className="rounded-full border border-[#cbcbcb] px-6 py-3 text-sm font-medium"
          >
            Sign in
          </Link>
        </div>

        {/* Product showcase — the one surface allowed a soft layered shadow. */}
        <div className="reveal mt-10 overflow-hidden rounded-2xl shadow-[0px_20px_60px_0px_rgba(0,0,0,0.18),0px_4px_16px_0px_rgba(0,0,0,0.08)]">
          <Image
            src={canvasShot}
            alt="The Velora canvas: a workflow graph with live teammate cursors, a node toolbar, and a Run button"
            priority
          />
        </div>
      </section>

      {/* Features — the single dark inverted band. */}
      <section id="features" className="bg-[#111111]">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 px-6 py-20">
          <div className="reveal flex flex-col items-center gap-4 text-center">
            <Eyebrow>Features</Eyebrow>
            <Headline className="text-3xl text-[#fafafb] sm:text-4xl">
              Everything you need. Nothing you pay for.
            </Headline>
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="reveal rounded-2xl bg-[#1f1f1f] p-6">
                <h3 className="text-base font-semibold text-[#fafafb]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#cbcbcb]">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 px-6 py-20"
      >
        <div className="reveal flex flex-col items-center gap-4 text-center">
          <Eyebrow>How it works</Eyebrow>
          <Headline className="text-3xl sm:text-4xl">Three steps, no code.</Headline>
        </div>
        <ol className="grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="reveal flex flex-col gap-2">
              <span className={`${fraunces.className} text-3xl text-[#70706f]`}>
                {i + 1}
              </span>
              <h3 className="text-base font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-[#70706f]">{step.body}</p>
            </li>
          ))}
        </ol>
        <div className="reveal flex max-w-xl flex-wrap items-center justify-center gap-2">
          {nodes.map((node) => (
            <span
              key={node}
              className="rounded-full bg-[#e3e3e3] px-2.5 py-1 text-xs font-medium"
            >
              {node}
            </span>
          ))}
        </div>
      </section>

      {/* The pricing section, minus the pricing. */}
      <section
        id="pricing"
        className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 border-t border-[#ededed] px-6 py-20 text-center"
      >
        <div className="reveal flex flex-col items-center gap-6">
          <Eyebrow>Pricing</Eyebrow>
          <Headline className="max-w-2xl text-3xl sm:text-[48px] sm:leading-[1.15]">
            Free. That&apos;s the whole pricing page.
          </Headline>
          <p className="max-w-xl text-base leading-relaxed text-[#70706f]">
            No plans, no seats, no meters. Agents, replays, and real-time
            collaboration are included for everyone.
          </p>
          <Link
            href="/sign-up"
            className="rounded-full bg-[#1f1f1f] px-6 py-3 text-sm font-medium text-[#fafafb]"
          >
            Create your first workflow
          </Link>
        </div>
      </section>
    </main>
  )
}
