import type { Metadata } from "next"

import { LegalArticle } from "../legal"

export const metadata: Metadata = {
  title: "Terms of Service — Velora",
  description: "The terms that govern your use of Velora.",
}

const sections = [
  {
    title: "1. Acceptance of these terms",
    body: "By creating an account or using Velora, you agree to these terms. If you are using Velora on behalf of an organization, you agree on that organization's behalf and confirm you have the authority to do so.",
  },
  {
    title: "2. The service",
    body: "Velora is a collaborative visual workflow builder for browser automation. Workflows you design are executed in cloud browsers and recorded so runs can be replayed. The service is provided completely free of charge — there are no paid plans, and no feature requires payment.",
  },
  {
    title: "3. Your account",
    body: "You need an account and an organization to use Velora. You are responsible for the activity that happens under your account and for keeping your credentials secure. You must provide accurate information when signing up.",
  },
  {
    title: "4. Acceptable use",
    body: "You agree not to use Velora to break the law, to access systems or data you are not authorized to access, to violate other websites' terms of service, to send spam, to disrupt the service, or to attempt to circumvent its security. Automations you run are your responsibility — you must have the right to automate the sites and services your workflows interact with.",
  },
  {
    title: "5. Your content",
    body: "You own the workflows you build and the data your runs produce. You grant us the limited rights needed to store and process that content in order to operate the service — for example, executing your workflows in cloud browsers and recording replays. We do not sell your content.",
  },
  {
    title: "6. Availability and changes",
    body: "The service is provided \"as is\" and \"as available\", without warranties of any kind. We may change, suspend, or discontinue any part of the service at any time. We may also set reasonable operational limits (such as run duration) to keep the service healthy for everyone.",
  },
  {
    title: "7. Termination",
    body: "You can stop using Velora and delete your workflows at any time. We may suspend or terminate accounts that violate these terms or put the service or other users at risk.",
  },
  {
    title: "8. Limitation of liability",
    body: "To the maximum extent permitted by law, Velora and its contributors are not liable for any indirect, incidental, special, consequential, or exemplary damages, or for lost profits or data, arising from your use of the service.",
  },
  {
    title: "9. Changes to these terms",
    body: "We may update these terms from time to time. When we do, we will update the date at the top of this page. Continuing to use the service after a change means you accept the updated terms.",
  },
]

export default function TermsPage() {
  return (
    <LegalArticle
      title="Terms of Service"
      updated="August 1, 2026"
      intro="These terms keep things simple: Velora is free, your workflows are yours, and you agree to use the service responsibly."
      sections={sections}
    />
  )
}
