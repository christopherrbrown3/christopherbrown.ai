# christopherbrown.ai

The marketing website for christopherbrown.ai, a local software company building practical tools for small businesses across Washington, DC, Northern Virginia, and Maryland.

## Local development

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open the local address shown in the terminal.

## Validation

```bash
npm test
npm run build:pages
```

`npm test` validates the production Sites build and rendered content. `npm run build:pages` creates a static export in `out/`.

## GitHub Pages

The site is ready for GitHub Pages but is not published there yet. The included workflow builds the static export and can deploy it when Pages is enabled for the repository:

1. Open **Settings → Pages** in GitHub.
2. Under **Build and deployment**, select **GitHub Actions** as the source.
3. Run the “Deploy to GitHub Pages” workflow.

The site uses no backend, API keys, analytics, tracking, cookies, or paid services.

## Content

- Main page: `app/page.tsx`
- Styling: `app/globals.css`
- Metadata and structured data: `app/layout.tsx`
- Social preview: `public/og.png`

## License

Copyright © 2026 Christopher Brown. All rights reserved. See `LICENSE`.
