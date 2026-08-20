# Lumax website

Hugo site built from the `lumax_website` design export.

## Run it

```bash
hugo server -D
```

http://localhost:1313/

> The dev server does not reliably pick up changes to files in `layouts/`.
> If a template edit doesn't show up, restart the server.

Production build:

```bash
hugo --environment production
```

Requires Hugo **extended** 0.134.3 (pinned in `netlify.toml`).

## How the design export maps onto this site

The export shipped 21 `.dc.html` files, which are 6 pages × {day, night} × {desktop, mobile}. They collapse as follows:

| Export | Here |
|---|---|
| Day vs night variants | One stylesheet. `assets/css/tokens.css` defines the palette twice; night is a `:root[data-theme='dark']` block. |
| Desktop vs mobile variants | One stylesheet. The `@media (max-width: 760px)` block at the foot of `assets/css/site.css`. |
| `Lumax Landing*` | `layouts/index.html` + `content/_index.md` |
| `Lumax Story *` | `layouts/stories/single.html` + `content/stories/*.md` |
| `Flock Lab` | **Not ported.** It is labelled "tuning ground — not a page of the site". |
| `<x-dc>` / `DCLogic` runtime | Removed. The two real behaviours were rewritten as plain DOM: `assets/js/flock.js` and `assets/js/site.js`. |
| Inline `style="..."` attributes | Extracted to classes in `assets/css/site.css`. |

The export used only three tokens from its own design system (`--font-display`, `--font-body`, `--radius-full`) and hardcoded every colour inline. Those inline values are what `tokens.css` names; the rest of `_ds/` is not used.

## Content

- `content/_index.md` — homepage: hero cells, about, services, resources, contact.
- `content/stories/*.md` — one file per project. The page body is an ordered `blocks:` list (`section`, `quote`, `figure`, `figure-pair`), so the running order is data, not markup.
- `data/team.yaml` — team list.

## Images

Every image is a **slot**. Sources live in `assets/images/photos/` at whatever size they arrive — full-resolution drone frames are fine. `layouts/partials/figure.html` crops each to its slot's aspect via Hugo's image pipeline and emits 1x plus 2x, so nothing oversized reaches the visitor.

Slot sizes, passed as `fill` at the call site:

| Slot | Size |
|---|---|
| Homepage hero cell | 520x350 |
| Story lead / full-width figure | 830x459 |
| Story paired figure | 400x272 |

**To fill a slot: drop the JPG into `assets/images/photos/` under the exact filename in the build warning.** No resizing, no cropping, no template change. A 2x variant is only generated when the source is actually large enough, so small originals aren't upscaled.

Missing files render a labelled placeholder and warn at build time:

```
WARN  image slot unfilled: "/images/photos/creek-network-in-the-saltmarsh.jpg" (alt: "Creek network in the saltmarsh")
```

List the outstanding ones:

```bash
hugo --logLevel warn 2>&1 | grep "image slot unfilled"
```

**Currently 6 of 19 filled.** The 13 outstanding, grouped by page — this is the shot list:

**Homepage** — all 3 filled.

**AI-BIRD** — 3 of 4 filled
- Reviewing colony imagery in the field

**Salmon Vision**
- Survey flight over a coastal river system
- The river system from the air, late in the season
- Researcher reviewing footage in the field
- Aerial view of a river channel

**CODAP**
- Survey flight over the intertidal zone
- Intertidal flats at low water from survey altitude
- Creek network in the saltmarsh
- Placing ground control before a survey

**ReID**
- Underwater imagery used for individual identification
- The study system
- The study reach from the air
- Imagery review

## Team photos

`data/team.yaml` carries an optional `photo:` per person, naming a file in `assets/images/team/`. Hugo crops it square and serves a 2x 96px avatar, rendered as a 48px circular mark beside the name (`--radius-full` is reserved for pills, status dots and avatars, so a round mark is the sanctioned treatment).

Anyone without a `photo:` falls back to an initials mark — the treatment the design system specifies for missing team photos.

**8 of 10 filled**, recovered from the `main` branch's own `data/team.yaml`. Still missing:

- Geert Aarts
- Norbert Stellaard

To add one: drop a square-ish JPG into `assets/images/team/` and add a `photo:` line. ~600px square or larger is plenty. Note `will-atlas.jpg` is only 200×200 — fine at 48px display, but worth replacing if the avatar ever grows.

The crop is `Center`, so **supply a head-and-shoulders square**. A full-length field shot leaves the face a few pixels wide. Hugo's `Smart` anchor was tried and rejected — on `eva-ortelee-field.jpg` it locked onto the dune grass rather than the person. That original is kept alongside as `eva-ortelee-field.jpg`; it is unreferenced, so Hugo does not publish it.

Each person also carries a `linkedin:` URL, rendered as a small text link between the name and the discipline line — no icon, with the underline animating in on hover. All 10 have one. Omit the field and the line simply disappears.

`main`'s team data also had per-person emails, which this design does not surface. They are still in `git show origin/main:data/team.yaml` if you want a contact line added.

## Theme

Dark activates automatically if the visitor's OS is in dark mode **or** it is between 19:00 and 07:00 on their device clock, rechecked every 5 minutes. The footer control pins a choice, which persists in `localStorage` and overrides the automatic behaviour. Set before first paint by `assets/js/theme-init.js`, inlined in `<head>`.

## ⚠️ Font licence — do not ship as-is

`static/fonts/ABCOracleTrial-Medium.otf` is Dinamo's **trial** cut of ABC Oracle: evaluation / non-commercial use only. Publishing it on lumax.ai would breach the licence.

It is isolated behind two tokens at the top of `assets/css/tokens.css`. Once a production licence is in place, drop the licensed files into `static/fonts/` and change `--font-display` / `--font-body`. Nothing else in the codebase names the family.

## Deployment

Netlify (`netlify.toml`) builds `hugo --minify` into `public/`.

`.github/workflows/main.yml` — the GitHub Pages workflow — is **broken and was not touched**. Its deploy step has failed on every run since Sep 2025 because Pages is not enabled on the repo, and its build step calls `npm run project-setup` / `npm run build`, which no longer exist on this branch. Either delete it or rewrite it for the current structure.
