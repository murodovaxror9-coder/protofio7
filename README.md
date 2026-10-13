# React + TypeScript + Vite

## Portfolio content

- **Projects section:** shows a single real project, Formo (`src/sections/Projects.tsx`),
  a custom sports-jersey design/ordering platform at formo.uz. The card's
  description and live-site link live directly in `translations.ts` and
  `Projects.tsx` (no separate projects data file).
- **Recommendations:** add real quotes to `src/data/testimonials.ts` with `id`,
  `name`, localized `role` and `quote`, and `approvedForPublication: true` after
  the author agrees to publication. Unapproved entries stay hidden. An empty
  collection shows an invitation to share feedback, not sample testimonials.
- **Currently learning:** edit `src/data/learning.ts` to match what you're
  actually learning right now.
- **Hero stats:** `src/data/stats.ts` numbers (projects shipped, technologies,
  coffee) are manually maintained — keep them in sync with reality.
- **Experience dates:** `experience.marsIt.period` / `experience.freelance.period`
  in `src/i18n/translations.ts` currently just say "Ongoing" — add a real
  start date once you have one to commit to.
- **Social links:** `profile.linkedin`/`profile.telegram` in `src/data/profile.ts`
  are placeholders until you set real URLs — the Hero, Footer and Contact socials
  stay hidden until then (`src/utils/projectUrl.ts`'s `isLinkAvailable`).
- **Forms:** both the Contact form (`src/sections/Contact.tsx`) and the Formo
  order form (`src/sections/Projects.tsx`) send through the `/api/send-telegram`
  serverless function, each to its own Telegram bot so the two message streams
  never mix. Tokens must only ever live server-side. See `.env.example` and set
  `TELEGRAM_FORMO_BOT_TOKEN`/`TELEGRAM_FORMO_CHAT_ID` and
  `TELEGRAM_CONTACT_BOT_TOKEN`/`TELEGRAM_CONTACT_CHAT_ID` in Vercel's Environment
  Variables, never with a `VITE_` prefix (that would ship the tokens to the browser).

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
