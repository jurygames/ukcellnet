# UK Cellnet

Static recreation of the fictional UK Cellnet corporate website used in Jury Games. It deliberately has no build step, package manager, database, CMS, analytics or runtime dependencies.

## Local editing

Run any static file server from the repository root, for example:

```sh
python3 -m http.server 8080
```

Then visit `http://localhost:8080/`. Edit the HTML files directly and use `assets/css/site.css` for shared styles.

## Structure

- Public corporate pages: `/`, `/about/`, `/staff/`, `/contact/`, `/staff-portal/`
- Puzzle-related routes: `/data-access/`, `/localised-data-storage-upload-iclou/`, `/padlock-archive-45581/`, `/celldata-backend/`
- Optimised local images: `assets/images/`
- Unmodified recovered source images: `assets/images/source/`
- One small script, used only for the historic access-code interaction: `assets/js/access.js`

## Images

Keep recovered originals in `assets/images/source/`. Web-ready derivatives live one directory above them. Do not replace puzzle images with stock or generated imagery. The current derivatives were made with `cwebp`.

## Deployment

The site is suitable for Cloudflare Pages with no build command and the repository root as the output directory. First deploy to the generated `*.pages.dev` hostname and test it there.

`ukcellnet.uk` is a separate GoDaddy-hosted Apache site at `92.204.220.76`. Its apex and existing paths such as `/celldata/` must not be repointed or overwritten. As of 8 October 2026, `www.ukcellnet.uk` is a CNAME to that apex; changing only that record could isolate a future brochure site, but it is not needed if the historic domain is retained.

`ukcellnet.co.uk` remains registered through Wix and renews on 10 November 2026. Its current nameservers are Wix (`ns10.wixdns.net` and `ns11.wixdns.net`). The safe production plan is to verify staging first, then connect `ukcellnet.co.uk`/`www.ukcellnet.co.uk` to Cloudflare Pages using the DNS records Cloudflare provides, without moving `ukcellnet.uk`.

Do not change DNS until the staging deployment and every puzzle route have been checked.

## Indexing

Every page uses `noindex, nofollow`, and `robots.txt` disallows crawling. This is appropriate because the known game flow uses a supplied URL. Remove these only if gameplay is explicitly changed to depend on search-engine discovery.
