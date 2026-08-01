import { Eyebrow, Headline, fraunces } from "./ui"

// Shared article shell for the legal pages, keeping the editorial rhythm:
// eyebrow with the updated date, serif display title, serif section headings.
export function LegalArticle({
  title,
  updated,
  intro,
  sections,
}: {
  title: string
  updated: string
  intro: string
  sections: { title: string; body: string }[]
}) {
  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-10 px-6 py-20">
      <header className="flex flex-col gap-4">
        <Eyebrow>Last updated: {updated}</Eyebrow>
        <Headline as="h1" className="text-4xl sm:text-[48px] sm:leading-[1.15]">
          {title}
        </Headline>
        <p className="text-base leading-relaxed text-[#70706f]">{intro}</p>
      </header>
      {sections.map((section) => (
        <section key={section.title} className="flex flex-col gap-2">
          <h2 className={`${fraunces.className} text-2xl font-normal tracking-[-0.015em]`}>
            {section.title}
          </h2>
          <p className="text-base leading-relaxed text-[#444444]">{section.body}</p>
        </section>
      ))}
    </main>
  )
}
