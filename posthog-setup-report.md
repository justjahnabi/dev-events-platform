<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog into the DevEvent Next.js App Router application (Next.js 16.2.6). The following changes were made:

- **`instrumentation-client.ts`** (new): Initializes PostHog via the recommended `instrumentation-client` pattern for Next.js 15.3+. Includes error/exception capture, debug mode in development, and routing through a reverse proxy (`/ingest`).
- **`next.config.ts`** (updated): Added PostHog reverse proxy rewrites (`/ingest/static/*`, `/ingest/array/*`, `/ingest/*`) and `skipTrailingSlashRedirect: true` to support PostHog trailing-slash API requests.
- **`components/ExploreBtn.tsx`** (updated): Added `explore_events_clicked` event capture when the user clicks the "Explore Events" hero CTA button.
- **`components/EventCard.tsx`** (updated): Added `'use client'` directive and `event_card_clicked` capture when the user clicks an event card, including properties for `event_slug`, `event_title`, `event_location`, and `event_date`.
- **`.env.local`** (created): Stores `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` — never committed to source control.

## Events

| Event Name | Description | File |
|---|---|---|
| `explore_events_clicked` | User clicks the "Explore Events" CTA button on the homepage hero section to scroll to the events listing | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicks on an event card to navigate to the event detail page, indicating interest in a specific event | `components/EventCard.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](https://us.posthog.com/project/425176/dashboard/1587661)
- [Explore Events CTA clicks over time](https://us.posthog.com/project/425176/insights/jwCKhSnl)
- [Event Card clicks over time](https://us.posthog.com/project/425176/insights/Hkepu4xD)
- [Explore → Event Click conversion funnel](https://us.posthog.com/project/425176/insights/KQ6u0qut)
- [Most clicked events (by title)](https://us.posthog.com/project/425176/insights/sDmKdVZt)
- [Unique users engaging with events (daily)](https://us.posthog.com/project/425176/insights/T5AAelIP)

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
