# Ozioma.dev

An editorial portfolio for Ozioma Okafor, built with the existing React 19, Vite 7, Tailwind CSS 4, React Router, Lucide, and EmailJS stack.

## Run locally

Use Node.js 22.12+ or a compatible newer release. This project was built with Node.js 24.

```bash
npm ci
npm run dev
```

```bash
npm run build
npm run preview
```

The development server normally opens at `http://localhost:5173`. Production output is in `dist/`.

## Put the update into your existing repository

This download contains project files, not a replacement Git history. Make a backup or commit your current work first. Copy the updated files into your existing `Ozioma.dev` repository and keep its `.git` folder. Do not delete your original repository to install this update.

Then run `npm ci`, test the site, inspect `git status` and `git diff`, and commit the files you intend to keep on your own branch. Nothing in this update was pushed to your GitHub repository.

## Contact behavior

Copy `.env.example` to `.env.local` and fill in only settings you use.

- With all three EmailJS settings, the original contact delivery is enabled. Keep the template variable names `user_name`, `user_email`, and `message`.
- With `VITE_CONTACT_EMAIL` and no EmailJS configuration, the form opens an email draft. The visitor reviews and sends it in their email app.
- With neither configuration, the form copies a formatted brief for the visitor to paste into a LinkedIn message. It does not claim to have sent a message.

The existing LinkedIn and GitHub links remain available. No contact address was invented. `VITE_*` values are public in the client bundle; use the EmailJS public key only. For production EmailJS delivery, set your permitted origins in EmailJS and verify delivery using your own account.

## Content and project structure

- `src/data/projects.js`: original project information, screenshots, source and live links.
- `src/data/projectPresentation.js`: short presentation summaries, frontend focus, project context, and featured ordering.
- `src/components/sections/`: the existing Hero, Projects, About, Skills, and Contact structure.
- `src/components/layout/`: shared navigation and footer.
- `src/pages/BlueprintPage.jsx`: project details and accessible native image dialog; the original `/blueprint/:id` URLs are preserved.
- `src/index.css`: Tailwind import, theme tokens, editorial components, responsive rules, and reduced-motion support.
- `public/assets/optimized/`: compressed previews at 640 and 1280 pixels; original screenshots are retained.

The featured projects are NomadAI, CareTime Dental, DNK, and Artisan Aid. Six additional projects remain in an expandable archive.

The detail pages present the supplied implementation notes. They do not add client relationships, sole-ownership claims, employment history, testimonials, or performance results. Confirm the original notes against each project's code before using them as professional case studies, especially backend claims and the conflicting original descriptions of ZURI.

## Hosting

Vercel's `vercel.json` and Netlify's `_redirects` provide single-page application fallback for direct project URLs. On another host, configure non-file requests to fall back to `index.html`. Use `npm run build` and serve `dist/`.

## Review and verification

See `DESIGN_REVIEW.md` for the initial assessment, design rationale, measured bundle changes, verification results, and the remaining browser checklist.
