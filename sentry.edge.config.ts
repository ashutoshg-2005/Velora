import * as Sentry from "@sentry/nextjs"

Sentry.init({
  // If unset, the SDK stays disabled rather than reporting to the wrong project.
  dsn: process.env.SENTRY_DSN,

  tracesSampleRate: process.env.NODE_ENV === "development" ? 1.0 : 0.1,

  enableLogs: true,
})
