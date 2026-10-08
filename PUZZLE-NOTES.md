# Puzzle safety notes

Treat exact wording, names, dates, telephone numbers, route names, image content and link destinations as clue-bearing unless proved otherwise.

## Important routes

- `/staff-portal/` contains the exact access wording and phone number `020 3962 0484`.
- `/data-access/` accepts the historic access code and reveals the exact Sally Burns message. Its destination remains `https://ukcellnet.uk/celldata/index.html`.
- `/localised-data-storage-upload-iclou/` (including its intentionally truncated spelling) recreates the iCloud sign-in screen. Preserve the Apple ID `scottdavies0@icloud.com` and visible hint `eu quadrigis, ALL CAPS`; the in-world password is `CHELSEA`.
- `/copy-of-localised-data-storage-uplo/` is the local Recently Deleted iCloud Drive page. Preserve the warning strip and the dates `Deleted 23:52 on 10/11/2010` and `File first created 09/11/2010`; its local audio player uses the recovered Voice Memo 091110 recording.
- `/padlock-archive-45581/` shows the recovered padlock archive image and retains the accessibility label “Tap here to enter answer (one word, case sensitive)”. It links to the original protected Wix decrypt page because that answer and unlocked content could not be verified.
- `/celldata-backend/` was a public Wix sitemap route containing the normal shell but no visible page content, image, form or iframe when recovered.
- The existing `ukcellnet.uk/celldata/` application is live and must remain untouched.
- `ukcellnet.uk/vectormail/` returns an empty 200 response and must remain untouched.

## Exact content to protect

- All four staff names and biographies.
- The homepage service-status message.
- “Managing Britain's mobile data infrastructure. Securely.”
- “The UK's national mobile data infrastructure”.
- The recovered Wix footer year was `©2022`; the replacement was deliberately updated to `©2026` with the owner's approval on 8 October 2026.
- The data-access messages “Welcome back, Sally.” and “You last logged on yesterday.”

## Human verification still required

- `/padlock-archive-45581-decrypt` remains protected on the original Wix site; its answer and unlocked content are still unverified.
- Confirm that search-engine discovery is not part of the game before removing the current `noindex, nofollow` policy.
- Test the final `*.pages.dev` staging URL during the live game flow before any DNS change.
- Do not repoint `ukcellnet.uk`; it is serving production puzzle infrastructure from GoDaddy-hosted Apache.
