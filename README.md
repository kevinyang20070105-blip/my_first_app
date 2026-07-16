# Kv — Personal Website

A bilingual portfolio for Kv, focused on Web3 research, AI research, independent development, and writing.

## Run locally

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run build
npm run lint
npm test
```

## Update the content

The main editable content lives in `app/content/site-content.ts`:

- `profile`: name, bio, contact details, availability
- `projects`: project cards and full case studies
- `articles`: article index and full article bodies
- `focusAreas` and `capabilities`: about-page content

Chinese and English copy are stored together as `{ zh, en }` values. Keep both languages updated when changing a field.

Before public promotion, work through `CONTENT_CHECKLIST.md`. Current projects, article dates, location, and résumé are deliberately marked as placeholders because no verified résumé was present in the workspace.

## Replace the résumé

1. Add the real PDF at `public/Kv-Resume.pdf`.
2. Replace `/Kv-Resume-Placeholder.txt` with `/Kv-Resume.pdf` in `app/page.tsx` and `app/about/page.tsx`.
3. Remove the placeholder wording from both buttons.

## Production URL

Canonical, Open Graph, sitemap, and robots URLs are derived from the incoming request host, so they automatically use the deployed domain.

## Deploy

The project is prepared for OpenAI Sites and uses the bundled vinext structure. A production build is generated with:

```bash
npm run build
```

The output is Cloudflare Worker-compatible and the Sites configuration is stored in `.openai/hosting.json`.

The repository also includes a GitHub Pages workflow. Pages builds use Next.js static export, apply the `/my_first_app` base path, and publish the generated `out` directory. Run the Pages build locally with:

```bash
GITHUB_PAGES=true \
NEXT_PUBLIC_BASE_PATH=/my_first_app \
NEXT_PUBLIC_SITE_URL=https://kevinyang20070105-blip.github.io/my_first_app \
npm run build:pages
```
