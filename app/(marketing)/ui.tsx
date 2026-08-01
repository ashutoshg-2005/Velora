import { Fraunces, Inter } from "next/font/google"

// Shared type + small components for the marketing pages, per DESIGN.md.
// Fraunces is the spec's named substitute for the Gestura display serif.
export const fraunces = Fraunces({ subsets: ["latin"], weight: ["400", "600"] })
export const inter = Inter({ subsets: ["latin"] })

// Section eyebrow — the 12px uppercase "kicker" that opens every section.
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#70706f]">
      {children}
    </p>
  )
}

// Editorial serif headline, weight 400 with negative tracking per the spec.
export function Headline({
  as: Tag = "h2",
  className = "",
  children,
}: {
  as?: "h1" | "h2"
  className?: string
  children: React.ReactNode
}) {
  return (
    <Tag className={`${fraunces.className} font-normal tracking-[-0.02em] ${className}`}>
      {children}
    </Tag>
  )
}
