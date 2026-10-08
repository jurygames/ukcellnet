# Puzzle safety notes

Treat exact wording, names, dates, telephone numbers, route names, image content and link destinations as clue-bearing unless proved otherwise.

## Important routes

- `/staff-portal/` contains the exact access wording and phone number `020 3962 0484`.
- `/data-access/` accepts the historic access code and reveals the exact Sally Burns message. Its destination remains `https://ukcellnet.uk/celldata/index.html`.
- `/localised-data-storage-upload-iclou/` (including its intentionally truncated spelling) shows the recovered iCloud image. The image still links to the original protected Wix page at `/copy-of-localised-data-storage-uplo` because its password and unlocked content could not be verified.
- `/padlock-archive-45581/` shows the recovered padlock archive image and retains the accessibility label “Tap here to enter answer (one word, case sensitive)”. It links to the original protected Wix decrypt page because that answer and unlocked content could not be verified.
- `/celldata-backend/` was a public Wix sitemap route containing the normal shell but no visible page content, image, form or iframe when recovered.
- The existing `ukcellnet.uk/celldata/` application is live and must remain untouched.
- `ukcellnet.uk/vectormail/` returns an empty 200 response and must remain untouched.

## Exact content to protect

- All four staff names and biographies.
- The homepage service-status message.
- “Managing Britain's mobile data infrastructure. Securely.”
- “The UK's national mobile data infrastructure”.
- Footer year `©2022`.
- The data-access messages “Welcome back, Sally.” and “You last logged on yesterday.”

## Human verification still required

- Supply the password/answer for each of the two protected archive destinations if they need to be recreated locally rather than left on Wix.
- Confirm that search-engine discovery is not part of the game before removing the current `noindex, nofollow` policy.
- Test the final `*.pages.dev` staging URL during the live game flow before any DNS change.
- Do not repoint `ukcellnet.uk`; it is serving production puzzle infrastructure from GoDaddy-hosted Apache.
