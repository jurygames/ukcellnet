# UK Cellnet: move `ukcellnet.co.uk` to Cloudflare

## Intended end state

- **Cloudflare Pages** hosts the static site (already live at `ukcellnet.pages.dev`).
- **Cloudflare DNS** is authoritative for `ukcellnet.co.uk`.
- **Cloudflare Registrar** holds the `.co.uk` registration, so the website, DNS, SSL and renewal are in one place.
- The separate `ukcellnet.uk` domain and its existing puzzle infrastructure remain completely untouched.

Cloudflare's Free plan is sufficient for this static site. The only recurring charge should be the `.co.uk` registration renewal; Pages, DNS and TLS do not need a Wix site plan.

## Before changing anything

1. In Wix, export or manually record **every** DNS record for `ukcellnet.co.uk`: A, AAAA, CNAME, MX, TXT, SRV, CAA and any verification records. This is essential if the domain has email or a third-party service attached.
2. Confirm that `ukcellnet.pages.dev` is the approved production build, including the small-screen layouts and every puzzle route.
3. Decide the canonical address: use `https://ukcellnet.co.uk` and redirect `https://www.ukcellnet.co.uk` to it.
4. Do not cancel Wix hosting yet, and do not edit `ukcellnet.uk`.

## Phase 1 — move DNS management (low cost, reversible)

1. Add `ukcellnet.co.uk` as a site/zone in the same Cloudflare account that owns the Pages project. Select the Free plan.
2. Let Cloudflare scan the Wix zone, then compare the imported records against the record inventory. Recreate anything missing, especially mail records. Leave existing mail-related records DNS-only.
3. In **Workers & Pages → ukcellnet → Custom domains**, add `ukcellnet.co.uk`. Do this through the Pages UI rather than creating the DNS record by hand; once the zone is active, Pages creates its own DNS target.
4. Add `www.ukcellnet.co.uk` as a Pages custom domain, then create a Cloudflare redirect rule from `www` to the apex, preserving paths and query strings.
5. At Wix Domains, replace the current Wix nameservers with the two Cloudflare nameservers shown for the zone. This moves DNS authority only; it does not yet transfer registration.
6. Wait for Cloudflare to mark the zone active and for the Pages custom-domain certificate to become active. Check both the apex and `www`, plus the key paths, on desktop and mobile.
7. Only after the checks pass, cancel the paid Wix **site/hosting plan**. Keep the Wix domain registration until phase 2 finishes.

Nameserver propagation commonly settles within a few hours but may take up to 24–48 hours. Keep the old Wix DNS record list until the change is proven stable.

## Phase 2 — transfer the registration to Cloudflare

Once phase 1 has been stable for a few days:

1. Add a valid payment method and verify registrant contact details in Cloudflare.
2. In Cloudflare **Domain Registration → Transfer domains**, start a transfer for `ukcellnet.co.uk`.
3. Ask Wix to change the domain's IPS tag to `CLOUDFLARE`. `.co.uk` transfers use an IPS tag, not an EPP/auth code.
4. Confirm the transfer has completed in Cloudflare, verify auto-renewal/contact details, then retain the registration confirmation and renewal date.

Cloudflare supports `.co.uk` transfers; per its current documentation, the transfer has no fee and does not add a year to the registration. Confirm the live checkout terms before submitting, as registrar policies can change.

## Acceptance checklist

- `https://ukcellnet.co.uk/` serves the Pages site with a valid certificate.
- `https://www.ukcellnet.co.uk/anything` redirects to the matching apex URL.
- Email continues to send and receive, if used.
- All key routes and the locally hosted audio work.
- No DNS, nameserver, hosting or billing change has been made to `ukcellnet.uk`.

## Sources

- [Cloudflare Pages custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/)
- [Cloudflare .UK-domain transfers](https://developers.cloudflare.com/registrar/top-level-domains/uk-domains/)
- [Cloudflare Pages www-to-apex redirects](https://developers.cloudflare.com/pages/how-to/www-redirect/)
