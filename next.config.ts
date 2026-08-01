import type { NextConfig } from "next"
import { withSentryConfig } from "@sentry/nextjs"

const nextConfig: NextConfig = {
  devIndicators: false,
}

export default withSentryConfig(nextConfig, {
  org: "e8b961d5f908",
  project: "javascript-nextjs",

  // Source map upload auth token — set SENTRY_AUTH_TOKEN in CI / a gitignored env file
  authToken: process.env.SENTRY_AUTH_TOKEN,

  // Upload a wider set of client source files for better stack trace resolution
  widenClientFileUpload: true,

  // Route Sentry requests through your own domain to bypass ad-blockers
  tunnelRoute: "/monitoring",

  // Suppress build output outside CI
  silent: !process.env.CI,
})
