# Deploying the portfolio redesign

Static site. One HTML file, one asset folder, no build step, no dependencies.

```
index.html      the whole page (markup, styles, scripts)
img/            photos and videos
img/gfx/        teapot mesh, texture/normal/displacement maps, cube map faces
vercel.json     tells Vercel it's static and caches /img hard
```

Total: about 3.5 MB, nearly all of it images and video that load lazily.

---

## Option A — replace the contents of your existing repo

Keeps the repo, the domain and the Vercel project exactly as they are. The old
Next.js app stays in git history, so nothing is actually lost.

```bash
git clone https://github.com/bestcreator01/portfolio.git
cd portfolio
git checkout -b redesign-2026

# clear out the v0 app, keep git metadata
git rm -r --cached . -q
rm -rf app components public lib styles node_modules \
       next.config.* package.json package-lock.json pnpm-lock.yaml \
       tsconfig.json postcss.config.* tailwind.config.* components.json

# copy in the new site (adjust the source path)
cp -R ~/Downloads/portfolio-site/. .

git add -A
git commit -m "Redesign portfolio as a static site"
git push -u origin redesign-2026
```

Open a PR on GitHub, look over the diff, merge when you're happy. Vercel
rebuilds `gloriashin.me` automatically.

**One thing to check in Vercel** after merging: Project → Settings → General →
Framework Preset. It will probably still say *Next.js*. Set it to **Other**.
`vercel.json` should handle this, but the dashboard setting wins if they
disagree, and a stale preset makes the build fail looking for `next build`.

## Option B — try it before touching the repo

```bash
cd portfolio-site
npx vercel          # preview URL, nothing public changes
npx vercel --prod   # only if you want this on the production domain
```

Or drag the folder onto <https://vercel.com/new> for a throwaway preview URL.

## Option C — anywhere else

It is plain static files, so Netlify, Cloudflare Pages, GitHub Pages or any
web host will serve it. Point the host at the folder. Drop `vercel.json` if
you aren't on Vercel.

---

## Changing the palette

Five palettes ship in the CSS. Pastel is the default. To switch, add the
attribute to the opening `<html>` tag in `index.html`:

```html
<html lang="en" data-palette="riso">
```

Valid values: `riso`, `sage`, `butter`, `plum`, `violet`. Remove the attribute
for Pastel. The page tokens and the hero shader both follow it.

## Editing content

Everything lives in `index.html`. Search for the section you want:

| Section            | Find                          |
|--------------------|-------------------------------|
| Hero intro         | `class="hero__blurb"`         |
| Player card        | `class="card-id"`             |
| Skills             | `id="loadout"`                |
| Jobs               | `id="experience"`             |
| Projects + viewer  | `id="projects"`               |
| Art and making     | `id="studio"`                 |
| About + timeline   | `id="about"`                  |
| Contact            | `id="contact"`                |

Adding a project: copy an existing `<article class="panel work">` block and
change the image, title and text. The grid reflows on its own.

Adding an image: drop the file in `img/` and reference it as
`src="img/yourfile.jpg"`. Resize to about 1200px on the long edge and save
around quality 80 first — the existing ones are all 30–170 KB.

## Things worth knowing

**External dependencies.** Two, both from CDNs, both optional-ish:
Google Fonts (Anybody, Manrope, JetBrains Mono) and three.js r128 from cdnjs,
which only loads when the teapot viewer scrolls into view. If three.js fails
to load the viewer shows a message and the rest of the page is unaffected.

**The hero shader** is WebGL, written inline. If WebGL is unavailable it falls
back to a CSS gradient. It pauses when scrolled out of view and renders a
single static frame for anyone with reduced-motion turned on.

**The teapot mesh** is `img/gfx/teapot.txt` — base64 of a binary vertex buffer,
not a text file to edit. It came from `teapot.obj` in your CS5610 Project 4.
It's a `.txt` because the artifact host wouldn't serve `.bin`; on your own
host you can rename it to `.bin` and update the single `fetch()` call if you'd
rather.

**Your phone number** is not on the page. It's on your résumé, but a number on
a public page gets scraped. Add it to the contact section if you want it.

**Images are cached for a year** by `vercel.json`. If you replace a photo but
keep the same filename, returning visitors may keep seeing the old one — give
edited images a new filename.
