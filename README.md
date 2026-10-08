# Useless Site

A little website for strange puzzles and playful ideas. Mostly blank for now: a title, a dot, a button, and room to figure out what happens next.

The plan is to build the site a piece at a time, then use my testing projects to test the things I create.

## Run locally

Node.js 22 or newer; no packages to install.

```bash
npm start
```

Open `http://127.0.0.1:4174`. Stop the server with Ctrl+C. The different port keeps it separate from the task demo in the Playwright repository.

## Where to build

| File | What belongs here |
| --- | --- |
| `index.html` | Page structure and puzzle controls |
| `styles.css` | Colors, layout, and visual changes |
| `app.js` | Puzzle rules and interactions |
| `server.js` | A tiny local development server |
| `docs/testing-later.md` | How the other testing projects can grow around this site |

The placeholder button changes a dot and a message. Reset puts it back. There are no puzzle solutions, scores, accounts, database, or saved progress yet. Refreshing starts over.

This repository contains the site; the automated browser tests can live in my [Playwright project](https://github.com/ikoiv/playwright-automation-framework). I'll add them as the behavior takes shape.

MIT licensed.
