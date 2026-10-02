# React + TypeScript + Vite

## Portfolio content

- **Project screenshots:** place real images in `public/projects/`, then set the
  matching project's `image` in `src/data/projects.ts`, for example
  `image: '/projects/devlab-lms.webp'`. Cards and the details dialog use the same
  image. Without an image, or if it fails to load, a labeled illustration appears.
- **Personal contributions:** add `contributions` to the matching project as an
  array of `{ uz: '...', en: '...' }` objects. Describe only your own confirmed
  responsibilities. Until supplied, the contribution section offers contact.
- **Project descriptions:** the problem and feature summaries are in
  `src/data/projectStories.ts`, in Uzbek and English. They are based on the
  portfolio's existing descriptions, without invented performance figures.
- **Recommendations:** add real quotes to `src/data/testimonials.ts` with `id`,
  `name`, localized `role` and `quote`, and `approvedForPublication: true` after
  the author agrees to publication. Unapproved entries stay hidden. An empty
  collection shows an invitation to share feedback, not sample testimonials.
- **Project links:** replace the `TODO` demo and repository URLs in
  `src/data/projects.ts`. Placeholder links are hidden from visitors.
- **Case studies:** `featured` projects get a full `/projects/:id` page
  (`src/pages/ProjectDetails.tsx`). Add `challenges` and `whatILearned` to the
  matching entry in `src/data/projectStories.ts` (same `{ uz, en }[]` shape as
  `highlights`) once you can describe them without inventing outcomes — until
  then, those sections invite contact instead of showing fake content.
- **Currently learning:** edit `src/data/learning.ts` to match what you're
  actually learning right now.
- **Social links:** `profile.linkedin`/`profile.telegram` in `src/data/profile.ts`
  are placeholders until you set real URLs — the Hero, Footer and Contact socials
  stay hidden until then (`src/utils/projectUrl.ts`'s `isLinkAvailable`).
- **Contact form:** sends through the `/api/send-telegram` serverless function —
  the bot token must only ever live server-side. See `.env.example` and set
  `TELEGRAM_BOT_TOKEN`/`TELEGRAM_CHAT_ID` in Vercel's Environment Variables, never
  with a `VITE_` prefix (that would ship the token to the browser).
- **Routing:** uses `react-router-dom` with client-side rewrites, so Vercel needs
  `vercel.json`'s SPA rewrite for `/projects/:id` to work on refresh/direct links.

Run `npm run dev` to preview, `npm run build` to compile, and `npm run lint` to lint.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
