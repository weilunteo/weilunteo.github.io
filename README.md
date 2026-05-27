# Isometric Cottage Portfolio

A 3D isometric portfolio site — a Swiss cottage in the mountains. Click the cottage to step inside and explore each section through cozy, hand-placed artefacts.

Live at **[weilunteo.github.io](https://weilunteo.github.io)**.

## Stack

- React + TypeScript + Vite
- React Three Fiber (Three.js)
- @react-three/drei for helpers
- GitHub Pages via Actions

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Production build

```bash
npm run build
npm run preview
```

## Project layout

```
src/
  App.tsx                  # top-level app, season + view state
  content.ts               # ALL editable copy (about, experience, etc.)
  styles.css               # HUD + panel styling
  scene/
    Scene.tsx              # composes lights, sky, terrain, cottage, interior
    CameraRig.tsx          # smooth camera transitions on enter/leave
    Sky.tsx                # gradient sky dome
    Mountains.tsx          # stylised alpine peaks
    Terrain.tsx            # noisy ground plane
    Wildflowers.tsx        # summer flowers
    Snow.tsx               # winter snowfall
    Cottage.tsx            # exterior building, walls fade on enter
    Interior.tsx           # furniture, hotspots → sections
  ui/
    Hud.tsx                # title, season toggle, music toggle
    SectionPanel.tsx       # side-panel content for each section
    useAudio.ts            # lazy-loaded looping music
public/
  favicon.svg
  audio/                   # add lofi.mp3 here (placeholder)
  legacy/                  # the previous site, preserved
```

## Editing your content

All text lives in [`src/content.ts`](src/content.ts). Look for `TODO` markers and replace with the real thing.

## Adding the lofi track

Drop an MP3 at `public/audio/lofi.mp3` and the music toggle will activate automatically. A Studio Ghibli-style piano/lofi loop works great. Recommended length: 2–4 minutes (it loops). Keep file size under ~3 MB so the page stays light.

## Hotspot mapping

| Object in the room | Section       |
| ------------------ | ------------- |
| Framed photo       | About         |
| Desk + laptop      | Experience    |
| Bookshelf          | Education     |
| Toolbox under desk | Tech & Skills |
| Skis + ice axe     | For Fun       |
| Letter on table    | Contact       |

## Legacy site

The previous portfolio lives in [`legacy/`](legacy) and is preserved verbatim. You can delete it any time without affecting the new site.

## License

Personal portfolio — feel free to take inspiration, but the content and visual identity are mine.
