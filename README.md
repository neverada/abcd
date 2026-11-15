# Forgotten Tales — Kid-Friendly Interactive Storybook

A pastel, hand-crafted interactive storybook web app built from `story.txt`. No external fonts, no external images, no build step — just open `index.html`.

## Features
- **Library shelf** with three pastel books: *The Moon Makers*, *The Mars Message*, *Beyond the Blue* (each holding chapters from `story.txt`).
- **Animated reader** with page-turning, Previous/Next navigation and per-chapter progress dots.
- **Tap-to-move** interactive scene illustrations (moon, rocket, lander, buggy, rover, helicopter, probe).
- **Voice mode** (Web Speech API) — tap Play or auto-read pages when Voice mode is On.
- **Fun Fact** box at the end of every chapter.
- **End-of-chapter quiz** that must be completed to finish the chapter.
- **Badge system**: Gold on 1st attempt, Silver on 2nd attempt, none on 3+. Progress saved in `localStorage`.

## Files
- `index.html` — Library / bookshelf home
- `reader.html` — Book reader (opened with `?book=<id>&ch=<index>`)
- `style.css` — Pastel styles + SVG/CSS animations
- `app.js` — Story data (from `story.txt`) + all app logic
- `story.txt` — Source story text

## Run
```bash
python3 -m http.server 8080
# then open http://localhost:8080/index.html
```
