# BackupVerified (Static Website)

Static marketing + documentation site for **Backup Verified** hosted on **Netlify**.

## Tech
- Static HTML pages
- Tailwind (CDN): `@tailwindcss/browser@4`
- Font Awesome icons
- AOS animations
- Optional: Lenis smooth scroll (if already included globally)

## Pages
- `index.html` (Home)
- `features.html`
- `how-it-works.html`
- `pricing.html`
- `documentation.html`
- `about.html`
- `contact.html`
- `support.html`
- `signup.html`
- `login.html`
- `privacy.html`
- `terms.html`
- `complaints.html`
- `report-website.html`

## SEO
- `sitemap.xml` at site root
- Add `robots.txt` (recommended) pointing to sitemap:
  - `Sitemap: https://backupverified.com/sitemap.xml`

## Netlify Deploy
1. Drag & drop the project folder into Netlify (or connect repo later).
2. Ensure `sitemap.xml` is in the root output directory.
3. Set domain to `backupverified.com`.

## Notes
- All pages are static HTML.
- Backend authentication + client portal will be added later.
- Avoid placing secrets in HTML, forms, or emails.
