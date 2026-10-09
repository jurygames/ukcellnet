# Reusable prompt: legacy site recovery and Cloudflare migration

Copy this prompt into a new task for **Bethnal Green Police** or **Hail a Caesar**, replacing the bracketed values.

```text
I need you to recover and modernise the existing [SITE NAME] website, then prepare it for a low-cost Cloudflare setup. Treat the existing public site and its assets as source material: preserve its real wording, routes, linked files, visual character and any puzzle/clue-bearing details. Do not invent replacement marketing copy, use stock imagery, or alter any separately hosted puzzle services without my explicit permission.

Current site/domain details
- Production domain: [DOMAIN]
- Existing host/registrar: [HOST / REGISTRAR]
- Staging target: Cloudflare Pages
- Existing URLs that must be preserved: [LIST]
- Services/domains that must remain untouched: [LIST]
- Any protected pages and approved access behaviour: [LIST]

Work in this order:

1. Audit before changing
   - Inspect the repository and current deployment.
   - Crawl or inspect the public site enough to build a route/content/asset inventory.
   - Identify every external dependency, redirect, downloadable file, form, email record and protected route.
   - Tell me about any missing source content instead of fabricating it.

2. Recreate the site as a lean static build
   - Keep the original information architecture and route paths.
   - Use local copies of approved assets wherever possible; ensure image paths, audio and links work from both a deployed URL and direct local-file preview.
   - Match the original period/style faithfully, but make the layout responsive, accessible and reliable on phones.
   - Avoid unnecessary framework/dependency overhead. Use native HTML, CSS and small JavaScript where that is the simplest robust option.
   - Default to noindex until I explicitly approve public indexing.

3. Verify it properly
   - Test each required route, mobile viewport, images, downloads/audio, navigation, redirects and protected-page behaviour.
   - Check for broken relative paths, horizontal overflow and console/network errors.
   - Do not publish or change DNS until staging is approved.

4. Set up and document Cloudflare
   - Deploy the approved static build to Cloudflare Pages staging.
   - Produce a safe, step-by-step plan to move DNS management to Cloudflare Free and, separately, transfer the domain registration to Cloudflare Registrar if supported.
   - Before any nameserver change, inventory all current A/AAAA/CNAME/MX/TXT/SRV/CAA records, especially email records.
   - Explain exactly what is reversible, what could interrupt service, and what must remain untouched.
   - Use the Pages custom-domain workflow; do not manually create a Pages CNAME before associating the domain in the Pages dashboard.
   - Recommend cancelling the old paid hosting plan only after the custom domain, TLS, email, routes and redirects have been verified.

Deliverables
- The working source and a concise README.
- A route/content/asset inventory and any unresolved gaps.
- A test summary.
- A `CLOUDFLARE-DOMAIN-MIGRATION-PLAN.md` with explicit preflight, DNS cutover, registrar-transfer and acceptance-checklist sections.
- A short handover that names the staging URL and exactly what I need to approve next.

Do not change nameservers, transfer a domain, cancel hosting, delete source material, or touch the excluded services unless I explicitly authorise that particular action.
```

Use the site names exactly as you intend their project names to appear. The prompt's safety gates are deliberate: moving DNS, moving a registrar and cancelling hosting are three different actions and should be approved separately.
