import type { Stagehand } from "@browserbasehq/stagehand"

export async function openUrl({
  stagehand,
  url,
}: {
  stagehand: Stagehand
  url: string
}) {
  const page = stagehand.context.pages()[0]
  await page.goto(url, { waitUntil: "load", timeoutMs: 30_000 })

  // SPAs fire "load" before they render content (YouTube's shell loads first,
  // then JS fetches the video data), so downstream nodes would snapshot a
  // near-blank page. Give the page a bounded chance to go network-quiet; sites
  // that never idle (endless telemetry) just proceed when the cap expires.
  await page.waitForLoadState("networkidle", 5_000).catch(() => {})

  return { url: page.url(), title: await page.title() }
}
