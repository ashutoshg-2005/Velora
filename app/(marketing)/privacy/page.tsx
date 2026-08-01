import type { Metadata } from "next"

import { LegalArticle } from "../legal"

export const metadata: Metadata = {
  title: "Privacy Policy — Velora",
  description: "What Velora collects, why, and the choices you have.",
}

const sections = [
  {
    title: "1. What we collect",
    body: "Account information (name, email, and organization membership) handled by our authentication provider; the workflows you create and their run history; session recordings of workflow runs so replays work; and basic technical logs and error reports used to keep the service reliable.",
  },
  {
    title: "2. How we use it",
    body: "We use this information to operate Velora: authenticating you, storing and running your workflows, showing your team live presence on the canvas, playing back run replays, and diagnosing errors. We do not sell your data, and we do not use it for advertising.",
  },
  {
    title: "3. Services we rely on",
    body: "Velora is built on a small set of infrastructure providers that process data on our behalf: Clerk (authentication and organizations), Neon (database), Browserbase (cloud browsers and session recordings), Trigger.dev (workflow execution), Liveblocks (real-time collaboration), and Sentry (error monitoring). Each receives only what it needs to do its job.",
  },
  {
    title: "4. Data retention and deletion",
    body: "Workflows and their run history are kept until you delete them. Deleting a workflow removes it, and its collaboration room, from our systems. If you want your account and all associated data removed, contact us and we will delete it.",
  },
  {
    title: "5. Cookies",
    body: "We use only the cookies required to keep you signed in. There are no advertising or cross-site tracking cookies.",
  },
  {
    title: "6. Security",
    body: "Access to your workflows is scoped to your organization and checked on every request. Secrets such as API keys are kept server-side and are never sent to the browser.",
  },
  {
    title: "7. Your rights",
    body: "You can access, correct, export, or delete your data. Most of this is available directly in the app; for anything else, contact us and we will help.",
  },
  {
    title: "8. Changes to this policy",
    body: "If this policy changes, we will update the date at the top of this page. Meaningful changes will be called out on the site.",
  },
]

export default function PrivacyPage() {
  return (
    <LegalArticle
      title="Privacy Policy"
      updated="August 1, 2026"
      intro="The short version: we collect only what the product needs to work, we share it only with the infrastructure that runs it, and we never sell it."
      sections={sections}
    />
  )
}
