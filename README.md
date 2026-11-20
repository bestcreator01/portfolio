# gloriashin.me

Personal portfolio. Static site — one HTML file and an asset folder. No build
step, no dependencies, no framework.

```
index.html      the whole page: markup, styles, scripts
img/            photos and videos
img/gfx/        teapot mesh, texture/normal/displacement maps, cube map faces
vercel.json     static config, long cache on /img
```

Open `index.html` in a browser to work on it locally. That's the whole dev
loop.

## What's on the page

Hero with a WebGL shader background, work history, projects, an interactive
teapot viewer, art and making, about, contact.

The **teapot viewer** runs the geometry and texture maps from my CS5610
assignments live in the browser via three.js, with four shading modes drawn
from the actual projects: Blinn-Phong (Project 3), textured (Project 4),
displaced on a tessellated quad (Project 8), and environment mapped (Project
6). Three.js loads lazily and only when that section scrolls into view.

## Palettes

Five palettes ship in the CSS. Pastel is the default. To switch, set the
attribute on `<html>` in `index.html`:

```html
<html lang="en" data-palette="riso">
```

Valid: `riso`, `sage`, `butter`, `plum`, `violet`. The page tokens and the
hero shader both follow it.

## Deploying

Pushes to `main` deploy to gloriashin.me through Vercel. See
[README-deploy.md](README-deploy.md) for setup notes, including the framework
preset that needs to be set to "Other".

## History

This replaced a Next.js app generated with v0. That version is still in git
history before the `redesign-2026` branch.
