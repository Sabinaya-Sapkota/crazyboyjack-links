# Crazy Boy Jack — link-in-bio

A static page (no build step) for GitHub Pages.

## Host it on GitHub Pages
1. Create a new repository on GitHub (for example `links`).
2. Upload everything in this folder to the repository root, including the hidden `.nojekyll` file.
3. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, pick `main` and `/ (root)`, then save.
4. After a minute your page is live at `https://YOUR-USERNAME.github.io/links/`.

For a custom domain, add it under Settings → Pages and follow GitHub's DNS instructions.

## Edit your links
Open `js/data.js`. Change the social URLs or add/remove channels there. New channel logos go in `assets/channels/` (square `.webp` or `.png`, about 160 px).

## Files
- `index.html` — page structure
- `css/style.css` — design and responsive layout
- `js/data.js` — your links
- `js/app.js` — builds the page, search, filters, share button
- `assets/` — logos, banner, favicon, share image
