import Link from "next/link"

import "./marketing.css"
import { fraunces, inter } from "./ui"

// Nav + footer shared by every marketing page (landing, terms, privacy).
// Anchor links go through "/#..." so they work from the legal pages too.

const footerColumns: {
  title: string
  links: { label: string; href: string; external?: boolean }[]
}[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "How it works", href: "/#how-it-works" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Open app", href: "/workflows" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Sign in", href: "/sign-in" },
      { label: "Create account", href: "/sign-up" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
  {
    title: "Built with",
    links: [
      { label: "Stagehand", href: "https://www.stagehand.dev", external: true },
      { label: "Browserbase", href: "https://www.browserbase.com", external: true },
      { label: "Trigger.dev", href: "https://trigger.dev", external: true },
      { label: "Liveblocks", href: "https://liveblocks.io", external: true },
    ],
  },
]

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${inter.className} min-h-svh bg-[#fafafb] text-[#1f1f1f]`}>
      {/* Nav */}
      <header className="border-b border-[#ededed] bg-[#fafafb]">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
          <Link href="/" className={`${fraunces.className} text-xl font-semibold`}>
            Velora
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium sm:flex">
            <Link href="/#features" className="hover:underline hover:decoration-[#2c2c2b]">
              Features
            </Link>
            <Link
              href="/#how-it-works"
              className="hover:underline hover:decoration-[#2c2c2b]"
            >
              How it works
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href="/sign-in"
              className="rounded-full border border-[#cbcbcb] px-5 py-2 text-sm font-medium"
            >
              Sign in
            </Link>
            <Link
              href="/workflows"
              className="rounded-full bg-[#1f1f1f] px-5 py-2 text-sm font-medium text-[#fafafb]"
            >
              Open app
            </Link>
          </div>
        </div>
      </header>

      {children}

      {/* Footer */}
      <footer className="border-t border-[#ededed]">
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
            <div className="flex flex-col gap-3 sm:col-span-2">
              <span className={`${fraunces.className} text-xl font-semibold`}>
                Velora
              </span>
              <p className="max-w-xs text-sm leading-relaxed text-[#70706f]">
                A collaborative canvas for browser automation. Design in real
                time, execute in cloud browsers, replay every run.
              </p>
            </div>
            {footerColumns.map((column) => (
              <nav key={column.title} className="flex flex-col gap-3">
                <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-[#70706f]">
                  {column.title}
                </h3>
                <ul className="flex flex-col gap-2 text-sm">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline hover:decoration-[#2c2c2b]"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="hover:underline hover:decoration-[#2c2c2b]"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-2 border-t border-[#ededed] pt-6 text-sm text-[#70706f] sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Velora. All rights reserved.</p>
            <p>Completely free — no plans, no seats, no meters.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
